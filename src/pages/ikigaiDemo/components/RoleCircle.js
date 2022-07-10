import { Typography } from "@mui/material";
import styled from "styled-components";

const RoleCircle = ({ role }) => (
  <RoleContainer>
    <Typography
      variant="h6"
      color="white"
      style={{ fontSize: "20px", lineHeight: 1, margin: "auto 0" }}
    >
      {role}
    </Typography>
  </RoleContainer>
);

const RoleContainer = styled.div`
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 15px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-content: center;
  align-self: baseline;
  flex-direction: column;
`;

export default RoleCircle;
