import {
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import colors from "../../../components/colors";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { motion } from "framer-motion";

const SearchBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SearchBoxContainer>
        <StyledFormControl variant="outlined">
          <SearchInput
            id="career-search"
            placeholder="Explore pathways for other job types..."
            endAdornment={
              <AdornmentWrapper>
                <InputAdornment position="start" style={{ margin: "0 auto" }}>
                  <StyledSearchIcon />
                </InputAdornment>
              </AdornmentWrapper>
            }
            variant="standard"
          />
        </StyledFormControl>
        <ButtonWrapper>
          <FilterButton variant="outlined" startIcon={<FilterIcon />} />
        </ButtonWrapper>
      </SearchBoxContainer>
    </motion.div>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin: 0 0 0 1rem;
`;

const FilterButton = styled(Button)`
  margin-left: auto !important;
  span {
    margin: 0;
  }
  min-height: 56px;
  background-color: ${colors.ikigaiOrange} !important;
`;

const FilterIcon = styled(FilterAltIcon)`
  color: white;
`;

const AdornmentWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 56px;
  min-width: 56px;
  background: white;
  border-radius: 4px;
  text-align: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: ${colors.ikigaiOrange};
  align-self: center;
`;

const SearchBoxContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

const SearchInput = styled(OutlinedInput)`
  display: flex;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  color: white !important;
  padding-right: 0 !important;
  border-radius: 4px;
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

export default SearchBox;
