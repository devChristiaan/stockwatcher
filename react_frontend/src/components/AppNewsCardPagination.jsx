import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NewsCard from "./NewsCard";

const AppNewsCardPagination = ({ ...props }) => {
  const { displayData, numberOfItemsPerPage, category } = props;
  const [length, setLength] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (displayData) {
      setLength(Math.ceil(displayData.length / numberOfItemsPerPage));
    }
  }, [displayData]);

  const indexOfLastItem = currentPage * numberOfItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - numberOfItemsPerPage;
  const currentItems = displayData.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (e) => {
    setCurrentPage(e.target.textContent);
  };

  return (
    <>
      {currentItems.map((item) => {
        return (
          <NewsCard
            key={item.id}
            datetime={item.datetime}
            headline={item.headline}
            image={item.image}
            source={item.source}
            summary={item.summary}
          />
        );
      })}
      <Stack spacing={2}>
        <Pagination
          count={length}
          page={currentPage}
          onChange={(e) => handleChange(e)}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: ArrowBackIcon,
                next: ArrowForwardIcon,
              }}
              {...item}
            />
          )}
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Stack>
    </>
  );
};

export default AppNewsCardPagination;
