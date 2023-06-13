import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoggedIn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    navigate('/login');
  };

  const handleMainPage = () => {
    navigate('/main');
  };

  return (
    <div>
      <Button onClick={handleLogout} style={{backgroundColor:"green", color:"white"}}>Log Out</Button>
      <Button onClick={handleMainPage}  style={{backgroundColor:"green", color:"white"}}>Main Page</Button>
    </div>
  );
};

export default LoggedIn;
