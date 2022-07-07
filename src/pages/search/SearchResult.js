import { Box, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { PropagateLoader } from "react-spinners";

const SearchResult = ({ loading, data, error }) => {
  return (
    <Box>
      <ResultWrapper elevation={3}>
        <Loader loading={loading} color="blue" />
      </ResultWrapper>
    </Box>
  );
};

const ResultWrapper = styled(Paper)`
  padding: 20px;
  background-color: #ccc !important;
  display: flex;
  flex-direction: row;
`;

const Loader = styled(PropagateLoader)`
  margin: 0 auto;
  padding: 20px;
`;

export default SearchResult;
