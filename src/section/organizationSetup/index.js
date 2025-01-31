import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Card, CardContent, Container, Grid2, Typography } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import OrganizationForm from './form';

const OrganizationSetup = ({ onNext, onBack }) => {
    const [pages, setPages] = useState([
        { id: 1, url: "https://example.com/about", status: "Scraped" },
        { id: 2, url: "https://example.com/contact", status: "Pending" },
        { id: 3, url: "https://example.com/products", status: "Scraped" },
    ]);

    const handleViewChunks = (page) => {
        alert(`Viewing data chunks for ${page.url}`);
    };

    const formik = useFormik({
        initialValues: {
            companyName: "",
            websiteUrl: "",
            description: "",
        },
        validate: (values) => {
            const errors = {};

            if (!values.companyName) {
                errors.companyName = "Company Name is required";
            }
            if (!values.websiteUrl) {
                errors.websiteUrl = "Website Url is required";
            }

            return errors;
        },
        onSubmit: async (values) => {
            console.log("Organization Setup:", values);
            onNext();
        },
    });

    return (
        <>
            <Container maxWidth="sm" sx={{ mb: 2 }}>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    onClick={onBack}
                    startIcon={<ArrowBackIcon />}
                    sx={{
                        border: '1px solid #fff',
                        "&:hover": {
                            background: "#12372A",
                            color: "#ffffff"
                        }
                    }}
                >
                    Back
                </Button>
            </Container>
            <Container maxWidth="sm" sx={{
                background: "#FCFCFC", borderRadius: '40px', padding: 3, mb: 2,
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
                    <OrganizationForm formik={formik} />
                </Box>
            </Container>

            <Container maxWidth="lg" sx={{
                background: "#FCFCFC", borderRadius: '20px', padding: 4,
                '&.MuiContainer-root': {
                    paddingLeft: {
                        xs: 4,
                        md: 6
                    },
                    paddingRight: {
                        xs: 4,
                        md: 6
                    },
                }
            }}>
                <Typography color='#000' fontSize={24} paddingBottom={3} fontWeight={700}>
                    Webpages Detected:
                </Typography>
                <Grid2 container spacing={3}>
                    {pages.map((page) => (
                        <Grid2 key={page.id} size={{ xs: 12, md: 4 }}>
                            <Card sx={{
                                marginBottom: "1rem",
                                padding: '16px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                height: '100%'
                            }}>
                                <CardContent>
                                    <Typography component={Link} href={page.url} target='_blank' color='#000000' fontWeight="normal" fontSize={18}>
                                        URL: {page.url}
                                    </Typography>
                                    <Typography color='#12372A' fontWeight={600} fontSize={16}>
                                        Status: {page.status}
                                    </Typography>

                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleViewChunks(page)}
                                        sx={{
                                            mt: 2,
                                            background: "#ffffff",
                                            color: "#12372A",
                                            textTransform: "capitalize",
                                            padding: "8px 16px 8px 16px",
                                            "&:hover": {
                                                background: "#12372A",
                                                color: "#ffffff"
                                            }
                                        }}
                                    >
                                        View Data Chunks
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </>
    )
}

export default OrganizationSetup