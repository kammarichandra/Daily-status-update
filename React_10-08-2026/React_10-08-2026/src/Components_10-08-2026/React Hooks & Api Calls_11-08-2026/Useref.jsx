import { useEffect, useRef } from "react";

function Login() {
  let inputRef = useRef(null);

  let focusInput = () => {

    inputRef.current.focus();

  };

  return (
    
    <div>

      <input ref={inputRef} placeholder="Enter your name" />

      <button onClick={focusInput}> Focus Input </button>

    </div>
  );
}

export default Login;

// useEffect(()=>{

//     function a(){
//         let a1 = {
//             name : "chandra",
//             age : 23
//         }
//     }
//     a()

// },[])