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
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
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
    margin: '5px 0',
    [theme.breakpoints.down('md')]: {
        margin: '20px'
    }
}));

const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '19px 85px 19px',
    [theme.breakpoints.down('md')]: {
        padding: 0
    }
}));

const LogoBox = styled(Box)(({ theme }) => ({
    paddingLeft: '140px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        padding: '20px'
    }
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '550px',
    marginRight: '100px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginRight: 0
    }
}));

const ArrowBox = styled(Box)(({ theme }) => ({
    paddingLeft: '15px',
    [theme.breakpoints.down('md')]: {
        paddingLeft: '5px'
    }
}));

const Header = () => {
    return (
        <MainBox>
            <LogoBox>
                <img src={logo_white} alt="Logo" width={134} height={52} />
            </LogoBox>
            <ContentBox>
                <StyledTypo variant="h6">Trang chủ</StyledTypo>
                <StyledTypo variant="h6">Về chúng tôi</StyledTypo>
                <StyledTypo variant="h6">Khoá học</StyledTypo>
                <StyledTypo variant="h6">Liên hệ</StyledTypo>
            </ContentBox>
            <StyledButton>
                <ButtonTypo>Login</ButtonTypo>
                <ArrowBox>
                    <img src={Arrow} alt="Arrow" />
                </ArrowBox>
            </StyledButton>
        </MainBox>
    );
};

export default Header;
