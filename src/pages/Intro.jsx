import { Box, Button, styled, Typography } from '@mui/material';

import avatar from '../assets/imgs/1.png';
import graph from '../assets/icons/Graph.png';

const Typo1 = styled(Typography)(({ theme }) => ({
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '1px',
    color: '#FFFFFF',
    marginBottom: '15px'
}));

const Typo2 = styled(Typography)(({ theme }) => ({
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '58px',
    lineHeight: '80px',
    letterSpacing: '3px',
    color: '#FFFFFF',
    margin: '15px 0'
}));

const Typo3 = styled(Typography)(({ theme }) => ({
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '1px',
    color: '#FFFFFF',
    margin: '15px 0'
}));

const Typo4 = styled(Typography)(({ theme }) => ({
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '1px',
    color: '#FFFFFF',
    margin: '15px 0',
    textTransform: 'none'
}));

const Typo5 = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '58px',
    lineHeight: '40px',
    letterSpacing: '3.2px',
    color: '#000',
    marginLeft: '50px',
    zIndex: 4
}));

const Typo6 = styled(Typography)(({ theme }) => ({
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '40px',
    letterSpacing: '5px',
    color: '#000',
    textTransform: 'uppercase',
    marginRight: '42px',
    zIndex: 4
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#3649F9',
    padding: '20px 30px',
    borderRadius: '5px',
    margin: '5px 0',
    marginRight: '10px',
    color: '#fff',
    '&:hover': { backgroundColor: '#3649F9' },
    width: '210px',
    height: '52px',
    cursor: 'pointer'
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#252B42',
    padding: '15px 40px',
    borderRadius: '5px',
    margin: '5px 0',
    color: '#fff',
    '&:hover': { backgroundColor: '#252B42' },
    width: '210px',
    height: '52px',
    cursor: 'pointer',
    border: 'solid 1px #3649F9'
}));

const SplashBox1 = styled(Box)(({ theme }) => ({
    width: '450px',
    height: '400px',
    position: 'absolute',
    top: '300px',
    right: '280px',
    backgroundColor: '#fff',
    zIndex: 1,
    borderRadius: '250px 750px 250px 750px / 750px 250px 750px 250px',
    animation: 'wobble1 7s ease-in-out alternate infinite',
    '@keyframes wobble1': {
        '0%': {
            borderRadius: '35% 65% 51% 49% / 44% 40% 60% 56%'
        },
        '100%': {
            borderRadius: '68% 32% 47% 53% / 34% 49% 51% 66%'
        }
    }
}));

const SplashBox2 = styled(Box)(({ theme }) => ({
    width: '450px',
    height: '400px',
    position: 'absolute',
    top: '300px',
    right: '160px',
    backgroundColor: '#fcc0ad',
    zIndex: 1,
    borderRadius: '250px 750px 250px 750px / 750px 250px 750px 250px',
    animation: 'wobble2 7s ease-in-out alternate infinite',
    '@keyframes wobble2': {
        '0%': {
            borderRadius: '38% 62% 47% 53% / 68% 49% 51% 32%'
        },
        '100%': {
            borderRadius: '68% 32% 63% 37% / 41% 67% 33% 59%'
        }
    }
}));

const ContentBox = styled(Box)(({ theme }) => ({
    width: '440px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '220px',
    marginBottom: '30px'
}));

const AvaBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '450px',
    height: '150px',
    position: 'absolute',
    top: '560px',
    right: '200px',
    backgroundColor: '#fff',
    borderRadius: '30px',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 3
}));

const Intro = () => {
    return (
        <Box sx={{ height: '900px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '700px' }}>
                <ContentBox>
                    <Typo1>Đào tạo trực tuyến cùng MindX</Typo1>
                    <Typo2>Cơ hội đào tạo tốt nhất</Typo2>
                    <Typo3>Hãy đăng nhập để tham gia khoá học của chúng tôi</Typo3>
                    <Box sx={{ marginTop: '15px' }}>
                        <StyledButton>
                            <Typo4>Tham gia đào tạo</Typo4>
                        </StyledButton>
                        <OutlinedButton>
                            <Typo4>Tìm hiểu thêm</Typo4>
                        </OutlinedButton>
                    </Box>
                </ContentBox>

                <SplashBox1 />
                <SplashBox2 />

                <Box sx={{ marginTop: '40px', zIndex: 2 }}>
                    <img src={avatar} alt="Avatar" height={480} />
                </Box>

                <AvaBox>
                    <Typo5>199+</Typo5>
                    <Typo6>
                        Học viên đã <br /> hoàn thành <br /> khoá học
                    </Typo6>
                    <Box
                        sx={{
                            position: 'absolute',
                            margin: '0 40px 20px'
                        }}>
                        <img src={graph} alt="Graph" />
                    </Box>
                </AvaBox>
            </Box>
        </Box>
    );
};

export default Intro;
