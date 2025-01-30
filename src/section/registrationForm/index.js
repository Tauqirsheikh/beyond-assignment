import { Box, Container } from '@mui/material';
import React from 'react'
import { useFormik } from 'formik';
import RegistrationForm from './form';

const RegistrationSection = ({ onNext }) => {

    const handleGoogleSuccess = (response) => {
        console.log("Google Login Success:", response.profileObj);
        onNext();
    };

    const handleGoogleFailure = (response) => {
        console.error("Google Login Failed:", response);
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validate: (values) => {
            const errors = {};
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

            if (!values.name) {
                errors.name = "Name is required";
            }

            if (!values.email) {
                errors.email = "Email is required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }

            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length > 10) {
                errors.password = "Password must be less than 10 characters";
            } else if (!passwordRegex.test(values.password)) {
                errors.password =
                    "Must Contain 10 Characters, One Uppercase, One Lowercase, One Number and one special case Character";
            }
            return errors;
        },
        onSubmit: async (values) => {
            console.log("User Registration:", values);
            onNext();
        },
    });

    return (
        <Container maxWidth="sm" sx={{
            background: "#FCFCFC", borderRadius: '40px', padding: 3,
            '&.MuiContainer-root': {
                paddingLeft: {
                    xs: 4,
                    md: 5
                },
                paddingRight: {
                    xs: 4,
                    md: 5
                },
            }
        }}>
            <Box component="form" noValidate onSubmit={formik.handleSubmit}>
                <RegistrationForm
                    formik={formik}
                    handleGoogleSuccess={handleGoogleSuccess}
                    handleGoogleFailure={handleGoogleFailure}
                />
            </Box>
        </Container>
    )
}

export default RegistrationSection