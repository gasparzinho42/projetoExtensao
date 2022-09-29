import React from "react";
import Input from "../../components/Input";
import { Container } from "./styles";

function LandingPage() {
  return (
    <Container>
      Ajudando você a ter as melhores experiências, e de quebra poupando seu
      tempo.
      <div style={{ width: 200 }}>
        <Input label="Input de teste" placeholder="Placeholder" />
      </div>
    </Container>
  );
}

export default LandingPage;
