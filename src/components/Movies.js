import React from 'react';
import { movies } from '../data';
import UUID from "uuid"

// const Movies = () => {
//   return (
//     <div>
//         {/*{code here}*/}
//     </div>
//   );
// };
//
// export default Movies;

export default class Movies extends React.Component {
  listGenres = (genres) => {
    return genres.map(genre=>{
      return(<ul key={UUID()}>
        <li>{genre}</li>
      </ul>)
    })
  }
  handleMovies = () => {
 return movies.map(movie=>{
      return (<div key={UUID()}><h2>Name: {movie.title}</h2>
      <span>Time: {movie.time}</span>
      <br/>
      <p>Genres:</p>
      {this.listGenres(movie.genres)}
      </div>)
    })
  }
render() {
return (
 <div>
<h1>Movies Page</h1>
{this.handleMovies()}
</div> )
}
}
