import styled from "styled-components";
import useQuery from "../../hooks/useQuery";
import api from "../../api/api";
import Snackbar from "@mui/material/Snackbar";
import { Box } from "@mui/material";
import SearchBox from "./SearchBox";

const SearchPage = () => {
  const { data, loading, error, runQuery } = useQuery({
    query: async (params = {}, isPoster = false) =>
      await api.fetchOMDB(params, isPoster),
  });

  return (
    <Box>
      <SearchBox
        onSubmit={() => {}}
        onCancel={() => {}}
        style={{ margin: "1rem 0 1rem" }}
      />
    </Box>
  );
};

export default SearchPage;
