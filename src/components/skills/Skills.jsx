import { Box } from "@mui/material";
import { FaReact, FaVuejs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiMaterialui,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <Box
      className="skills-container"
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="repeat(4, 1fr)"
      sx={{ display: "grid", fontSize: "1.5rem" }}
      marginY={2}
    >
      <Box className="front-end" paddingLeft={2} gridColumn="1/3" gridRow="1/2">
        Front-end
      </Box>
      <Box className="react" justifySelf="center" gridRow="2/3">
        <FaReact size={30} />
      </Box>
      <Box className="vue" justifySelf="center" gridRow="3/4">
        <FaVuejs size={30} />
      </Box>
      <Box justifySelf="center" gridColumn="2/3" gridRow="2/3">
        <SiJavascript size={30} />
      </Box>
      <Box className="html" justifySelf="center" gridRow="4/5">
        <SiHtml5 size={30} />
      </Box>
      <Box justifySelf="center" gridColumn="2/3" gridRow="3/4">
        <SiMaterialui size={30} />
      </Box>
      <Box justifySelf="center" gridColumn="2/3" gridRow="4/5">
        <SiBootstrap size={30} />
      </Box>
      <Box
        className="back-end"
        paddingRight={2}
        justifySelf="flex-end"
        gridColumn="2/4"
        gridRow="1/2"
      >
        Back-end
      </Box>
      <Box className="node" justifySelf="center" gridColumn="3/4" gridRow="2/3">
        <SiNodedotjs size={30} />
      </Box>
      <Box
        className="mongo"
        justifySelf="center"
        gridColumn="3/4"
        gridRow="3/4"
      >
        <SiMongodb size={30} />
      </Box>
      <Box className="git" justifySelf="center" gridColumn="3/4" gridRow="4/5">
        <FaGitAlt size={30} />
      </Box>
    </Box>
  );
};

export default Skills;
