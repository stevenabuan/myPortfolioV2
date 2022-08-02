import {
  Grid,
  Container,
  CardContent,
  Button,
  Divider,
  Stack,
  CardActions,
  CardMedia,
  Card,
} from "@mui/material";
import Image1 from "../../assets/ecommerce-website.svg";
import Image2 from "../../assets/Images-bro.svg";
import Image3 from "../../assets/service.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Ecommerce website",
    description:
      "Dynamic website using React JS and Material UI for front-end and Firebase for back-end",
    github: "https://github.com/stevenabuan/kumpas",
    demo: "https://kumpas.herokuapp.com/",
  },
  {
    id: 2,
    image: Image2,
    title: "Gallery website",
    description:
      "Dynamic website with CRUD functionalities using Javascript and Node JS for back-end",
    github: "https://github.com/stevenabuan/kumpas",
    demo: "https://kumpas.herokuapp.com/",
  },

  {
    id: 3,
    image: Image3,
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
          const { id, image, title, description, github, demo } = data;
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={id}
              sx={{
                borderRadius: "0",
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
                <CardMedia
                  component="img"
                  alt={title}
                  height="200"
                  image={image}
                />
                <CardContent>
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
