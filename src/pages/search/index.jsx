import React from 'react'
import Input from '../../components/Input'
import Box from '../../components/layout/Box'
import Col from '../../components/layout/Col'
import Row from '../../components/layout/Row'
import Select from '../../components/select'
import Paragrafo from '../../components/texto'
import { cardsItems, itemsfilter, itemsOrder } from '../../utils/mocks'
import { Container } from './styles'
import Card from './components/card'

const Search = () => {
  return (
    <Container justifyContent='flex-start'>
      <Box w='40%'>
        <Paragrafo text={'Estabelecimentos próximos:'} />
      </Box>
      <Col w='30%' rowGap='16px'>
        <Input label='Pesquisar por nome' />
        <Row mb='10px'>
          <Box w='20%' mr='10px'>
            <Select label='Ordenar' options={itemsOrder} />
          </Box>
          <Box w='20%'>
            <Select label='Filtrar' options={itemsfilter} />
          </Box>
        </Row>
        {cardsItems.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              type={card.type}
              phone={card.phone}
              reviews={card.reviews}
              accessibilityItems={card.accessibilityItems}
            />
          )
        })}
      </Col>
    </Container>
  )
}

export default Search
