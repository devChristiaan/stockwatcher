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
    if (!stockData) return null;
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
    if (!stockData) return null;
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
      if (formatedData) setStockData(formatedData.reverse());
      if (formatedVolumeData) setVolumeData(formatedVolumeData.reverse());
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
          backgroundColor: "#FFFFFF",
          textColor: "#202020",
        },
        grid: {
          vertLines: {
            color: "rgba(0, 0, 0, 0.1)",
          },
          horzLines: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        priceScale: {
          borderColor: "#202020",
        },
        timeScale: {
          borderColor: "#202020",
        },
      });

      const candleSeries = chart.current.addCandlestickSeries({
        upColor: "#26A69A",
        downColor: "#EF5350",
        borderDownColor: "#EF5350",
        borderUpColor: "#26A69A",
        wickDownColor: "#EF5350",
        wickUpColor: "#26A69A",
      });

      candleSeries.setData(stockData);

      const volumeSeries = chart.current.addHistogramSeries({
        color: "#e4e4e4",
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

      return () => {
        chart.current.remove();
      };
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
  }, [loading, ticker]);

  return (
    <div style={{ padding: "1px", border: ".5px solid #202020" }}>
      <div
        ref={chartContainerRef}
        style={{ height: "400px", width: "650px" }}
      ></div>
    </div>
  );
};

export default Chart;
