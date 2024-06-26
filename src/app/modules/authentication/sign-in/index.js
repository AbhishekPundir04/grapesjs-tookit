import * as React from 'react';
import * as yup from "yup";
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import "../auth.scss"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, InputAdornment, InputLabel } from '@mui/material';
import { useFormik } from 'formik';
import TextField from "../../../components/TextField/InputField";
import SmsImg from "../../../../assets/images/authIcons/sms.svg"
import PasswordImg from "../../../../assets/images/authIcons/lock.svg"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import usePasswordToggle from '../../../../customHooks/passwordToggle';
import ConstStrings from '../../../../constants/ConstStrings';
import routeName from '../../../../constants/routeConstants';
import { adminLogin, login } from "../../../redux/slices/authSlice"
import Carasol from '../../../components/carousel/Carousel';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        showPassword,
        type,
        handleClickShowPassword,
        handleMouseDownPassword,
    } = usePasswordToggle();

    const validationSchema = yup.object({
        email: yup.string().required("Email is required*").email("Invalid Email"),
        password: yup.string().required("Password is required*"),
    });


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(adminLogin(values), () => {
                navigate("/dashboard")
            });
        },
    });
    function AvoidSpace(event) {
        const key = event.keyCode || event.which;
        const keyChar = String.fromCharCode(key);
        if (/\s/.test(keyChar)) {
            event.preventDefault();
        }
    }
    const { handleSubmit, getFieldProps } = formik;
    return (
        <div className='main_auth_wrapper'>
            <form onSubmit={handleSubmit}>

                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={6}
                        sx={{
                            background: 'rgba(255, 117, 40, 1)'
                        }}
                    >
                        <div className='banner_heading'>
                            <span className='only_header'>Only </span>
                            <span className='menu_header'>Menus</span>
                        </div>
                        <div className='second_banner_container'>
                            <p>Get the most from</p>
                            <p> OnlyMenu</p>
                        </div>
                        <div className='third_banner_heading'>
                            <p>
                                Impress your customers, visitors, engage your
                            </p>
                            <p>employees with beautifully designed contents.</p>
                        </div>
                        <Carasol />
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <div className='form-div-child'>
                                <div className="login-text1">
                                    <h1>{ConstStrings.adminLogIn}</h1>
                                </div>
                                <div className="login-text2">
                                    <h1>{ConstStrings.LoginHeading}</h1>
                                </div>

                                <Grid container spacing={3}>
                                    <Grid item md={12} xs={12}>
                                        <InputLabel className="label-container">
                                            <img src={SmsImg} alt="image" /> <p className="email-id">{ConstStrings.yourEmail}</p>
                                        </InputLabel>
                                        <TextField
                                            type="text"
                                            name="email"

                                            title={ConstStrings.yourEmail}
                                            {...getFieldProps("email")}
                                            onKeyPress={(event) => AvoidSpace(event)}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="error">{formik.errors.email}</div>
                                        ) : null}
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <InputLabel id="label-container" className="label-container">
                                            <img src={PasswordImg} alt="image" />   <p className="password"> {ConstStrings.password}</p>
                                        </InputLabel>
                                        <TextField
                                            name="text"
                                            type={type}
                                            handleClickShowPassword={handleClickShowPassword}
                                            handleMouseDownPassword={handleMouseDownPassword}
                                            // onPaste={onPaste}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            {...getFieldProps("password")}
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className="error">{formik.errors.password}</div>
                                        ) : null}
                                    </Grid>
                                </Grid>
                                <div className="forgot_password">
                                    <Link
                                        href={routeName.FORGOTPASSWORD}
                                        style={{ color: "#FF7528", textDecoration: "none" }}
                                    >
                                        {ConstStrings.ForgotPassword}?
                                    </Link>
                                </div>
                                <div className="login_btn_custom">
                                    <Button type="submit" variant="contained">
                                        {ConstStrings.Login}
                                    </Button>
                                </div>
                                <Link href={routeName.SIGNUP} className="get_started_link">
                                    <div className="get_started">
                                        <span className="member_heading">Not a member yet! </span>
                                        <span className="get_started_heading"> Get started </span>
                                    </div>
                                </Link>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </form>

        </div>
    );
}

export default SignIn;
