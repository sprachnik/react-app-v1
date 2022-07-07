import { Form, Field } from "react-final-form";
import {
  FormGroup,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import styled from "styled-components";
import { motion } from "framer-motion";
import yearHelpers from "../../helpers/dateHelpers";

const SearchBox = ({ onSubmit, onCancel, params = null, ...props }) => {
  const years = yearHelpers.getYears().sort((a, b) => b - a);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <SearchBoxContainer {...props}>
        <Form
          onSubmit={onSubmit}
          initialValues={params}
          validate={(values) => {
            console.log(values);
            const errors = {};
            if (!values.t) {
              errors.t = "Please enter a movie title...";
            }
            console.log(errors);
            return errors;
          }}
        >
          {({ handleSubmit, form, pristine, submitting, values }) => (
            <StyledForm onSubmit={handleSubmit}>
              <StyledFormGroup>
                <Field name="t">
                  {({ input, meta }) => (
                    <TextField
                      id="filled-basic"
                      label="Movie Title..."
                      variant="filled"
                      style={{ backgroundColor: "white" }}
                      error={meta.error && meta.touched}
                      {...input}
                    />
                  )}
                </Field>
              </StyledFormGroup>
              <StyledFormGroup>
                <Field name="y">
                  {({ input, meta }) => (
                    <FormControl variant="filled" sx={{ width: 300 }}>
                      <InputLabel id="year-label">Year</InputLabel>
                      <Select
                        labelId="year-label"
                        id="year-select"
                        style={{ background: "white" }}
                        {...input}
                      >
                        {years.map((year) => (
                          <MenuItem key={year} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                </Field>
              </StyledFormGroup>
              <ButtonWrapper>
                <Tooltip
                  title={
                    pristine || submitting ? "Please enter a movie title" : ""
                  }
                  arrow
                >
                  <div>
                    <StyledButton
                      variant="contained"
                      endIcon={<SearchIcon />}
                      disabled={pristine || submitting || !values.t}
                    >
                      Search
                    </StyledButton>
                  </div>
                </Tooltip>
                <StyledButton
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    form.reset();
                  }}
                  startIcon={<HighlightOffIcon />}
                >
                  Clear
                </StyledButton>
              </ButtonWrapper>
            </StyledForm>
          )}
        </Form>
      </SearchBoxContainer>
    </motion.div>
  );
};

const SearchBoxContainer = styled.div`
  padding: 20px;
  background: #ccc;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const StyledFormGroup = styled(FormGroup)`
  display: flex;
  margin: 0 1rem 0 0;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 0 0 0 1rem !important;
`;

export default SearchBox;
