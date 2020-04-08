import React from "react";

const Card = ({ id, name, email }) => {
    //const { id, name, email } = props;  Use destructuring directly instead of props
    return ( //Always return one element from a Component
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
          <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
          <div>
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
      </div>
  );
};

export default Card;