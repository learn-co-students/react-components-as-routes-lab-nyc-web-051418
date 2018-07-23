import React from 'react';
import { directors } from '../data';
import UUID from "uuid"
// const Directors = () => {
//   return (
//     <div>
//       {/*{code here}*/}
//     </div>
//   );
// }
//
// export default Directors



export default class Directors extends React.Component {
  listMovies = (movies) => {
    return movies.map(movie=>{
      return(<ul key={UUID()}>
        <li>{movie}</li>
      </ul>)
    })
  }
  handleDirectors = () => {
 return directors.map(director=>{
      return (<div key={UUID()}><h2>Name: {director.name}</h2>
      {this.listMovies(director.movies)}
      </div>)
    })
  }
render() {
return (
 <div>
<h1>Directors Page</h1>
{this.handleDirectors()}
</div> )
}
}
