import React from 'react'
import Button from '../../components/button'
import Input from '../../components/Input'
import ItensSelection from '../../components/itensSelection'
import Box from '../../components/layout/Box'
import Col from '../../components/layout/Col'
import Row from '../../components/layout/Row'
import Select from '../../components/select'
import Paragrafo from '../../components/texto'
import { itemsSelectable, selectValues } from '../../utils/mocks'
import { Container } from '../search/styles'

import { CustomBox, FormContainer } from './styles'

function Formulario() {
  return (
    <Container justifyContent='flex-start'>
      <Box w='58%'>
        <Paragrafo
          text={'Ajude nossa comunidade fornecendo dados do lugar visitado!'}
        />
      </Box>

      <FormContainer>
        <Row>
          <Input label='Nome do estabelecimento *' />
        </Row>
        <Row justifyContent='space-between'>
          <CustomBox>
            <Input label='Endereço *' />
          </CustomBox>
          <Box w='20%'>
            <Input label='Número' maxLength={4} />
          </Box>
        </Row>
        <Row>
          <Input label='Bairro *' />
        </Row>
        <Row>
          <Input label='Telefone do estabelecimento' />
        </Row>
        <Row w='60%'>
          <Select label='Tipo do establecimento' options={selectValues} />
        </Row>
        <Col>
          <ItensSelection items={itemsSelectable} />
          <Row w='100%' justifyContent='center'>
            <Box w='fit-content' mt='42px'>
              <Button label='Enviar' />
            </Box>
          </Row>
        </Col>
      </FormContainer>
    </Container>
  )
}

export default Formulario
