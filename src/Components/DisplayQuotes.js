import React from 'react';

function DisplayQuotes(props){
    
    return(
        <div className='DisplayQuotes'>
        <img src={props.image} alt={props.character}/>
            <h1>{props.character}</h1>
                <p>{props.quote}</p>

        </div>
    )
}

export default DisplayQuotes;