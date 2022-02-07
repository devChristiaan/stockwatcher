import { useState, useEffect, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";

const Chart = ({ ...props }) => {
  const { ticker, apiKey } = props;

  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();

  const [stockData, setStockData] = useState([]);
  const [volumeData, setVolumeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatStockData = (stockData) => {
    return Object.entries(stockData).map((entries) => {
      const [date, priceData] = entries;

      return {
        time: date.toString(),
        open: Number(priceData["1. open"]),
        high: Number(priceData["2. high"]),
        low: Number(priceData["3. low"]),
        close: Number(priceData["4. close"]),
      };
    });
  };

  const formatVolumeData = (stockData) => {
    return Object.entries(stockData).map((entries) => {
      const [date, priceData] = entries;

      return {
        time: date.toString(),
        value: Number(priceData["5. volume"]),
      };
    });
  };

  useEffect(() => {
    if (loading === false) setLoading(true);
    const getStockData = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&datatype=json&apikey=${apiKey}`
      );
      const data = await response.json();
      const formatedData = formatStockData(data["Time Series (Daily)"]);
      const formatedVolumeData = formatVolumeData(data["Time Series (Daily)"]);
      setStockData(formatedData.reverse());
      setVolumeData(formatedVolumeData.reverse());
      setLoading(false);
    };
    getStockData();
  }, [ticker]);

  useEffect(() => {
    if (!loading) {
      chart.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
        layout: {
          backgroundColor: "#253248",
          textColor: "rgba(255, 255, 255, 0.9)",
        },
        grid: {
          vertLines: {
            color: "#334158",
          },
          horzLines: {
            color: "#334158",
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        priceScale: {
          borderColor: "#485c7b",
        },
        timeScale: {
          borderColor: "#485c7b",
        },
      });

      const candleSeries = chart.current.addCandlestickSeries({
        upColor: "#4bffb5",
        downColor: "#ff4976",
        borderDownColor: "#ff4976",
        borderUpColor: "#4bffb5",
        wickDownColor: "#838ca1",
        wickUpColor: "#838ca1",
      });

      candleSeries.setData(stockData);

      const volumeSeries = chart.current.addHistogramSeries({
        color: "#182233",
        lineWidth: 2,
        priceFormat: {
          type: "volume",
        },
        overlay: true,
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });

      volumeSeries.setData(volumeData);
    }
  }, [loading, ticker]);

  // Resize chart on container resizes.
  useEffect(() => {
    if (!loading) {
      resizeObserver.current = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        chart.current.applyOptions({ width, height });
        setTimeout(() => {
          chart.current.timeScale().fitContent();
        }, 0);
      });

      resizeObserver.current.observe(chartContainerRef.current);

      return () => resizeObserver.current.disconnect();
    }
  }, []);

  return (
    <div
      ref={chartContainerRef}
      style={{ height: "400px", width: "650px" }}
    ></div>
  );
};

export default Chart;
