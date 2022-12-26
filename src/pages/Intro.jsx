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
    margin: '15px 0',
    [theme.breakpoints.down('md')]: {
        fontSize: '50px'
    }
}));

const Typo3 = styled(Typography)(({ theme }) => ({
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '1px',
    color: '#FFFFFF',
    margin: '15px 0',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px'
    }
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
    zIndex: 4,
    [theme.breakpoints.down('md')]: {
        letterSpacing: 0,
        fontSize: '50px'
    }
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
    zIndex: 4,
    [theme.breakpoints.down('md')]: {
        letterSpacing: 0,
        fontSize: '16px'
    }
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
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        width: '40%',
        padding: '20px'
    }
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
    border: 'solid 1px #3649F9',
    [theme.breakpoints.down('md')]: {
        width: '40%',
        padding: '20px'
    }
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
    },
    [theme.breakpoints.down('md')]: {
        top: '700px',
        right: 40,
        width: '80%'
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
    },
    [theme.breakpoints.down('md')]: {
        top: '700px',
        right: 20,
        width: '80%'
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
    zIndex: 3,
    [theme.breakpoints.down('md')]: {
        top: '1000px',
        right: 30,
        width: '80%'
    }
}));

const MainBox = styled(Box)(({ theme }) => ({
    height: '900px',
    [theme.breakpoints.down('md')]: {
        margin: '0 20px',
        marginTop: '200px',
        width: '100%'
    }
}));

const AvatarBox = styled(Box)(({ theme }) => ({
    marginTop: '40px',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
        margin: 0
    }
}));

const StatBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    margin: '0 40px 20px',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
        margin: 0
    }
}));

const DivBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    height: '700px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    }
}));

const ButtonBox = styled(Box)(({ theme }) => ({
    marginTop: '15px'
}));

const Intro = () => {
    return (
        <MainBox>
            <DivBox>
                <ContentBox>
                    <Typo1>Đào tạo trực tuyến cùng MindX</Typo1>
                    <Typo2>Cơ hội đào tạo tốt nhất</Typo2>
                    <Typo3>Hãy đăng nhập để tham gia khoá học của chúng tôi</Typo3>
                    <ButtonBox>
                        <StyledButton>
                            <Typo4>Tham gia đào tạo</Typo4>
                        </StyledButton>
                        <OutlinedButton>
                            <Typo4>Tìm hiểu thêm</Typo4>
                        </OutlinedButton>
                    </ButtonBox>
                </ContentBox>

                <SplashBox1 />
                <SplashBox2 />

                <AvatarBox>
                    <img src={avatar} alt="Avatar" height={480} />
                </AvatarBox>

                <AvaBox>
                    <Typo5>199+</Typo5>
                    <Typo6>
                        Học viên đã <br /> hoàn thành <br /> khoá học
                    </Typo6>
                    <StatBox>
                        <img src={graph} alt="Graph" />
                    </StatBox>
                </AvaBox>
            </DivBox>
        </MainBox>
    );
};

export default Intro;
