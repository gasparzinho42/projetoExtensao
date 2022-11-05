import React, { useState } from 'react'
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
  const [items, setItems] = useState(cardsItems)
  const [currentOrder, setCurrentOrder] = useState(0)
  const input = {
    onChangeHandler: evt => {
      const { value } = evt.target
      input.filterCardsByName(value)
    },
    filterCardsByName: value => {
      const oldItems = [...cardsItems]
      const filteredItems = oldItems.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
      setItems(filteredItems)
      if (currentOrder > 0) {
        order.orderActions(currentOrder)
      }
    },
  }
  const order = {
    orderByRatingAsceding: () => {
      const oldItems = [...items]
      const orderedItems = oldItems.sort((a, b) => a.rating - b.rating)
      setItems(orderedItems)
    },
    orderByRatingDescending: () => {
      const oldItems = [...cardsItems]
      const orderedItems = oldItems.sort((a, b) => b.rating - a.rating)
      setItems(orderedItems)
    },
    onChangeHandler: evt => {
      const { value } = evt.target
      order.orderActions(value)
      setCurrentOrder(value)
    },
    orderActions: selectedOrder => {
      switch (Number(selectedOrder)) {
        case 3:
          order.orderByRatingAsceding()
          break
        case 4:
          order.orderByRatingDescending()
          break
        default:
          break
      }
    },
  }

  return (
    <Container justifyContent='flex-start'>
      <Box w='40%'>
        <Paragrafo text={'Estabelecimentos próximos:'} />
      </Box>
      <Col w='30%' rowGap='16px'>
        <Input label='Pesquisar por nome' onChange={input.onChangeHandler} />
        <Row mb='10px'>
          <Box w='20%' mr='10px'>
            <Select
              label='Ordenar'
              options={itemsOrder}
              onChange={order.onChangeHandler}
            />
          </Box>
          <Box w='20%'>
            <Select label='Filtrar' options={itemsfilter} />
          </Box>
        </Row>
        {items.map((card, index) => {
          return <Card key={index} card={card} />
        })}
      </Col>
    </Container>
  )
}

export default Search
