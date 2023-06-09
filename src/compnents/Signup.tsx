import { useFormik } from 'formik';
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
// import './responsive.css'

const SignupForm = () => {
 
  const validationSchema = yup.object({
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
     phone: yup.string().required('Phone Number is required'),
   zipCode: yup.number().required('Zip Code is required'),
   terms: yup.bool().oneOf([true], 'You must accept the terms and conditions'),
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
     zipCode: '',
      auto_login: true,
      email_optin: true,
     terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const baseUrl = 'https://urban-staging.novadine.com/api/v2';
      const endpoint = '/customers/registration';
      const url = `${baseUrl}${endpoint}`;

      try {

        const apiValues = {...values} as any;
        delete apiValues?.confirmPassword;
        delete apiValues?.zipCode;
        delete apiValues?.terms;
        // console.log({apiValues})

        const response = await axios.post(url, apiValues);
        console.log(response.data);
      } catch (error) {
        alert(error);
      }
    },
  });

  const styling ={
    padding: '2px',
  }

  return (
    
    <div style={{ margin: '9rem', display:"flex", justifyContent:"center" }}>
    <form onSubmit={formik.handleSubmit} style={{width:"75%"}}>
      <Typography variant="h3" 
         style={{ fontSize: "40px", color: "#159349", textAlign: "left", fontFamily:"Bentham",fontWeight: "400"}}>
         <strong>welcome to our table</strong>
      </Typography><br />
      <Typography variant='h5' fontFamily="Bentham" 
         style={{color:"black",clear:"left" ,float:"left"}}>
          already have an account ? 
          <Link to='/login' style={{color:"#159349"}} onClick={() => navigate('/login')}>log in</Link>
      </Typography>
      <TextField
        id="first_name"
        name="first_name"
        label="First Name"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.touched.first_name && Boolean(formik.errors.first_name)}
        helperText={formik.errors.first_name}
        margin="normal"
        style={styling}
        fullWidth
      />
      <TextField

        id="last_name"
        name="last_name"
        label="Last Name"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
        helperText={formik.errors.last_name}
        margin="normal"
        style={styling}
        fullWidth
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.errors.email}
        margin="normal"
        style={styling}
        fullWidth
      />
       <TextField
        id="phone"
        name="phone"
        label="Phone Number"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.errors.phone}
        margin="normal"
        style={styling}
        fullWidth
      />
        <TextField
        id="zipCode"
        name="zipCode"
        label="Zip Code"
        value={formik.values.zipCode}
        onChange={formik.handleChange}
        error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
        helperText={formik.errors.zipCode}
        margin="normal"
        style={styling}
        fullWidth
      />
      <Typography mt={2} mb={2} style={{color:"grey", float:"left"}}>Your Password Must Be 8 Characters.</Typography>
      <TextField
        id="password"
        name="password"
        label="Password"
        type='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={ formik.errors.password}
        margin="normal"
        style={styling}
        fullWidth
      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type='password'
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={formik.touched.confirmPassword && formik.errors.confirmPassword?true:false}
        helperText={ formik.errors.confirmPassword}
        margin="normal"
        style={styling}
        fullWidth
      />
      <FormControlLabel
  control={
    <Checkbox
      id="terms"
      name="terms"
      checked={formik.values.terms}
      onChange={formik.handleChange}
      color='primary'
      style={styling}
    />
  }
  label={
    <Typography style={{ padding:'2px', marginTop:"4px" ,color: 'green', textAlign: 'left' }}>
      Sign up to get Urban Plates news, menu drops & info via email
    </Typography>
  }
    />
    <Typography style={{padding:'2px',color:"black"}}>By creating an account, you accept the<Link to='/'> <u>Terms & Conditions</u></Link> and <Link to='/'><u>Privacy Policy</u></Link>.</Typography>
       <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!formik.isValid || formik.isSubmitting}
          style={{ marginTop: '4rem', backgroundColor:"green" }}
          fullWidth
        >
          Create Account
        </Button>
    </form>
    </div>
  );
};

export default SignupForm;



