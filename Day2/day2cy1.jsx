import React from 'react';

const containerStyle = {
    height: '500px',
    width: '500px',
    position: 'absolute',
    backgroundColor: 'lightskyblue',
    textAlign: 'center',
    top: '25%',
    left: '35%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc', // Optional, for visual aid
};

const imageStyle = {
    height: '350px',
    width: '350px',
    verticalAlign: 'middle',
    backgroundColor: 'lightskyblue',
    textAlign: 'center',
};

const Smile = () => {
    return (
        <div style={containerStyle}>
            <h1>Smile Component</h1>
            <h6>It is a functional component</h6>
            <img 
                style={imageStyle} 
                src="https://static.vecteezy.com/system/resources/previews/003/660/834/original/happy-smile-emoticon-expression-free-vector.jpg" 
                alt="Happy Smile Emoticon"
            />
        </div>
    );
};

export default Smile;
