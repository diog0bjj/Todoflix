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
import {faSearch, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
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
width:20vw;
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
width:22vw;
left:66.5%;
bottom:93%;`

const RatingSection = styled.div`
width:3.5rem;
display:flex;
justify-content:space-evenly;
align-items:flex-start;
`

export default class Todos extends React.Component{
    state={
        movies:[{
            name:'AmarElo',
            image:<Poster src={amarELO} alt="poster do filme: Emicida, AmarELO ?? Tudo para Ontem"/>,
            overview:'Nos bastidores do show no Theatro Municipal de S??o Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.',
            rating:'5/5',
        },
          {
            name:'Rocketman',
            image:<Poster src={rocketman} alt="poster do filme: Rocketman"/>,
            overview:'Em reabilita????o, Elton John relembra suas origens humildes, as m??sicas atemporais e os momentos de inspira????o e excesso. Baseado em sua verdadeira hist??ria.',
            rating:'3/5',
        },
          {
            name:'Shrek',
            image: <Poster src={shrekPoster} alt ="poster do filme: sherek"/>,
            overview:'Para resgatar uma princesa das garras de um drag??o que cospe fogo, o ogro Shrek se une a um companheiro improv??vel: um burro brincalh??o.',
            rating:'4/5',
        },
          {
            name:'Hoje Eu Quero Voltar sozinho',
            image:<Poster src={hojeEuQueroVoltarSozinho} alt ="poster do filme: Hoje Eu Quero Voltar Sozinho"/>,
            overview:'Um novo colega de sala transforma a vida do estudante Leonardo, que tamb??m ?? cego, e complica sua amizade com sua melhor amiga.',
            rating:'-',
        },
          {
            name:'Spider-man',
            image:<Poster src={spiderMan} alt ="poster do filme: Spider-Man no multiverso"/>,
            overview:'Ap??s ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lan??ar teias com seus parceiros de um universo alternativo.',
            rating:'3/5',
        },
          {
            name:'Um Sonho de Liberdade',
            image:<Poster src={sonhoDeLiberdade} alt ="poster do filme: Sonho de Liberdade"/>,
            overview:'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega ?? esperan??a e ?? amizade com um detento chamado Red para sobreviver ?? pris??o.',
            rating:'4,5/5',
        },
          {
            name:'Que Horas Ela Volta?',
            image:<Poster src={queHorasElaVolta} alt ="poster do filme: Que Horas Ela Volta?"/>,
            overview:'Val ?? a fiel empregada domestica de uma fam??lia rica. Mas a chegada de sua filha gera tens??o na casa e faz com que ela comece a questionar esse papel.',
            rating:'2/5',
        },
          {
            name:'A Fuga das Galinhas',
            image:<Poster src={fugaDasGalinhas} alt="poster do filme: A Fuga das Galinhas"/>,
            overview:'O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.',
            rating:'5/5',
        },
          {
            name:'O boneco Assassino',
            image:<Poster src={choke} alt="poster do filme:O Boneco Assassino"/>,
            overview:'Mais que um brinquedo, ele ?? o seu melhor amigo. No dia do seu anivers??rio, Andy ganha de presente de sua m??e, Karen, o boneco mais aguardado dos ??ltimos tempos.',
            rating:'1/5',
        },
          {
            name:'Pin??quio',
            image:<Poster src={pinoquio} alt="poster do filme:Pin??quio"/>,
            overview:'Conhe??a a verdade sombria por tr??s do cl??ssico que marcou gera????es. Gepeto ?? um solit??rio marceneiro que sonha em ser pai e deseja que Pin??quio, o boneco que acabou de construir, ganhe vida.',
            rating:'5/5',
        },
          {
            name:'O Infiltrado',
            image:<Poster src={infiltrado} alt="poster do filme:O Infiltrado"/>,
            overview:'Patrick Hill, conhecido apenas como ???H???, ?? um homem misterioso que trabalha para uma empresa de carros-fortes e movimenta grandes quantias de dinheiro pela cidade de Los Angeles',
            rating:'3/5',
        },
          {
            name:'??guas Selvagens',
            image:<Poster src={aguasSelvagens} alt="poster do filme:??guas Selvagens"/>,
            overview:'uando o investigador L??cio Gualtieri aceita um trabalho para solucionar um crime cometido na fronteira entre Brasil, Argentina e Paraguai, ele se v?? perseguido por uma organiza????o criminosa envolvida em uma trama macabra de assassinatos',
            rating:'4/5',
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
                    <RatingSection>
                      <h6>{item.rating}</h6>
                      <FontAwesomeIcon icon={faThumbsUp}/>
                    </RatingSection>
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