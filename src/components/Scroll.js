import React from 'react';


const Scroll = (props) => {
return <div style={{overflowY:'scroll', height: '900px'}}>
    {props.children}
</div>;
};

export default Scroll;

/**
 * children - scroll can use children as a way to render
 * its children.
 * using (props.children) we can create components that wrap
 * other components
 * 
 * using style={{}} we can use common css commands
 */