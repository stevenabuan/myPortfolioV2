import { Box, Stack } from "@mui/material";
import { FaGitAlt, FaSass, FaHtml5, FaCss3, FaVuejs } from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiMaterialui,
  SiBootstrap,
  SiJavascript,
  SiNodedotjs,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiPostman,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

const Skills = () => {
  return (
    <Box>
      <Stack marginTop={3} sx={{ fontSize: "1.5rem" }}>
        Technologies
      </Stack>
      <Stack marginTop={2}>
        <Box sx={{ display: "flex" }}>
          <p style={{ marginRight: "1rem" }}>Frontend</p>
          <SiReact size={30} style={{ marginRight: "1rem" }} />
          <SiMaterialui size={30} style={{ marginRight: "1rem" }} />
          <SiJavascript size={30} style={{ marginRight: "1rem" }} />
          <FaVuejs size={30} style={{ marginRight: "1rem" }} />
          <FaHtml5 size={30} style={{ marginRight: "1rem" }} />
          <FaCss3 size={30} style={{ marginRight: "1rem" }} />
          <SiBootstrap size={30} style={{ marginRight: "1rem" }} />
          <FaSass size={30} />
        </Box>
        <Box sx={{ display: "flex", marginTop: "1rem" }}>
          <p style={{ marginRight: "1rem" }}>Backend</p>
          <SiNodedotjs size={30} style={{ marginRight: "1rem" }} />
          <SiMongodb size={30} style={{ marginRight: "1rem" }} />
          <SiFirebase size={30} style={{ marginRight: "1rem" }} />
        </Box>
        <Box sx={{ display: "flex", marginTop: "1rem", marginBottom: "1rem" }}>
          <p style={{ marginRight: "0.5rem" }}>Other tools</p>
          <FaGitAlt size={30} style={{ marginRight: "1rem" }} />
          <SiGithub size={30} style={{ marginRight: "1rem" }} />
          <SiFigma size={30} style={{ marginRight: "1rem" }} />
          <SiPostman size={30} style={{ marginRight: "1rem" }} />
          <SiNetlify size={30} style={{ marginRight: "1rem" }} />
          <SiHeroku size={30} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Skills;
