import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useFormzin } from '../hook/useForm'

function MainPage() {
  const [form, onChange]= useFormzin({nome: '', modulos: '', tecnologias: '', responsavel: ''})
  const handleClick = (event)=>{
    event.preventDefault()
    console.log(form)
  }


  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
        name='nome'
        value={form.nome}
        onChange={onChange}
          id="nome"
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
        name='modulos'
        value={form.modulos}
        onChange={onChange}
          id="modulos"
          required
          pattern='[2-9]|[0-9]{2}'
          title='O número não pode ser menor que 2 nem maior que 99'
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
        name='tecnologias'
        value={form.tecnologias}
        onChange={onChange}
          id="tecnologias"
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
        name='responsavel'
        value={form.responsavel}
        onChange={onChange}
          id="responsavel"
          required
          
          minLength={5}
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage