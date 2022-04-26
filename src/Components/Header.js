import React from 'react';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import {MdArrowDropDown} from 'react-icons/md';
import {Modal}  from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Adicionados from "./Adicionados";
import Todos from "./Todos";
import Favoritos from "./Favoritos";
import Vistos from "./Vistos";
import Inicio from "./Inicio";


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
border-radius:6px;
position:relative;
&:hover ul{
  display: block;
}`

const Category = styled.li`
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

const AccountBtn = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:2.1rem;
width:6.5rem;
&:hover  OtherProfiles{
  display: block;
}`

const ModalItems = styled.div`
border:solid blue;
background-color:black;
border:solid white;
height:80vh;
width:50vw;
display:flex;
justify-content:center;`

const OtherProfiles =styled.ul`
position:absolute;
width:7rem;
height:8rem;
top:100%;
right:1%;
display:none;`

const ListAccounts = styled.li`
display:Flex;
justify-content:flex-end;
align-items:center;
padding:0.3rem 0.2rem 0 0;


&:hover{
  background-color: rgba(169,169,169, 0.1);
}`

const OnCircle = styled.div`
width:0.5rem;
height:0.5rem;
background-color:green;
border-radius:50%;`

const OffCircle = styled.div`
width:0.5rem;
height:0.5rem;
background-color:red;
border-radius:50%;`

const Profileimg = styled.img`
margin: 0 0.9rem 0 0.7rem;

&:hover{
  transform: scale(1.1);
  border:solid white;
  border-width:thin;
}`

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
      <Router>
          <div>
              <Head>
                <Globalstyle />
                <Menu>
                  <Tittles>
                    <Navegation>
                      <li><Logo src={logo} alt="logo do site todoflix"/></li>
                      <li><Link to="./">inicio</Link></li>
                      <Category><DropBtn>Categorias <MdArrowDropDown/></DropBtn>
                        <Subs>
                          <Pages><Link to="./Todos">todos</Link></Pages>
                          <Pages><Link to="/Vistos">Já Vistos</Link></Pages>
                          <Pages><Link to="/Favoritos">Favoritos</Link></Pages>
                          <Pages><Link to="/Adicionados">Adicionados</Link></Pages>
                        </Subs>
                      </Category>
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
                        <h5>Diogo</h5>
                        <img src={account} alt="imagem do perfil" /><MdArrowDropDown/>
                      </AccountBtn>
                      <OtherProfiles>
                        <ListAccounts><h5>Diogo</h5><Profileimg src={account} alt="imagem do perfil" /><OnCircle></OnCircle></ListAccounts>
                        <ListAccounts><h5>T3</h5><Profileimg src={account} alt="imagem do perfil" /><OffCircle></OffCircle></ListAccounts>
                        <ListAccounts><h5>Eterna T4 </h5><Profileimg src={account} alt="imagem do perfil" /><OffCircle></OffCircle></ListAccounts>
                      </OtherProfiles>
                    </Proflie>
                  </AddInfos>
                </Menu>
              </Head>
              <Routes>
                <Route path="/Adicionados" element={<Adicionados />} />
                <Route path="/Favoritos" element={<Favoritos />} />
                <Route path="/Todos" element={<Todos />} />
                <Route path="/vistos" element={<Vistos />} />
                <Route path="/" element={<Inicio/>} />
            </Routes>
          </div>
          </Router>
       
    )}
}