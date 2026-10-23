import { useContext } from "react";
import { EmpContext } from "../Context/EmpContext";


function useEmp() {
  return useContext(EmpContext);
}

export default useEmp;