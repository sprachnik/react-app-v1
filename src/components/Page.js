import NavBar from "./NavBar";
import Container from "@mui/material/Container";
import styled from "styled-components";

const Page = ({ isNav = true, children }) => {
  return (
    <Wrapper>
      {isNav && <NavBar />}
      <Container maxWidth="xl">{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #666;
  width: 100%;
  height: 100%;
`;

export default Page;
