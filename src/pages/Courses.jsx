import { Box, Button, Card, CardContent, CardMedia, Grid, styled, Typography } from '@mui/material';

import img2 from '../assets/imgs/2.png';
import img3 from '../assets/imgs/3.png';
import img4 from '../assets/imgs/4.png';

const courses = [
    { title: 'Lập trình Python', time: '4 tiết', img: img2 },
    { title: 'Khoa học máy tính 101', time: '4 months', img: img3 },
    { title: 'Lập trình Python: Ứng dụng thực tế', time: '4 months', img: img4 }
];

const StyledGrid = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const StyledCard = styled(Card)(({ theme }) => ({
    height: '390px',
    width: '270px',
    margin: '0 52.5px',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s ease-in-out',
    borderRadius: '20px',
    '&:hover': {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
        transform: 'scale(1.05)',
        transition: '250ms all ease-in-out'
    },
    boxShadow:
        '0 0 0 1px rgb(53 72 91 / 4%), 0 2px 2px rgb(0 0 0 / 0%), 0 4px 4px rgb(0 0 0 / 1%), 0 10px 8px rgb(0 0 0 / 2%), 0 15px 15px rgb(0 0 0 / 2%), 0 30px 30px rgb(0 0 0 / 2%), 0 70px 65px rgb(0 0 0 / 3%)'
}));

const ImgBox = styled(Box)(({ theme }) => ({
    transition: '2.5s all ease-in-out',
    padding: '15px'
}));

const HeaderTypo = styled(Typography)(({ theme }) => ({
    color: '#000',
    zIndex: 10
}));

const Courses = () => {
    return (
        <Box>
            <Box
                sx={{
                    height: '760px',
                    width: '1600px',
                    transform: 'rotate(8deg)',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    top: 880,
                    left: -60
                }}
            />
            <Box>
                <HeaderTypo variant="h1">Một số khoá học của chúng tôi</HeaderTypo>
                <Button>
                    <Typography>Xem các khoá học</Typography>
                </Button>
            </Box>

            <StyledGrid container spacing={1} md={12}>
                {courses.map((course) => (
                    <StyledCard>
                        <ImgBox>
                            <img width={240} height={174} src={course.img} alt="error" />
                        </ImgBox>
                        <CardContent>
                            <Typography variant="h5">{course.title}</Typography>
                        </CardContent>
                    </StyledCard>
                ))}
            </StyledGrid>
        </Box>
    );
};

export default Courses;
