import { Box, Grid, Typography, Button } from "@mui/material";
import styled from "styled-components";
import NumberCircle from "./NumberCircle";
import colors from "../../../components/colors";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    trailingZeroDisplay: "stripIfInteger",
  }).format(value ?? 0);

const RoleCard = ({ role }) => {
  return (
    <RoleCardContainer>
      <RoleCardGrid container space={2}>
        <Grid item xs={9}>
          <Typography variant="h5" style={{ color: "white" }}>
            {role.title ?? "No Title"}
          </Typography>
          <Typography variant="h6" style={{ color: "white", fontSize: "16px" }}>
            {formatCurrency(role.minSalary)} - {formatCurrency(role.maxSalary)}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <NumberCircle
            number={role.pathway}
            width="15px"
            height="15px"
            padding="15px"
            fontSize="16px"
            hasshadow={false}
            isselected={true}
          />
        </Grid>
        <InfoGrid container>
          <Grid item xs={4}>
            <InfoBox>
              <p>Hours</p>
              <p>{role.hours ?? "TBC"}</p>
            </InfoBox>
          </Grid>
          <Grid item xs={4}>
            <InfoBox>
              <p>Skills</p>
              <p>{role.skillsMatch ?? "TBC"}</p>
            </InfoBox>
          </Grid>
          <Grid item xs={4}>
            <InfoBox>
              <p>Industry</p>
              <p>{role.industryMatch ?? "TBC"}</p>
            </InfoBox>
          </Grid>
        </InfoGrid>
        <ButtonGrid container>
          <Grid item xs={4}>
            <StyledButton variant="contained">Summary</StyledButton>
          </Grid>
          <Grid item xs={4}>
            <StyledButton variant="contained">Pathways</StyledButton>
          </Grid>
          <Grid item xs={4}>
            <StyledButton variant="contained">Vacancies</StyledButton>
          </Grid>
        </ButtonGrid>
      </RoleCardGrid>
    </RoleCardContainer>
  );
};

const RoleCardGrid = styled(Grid)`
  padding: 20px;
`;

const ButtonGrid = styled(Grid)``;

const InfoGrid = styled(Grid)`
  margin: 1rem 0 1rem 0;
  div:not(:first-of-type) {
    border-left: 1px solid #aaa;
    padding: 0 0 0 10px;
  }
`;

const RoleCardContainer = styled(Box)`
  max-width: 400px;
  min-height: 250px;
  background: white;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
`;

const InfoBox = styled.div`
  color: white;
`;

const StyledButton = styled(Button)`
  background-color: ${colors.ikigaiGreenButton}!important;
`;

export default RoleCard;
