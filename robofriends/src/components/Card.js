import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='pic' src= {`https://robohash.org/${props.id}?100x100`}/>
            <div>
              <h2> {props.name} </h2> 
                <p>{props.email}</p>
            </div>
        </div>
    );
}


export default Card;


/*
using destructor

const Card = (props) => {
    const {name,email,id} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='photo' src='https://robohash.org/test?20x20'/>
            <div>
              <h2> {name} </h2> 
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;



*/


/*
using destructor

const Card = ({name,email,id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='photo' src='https://robohash.org/test?20x20'/>
            <div>
              <h2> {name} </h2> 
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;



*/