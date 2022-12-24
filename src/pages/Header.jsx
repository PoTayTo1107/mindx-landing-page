import { Box, Button, styled, Typography } from '@mui/material';

import logo_white from '../assets/logo/logo_white.png';
import Arrow from '../assets/icons/Arrow.png';

const StyledTypo = styled(Typography)(({ theme }) => ({
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: '1px',
    color: '#FFFFFF',
    padding: '14px 0',
    cursor: 'pointer'
}));

const ButtonTypo = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '22px',
    textAlign: 'center',
    letterSpacing: '0.2px',
    color: '#FFFFFF'
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#3649F9',
    padding: '10px 25px',
    '&:hover': { backgroundColor: '#3649F9' },
    borderRadius: '5px',
    height: '42px',
    margin: '5px 0'
}));

const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '19px 85px 19px'
}));

const Header = () => {
    return (
        <MainBox>
            <Box sx={{ paddingLeft: '140px', cursor: 'pointer' }}>
                <img src={logo_white} alt="Logo" width={134} height={52} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '550px', marginRight: '100px' }}>
                <StyledTypo variant="h6">Trang chủ</StyledTypo>
                <StyledTypo variant="h6">Về chúng tôi</StyledTypo>
                <StyledTypo variant="h6">Khoá học</StyledTypo>
                <StyledTypo variant="h6">Liên hệ</StyledTypo>
            </Box>
            <StyledButton>
                <ButtonTypo>Login</ButtonTypo>
                <Box sx={{ paddingLeft: '15px' }}>
                    <img src={Arrow} alt="Arrow" />
                </Box>
            </StyledButton>
        </MainBox>
    );
};

export default Header;
