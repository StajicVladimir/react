import React from 'react';

const MyParagraph = props => {
    console.log("MyParagraph Component")
    return <p>{props.children}</p>
};

export default MyParagraph;