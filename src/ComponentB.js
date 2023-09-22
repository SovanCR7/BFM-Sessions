import React from 'react';

function ComponentB(props) {
    const{ text, number } = props.data;

    return (
        <div>
            <h3>Component B</h3>
            <p>text:{text}</p>
            <p>Number: {number}</p>
        </div>
    );
}


export default ComponentB;