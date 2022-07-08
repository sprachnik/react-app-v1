import { Pagination, Box, Paper } from "@mui/material";
import styled from "styled-components";

const PaginationBox = ({ currentPage, total, onChange }) => {
  return (
    <PaginationBoxContainer>
      <Box>
        <Pagination
          variant="outlined"
          shape="rounded"
          page={currentPage}
          count={total}
          onChange={onChange}
        />
      </Box>
    </PaginationBoxContainer>
  );
};

const PaginationBoxContainer = styled(Paper)`
  margin: 1rem 0;
  padding: 20px;
  background-color: #ccc !important;
`;

export default PaginationBox;
