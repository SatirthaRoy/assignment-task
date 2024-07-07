import { Alert, Button, TextField } from "@mui/material"
import { useState } from "react"
import { saveData } from "../utils/Localstorage"
import { useNavigate } from "react-router-dom"


const FirstPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({name: '', phone: '', email: ''})
  const [error, setError] = useState(false);

  const handleClick = () => {
    if(userData.name === '' || userData.phone === '' || userData.email === '') {
      setError(true);
    } else {
      setError(false);
      saveData(userData);
      navigate('/secondpage');
    }
  }

  return (
    <div className="mt-24">
      <form className="flex flex-col justify-center items-center gap-4">
        <TextField required value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})} id="outlined-basic" label="Name" variant="outlined" />
        <TextField required value={userData.phone} onChange={e => setUserData({...userData, phone: e.target.value})} id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField type="email" required value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} id="outlined-basic" label="Email" variant="outlined" />
        <Button onClick={handleClick} variant="contained">Save</Button>
      </form>
      {error && <Alert severity="error">Please fill all the fields</Alert>}
    </div>
  )
}

export default FirstPage