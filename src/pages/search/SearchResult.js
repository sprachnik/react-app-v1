import { Box, Paper, Typography, Avatar } from "@mui/material";
import styled from "styled-components";
import { PropagateLoader } from "react-spinners";
import { motionVariants } from "../../helpers/motionHelpers";
import { motion } from "framer-motion";

const SearchResult = ({ loading, data }) => {
  return (
    <Box>
      {loading && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={motionVariants.container}
        >
          <ResultWrapper elevation={3}>
            <Loader loading={loading} color="blue" />
          </ResultWrapper>
        </motion.div>
      )}
      {!loading && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={motionVariants.container}
        >
          {data?.length > 0 ? (
            <motion.div
              initial="initial"
              animate="animate"
              variants={motionVariants.container}
            >
              {data.map((movie) => (
                <motion.div variants={motionVariants.item} key={movie.imdbID}>
                  <ResultWrapper
                    style={{
                      margin: "0.2rem 0",
                      padding: "10px",
                    }}
                    elevation={3}
                  >
                    <Avatar
                      alt={movie.Title}
                      src={
                        movie.Poster.toLowerCase().includes("http")
                          ? movie.Poster
                          : null
                      }
                      sx={{ width: 56, height: 56 }}
                    ></Avatar>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      style={{ margin: "0 0 0 1rem", fontSize: "16px" }}
                    >
                      {movie.Title}
                    </Typography>
                  </ResultWrapper>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <ResultWrapper elevation={3}>
              <Loader loading={loading} color="blue" />
              {data === null && (
                <Typography variant="h6" color="textPrimary">
                  No Results Yet!
                </Typography>
              )}
              {data !== null && !data?.length && (
                <Typography variant="h6" color="textPrimary">
                  Movie not found!
                </Typography>
              )}
            </ResultWrapper>
          )}
        </motion.div>
      )}
    </Box>
  );
};

const ResultWrapper = styled(Paper)`
  padding: 20px;
  background-color: #ccc !important;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Loader = styled(PropagateLoader)`
  margin: 0 auto;
  padding: 20px;
`;

export default SearchResult;
