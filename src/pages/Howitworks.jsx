import { Box, Grid, styled, Typography } from '@mui/material';

import presentation from '../assets/icons/Presentation.png';
import notes from '../assets/icons/Notes.png';
import book from '../assets/icons/Book.png';
import hierarchy from '../assets/icons/Hierarchy.png';
import img5 from '../assets/imgs/5.png';
import img6 from '../assets/imgs/6.png';
import img7 from '../assets/imgs/7.png';
import img8 from '../assets/imgs/8.png';

const howit = [
    {
        id: '0',
        title: 'Học trực tuyến',
        des: 'Học mọi lúc, mọi nơi, tại bất kì thời điểm nào phù hợp với bạn. Đảm bảo được kiến thức dù bất cứ nơi đâu.',
        img: presentation
    },
    {
        id: '1',
        title: 'Thống kê quan trọng',
        des: 'Dữ liệu của bạn sẽ được chọn lọc và thống kê ra những thông tin hữu ích nhất cho bạn.',
        img: notes
    },
    {
        id: '2',
        title: 'Chứng chỉ Online',
        des: 'Cung cấp ngay chứng chỉ Online sau khi hoàn thành kháo học, chuẩn bị cho người học tiến xa hơn trong sự nghiệp.',
        img: book
    },
    {
        id: '3',
        title: 'Đạt phần thưởng quý',
        des: 'Khi hoàn thành các khoá học, bạn có thể đổi điểm của mình để nhận được các phần thưởng đáng giá.',
        img: hierarchy
    }
];

const TitleTypo = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '44px',
    lineHeight: '56px',
    letterSpacing: '0.2px',
    color: '#fff',
    marginBottom: '65px'
}));

const ImgBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
    backgroundColor: '#FCC0AD',
    width: '70px',
    height: '70px',
    marginBottom: '26px'
}));

const SmallTitle = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24.2px',
    color: '#fff'
}));

const DesTypo = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: '30px',
    color: '#fff',
    width: '256px',
    height: '120px',
    marginTop: '12px',
    marginBottom: '15px'
}));

const BgBox = styled(Box)(({ theme }) => ({
    height: '565px',
    width: '545px',
    borderRadius: '18px',
    backgroundColor: '#FCC0AD',
    position: 'absolute',
    top: 1960,
    right: 30,
    [theme.breakpoints.down('md')]: {
        width: '50%',
        height: '50%'
    }
}));

const MainBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    marginTop: '120px',
    marginLeft: '20px'
}));

const SmallBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    marginTop: '62px',
    padding: '12px 15px 33px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    marginLeft: '23px'
}));

const Howitworks = () => {
    return (
        <Grid container sx={{ height: '830px', marginLeft: '114px', display: 'flex' }}>
            <Grid item md={6} sx={{ position: 'relative', zIndex: 1 }}>
                <TitleTypo>
                    Các khoá học Online của <br /> chúng tôi hoạt động ra sao?
                </TitleTypo>
                <Grid container md={12}>
                    {howit.map((data) => (
                        <Grid item md={6}>
                            <ImgBox>
                                <img src={data.img} width={30} height={30} alt="img" />
                            </ImgBox>
                            <SmallTitle>{data.title}</SmallTitle>
                            <DesTypo>{data.des}</DesTypo>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <BgBox />

            <Grid item md={6}>
                <MainBox>
                    <img src={img5} width={530} height={360} alt="img" />
                </MainBox>
                <Grid container md={12} sx={{ marginLeft: '50px' }}>
                    <SmallBox>
                        <img src={img6} width={115} height={70} alt="img" />
                    </SmallBox>
                    <SmallBox>
                        <img src={img7} width={115} height={70} alt="img" />
                    </SmallBox>
                    <SmallBox>
                        <img src={img8} width={115} height={70} alt="img" />
                    </SmallBox>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Howitworks;
