import { Box, OutlinedInput, styled, Typography } from '@mui/material';

import logo from '../assets/logo/logo.png';
import facebook from '../assets/social/facebook.png';
import twitter from '../assets/social/twitter.png';
import instagram from '../assets/social/instagram.png';
import send from '../assets/icons/Send.png';

const data = [
    { title: 'Product', des: ['Connections', 'Protocols', 'Personas', 'Integration', 'Catalog', 'Pricing', 'Security', 'GDPR'] },
    { title: 'For Developers', des: ['Docs', 'API', 'Open Source', 'Engineering Team'] },
    { title: 'Company', des: ['Careers', 'Blog', 'Press'] },
    { title: 'Support', des: ['Help Center', 'Contact Us', 'Security', 'Bulletins', 'Documentation', 'Partner', 'Portal'] }
];

const TitleTypo = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '16px',
    letterSpacing: '0.4px',
    color: '#160637',
    margin: '9px 0',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

const DesTypo = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0.9px',
    color: '#160637',
    margin: '9px 0',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

const StyledInput = styled(OutlinedInput)(({ theme }) => ({
    width: '200px',
    height: '40px',
    borderRadius: 0,
    borderColor: 'transparent',
    boxShadow:
        '0 0 0 1px rgb(53 72 91 / 4%), 0 2px 2px rgb(0 0 0 / 0%), 0 4px 4px rgb(0 0 0 / 1%), 0 10px 8px rgb(0 0 0 / 2%), 0 15px 15px rgb(0 0 0 / 2%), 0 30px 30px rgb(0 0 0 / 2%), 0 70px 65px rgb(0 0 0 / 3%)',
    '&:focus-visible': {
        outline: 'none'
    },
    [theme.breakpoints.down('md')]: {
        margin: '0 23% 10px'
    }
}));

const MainBox = styled(Box)(({ theme }) => ({
    height: '350px',
    margin: '60px 0 100px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        height: 'auto',
        margin: 0,
        marginTop: '30px'
    }
}));

const ContentBox = styled(Box)(({ theme }) => ({
    width: '190px',
    marginRight: '30px',
    [theme.breakpoints.down('md')]: {
        margin: '0 23%'
    }
}));

const DataBox = styled(Box)(({ theme }) => ({
    marginRight: '40px',
    [theme.breakpoints.down('md')]: {
        margin: '0'
    }
}));

const SocialBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        margin: '0 23%'
    }
}));

const Footer = () => {
    return (
        <MainBox>
            <ContentBox>
                <img src={logo} width={170} height={78} alt="logo" />
                <DesTypo>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat ut wisi enim ad minim
                </DesTypo>
                <SocialBox>
                    <img src={facebook} width={16} height={16} style={{ margin: '0 5px' }} alt="facebook" />
                    <img src={twitter} width={16} height={16} style={{ margin: ' 0 5px 0 7px' }} alt="twitter" />
                    <img src={instagram} width={16} height={16} style={{ margin: '0 5px' }} alt="instagram" />
                </SocialBox>
            </ContentBox>
            {data.map((item) => (
                <DataBox>
                    <TitleTypo sx={{ marginBottom: '20px' }}>{item.title}</TitleTypo>
                    {item.des.map((i) => (
                        <DesTypo sx={{ marginTop: '12px' }}>{i}</DesTypo>
                    ))}
                </DataBox>
            ))}
            <Box>
                <TitleTypo sx={{ marginBottom: '20px' }}>Newsletter</TitleTypo>
                <StyledInput endAdornment={<img src={send} alt="arrow" />} placeholder="Email" />
            </Box>
        </MainBox>
    );
};

export default Footer;
