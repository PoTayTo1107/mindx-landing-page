import { Box, styled } from '@mui/material';

import { Courses, Footer, Header, Howitworks, Intro } from './pages';
import './App.css';

const BlueBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#252B42',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}));

function App() {
    return (
        <Box sx={{ borderRadius: '40px' }}>
            <BlueBox>
                <Header />
                <Intro />
                <Courses />
                <Howitworks />
            </BlueBox>
            <Footer />
        </Box>
    );
}

export default App;
