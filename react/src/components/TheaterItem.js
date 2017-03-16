import React from 'react';

const TheaterListItem = (props) => {

  return(
    <div className="list-item">
      <h4><a href={`https://localhost:3000/theaters/` + props.id}>{props.name}</a> | added by: {props.creator} </h4>
    </div>
  )
}

export default TheaterListItem;
