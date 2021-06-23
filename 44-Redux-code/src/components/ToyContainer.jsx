import React from 'react';
import ToyCard from './ToyCard'
import { useSelector } from 'react-redux';

const ToyContainer = (props) => {
  // const lecture = useSelector(state => state.lecture)
  // console.log(lecture)
  // console.log(props)
  return(
    <div id="toy-collection">
      {props.toys.map(toy => {return <ToyCard handleLike={props.handleLike} handleDelete={props.handleDelete} key={toy.id} toy={toy}/>})}
    </div>
  );
}

export default ToyContainer;
