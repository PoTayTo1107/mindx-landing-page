import { Box } from '@mui/material';

import logo_white from '../assets/logo/logo_white.png';

const Header = () => {
    return (
        <Box>
            <img src={logo_white} alt="Logo" width={250} />
            <div>HI</div>
        </Box>
    );
};

export default Header;
