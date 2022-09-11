import {
  Grid,
  Container,
  CardContent,
  Button,
  Divider,
  Stack,
  CardActions,
  Card,
} from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const data = [
  {
    id: 1,
    title: "Ecommerce website",
    description:
      "Dynamic website using React JS and Material UI for front-end and Firebase for back-end",
    github: "https://github.com/stevenabuan/kagu",
    demo: "https://kagu-furnitures.netlify.app/",
  },
  {
    id: 2,
    title: "Gallery website",
    description:
      "Dynamic website with CRUD functionalities using Javascript and Node JS for back-end",
    github: "https://github.com/stevenabuan/kumpas",
    demo: "https://kumpas.herokuapp.com/",
  },

  {
    id: 3,
    title: "Services website",
    description:
      "Static website using HTML5, CSS3, Bootstrap for design and Vanilla Javascript",
    github: "https://github.com/stevenabuan/FinancialFreedom",
    demo: "https://stevenabuan.github.io/FinancialFreedom/",
  },
];

const Portfolio = () => {
  return (
    <Container maxWidth="lg">
      <Stack marginTop={6} fontSize="1.5rem" marginBottom={2}>
        Portfolio
      </Stack>
      <Grid container spacing={2} justifyContent="center" marginBottom={8}>
        {data.map((data) => {
          const { id, title, description, github, demo } = data;
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={id}
              sx={{
                "&:hover": {
                  transition: "200ms",
                  transform: "translateY(-10px)",
                },
              }}
            >
              <Card
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  boxShadow: "3",
                  border: "1px solid #fff",
                }}
              >
                <CardContent>
                  <FolderOpenIcon fontSize="large" />
                  <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {title}
                  </p>
                  <p>{description}</p>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginY: "0.8rem",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="inherit"
                    target="_blank"
                    href={github}
                    size="small"
                  >
                    Github
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    target="_blank"
                    href={demo}
                    size="small"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Divider color="#fff" />
    </Container>
  );
};

export default Portfolio;
