import React from 'react'
import { LoadingButton } from '@mui/lab'
import { Box, Grid2, Typography } from '@mui/material'
import { PasswordBox, TextBox } from '@/components/form'

const OrganizationForm = ({ formik }) => {
    return (
        <>
            <Typography textAlign="center" color='#000' fontSize={24} paddingBottom={3} fontWeight={700}>
                Setup Organization
            </Typography>
            <Grid2 container spacing={1}>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Typography color='#12372A' fontWeight={600} fontSize={14}>
                        Company Name
                    </Typography>
                    <TextBox
                        fullWidth
                        name="companyName"
                        placeholder="Enter Your Company Name"
                        size="small"
                        InputProps={{ disableUnderline: true }}
                        onChange={(e) => {
                            formik.setFieldValue("companyName", e.target.value.trimStart());
                        }}
                        value={formik?.values?.companyName}
                        helperText={formik.touched.companyName && formik.errors.companyName}
                        error={formik.touched.companyName && formik.errors.companyName}
                        required
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Typography color='#12372A' fontWeight={600} fontSize={14}>
                        Website Url
                    </Typography>
                    <TextBox
                        fullWidth
                        name="websiteUrl"
                        placeholder="Enter Your Website Url"
                        size="small"
                        InputProps={{ disableUnderline: true }}
                        onChange={formik.handleChange}
                        value={formik?.values?.websiteUrl}
                        helperText={formik.touched.websiteUrl && formik.errors.websiteUrl}
                        error={formik.touched.websiteUrl && formik.errors.websiteUrl}
                        required
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <Typography color='#12372A' fontWeight={600} fontSize={14}>
                        Description
                    </Typography>
                    <TextBox
                        fullWidth
                        name="description"
                        placeholder="Description"
                        size="small"
                        rows={4}
                        multiline
                        InputProps={{ disableUnderline: true }}
                        onChange={formik.handleChange}
                        value={formik?.values?.description}
                        helperText={formik.touched.description && formik.errors.description}
                        error={formik.touched.description && formik.errors.description}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <LoadingButton
                        variant="contained"
                        type='submit'
                        loading={formik.isSubmitting}
                        sx={{
                            background: "#12372A",
                            color: "#ffffff",
                            padding: "8px 16px 8px 16px",
                            "&:hover": {
                                background: "#12372A",
                                color: "#ffffff"
                            }
                        }}
                    >
                        Submit
                    </LoadingButton>
                </Grid2>
            </Grid2>
        </>
    )
}

export default OrganizationForm