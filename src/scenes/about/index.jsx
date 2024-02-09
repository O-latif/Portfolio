import 'bootstrap/dist/css/bootstrap.css';
import {
  Box,
  useTheme,
} from "@mui/material";
import "../../Css/main.css";
import {
  GitHub,
  Twitter,
  Facebook,
  Instagram
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";

const About = () => {
  const theme = useTheme();
  const primaryMid = theme.palette.primary.mid;
  const primaryMain = theme.palette.primary.main;
  const neutralMedium = theme.palette.neutral.mediumMain;

  return <Box id="About" sx={{bgcolor : neutralMedium , padding : '100px 0'}}>
    <div className="shape">
      <div className="left"></div>
    </div>
    <h1 style= {{
                  color :primaryMain, 
                  textAlign :'center', 
                  fontFamily: "'Protest Riot', sans-serif",
                  fontSize: '50px',
                  fontWeight : 'bold'
                }}>About Me</h1>
    <Box sx ={{display: "flex", justifyContent: 'center', marginTop: '20px'}}>
    <p style= {{width : '50%', color :primaryMain, fontSize: '25px', textAlign: 'center'}}>Hi, I'm Fi, a web developer passionate 
      about crafting seamless online experiences. 
      With a focus on clean code and responsive design, 
      I turn ideas into digital reality using Diverse languages. 
      Let's build something extraordinary together! </p>
    </Box>
    <div className="shape">
      <div className="right"></div>
    </div>
  </Box>
}

export default About;