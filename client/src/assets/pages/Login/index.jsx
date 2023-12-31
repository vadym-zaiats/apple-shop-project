import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useFormik } from 'formik';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import getImg from '../../cloudinary';
import validationSchema from './validation';
import {
  StyledTypography,
  StyledForm,
  StyledInputBaseLogin,
  StyledButton,
  StyleAdvancedImage,
} from '../../themes/themeOrder';
import { login } from '../../redux/slices/loginSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const auth = useSelector((state) => state.user.user);
  const fromPage =
    location.state && location.state.from && location.state.from.pathname;
  const loginError = useSelector((state) => state.login.error);
  const isLoading = useSelector((state) => state.login.isLoading);

  useEffect(() => {
    if (auth && fromPage === '/user') {
      navigate('/');
    } else if (auth && fromPage !== '/user') {
      navigate(-1);
    }
  }, [auth]);

  const formik = useFormik({
    initialValues: {
      loginOrEmail: '',
      password: '',
    },
    validationSchema,
    onSubmit: ({ loginOrEmail, password }) => {
      dispatch(login({ loginOrEmail, password }));
    },
  });

  return (
    <Container
      component="div"
      sx={{
        height: '780px',
        display: 'flex',
        padding: '130px 10px 30px 10px!important',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <StyleAdvancedImage
        cldImg={getImg.image('login/gktl6heq6nphhxarlga5.png')}
        alt="loginImage"
      />
      <form
        onSubmit={formik.handleSubmit}
        style={{
          padding: '8% 0',
          height: 600,
          margin: 'auto',
          maxWidth: 400,
        }}>
        <Container
          component="div"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 50,
          }}>
          <StyledTypography
            component="h5"
            variant="h5"
            sx={{ paddingLeft: '0!important' }}>
            Login
          </StyledTypography>
        </Container>
        <Container>
          <StyledForm>
            <StyledInputBaseLogin
              type="text"
              variant="outlined"
              id="loginOrEmail"
              name="loginOrEmail"
              label="Login Or Email"
              onBlur={formik.handleBlur}
              value={formik.values.loginOrEmail}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon
                      style={{ paddingRight: 5, cursor: 'pointer' }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.loginOrEmail && formik.errors.loginOrEmail ? (
              <StyledTypography variant="paragraph" component="p">
                {formik.errors.loginOrEmail}
              </StyledTypography>
            ) : (
              <StyledTypography variant="paragraph" component="p">
                {' '}
              </StyledTypography>
            )}
          </StyledForm>
          <StyledForm>
            <StyledInputBaseLogin
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              variant="outlined"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    {showPassword ? (
                      <LockOpenIcon
                        style={{ paddingRight: 5, cursor: 'pointer' }}
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <LockIcon
                        style={{ paddingRight: 5, cursor: 'pointer' }}
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
              {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
              {isLoading && <div style={{ color: 'red' }}>...LOADING...</div>}
            </Container>
            {formik.touched.password && formik.errors.password ? (
              <StyledTypography variant="paragraph" component="p">
                {formik.errors.password}
              </StyledTypography>
            ) : (
              <StyledTypography variant="paragraph" component="p">
                {' '}
              </StyledTypography>
            )}
          </StyledForm>
        </Container>
        <StyledButton
          variant="contained"
          color="primary"
          disableElevation
          type="submit"
          sx={{ width: '80%' }}>
          Login
        </StyledButton>
        <Container sx={{ textAlign: 'center', padding: '0!important' }}>
          Don&apos;t have an account yet?{' '}
          <Link to="/registration">Register Now</Link>
        </Container>
      </form>
    </Container>
  );
}

export default Login;
