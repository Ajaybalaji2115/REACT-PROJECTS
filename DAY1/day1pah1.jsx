import React from 'react';
function Team()
{
    return(
        <div>
            <p>This is Team Functional Component</p>
        </div>
    )
}
const World=()=>
{
    return(

        <Team/>
   
    )
 
}
export default World;