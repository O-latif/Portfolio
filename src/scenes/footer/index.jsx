import { Box, Typography, useTheme} from "@mui/material";
import '../../Css/Footer.css';
// import CloseIcon from '@mui/icons-material/xtwitter';

import { FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  const { palette } = useTheme();
  const primaryMid = palette.primary.mid;
  const primaryMain = palette.primary.main;
  const neutralMedium = palette.neutral.mediumMain;
  return (
    <Box
    p={'50px'}
    bgcolor={palette.neutral.mediumMain}
    display={'flex'}
    justifyContent={'center'}
    flexWrap={'wrap'}
    position={'relative'}
    > 
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul style={{display:'flex', gap: '10px', fontSize:'30px', listStyle:'none', padding:'0', width:'100%', justifyContent:'center',color:palette.primary.main, zIndex:'1001'}}>
        <li className="li"> <a href="https://www.facebook.com/profile.php?id=61556001451096" target = "_blank" style={{color:primaryMain, cursor:'pointer'}}> <FaFacebook/> </a> </li>
        <li className="li"> <a href="https://www.instagram.com/fi_devs/" target = "_blank" style={{color:primaryMain, cursor:'pointer'}}> <FaInstagram/> </a> </li>
        <li className="li"> <a href="https://twitter.com/FiTalDevs" target = "_blank" style={{color:primaryMain, cursor:'pointer'}}> <FaTwitter/> </a> </li>
        <li className="li"> <a href="https://github.com/O-latif" target = "_blank" style={{color:primaryMain, cursor:'pointer'}}> <FaGithub/> </a> </li>
      </ul>
      <ul style={{display:'flex', gap: '10px', fontSize:'30px', listStyle:'none', padding:'0', width:'100%', justifyContent:'center',color:palette.primary.main}}>
        <li className="li">
          <a href="#Home" style={{fontSize:'16px',color:palette.primary.main, textDecoration:'none'}}>Home</a>
        </li>
        <li className="li">
          <a href="#About" style={{fontSize:'16px',color:palette.primary.main, textDecoration:'none'}}>About</a>
        </li>
        <li className="li">
          <a href="#Skills" style={{fontSize:'16px',color:palette.primary.main, textDecoration:'none'}}>Skills</a>
        </li>
        <li className="li">
          <a href="#Projects" style={{fontSize:'16px',color:palette.primary.main, textDecoration:'none'}}>Projects</a>
        </li>
        <li className="li">
          <a href="#Contact" style={{fontSize:'16px',color:palette.primary.main, textDecoration:'none'}}>Contact</a>
        </li>
        <li className="li">
          <a href="/credits" style={{fontSize:'16px',color:palette.primary.main, textDecoration:'none'}}>Credits</a>
        </li>
      </ul>
      <Typography color={palette.primary.main}>&copy;2024 Fi_Tal | All Rights Reserved</Typography>
    </Box>
  )
}

export default Footer;