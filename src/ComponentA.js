import React from 'react';
import ComponentB from './ComponentB';


function ComponentA() {
    // Define the data you want to pass to Component B
    const dataToPass = {
        text: "This is the first component by Sovan",
        number: 20,
    };

    return (
        <div>
           <h2>Component A</h2>
           <ComponentB data={dataToPass} />
        </div>
    );
}


export default ComponentA;