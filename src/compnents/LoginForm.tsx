import { Typography, Button, Container, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';


const validationSchema = yup.object({
  username: yup.string().required('username is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      return_details: "true"
        },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        values.return_details = "false";
        const response = await axios.post('https://urban-staging.novadine.com/api/v2/customers/login', values);
        console.log(response.data);
      } catch (error) {
        alert(error);
      }
    },
  });

  const isFormEmpty = formik.values.username === '' || formik.values.password === '';
  const styling ={
    padding: '2px'
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop:"9rem" }}>
      <Container className="max-w-screen-lg" sx={{ mt: 4 }}>
        <Typography variant="h3" fontFamily="Bentham" sx={{ mb: 2, float: "left",color: "green", fontFamily: "urban" }}>
        <strong>log in to urban plates</strong>  
        </Typography>
        <Typography variant='h6' fontFamily="Bentham" sx={{ color: "black", clear: "left", float: "left" }}>
          Don't have an account ?
          <Link  to='/Signup' >
          <Button sx={{ color: "green" }}>JOIN NOW</Button>
          </Link>
        </Typography>
        <form onSubmit={formik.handleSubmit}  >
          <TextField
            id="username"
            name="username"
            label="Username"
            type="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.errors.username}
            style={styling}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password}
            style={styling}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 8, width: "100%", backgroundColor: "green" }}
            disabled={isFormEmpty}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 8 }}>
          <Link to="/forgot-password" style={{color:"green"}}>
            <u>Forgot Password?</u>
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Login;


// sx={{ float: "left", color: "green" }