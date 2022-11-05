import React from 'react'
import { Container } from './styles'
import BotaoPrincipal from '../../components/botaoPrincipal'
import Paragrafo from '../../components/texto'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
  const navigate = useNavigate()
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '50%',
          flexWrap: 'wrap',
          paddingLeft: '20px',
        }}
      >
        <Paragrafo text='Ajudando você a ter as melhores  experiências, e de quebra poupando seu tempo.' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }}>
        <BotaoPrincipal
          text='Cadastrar Estabelecimento'
          onClick={() => navigate('/form')}
        />
        <BotaoPrincipal
          text='Procurar estabelecimentos'
          onClick={() => navigate('/search')}
        />
      </div>
    </Container>
  )
}

export default LandingPage
