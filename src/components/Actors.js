import React from 'react';
import { actors } from '../data';
import UUID from "uuid"
//
// const Actors = () => {
//
// handleActors = () => {
//   return actors.map(actor=>{
//     return (<div className="actor"><h1>Name: {actor.name}</h1></div>)
//   })
// }
//
//   console.log(actors)
//   return (
//     <div>
//     <h1>Actors Page</h1>
//     </div>
//   );
// };
//
// export default Actors;

 export default class Actors extends React.Component {
   listMovies = (movies) => {
     return movies.map(movie=>{
       return(<ul key={UUID()}>
         <li>{movie}</li>
       </ul>)
     })
   }
   handleActors = () => {
  return actors.map(actor=>{
       return (<div className="actor" key={UUID()}><h2>Name: {actor.name}</h2>
       {this.listMovies(actor.movies)}
       </div>)
     })
   }
render() {
return (
  <div>
<h1>Actors Page</h1>
{this.handleActors()}
</div> )
 }
 }
