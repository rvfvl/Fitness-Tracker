import React from "react";
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import Container from "components/Container";
import app from "config/firebase";

const Dashboard = () => {
  console.log(app);

  return (
    <LoggedUserTemplate>
      <Container row="2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        eius autem aperiam facere earum fugiat adipisci iure rem tempore?
        Mollitia, ab. Maiores consequatur ea non voluptatibus quidem numquam
        explicabo repellendus.Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Perspiciatis eius autem aperiam facere earum fugiat
        adipisci iure rem tempore? Mollitia, ab. Maiores consequatur ea non
        voluptatibus quidem numquam explicabo repellendus.Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Perspiciatis eius autem aperiam
        facere earum fugiat adipisci iure rem tempore? Mollitia, ab. Maiores
        consequatur ea non voluptatibus quidem numquam explicabo
        repellendus.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Perspiciatis eius autem aperiam facere earum fugiat adipisci iure rem
        tempore? Mollitia, ab. Maiores consequatur ea non voluptatibus quidem
        numquam explicabo repellendus.Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Perspiciatis eius autem aperiam facere earum fugiat
        adipisci iure rem tempore? Mollitia, ab. Maiores consequatur ea non
      </Container>
      <Container />
      <Container />
    </LoggedUserTemplate>
  );
};

export default Dashboard;
