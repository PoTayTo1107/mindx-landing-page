import { Box, Button, Card, CardContent, Grid, styled, Typography } from '@mui/material';

import img2 from '../assets/imgs/2.png';
import img3 from '../assets/imgs/3.png';
import img4 from '../assets/imgs/4.png';
import friends from '../assets/icons/Friends.png';
import time from '../assets/icons/Time.png';

const courses = [
    { title: 'Lập trình Python', time: '4 tiết', img: img2, id: '0' },
    { title: 'Khoa học máy tính 101', time: '4 months', img: img3, id: '1' },
    { title: 'Lập trình Python: Ứng dụng thực tế', time: '4 months', img: img4, id: '2' }
];

const StyledGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '348px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '40px'
    }
}));

const StyledCard = styled(Card)(({ theme }) => ({
    height: '400px',
    width: '270px',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s ease-in-out',
    cursor: 'pointer',
    borderRadius: '20px',
    '&:hover': {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
        transform: 'scale(1.05)',
        transition: '250ms all ease-in-out'
    },
    boxShadow:
        '0 0 0 1px rgb(53 72 91 / 4%), 0 2px 2px rgb(0 0 0 / 0%), 0 4px 4px rgb(0 0 0 / 1%), 0 10px 8px rgb(0 0 0 / 2%), 0 15px 15px rgb(0 0 0 / 2%), 0 30px 30px rgb(0 0 0 / 2%), 0 70px 65px rgb(0 0 0 / 3%)',
    [theme.breakpoints.down('md')]: {
        marginTop: '40px'
    }
}));

const ImgBox = styled(Box)(({ theme }) => ({
    transition: '2.5s all ease-in-out',
    padding: '15px',
    paddingBottom: 0
}));

const HeaderTypo = styled(Typography)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '44px',
    lineHeight: '56px',
    letterSpacing: '0.2px',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        marginLeft: '20px'
    }
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: '15px 20px',
    borderRadius: '12px',
    marginTop: '40px',
    '&:hover': { backgroundColor: '#fff' },
    width: '210px',
    height: '60px',
    cursor: 'pointer',
    border: 'solid 2px #3649F9',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const OutlinedTypo = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '22px',
    textAlign: 'center',
    color: '#3649F9'
}));

const TitleTypo = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '26px',
    letterSpacing: '0.2px',
    marginBottom: '33px',
    height: '52px'
}));

const IconTypo = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#666'
}));

const Button1 = styled(Button)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: '15px 20px',
    borderRadius: '6px',
    marginTop: '27px',
    '&:hover': { backgroundColor: '#fff' },
    width: '240px',
    height: '40px',
    cursor: 'pointer',
    border: 'solid 1px #3649F9',
    textTransform: 'none',
    fontWeight: 400
}));

const Button2 = styled(Button)(({ theme }) => ({
    backgroundColor: '#3649F9',
    padding: '15px 20px',
    borderRadius: '6px',
    marginTop: '27px',
    '&:hover': { backgroundColor: '#3649F9' },
    width: '240px',
    height: '40px',
    cursor: 'pointer',
    color: '#fff',
    border: 'solid 1px #3649F9',
    textTransform: 'none',
    fontWeight: 400
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 250px 60px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const MainBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '30px 0'
    }
}));

const RotateBox = styled(Box)(({ theme }) => ({
    height: '880px',
    width: '1800px',
    transform: 'rotate(8deg)',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 880,
    left: -80,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Courses = () => {
    return (
        <MainBox>
            <RotateBox />
            <ContentBox>
                <HeaderTypo>
                    Một số khoá học <br /> mẫu của chúng tôi
                </HeaderTypo>
                <OutlinedButton>
                    <OutlinedTypo>Xem các khoá học</OutlinedTypo>
                </OutlinedButton>
            </ContentBox>

            <StyledGrid container>
                {courses.map((course) => (
                    <StyledCard id={course.id} sx={course.id === '1' ? { margin: { md: '0 105px', sm: '0' } } : {}}>
                        <ImgBox>
                            <img width={240} height={174} src={course.img} alt="img" />
                        </ImgBox>
                        <CardContent>
                            <TitleTypo>{course.title}</TitleTypo>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ display: 'flex', paddingRight: '30px' }}>
                                    <Box sx={{ paddingTop: '3px', paddingRight: '4px' }}>
                                        <img width={18.33} height={13.33} src={friends} alt="icon" />
                                    </Box>
                                    <IconTypo>1,45,690</IconTypo>
                                </Box>

                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ paddingTop: '2px', paddingRight: '4px' }}>
                                        <img width={16.67} height={16.67} src={time} alt="icon" />
                                    </Box>
                                    <IconTypo>{course.time}</IconTypo>
                                </Box>
                            </Box>
                            {course.id % 2 === 0 ? <Button1>Xem khoá học</Button1> : <Button2>Xem khoá học</Button2>}
                        </CardContent>
                    </StyledCard>
                ))}
            </StyledGrid>
        </MainBox>
    );
};

export default Courses;
