import React from 'react';
import styled from "styled-components";

import spiderMan from "../Assets/SpiderMan.png"
import sonhoDeLiberdade from "../Assets/SonhoDeLiberdade.png"
import queHorasElaVolta from "../Assets/QueHorasElaVolta.png"
import hojeEuQueroVoltarSozinho from "../Assets/HojeEuQueroVoltarSozinho.png"
import fugaDasGalinhas from "../Assets/FugaDasGalinhas.png"
import rocketman from "../Assets/Rocketman.png"
import amarELO from "../Assets/AmarELO.png"
import shrekPoster from "../Assets/Shrek.png"
import choke from "../Assets/choke.jpg"
import pinoquio from "../Assets/Pinoquio.jpg"
import infiltrado from "../Assets/Infiltrado.jpg"
import aguasSelvagens from "../Assets/AguasSelvagens.jpg"
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Catalogy =styled.div`
color:#fff;
width:90vw;
display:flex;
justify-content:flex-start;
flex-wrap:wrap;
margin-top:-2rem;`

const Poster = styled.img`
border-radius:5px;
width:15.5rem;
height:8.3rem;`

const Overview = styled.li`
font-size:x-small;`

const Exibtion = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
align-items:flex-start;
width:15.9rem;
height:15rem;
margin:1.0rem;

&:hover{
    transform: scale(1.0);
}`

const Title= styled.li`
padding-bottom:0.5rem;
padding-top:0.1rem;
font-size:Medium;
font-weight:bold;
display:flex;
justify-content:space-between;`

const SearchBar =styled.input`
padding-left:1rem;
width:25vw;
height:2rem;
border-radius:6px;
background-color:#2C2C2C;
outline:0;

::-webkit-input-placeholder  { color:#fff; }`

const Searching = styled.div`
position:absolute;
background-color:#2C2C2C;
border-radius:6px;
padding-left:0.2rem;
width:27vw;
left:66.5%;
bottom:93%;`

export default class Todos extends React.Component{
    state={
        movies:[{
            name:'AmarElo',
            image:<Poster src={amarELO} alt="poster do filme: Emicida, AmarELO é Tudo para Ontem"/>,
            overview:'Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.',
          },
          {
            name:'Rocketman',
            image:<Poster src={rocketman} alt="poster do filme: Rocketman"/>,
            overview:'Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.',
          },
          {
            name:'Shrek',
            image: <Poster src={shrekPoster} alt ="poster do filme: sherek"/>,
            overview:'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.',
          },
          {
            name:'Hoje Eu Quero Voltar sozinho',
            image:<Poster src={hojeEuQueroVoltarSozinho} alt ="poster do filme: Hoje Eu Quero Voltar Sozinho"/>,
            overview:'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.',
          },
          {
            name:'Spider-man',
            image:<Poster src={spiderMan} alt ="poster do filme: Spider-Man no multiverso"/>,
            overview:'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
          },
          {
            name:'Um Sonho de Liberdade',
            image:<Poster src={sonhoDeLiberdade} alt ="poster do filme: Sonho de Liberdade"/>,
            overview:'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.',
          },
          {
            name:'Que Horas Ela Volta?',
            image:<Poster src={queHorasElaVolta} alt ="poster do filme: Que Horas Ela Volta?"/>,
            overview:'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.',
          },
          {
            name:'A Fuga das Galinhas',
            image:<Poster src={fugaDasGalinhas} alt="poster do filme: A Fuga das Galinhas"/>,
            overview:'O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.',
          },
          {
            name:'O boneco Assassino',
            image:<Poster src={choke} alt="poster do filme:O Boneco Assassino"/>,
            overview:'Mais que um brinquedo, ele é o seu melhor amigo. No dia do seu aniversário, Andy ganha de presente de sua mãe, Karen, o boneco mais aguardado dos últimos tempos.',
          },
          {
            name:'Pinóquio',
            image:<Poster src={pinoquio} alt="poster do filme:Pinóquio"/>,
            overview:'Conheça a verdade sombria por trás do clássico que marcou gerações. Gepeto é um solitário marceneiro que sonha em ser pai e deseja que Pinóquio, o boneco que acabou de construir, ganhe vida.',
          },
          {
            name:'O Infiltrado',
            image:<Poster src={infiltrado} alt="poster do filme:O Infiltrado"/>,
            overview:'Patrick Hill, conhecido apenas como “H”, é um homem misterioso que trabalha para uma empresa de carros-fortes e movimenta grandes quantias de dinheiro pela cidade de Los Angeles',
          },
          {
            name:'Águas Selvagens',
            image:<Poster src={aguasSelvagens} alt="poster do filme:Águas Selvagens"/>,
            overview:'uando o investigador Lúcio Gualtieri aceita um trabalho para solucionar um crime cometido na fronteira entre Brasil, Argentina e Paraguai, ele se vê perseguido por uma organização criminosa envolvida em uma trama macabra de assassinatos',
          },
        ],
        allMovies:[],
    }

    async componentDidMount(){
        const firstMovies = this.state.movies.map((item) => {
          return{
            ...item
          }
        });
        this.setState({
          allMovies: firstMovies,
        });
    }

    search = (event) => {
        const { allMovies, movies } = this.state;

        if (event.target.value === "") {
            this.setState({
                allMovies: movies
            })
            return allMovies
        }
        const finalMovie = movies.filter((item) => {
            if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
              return true
            };
        });
        this.setState({
          allMovies: finalMovie
        });
      };

    render(){
        return(
            <div>
                <Searching>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    <SearchBar onChange={this.search} value={this.state.movies.name} placeholder= 'Pesquisar'/>    
                </Searching>
                <Catalogy>
                {this.state.allMovies.map((item) => (
                <Exibtion>
                <ul>
                    <li>{item.image}</li>
                    <Title>
                    <p>{item.name}</p>
                    <p>rating</p>
                    </Title>
                    <Overview>{item.overview}</Overview>
                </ul>
                </Exibtion>
                ))}
            </Catalogy>
            </div>
        )
    }
}