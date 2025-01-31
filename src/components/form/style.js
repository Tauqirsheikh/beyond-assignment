import { FormControl, styled } from "@mui/material";

export const FormInputField = styled(FormControl)(({ }) => ({
    ".MuiOutlinedInput-root": {
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #12372A",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #12372A",
        },
    },
    ".MuiOutlinedInput-notchedOutline": {
        borderWidth: 1,
    },
}));