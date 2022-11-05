import React, { useState } from 'react'
import { Container, Item } from './styles'

function ItensSelection(Props) {
  const itemsParsed = Props.items?.map(item => {
    return {
      selected: Props.readOnly,
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
              if (!Props.readOnly) {
                const newItems = [...array]
                newItems[index].selected = !item.selected
                console.log(newItems)
                setItems(newItems)
              }
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
