import useQuery from "../../hooks/useQuery";
import api from "../../api/api";
import { Box } from "@mui/material";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import { motion } from "framer-motion";
import { useState } from "react";
import { motionVariants } from "../../helpers/motionHelpers";
import PaginationBox from "./PaginationBox";

const SearchPage = () => {
  const perPageCount = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchValues, setSearchValues] = useState({});
  const [searchResults, setSearchResults] = useState(null);
  const { loading, error, runQuery } = useQuery({
    query: async (params = {}, isPoster = false) =>
      await api.fetchOMDB(params, isPoster),
  });

  return (
    <Box>
      <motion.div
        initial="initial"
        animate="animate"
        variants={motionVariants.container}
      >
        <motion.div variants={motionVariants.item}>
          <SearchBox
            onSubmit={async (values) => {
              const results = await runQuery(
                async () => await api.fetchOMDB({ ...values, page: 1 })
              );
              if (results?.Search?.length) {
                setSearchResults(results.Search);
                const total = parseInt(results.totalResults, 10) || 0;
                setTotalResults(
                  total > perPageCount ? Math.round(total / perPageCount) : 1
                );
              }
              setSearchValues(values);
              setCurrentPage(1);
            }}
            style={{ margin: "1rem 0 1rem" }}
          />
        </motion.div>
        <motion.div variants={motionVariants.item}>
          <SearchResult
            loading={loading}
            data={searchResults}
            currentPage={currentPage}
            error={error}
          />
        </motion.div>
        <motion.div variants={motionVariants.item}>
          <PaginationBox
            total={totalResults}
            currentPage={currentPage}
            onChange={async (_, page) => {
              const results = await runQuery(
                async () =>
                  await api.fetchOMDB({
                    ...searchValues,
                    page,
                  })
              );
              if (results?.Search?.length) {
                setSearchResults(() => results.Search);
                setCurrentPage(page);
              }
            }}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default SearchPage;
