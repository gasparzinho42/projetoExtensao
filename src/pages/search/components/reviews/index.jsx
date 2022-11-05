import React from 'react'
import Row from '../../../../components/layout/Row'
import { LightText, SubTitle } from '../card/styles'

function Reviews(Props) {
  return Props.reviews.map(review => {
    return (
      <div key={review.userName}>
        <SubTitle>{review.userName}</SubTitle>
        <Row pl='15px'>
          <LightText>{review.review}</LightText>
        </Row>
      </div>
    )
  })
}

export default Reviews
