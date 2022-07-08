import { Typography } from "@mui/material";
import styled from "styled-components";
import colors from "../../components/colors";
import { motion } from "framer-motion";
import { motionVariants } from "../../helpers/motionHelpers";

const NumberCircle = ({
  number,
  animate = {},
  transition = {},
  initial = {},
}) => (
  <NumberContainer
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    initial={initial}
    animate={animate}
    transition={transition}
  >
    <Typography
      variant="h6"
      color="white"
      style={{ fontSize: "24px", lineHeight: 1 }}
    >
      {number}
    </Typography>{" "}
  </NumberContainer>
);

const RoleCircle = ({ role }) => (
  <RoleContainer>
    <Typography
      variant="h6"
      color="white"
      style={{ fontSize: "20px", lineHeight: 1, margin: "auto 0" }}
    >
      {role}
    </Typography>{" "}
  </RoleContainer>
);

const Pathway = ({}) => {
  return (
    <PathwayRoot>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionVariants.container}
      >
        <Row>
          <NumberCircle
            number="01"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
          />
        </Row>
        <Row>
          <NumberCircle
            number="05"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
          />
          <RoleCircle role="Machinery Mechanic" />
          <NumberCircle
            number="02"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          />
        </Row>
        <Row>
          <NumberCircle
            number="04"
            initial={{ opacity: 0, y: -150, x: 150 }}
            animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.6 } }}
          />
          <NumberCircle
            number="03"
            initial={{ opacity: 0, y: -150, x: -150 }}
            animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.4 } }}
          />
        </Row>
      </motion.div>
    </PathwayRoot>
  );
};

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

const NumberContainer = styled(motion.div)`
  margin: 0 auto;
  background-color: ${colors.ikigaiOrange};
  padding: 30px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-self: start;
  align-content: center;
  flex-direction: column;
  -webkit-box-shadow: 0px 6px 11px 6px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 6px 11px 6px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 0 2rem;
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
