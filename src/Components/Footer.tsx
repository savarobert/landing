import { Box, Typography, Stack, Link } from "@mui/material";
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

function Footer() {

    const date = new Date().getFullYear();

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} direction="row" justifyContent="center">
                <Link href="https://github.com/savarobert" color="inherit"><GitHub/></Link>
                <Link href="https://www.linkedin.com/in/savarobert" color="inherit"><LinkedIn/></Link>
                <Link href="mailto:contact@robertsava.com" color="inherit"><Email/></Link>

                </Stack>
                <Typography padding={2}>
                    © {date} Robert Sava
                </Typography>
            </Box>
        </>
    );

}

export default Footer