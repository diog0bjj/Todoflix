import React from 'react';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import {MdArrowDropDown} from 'react-icons/md';
import {Modal}  from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import logo from "../Assets/Todoflix.png"
import account from "../Assets/Profile.png"

const Globalstyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  color:#fff;
  text-decoration:none;
  border:hidden;
}
body{
  background-color:black;
}`

const Head =styled.div`
padding:0 2rem 0 2rem;
margin-bottom:8rem;`

const Menu = styled.div`
height:3.5rem;
display:flex;
justify-content:space-between;
align-items:center;`

const Tittles =styled.div`
width:22rem;`

const Logo = styled.img`
width:7rem;
height:4rem;
margin-top:0.5rem;`

const Navegation = styled.ul`
display:flex;
justify-content:space-evenly;
margin-top:1rem;
height:4rem;
align-items:center;
`

const AddInfos =styled.div`
display:flex;
justify-content:space-between;
width:42%;`

const AddMovie =styled.button`
width:7rem;
height:2rem;
border-radius:6px;
background-color:#E71B27;`

const Proflie =styled.button`
display:flex;
background-color:#000;
align-items:center;
height:2rem;
border-radius:6px;`

const Teste = styled.li`
position:relative;
&:hover ul{
  display: block;
}`

const Subs = styled.ul`
position:absolute;
width:10rem;
height:8rem;
top:60%;
display:none;
background-color:black;
`
const Pages = styled.li`
padding-bottom:0.7rem;

&:hover{
  background-color: rgba(169,169,169, 0.1);
}
`
const DropBtn = styled.button`
background-color:#000;
height:10rem;`

const AccountBtn = styled.button`
height:2rem;
background-color:purple;` 

const ModalItems = styled.div`
border:solid blue;
background-color:black;
border:solid white;
height:80vh;
width:50vw;
display:flex;
justify-content:center;`


export default class Header extends React.Component{

  state={
    openModal : false
}
onClickButton = event =>{
  event.preventDefault()
  this.setState({openModal : true})
}

onCloseModal = e =>{
  this.setState({openModal : false})
}

  render(){
    return(
          <div>
              <Head>
                <Globalstyle />
                <Menu>
                  <Tittles>
                    <Navegation>
                      <li><Logo src={logo} alt="logo do site todoflix"/></li>
                      <li><Link to="./">inicio</Link></li>
                      <Teste><DropBtn>Categorias <MdArrowDropDown/></DropBtn>
                        <Subs>
                          <Pages><Link to="./Todos">todos</Link></Pages>
                          <Pages><Link to="/Vistos">Já Vistos</Link></Pages>
                          <Pages><Link to="/Favoritos">Favoritos</Link></Pages>
                          <Pages><Link to="/Adicionados">Adicionados</Link></Pages>
                        </Subs>
                      </Teste>
                    </Navegation>
                  </Tittles>
                  <AddInfos>
                    <div>
                    <AddMovie onClick={this.onClickButton}>Adicionar filme</AddMovie>
                    <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                      <ModalItems>
                        <h2>oi</h2>
                        <form>
                          <label></label>
                          <label></label>
                        </form>
                      </ModalItems>
                    </Modal>   
                    </div>
                    <Proflie>
                      <AccountBtn>
                        <img src={account} alt="imagem do perfil" />
                      </AccountBtn>
                      <MdArrowDropDown/>
                      <div>
                      </div>
                      </Proflie>
                  </AddInfos>
                </Menu>
              </Head>
          </div>
       
    )}
}