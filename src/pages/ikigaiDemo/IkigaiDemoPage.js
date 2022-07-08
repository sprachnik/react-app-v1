import styled from "styled-components";
import colors from "../../components/colors";
import Navbar from "./Navbar";
import { Container } from "@mui/material";
import SearchBox from "./SearchBox";
import Pathway from "./Pathway";

const IkigaiDemoPage = ({ ...props }) => {
  return (
    <Root id="ikigaiRoot">
      <Navbar />
      <Container maxWidth="xl">
        <SearchBox />
        <Pathway />
      </Container>
    </Root>
  );
};

const Root = styled.div`
  background: ${colors.ikigaiBlue};
  height: 100%;
`;

export default IkigaiDemoPage;
