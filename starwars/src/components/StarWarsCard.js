import React from 'react'
import axios from 'axios'
import StarWarsFilms from './StarWarsFilms'
import styled from 'styled-components'


const CardContainer = styled.div`
     background-color:	#FFD9AD;
     border:1px solid white;
     width:300px;
     border-radius:10px;
`



function StarWarsCard(props){

     const name = props.item.name
     const gender = props.item.gender
     const birthYear = props.item.birth_year
     const films = props.item.films


     const kevin = []
      films.map(item => {
          return axios.get(`${item}`)
          .then(response => {
               kevin.push(response.data)
          })
     })
     // console.log(kevin)


     return(
          <div>
               <StarWarsFilms film={kevin}/>
          <CardContainer>
               <h2>{name}</h2>
               <p>Gender: {gender}</p>
               <p>Birth Year: {birthYear}</p>
          </CardContainer>
          </div>
     )
}
export default StarWarsCard