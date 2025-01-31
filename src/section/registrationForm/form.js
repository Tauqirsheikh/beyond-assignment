import { PasswordBox, TextBox } from '@/components/form';
import { LoadingButton } from '@mui/lab';
import { Divider, Grid2, Typography } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';

const RegistrationForm = ({ formik, handleGoogleSuccess, handleGoogleFailure }) => {
    return (
        <>
            <Typography textAlign="center" color='#000' fontSize={24} paddingBottom={3} fontWeight={700}>
                User Registration
            </Typography>
            <Grid2 container spacing={1}>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Typography color='#12372A' fontWeight={600} fontSize={14}>
                        Name
                    </Typography>
                    <TextBox
                        fullWidth
                        name="name"
                        placeholder="Enter your name"
                        size="small"
                        InputProps={{ disableUnderline: true }}
                        onChange={(e) => {
                            formik.setFieldValue("name", e.target.value.trimStart());
                        }}
                        value={formik?.values?.name}
                        helperText={formik.touched.name && formik.errors.name}
                        error={formik.touched.name && formik.errors.name}
                        required
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Typography color='#12372A' fontWeight={600} fontSize={14}>
                        Email
                    </Typography>
                    <TextBox
                        fullWidth
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        size="small"
                        InputProps={{ disableUnderline: true }}
                        onChange={formik.handleChange}
                        value={formik?.values?.email}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && formik.errors.email}
                        required
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Typography color='#12372A' fontWeight={600} fontSize={14}>
                        Password
                    </Typography>
                    <PasswordBox
                        fullWidth
                        name="password"
                        size="small"
                        placeholder="Password"
                        value={formik?.values?.password}
                        onChange={(e) => {
                            formik.setFieldValue(
                                "password",
                                e.target.value.trim().replace(" ", "")
                            );
                        }}
                        error={formik.touched.password && formik.errors.password}
                        helperText={formik.touched.password && formik.errors.password}
                        required
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <LoadingButton
                        variant="contained"
                        type='submit'
                        fullWidth
                        loading={formik.isSubmitting}
                        sx={{
                            mt: 1,
                            background: "#12372A",
                            color: "#ffffff",
                            textTransform: "capitalize",
                            "&:hover": {
                                background: "#12372A",
                                color: "#ffffff"
                            }
                        }}
                    >
                        Register
                    </LoadingButton>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Divider>Or</Divider>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <GoogleLogin
                        text='continue_with'
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleFailure}
                    />
                </Grid2>
            </Grid2>
        </>
    )
}

export default RegistrationForm