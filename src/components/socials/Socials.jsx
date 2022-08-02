import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Stack } from "@mui/material";

const Socials = () => {
  return (
    <Stack>
      <Stack
        fontSize="1.5rem"
        sx={{ padding: "1rem" }}
        paddingLeft={2}
        marginBottom={2}
      >
        Connect with me
      </Stack>
      <Stack direction="row" spacing={2} paddingLeft={2} marginBottom={2}>
        <Link
          target="_blank"
          color="#fff"
          href="https://www.linkedin.com/in/steven-abuan-a60504238/"
        >
          <LinkedInIcon />
        </Link>
        <p>LinkedIn</p>
      </Stack>
      <Stack direction="row" spacing={2} paddingLeft={2} marginBottom={2}>
        <Link
          target="_blank"
          color="#fff"
          href="https://github.com/stevenabuan"
        >
          <GitHubIcon />
        </Link>
        <p>Github</p>
      </Stack>
    </Stack>
  );
};

export default Socials;
