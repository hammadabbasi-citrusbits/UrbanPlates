// // import React from 'react';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';

// // import '../App.css';

// // interface FormValues {
// //   email: string;
// //   password: string;
// // }

// // const LoginForm: React.FC = () => {
// //   const formik = useFormik<FormValues>({
// //     initialValues: {
// //       email: '',
// //       password: ''
// //     },
// //     validationSchema: Yup.object({
// //       email: Yup.string()
// //         .email('Invalid email address')
// //         .required('Email is required'),
// //       password: Yup.string()
// //         .required('Password is required')
// //         .min(8, 'Password must be at least 8 characters')
// //     }),
// //     onSubmit: values => {
// //       console.log(values); // You can replace this with your login logic
// //     }
// //   });

// //   return (
// //     <div className="login-form">
// //       <form onSubmit={formik.handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="text"
// //             id="email"
// //             name="email"
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //             value={formik.values.email}
// //           />
// //           {formik.touched.email && formik.errors.email ? (
// //             <div className="error">{formik.errors.email}</div>
// //           ) : null}
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="password">Password</label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //             value={formik.values.password}
// //           />
// //           {formik.touched.password && formik.errors.password ? (
// //             <div className="error">{formik.errors.password}</div>
// //           ) : null}
// //         </div>

// //         <button type="submit">Login</button>
// //       </form>

// //       <div className="forgot-password">
// //         <a href="#">Forgot password?</a>
// //       </div>
// //     </div>
// //   );
// // };

// //  export default LoginForm


// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useStyles, makeStyles } from '@mui/material/styles';

// interface FormValues {
//   email: string;
//   password: string;
// }

// const useStyles = makeStyles({
//   loginForm: {
//     maxWidth: '400px',
//     margin: '0 auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '5px'
//   },
//   formGroup: {
//     marginBottom: '15px'
//   },
//   forgotPassword: {
//     textAlign: 'right',
//     marginTop: '10px'
//   }
// });

// const LoginForm: React.FC = () => {
//   const classes = useStyles();

//   const formik = useFormik<FormValues>({
//     initialValues: {
//       email: '',
//       password: ''
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email('Invalid email address')
//         .required('Email is required'),
//       password: Yup.string()
//         .required('Password is required')
//         .min(8, 'Password must be at least 8 characters')
//     }),
//     onSubmit: values => {
//       console.log(values); // You can replace this with your login logic
//     }
//   });

//   return (
//     <div className={classes.loginForm}>
//       <form onSubmit={formik.handleSubmit}>
//         <div className={classes.formGroup}>
//           <TextField
//             id="email"
//             name="email"
//             label="Email"
//             variant="outlined"
//             fullWidth
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email && formik.errors.email}
//           />
//         </div>

//         <div className={classes.formGroup}>
//           <TextField
//             id="password"
//             name="password"
//             label="Password"
//             variant="outlined"
//             type="password"
//             fullWidth
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//           />
//         </div>

//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           Login
//         </Button>
//       </form>

//       <div className={classes.forgotPassword}>
//         <a href="#">Forgot password?</a>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
