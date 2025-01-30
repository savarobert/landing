import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import avatarLogo from '../assets/avatar.jpeg'

function Header() {

    return (
        <>
            <Grid container spacing={2} minHeight={160} justifyContent="center" alignItems="center">
                
                <Grid size={10}><h1>Robert Sava</h1></Grid>
                <Grid display="flex" justifyContent="center" alignItems="right" size={2}>
                    <Avatar src={avatarLogo} sx={{ width: 48, height: 48 }}/>
                </Grid>
            </Grid>

        </>
    );

}

export default Header