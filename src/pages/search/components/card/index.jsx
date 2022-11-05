import ItensSelection from '../../../../components/itensSelection'
import Box from '../../../../components/layout/Box'
import Col from '../../../../components/layout/Col'
import Row from '../../../../components/layout/Row'
import Reviews from '../reviews'
import { Container, SubTitle, Text, Title } from './styles'

function Card(Props) {
  return (
    <Container>
      <Row>
        <Title>{Props.title}</Title>
      </Row>
      <Col rowGap='3px'>
        <SubTitle>{Props.type}</SubTitle>
        <Text>{Props.phone}</Text>
      </Col>
      <Box w='95%' mb='10px' mt='10px'>
        <ItensSelection readOnly={true} items={Props.accessibilityItems} />
      </Box>
      <Reviews reviews={Props.reviews} />
    </Container>
  )
}

export default Card
