import React, { useState } from 'react'

function Usecounter() {

    let[count , setcount] = useState(0);

    let inc = ()=>{
        setcount(count+1);
    };
  return (
    <div>
        
    </div>
  )
}

export default Usecounter;

// let hoc = (component)=>{
//   return function(props){
//     return(
//       <div>
//         <component {...props}/>
//       </div>
//     )
//   }
// }
// export default hoc;