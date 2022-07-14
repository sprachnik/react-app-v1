import styled from "styled-components";
import { motion } from "framer-motion";
import { motionVariants } from "../../../helpers/motionHelpers";
import NumberCircle from "./NumberCircle";
import RoleCircle from "./RoleCircle";

const Pathway = ({ onClick, currentPathway, currentPathwayRoutes }) => {
  return (
    <PathwayRoot>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionVariants.container}
      >
        <Row style={{ padding: "3rem 0 3rem" }}>
          <NumberCircle
            number="01"
            onClick={onClick}
            isselected={currentPathway === "01"}
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
          />
        </Row>
        <Row>
          <NumberCircle
            number="05"
            onClick={onClick}
            isselected={currentPathway === "05"}
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
          />
          <RoleCircle
            role={
              currentPathwayRoutes.find((r) => r.pathway === currentPathway)
                ?.name
            }
          />
          <NumberCircle
            number="02"
            onClick={onClick}
            isselected={currentPathway === "02"}
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          />
        </Row>
        <Row>
          <NumberCircle
            number="04"
            onClick={onClick}
            isselected={currentPathway === "04"}
            initial={{ opacity: 0, y: -150, x: 150 }}
            animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.6 } }}
          />
          <NumberCircle
            number="03"
            onClick={onClick}
            isselected={currentPathway === "03"}
            initial={{ opacity: 0, y: -150, x: -150 }}
            animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.4 } }}
          />
        </Row>
      </motion.div>
    </PathwayRoot>
  );
};

const Row = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  text-align: center;
  padding: 1.5rem 0 1.5rem;
`;

const PathwayRoot = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  max-width: 700px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0 auto;
`;

export default Pathway;
