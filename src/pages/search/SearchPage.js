import styled from "styled-components";
import useQuery from "../../hooks/useQuery";
import api from "../../api/api";
import Snackbar from "@mui/material/Snackbar";
import { Box } from "@mui/material";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import { motion } from "framer-motion";

const motionVariants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    initial: {
      opacity: 0,
      y: -50,
    },

    animate: {
      opacity: 1,
      y: 0,
    },
  },
};

const SearchPage = () => {
  const { data, loading, error, runQuery } = useQuery({
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
            onSubmit={(values) =>
              runQuery(async () => await api.fetchOMDB(values))
            }
            style={{ margin: "1rem 0 1rem" }}
          />
        </motion.div>
        <motion.div variants={motionVariants.item}>
          <SearchResult loading={loading} data={data} error={error} />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default SearchPage;
