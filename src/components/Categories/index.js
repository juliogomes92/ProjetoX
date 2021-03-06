import React from "react";
import styled from "styled-components";
import BtnCategories from "../BtnCategories";

const ContainerCategories = styled.div`
  margin-top: 2.625rem;
  margin-left: 1.4375rem;
  width: 100VW;
  right: 0;
  top: 1.4375rem;
   @media(min-width: 800px){
    margin-left: 12%;
    margin-top: 0.75rem;
  }
`;

const ContainerBtnCategories = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0px;
}
  
`;

const Title = styled.h3`
  font-size: 16pt;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--dark-indigo);
  
  @media(min-width: 800px){
    margin-top: 3.875rem;
    margin-bottom: 1.5rem;
  }
   
`;

export default class Categories extends React.Component {
  render() {
    return (
      <>
        <ContainerCategories>
          <Title>Categorias</Title>
          <ContainerBtnCategories>
            <BtnCategories name="Administração" icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/office-building_1f3e2.png"></BtnCategories>
            <BtnCategories name="Artes" icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/artist-palette_1f3a8.png"></BtnCategories>
            <BtnCategories name="Biologia"></BtnCategories>
            <BtnCategories name="Concursos"></BtnCategories>
            <BtnCategories name="Contabilidade"></BtnCategories>
            <BtnCategories name="Cultura Pop"></BtnCategories>
            <BtnCategories name="Direito"></BtnCategories>
            <BtnCategories name="Ed. Física"></BtnCategories>
            <BtnCategories name="Espanhol"></BtnCategories>
            <BtnCategories name="Filosofia"></BtnCategories>
            <BtnCategories name="Física"></BtnCategories>
            <BtnCategories name="Francês"></BtnCategories>
            <BtnCategories name="Geografia"></BtnCategories>
            <BtnCategories name="História"></BtnCategories>
            <BtnCategories name="Informática"></BtnCategories>
            <BtnCategories name="Inglês"></BtnCategories>
            <BtnCategories name="Lógica"></BtnCategories>
            <BtnCategories name="Matemática"></BtnCategories>
            <BtnCategories name="Pedagogia"></BtnCategories>
            <BtnCategories name="Português"></BtnCategories>
            <BtnCategories name="Psicologia"></BtnCategories>
            <BtnCategories name="Saúde"></BtnCategories>
            <BtnCategories name="Sociologia"></BtnCategories>
          </ContainerBtnCategories>
        </ContainerCategories>
      </>
    );
  }
}
