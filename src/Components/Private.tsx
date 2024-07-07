import { Navigate } from "react-router-dom";
import { getData } from "../utils/Localstorage"

const Private = ({children}:{children: any}) => {
  const obj:any = getData();
  if(obj) {
    console.log(obj);
    return children;
  } else {
    alert('Enter Your Details first.');
    return <Navigate to='/'/>
  }
}

export default Private