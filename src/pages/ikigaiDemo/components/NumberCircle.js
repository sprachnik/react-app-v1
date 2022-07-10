import { Typography } from "@mui/material";
import styled from "styled-components";
import colors from "../../../components/colors";
import { motion } from "framer-motion";

const NumberCircle = ({
  number,
  animate = {},
  transition = {},
  initial = {},
  width = "25px",
  height = "25px",
  fontSize = "24px",
  padding = "30px",
  hasshadow = true,
  isselected = false,
  onClick = () => {},
}) => (
  <NumberContainer
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    initial={initial}
    animate={animate}
    transition={transition}
    width={width}
    height={height}
    padding={padding}
    hasshadow={hasshadow ? 1 : 0}
    isselected={isselected ? 1 : 0}
    onClick={() => onClick(number)}
  >
    <Typography variant="h6" color="white" style={{ fontSize, lineHeight: 1 }}>
      {number}
    </Typography>{" "}
  </NumberContainer>
);

export default NumberCircle;

const NumberContainer = styled(motion.div)`
  margin: 0 auto;
  background-color: ${({ isselected }) =>
    isselected ? "white" : colors.ikigaiOrange};
  padding: ${({ padding }) => (!!padding ? `${padding}` : "30px")};
  border-radius: 50%;
  width: ${({ width }) => (!!width ? `${width}` : "25px")};
  width: ${({ height }) => (!!height ? `${height}` : "25px")};
  display: flex;
  align-self: start;
  align-content: center;
  flex-direction: column;
  cursor: pointer;
  ${({ hasshadow }) =>
    !!hasshadow
      ? `-webkit-box-shadow: 0px 6px 11px 6px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 6px 11px 6px rgba(0, 0, 0, 0.4);`
      : ``}
  h6 {
    color: ${({ isselected }) => (!isselected ? "white" : colors.ikigaiOrange)};
  }
`;
