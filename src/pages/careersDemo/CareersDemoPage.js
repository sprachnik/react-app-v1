import styled from "styled-components";
import colors from "../../components/colors";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import SearchBox from "./components/SearchBox";
import Pathway from "./components/Pathway";
import { useState } from "react";
import RolePicker from "./components/RolePicker";
import { demoRoles } from "./components/demoRoles";

const CareersDemoPage = ({ ...props }) => {
  const [currentPathway, setCurrentPathway] = useState("01");
  const [currentPathwayRoutes, setCurrentPathwayRoutes] = useState([
    { pathway: "01", name: "Machiney Mechanic" },
    { pathway: "02", name: "Mechanical Engineer" },
    { pathway: "03", name: "Senior Engineer" },
    { pathway: "04", name: "Engineer Manager" },
    { pathway: "05", name: "Head of Engineering" },
  ]);
  return (
    <Root id="careersRoot">
      <Navbar />
      <Container maxWidth="xl" style={{ backgroundColor: colors.careersBlue }}>
        <SearchBox />
        <Pathway
          currentPathway={currentPathway}
          currentPathwayRoutes={currentPathwayRoutes}
          onClick={setCurrentPathway}
        />
        <RolePicker
          key={currentPathway}
          currentPathway={currentPathway}
          demoRoles={demoRoles}
        />
      </Container>
    </Root>
  );
};

const Root = styled.div`
  background: ${colors.careersBlue};
  height: 100%;
`;

export default CareersDemoPage;
