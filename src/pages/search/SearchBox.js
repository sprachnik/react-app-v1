import { Form, Field } from "react-final-form";
import {
  FormGroup,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import styled from "styled-components";
import yearHelpers from "../../helpers/dateHelpers";
import { useCallback } from "react";

const SearchBox = ({ onSubmit, params = null, ...props }) => {
  const years = yearHelpers.getYears().sort((a, b) => b - a);

  const submitForm = useCallback(
    async (values) => {
      await onSubmit(values, false);
    },
    [onSubmit]
  );

  return (
    <SearchBoxContainer {...props} elevation={3}>
      <Form
        onSubmit={submitForm}
        initialValues={params}
        validate={(values) => {
          const errors = {};
          if (!values.s) {
            errors.s = "Please enter a movie title...";
          }
          return errors;
        }}
      >
        {({ handleSubmit, form, pristine, submitting, values }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledFormGroup>
              <Field name="s">
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
                    disabled={pristine || submitting || !values.s}
                    type="submit"
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
  );
};

const SearchBoxContainer = styled(Paper)`
  padding: 20px;
  background-color: #ccc !important;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyledFormGroup = styled(FormGroup)`
  display: flex;
  margin: 0 1rem 0 0;
  @media (max-width: 800px) {
    margin: 0 0 1rem 0;
  }
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
