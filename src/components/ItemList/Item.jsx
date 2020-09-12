import React from 'react';

function Item(props) {
  return (
 <div id={props.id}> {props.name} </div>
  )
};

export default Item; 