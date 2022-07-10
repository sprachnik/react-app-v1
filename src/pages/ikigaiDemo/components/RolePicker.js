import styled from "styled-components";
import RoleCard from "./RoleCard";
import { motion, AnimatePresence } from "framer-motion";

export const motionVariants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    initial: {
      opacity: 0,
      y: -50,
    },

    animate: {
      opacity: 1,
      y: 0,
    },

    exit: {
      opacity: 0,
      y: -50,
    },
  },
};

const RolePicker = ({ currentPathway = "01", demoRoles }) => {
  const roles = demoRoles.filter((d) => d.pathway === currentPathway);
  return (
    <RolePickerContainer
      initial="initial"
      animate="animate"
      variants={motionVariants.container}
    >
      <AnimatePresence>
        {roles.map((role, index) => {
          return (
            <RoleCardWrapper variants={motionVariants.item} key={index}>
              <RoleCard role={role} />
            </RoleCardWrapper>
          );
        })}
      </AnimatePresence>
    </RolePickerContainer>
  );
};

const RolePickerContainer = styled(motion.div)`
  display: flex;
  overflow-x: scroll;
  width: 100%;
`;

const RoleCardWrapper = styled(motion.div)`
  flex-shrink: 0;
  min-width: 400px;
  width: 300px;
  margin: 0 1rem 1rem 0;
  border-radius: 10px;
  margin-left: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export default RolePicker;
