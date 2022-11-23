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

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


  

   const Formulario = () => {

  const validationPost = yup.object().shape({
    nome: yup.string().required("Obrigatório o preenchimento!").max(150),
    address: yup.string().required("Obrigatório o preenchimento!"),
    district: yup.string().required("Obrigatório o preenchimento!")
   })


    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(validationPost)
    })

    const addPost = data => console.log(data)

  return (
    <Container justifyContent='flex-start'>
      <Box w='58%'>
        <Paragrafo
          text={'Ajude nossa comunidade fornecendo dados do lugar visitado!'}
        />
      </Box>

      <FormContainer onSubmit={handleSubmit(addPost)}>
        <Row>
          <Input label='Nome do estabelecimento *' type="text" name="nome" {...register("nome")} />
          <p  className="error-message">{errors.nome?.message}</p>
        </Row>
        <Row justifyContent='space-between'>
          <CustomBox>
            <Input label='Endereço *' type="text" name="address" {...register("address")}/>
            <p  className="error-message">{errors.address?.message}</p>
          </CustomBox>
          <Box w='20%'>
            <Input label='Número' maxLength={4} />
          </Box>
        </Row>
        <Row>
          <Input label='Bairro *' type="text" name="district" {...register("district")}/>
          <p  className="error-message">{errors.district?.message}</p>
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
