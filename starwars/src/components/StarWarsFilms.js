import React from 'react'


function StarWarsFilms(props){
     // console.log(starWars)

console.log(props.film)

     // const episode = props.filmData.episode_id
     // const director = props.filmData.director
     // const title = props.filmData.title
     // const releaseDate = props.filmData.release_date


     return(
          <>
          <div>{props.film}</div>
          </>
     )
}
export default StarWarsFilms