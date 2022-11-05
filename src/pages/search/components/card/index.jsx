import ItensSelection from '../../../../components/itensSelection'
import Box from '../../../../components/layout/Box'
import Col from '../../../../components/layout/Col'
import Row from '../../../../components/layout/Row'
import Reviews from '../reviews'
import locationICon from '../../../../assets/locationIcon.svg'
import filledStar from '../../../../assets/filledStar.svg'
import singleStar from '../../../../assets/singleStar.svg'
import { Container, SubTitle, Text, Title } from './styles'

function Card(Props) {
  const stars = {
    getStars: () => {
      const filledStars = Props.card.rating
      const nonFilledStars = 5 - Props.card.rating
      const stars = []
      for (let i = 0; i < filledStars; i++) {
        stars.push({
          filled: true,
        })
      }
      if (nonFilledStars > 0) {
        for (let j = 0; j < nonFilledStars; j++) {
          stars.push({
            filled: false,
          })
        }
      }
      return stars
    },
  }

  return (
    <Container>
      <Row colGap='15px'>
        <Title>{Props.card.title}</Title>
        <img
          src={locationICon}
          alt='ícone de localização'
          style={{ cursor: 'pointer' }}
        />
      </Row>
      <Col rowGap='3px'>
        <Row pl='10px'>
          {stars.getStars()?.map((star, index) => {
            return star.filled ? (
              <img key={index} src={filledStar} alt='nota' />
            ) : (
              <img key={index} src={singleStar} alt='nota' />
            )
          })}
        </Row>
        <SubTitle>{Props.card.type}</SubTitle>
        <Text>{Props.card.phone}</Text>
      </Col>
      <Box w='95%' mb='10px' mt='10px'>
        <ItensSelection readOnly={true} items={Props.card.accessibilityItems} />
      </Box>
      <Reviews reviews={Props.card.reviews} />
    </Container>
  )
}

export default Card
