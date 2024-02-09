/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  TextField
} from "@mui/material";
import {
  Search,
  DarkMode,
  LightMode,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import './../../index.css';




const NavBar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [searchData, setSearchData] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [resul, setResul] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user) || '';
  const isNonMobileScreens = useMediaQuery("(min-width: 991px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryMain = theme.palette.primary.maiin;
  const primaryLight = theme.palette.primary.light;
  const primaryDark = theme.palette.primary.dark;
  const neutralNav = theme.palette.neutral.nav;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  return <>
  <FlexBetween id='Navbar' sx= {{
                      justifyContent:'flex-start !important',
                      background: 'linear-gradient(90deg, rgba(129,33,208,1) 0%, rgba(51,28,82,1) 69%, rgba(41,28,58,1) 100%)',
                      borderBottom : `2px solid ${primaryDark}` 
                    }}>
    <FlexBetween id='stFlx' width={'35%'} margin={'0'} padding={'0.75rem'}>
      
        
        <Typography
          mr={'10px'}
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="white"
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              color: "white",
              cursor: "pointer",
            },
          }}
        >
          <span style = {{fontFamily : "'Indie Flower', cursive",fontWeight:"bold", fontSize : "50px"}}>Fi</span>
          <span style = { {fontFamily : "'Lobster Two', sans-serif",fontWeight:"bold"}}> Dev</span> 
        </Typography>
        
      
      </FlexBetween>
    {/* DESKTOP NAV */}
    {isNonMobileScreens ? (
      <div className="container head" style={{width : 'fit-content', margin:'0'}}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid fullHeight">
        <ul style={{display:'flex', gap: '20px', fontSize:'30px', listStyle:'none', padding:'0', width:'100%', justifyContent:'center',color:theme.palette.neutral.mediumMain,cursor:'pointer'}}>
        <li className="li">
          <a href="#Home" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>Home</a>
        </li>
        <li className="li">
          <a href="#About" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>About</a>
        </li>
        <li className="li">
          <a href="#Skills" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>Skills</a>
        </li>
        <li className="li">
          <a href="#Projects" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>Projects</a>
        </li>
        <li className="li">
          <a href="#Contact" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>Contact</a>
        </li>
      </ul>
        </div>
      </nav>
      
    </div> 
      ) : (
        <IconButton 
          style={{marginRight:'10px'}}
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}
    
    {/* MOBILE NAV */}
    {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="1002"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
          transition="0.5s"
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="1.5rem"
          >
            <ul className="navbar-nav fullHeight"  style={{textAlign:'center'}}>
              <li className="li" style={{marginBottom:'20px'}}>
                <a href="#Home" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>Home</a>
              </li>
              <li className="li" style={{marginBottom:'20px'}}>
                <a href="#About" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>About</a>
              </li>
              <li className="li" style={{marginBottom:'20px'}}>
                <a href="#Skills" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>Skills</a>
              </li>
              <li className="li" style={{marginBottom:'20px'}}>
                <a href="#Projects" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>Projects</a>
              </li>
              <li className="li" style={{marginBottom:'20px'}}>
                <a href="#Contact" style={{fontSize:'22px',color:theme.palette.neutral.mediumMain, textDecoration:'none',cursor:'pointer',fontFamily : "'Protest Riot', sans-serif"}}>Contact</a>
              </li>
              
              
            </ul>
          </FlexBetween>
        </Box>
      )}
    
  </FlexBetween>
  </>
}

export default NavBar;