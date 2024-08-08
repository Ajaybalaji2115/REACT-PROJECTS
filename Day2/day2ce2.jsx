import React from 'react';
class Webpage extends React.Component
{
    
    render(){
        const h1Style=
            {
        color :'green'
            }
            const pstyle={
                color:'darkblue',
                fontsize : '16',

            }
            const divstyle={
                backgroundColor : 'darkblue',//camel case
                padding : '10',
                border : '1',
                borderradius : '5' //camel case
            }
        return(
            
            <div style={divstyle}>
<h1 style={h1Style}>Inline Style in JSX Example</h1>
<p style={pstyle}>This is a paragraph with inline styles applied</p>
            </div>
        )
    }
}
export default Webpage;