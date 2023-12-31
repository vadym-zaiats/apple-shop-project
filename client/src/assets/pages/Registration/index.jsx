import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useFormik } from 'formik';
import { PatternFormat } from 'react-number-format';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import getImg from '../../cloudinary';
import validationSchema from './validation';
import { addCustomer } from '../../api/customer';
import {
  StyleAdvancedImage,
  StyledTypography,
  StyledForm,
  StyledInputBaseLogin,
  StyledButton,
} from '../../themes/themeOrder';

function Registration() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordSecond, setShowPasswordSecond] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
      passwordSecond: '',
      telephone: '',
    },
    validationSchema,
    onSubmit: (values) => {
      addCustomer({
        ...values,
        telephone: values.telephone.replace(/[^\d+]/g, ''),
      });
      navigate(-1);
    },
  });

  return (
    <Container
      component="div"
      sx={{
        display: 'flex',
        padding: { lg: '130px 10px 30px 10px', xs: '80px 10px 30px 10px' },
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
          height: 620,
          margin: 'auto',
          maxWidth: 400,
        }}>
        <Container
          component="div"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <StyledTypography component="h5" variant="h5">
            Registration
          </StyledTypography>
        </Container>
        <Container>
          <StyledForm>
            <StyledInputBaseLogin
              variant="outlined"
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
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
            {formik.touched.firstName && formik.errors.firstName ? (
              <StyledTypography variant="paragraph" component="p">
                {formik.errors.firstName}
              </StyledTypography>
            ) : (
              <StyledTypography variant="paragraph" component="p">
                {' '}
              </StyledTypography>
            )}
          </StyledForm>
          <StyledForm>
            <StyledInputBaseLogin
              variant="outlined"
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
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
            {formik.touched.lastName && formik.errors.lastName ? (
              <StyledTypography variant="paragraph" component="p">
                {formik.errors.lastName}
              </StyledTypography>
            ) : (
              <StyledTypography variant="paragraph" component="p">
                {' '}
              </StyledTypography>
            )}
          </StyledForm>
          <StyledForm>
            <StyledInputBaseLogin
              variant="outlined"
              type="text"
              id="login"
              name="login"
              label="Login"
              onBlur={formik.handleBlur}
              value={formik.values.login}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <LoginIcon style={{ paddingRight: 5, cursor: 'pointer' }} />
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.login && formik.errors.login ? (
              <StyledTypography variant="paragraph" component="p">
                {formik.errors.login}
              </StyledTypography>
            ) : (
              <StyledTypography variant="paragraph" component="p">
                {' '}
              </StyledTypography>
            )}
          </StyledForm>
          <StyledForm>
            <StyledInputBaseLogin
              variant="outlined"
              type="text"
              id="email"
              name="email"
              label="Email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <AlternateEmailIcon
                      style={{ paddingRight: 5, cursor: 'pointer' }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.email && formik.errors.email ? (
              <StyledTypography variant="paragraph" component="p">
                {formik.errors.email}
              </StyledTypography>
            ) : (
              <StyledTypography variant="paragraph" component="p">
                {' '}
              </StyledTypography>
            )}
          </StyledForm>
          <StyledForm>
            <StyledInputBaseLogin
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              label="Password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
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
          <StyledForm>
            <StyledInputBaseLogin
              variant="outlined"
              type={showPasswordSecond ? 'text' : 'password'}
              id="passwordSecond"
              name="passwordSecond"
              label="Repeat password"
              onBlur={formik.handleBlur}
              value={formik.values.passwordSecond}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    {showPasswordSecond ? (
                      <LockOpenIcon
                        style={{ paddingRight: 5, cursor: 'pointer' }}
                        onClick={() => setShowPasswordSecond(false)}
                      />
                    ) : (
                      <LockIcon
                        style={{ paddingRight: 5, cursor: 'pointer' }}
                        onClick={() => setShowPasswordSecond(true)}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.passwordSecond && formik.errors.passwordSecond ? (
              <StyledTypography variant="paragraph" component="p">
                {formik.errors.passwordSecond}
              </StyledTypography>
            ) : (
              <StyledTypography variant="paragraph" component="p">
                {' '}
              </StyledTypography>
            )}
          </StyledForm>
          <StyledForm style={{ padding: '0 5px', textAlign: 'center' }}>
            <PatternFormat
              style={{
                width: '93%',
              }}
              label="Phone"
              format="+380 (##) ## ## ###"
              allowEmptyFormatting
              customInput={StyledInputBaseLogin}
              mask="_"
              id="telephone"
              name="telephone"
              onBlur={formik.handleBlur}
              value={formik.values.telephone}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <LocalPhoneIcon
                      style={{ paddingRight: 5, cursor: 'pointer' }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.telephone && formik.errors.telephone ? (
              <StyledTypography variant="paragraph" component="p">
                {formik.errors.telephone}
              </StyledTypography>
            ) : (
              <StyledTypography variant="paragraph" component="p">
                {' '}
              </StyledTypography>
            )}
          </StyledForm>
          <StyledButton
            variant="contained"
            color="primary"
            disableElevation
            type="submit"
            sx={{ width: '90%' }}>
            Registration
          </StyledButton>
          <Container sx={{ textAlign: 'center' }}>
            Back to <Link to="/login">Login</Link>
          </Container>
        </Container>
      </form>
    </Container>
  );
}

export default Registration;
