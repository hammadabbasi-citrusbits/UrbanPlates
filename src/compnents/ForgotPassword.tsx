import { Typography, Button, Container, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  const formik = useFormik({
    initialValues: {
      email: '',
      reset: true
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const apiUrl = 'https://urban-staging.novadine.com/api/v2/customers/password';
        const response = await axios.post(`${apiUrl}`, values);
        console.log(response.data);
      } catch (error) {
        alert(error);
      }
    },
  });

  const isFormEmpty = formik.values.email === '';

  return (
    <div style={{ display: 'flex', width:"100%" }}>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" fontFamily="Bentham" sx={{ mb: 2, float: 'left', color: 'green', fontFamily: 'urban' }}>
          <strong>Forgot Password</strong>
        </Typography>
        <form onSubmit={formik.handleSubmit} >
          <TextField
            
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.errors.email}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 8, width: '100%', backgroundColor: 'green' }}
            disabled={isFormEmpty}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ForgotPassword;
