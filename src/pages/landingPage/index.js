import React from 'react';
import { Container } from './styles';
import BotaoPrincipal from '../../components/botaoPrincipal';
import Paragrafo from '../../components/texto';

function LandingPage() {
  return (
    <Container>
        <Paragrafo text="Ajudando você a ter as melhores  experiências, e de quebra poupando seu tempo."/>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <BotaoPrincipal text="Cadastrar Estabelecimento" />
          <BotaoPrincipal text="Procurar estabelecimentos" />
        </div>
        

    </Container>
  )
}

export default LandingPage;