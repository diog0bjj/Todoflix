import React from 'react';
import styled from "styled-components";
import Carousel from 'nuka-carousel';


import spiderMan from "../Assets/SpiderMan.png"
import sonhoDeLiberdade from "../Assets/SonhoDeLiberdade.png"
import queHorasElaVolta from "../Assets/QueHorasElaVolta.png"
import hojeEuQueroVoltarSozinho from "../Assets/HojeEuQueroVoltarSozinho.png"
import capitaoFantastico from "../Assets/CapitaoFantastico.png"
import fugaDasGalinhas from "../Assets/FugaDasGalinhas.png"
import shrekPoster from "../Assets/Shrek.png"
import favorite from "../Assets/favorite.png"
import {faThumbsUp, faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Main = styled.div`
margin-left:4vw;
display:flex;
flex-direction:column;`

const LastMovie = styled.div`
margin-bottom:4rem;
`

const Spotlight = styled.div`
width:55vw;
display:flex;
flex-wrap:wrap;
justify-content:space-between;`

const Pic = styled.img`
width:25rem;
height:15rem;`

const PrincipalInfos = styled.ul`
height:14rem;
width:20rem;
display:flex;
flex-direction:column;
justify-content:space-around;
aling-items:flex-start;`

const Exibtion = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
align-items:flex-start;
width:16rem;
height:15rem;
margin-top:0.5rem;

&:hover{
  transform: scale(1.1);
}`

const Poster = styled.img`
border-radius:5px;
width:15.7rem;
height:8.3rem;`

const Overview = styled.li`
font-size:x-small;`

const Title= styled.li`
padding-bottom:0.5rem;
padding-top:0.1rem;
font-size:Medium;
font-weight:bold;
display:flex;
justify-content:space-between;
flex-wrap:wrap;`

const LikeBtn = styled.button`
border-radius:50%;
display:flex;
justify-content:center;
aling-items:center;`

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

const Ul = styled.ul`
position:relative;`

const ListFav = styled.li`
position:absolute;
left:89%;
top:2%;`

const RatingSection = styled.div`
width:3.5rem;
display:flex;
justify-content:space-evenly;
align-items:flex-start;
`

const Principal = styled.div`
width:11.5rem;
display:flex;
flex-wrap:wrap;
align-items:center;`

export default class Inicio extends React.Component{
  state={
    movies:[
      {
        name:'Shrek',
        image: <Poster src={shrekPoster} alt ="poster do filme: sherek"/>,
        overview:'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.',
        rating:'4/5'
      },
      {
        name:'Hoje Eu Quero Voltar sozinho',
        image:<Poster src={hojeEuQueroVoltarSozinho} alt ="poster do filme: Hoje Eu Quero Voltar Sozinho"/>,
        overview:'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.',
        rating:'-'
      },
      {
        name:'Spider-man',
        image:<Poster src={spiderMan} alt ="poster do filme: Spider-Man no multiverso"/>,
        overview:'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
        rating:'3/5'
      },
      {
        name:'Um Sonho de Liberdade',
        image:<Poster src={sonhoDeLiberdade} alt ="poster do filme: Sonho de Liberdade"/>,
        overview:'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.',
        rating:'4,5/5'
      },
      {
        name:'Que Horas Ela Volta?',
        image:<Poster src={queHorasElaVolta} alt ="poster do filme: Que Horas Ela Volta?"/>,
        overview:'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.',
        rating:'2/5'
      },
      {
        name:'A Fuga das Galinhas',
        image:<Poster src={fugaDasGalinhas} alt="poster do filme: A Fuga das Galinhas"/>,
        overview:'O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.',
        rating:'5/5'
      },
    ],
    destaque:[
      {
      name:'Capitao Fantastico',
      image:<Pic src={capitaoFantastico} alt ="poster do filme: Capitão-Fantástico"/>,
      overview:'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.',
    }
    ],
    myMovies:[],
    spotlightMovie:[],
    favoriteMovies:[],
  }

  async componentDidMount(){
    const firstMovies = this.state.movies.map((item) => {
      return {
        ...item,
        id: Date.now(),
      };
    });
    this.setState({
      myMovies: firstMovies,
    });
  
    const principalMovie = this.state.destaque.map((item) => {
      return {
        ...item
      };
    });
    this.setState({
      spotlightMovie: principalMovie,
    });
  }

  search = (event) => {
    const {myMovies, movies } = this.state

    if (event.target.value === "") {
        this.setState({
            myMovies: movies
        })
        return myMovies
    }
    const finalMovie = movies.filter((item) => {
        if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
            return true
        }
    })
    this.setState({
        myMovies: finalMovie
    })
}

    render(){
        return(
          <Main>
            <Searching>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              <SearchBar onChange={this.search} value={this.state.movies.name} placeholder= 'Pesquisar'/>
            </Searching>
          <LastMovie>
            {this.state.spotlightMovie.map((item) => (
            <Spotlight>
              <div>
                {item.image}
                <button></button>
              </div>
              <PrincipalInfos>
                <li><LikeBtn><img src={favorite} alt = "botão de filmes favoritos" /></LikeBtn></li>
                <h4>Visto recentemente</h4>
                <li><h1>{item.name}</h1></li>
                <Overview>{item.overview}</Overview>
                <li>Rating</li>
              </PrincipalInfos>
            </Spotlight>
          ))}
          </LastMovie>
          <div>
            <div>
              <h3>Destaques</h3>
            </div>
            <Carousel
            width={"100%"}
            wrapAround={true}
            slidesToShow ={4.5}
            slideWidth={0.2}
            autoplay={true}
            autoplayInterval={2000}
            enableKeyboardControls={true}
            pauseOnHover={true}
            >
            {this.state.myMovies.map((item) => (
              <Exibtion>
                <Ul>
                  <ListFav><LikeBtn><img src={favorite} alt = "botão de filmes favoritos" /></LikeBtn></ListFav>
                  <li>{item.image}</li>
                  <Title>
                    <Principal>
                      <p>{item.name}</p>
                    </Principal>
                    <RatingSection>
                      <h6>{item.rating}</h6>
                      <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                    </RatingSection>
                  </Title>
                  <Overview>{item.overview}</Overview>
                </Ul>
              </Exibtion>
                ))}
            </Carousel>
          </div>
        </Main>
        )
    }
} 