import React, { useState } from 'react'
import { itemsSelectable } from '../../utils/mocks'
import { Container, Item } from './styles'

// import { Container } from './styles';

function ItensSelection() {
  const itemsParsed = itemsSelectable.map(item => {
    return {
      selected: false,
      label: item,
    }
  })
  const [items, setItems] = useState(itemsParsed)

  return (
    <Container>
      {items?.map((item, index, array) => {
        return (
          <Item
            key={index}
            selected={item.selected}
            onClick={() => {
              const newItems = [...array]
              newItems[index].selected = !item.selected
              console.log(newItems)
              setItems(newItems)
            }}
          >
            {item.label}
          </Item>
        )
      })}
    </Container>
  )
}

export default ItensSelection
