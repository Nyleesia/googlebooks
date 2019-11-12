import React from "react";
import { Column, Row, Container } from "../../components/grid";
import Jumbotron from "../../components/jumbotron";

function NoResults() {
  return (
    <Container fluid>
      <Row>
        <Column size="md-12">
          <Jumbotron>
            <h1 className="text-white">404 Page Not Found</h1>
          </Jumbotron>
        </Column>
      </Row>
    </Container>
  );
}

export default NoResults;