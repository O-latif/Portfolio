import 'bootstrap/dist/css/bootstrap.css';
import {
  Box,
  useTheme,
} from "@mui/material";
import {
  GitHub,
  Twitter,
  Facebook,
  Instagram
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";


const Landing = () => {
  const theme = useTheme();
  const primaryMid = theme.palette.primary.mid;
  const primaryMain = theme.palette.primary.main;
  const neutralMedium = theme.palette.neutral.mediumMain;

  return <Box id="Home" sx={{background :'url("p2.jpeg")',backgroundSize:'cover'}}>
  <FlexBetween sx = {{position : 'relative'}}>
    <Box
      className='stBx'
      sx = {{
        m : "50px 70px"
      }}
    >
      <p style={{
        fontWeight : 'bold',
        fontSize : '40px',
        marginBottom : '10px',
        color : neutralMedium
      }}>
        Hi, </p>
      <h1 style = {{
        fontWeight : 'bold',
        fontSize : '70px',
        marginBottom : '10px',
        color : primaryMid,
      }}>I'm 
        <span 
          style = {
                    {
                      fontFamily : "'Indie Flower', cursive",
                      fontWeight:"bold",
                      fontSize : "70px",
                      margin : "0 10px"
                    }
                  }>
                    Fi 
        </span>
        
          a Web <br/> Developer</h1>
      <p style={{
        fontWeight : 'bold',
        fontSize : '30px',
        marginBottom : '10px',
        textAlign: 'center',
        color : neutralMedium
      }}>
        I bring your wishes to life <br/> in the digital realm</p>
        <Box sx = {{marginTop : '20px'}}>
          <ul style={{
                listStyle : 'none',
                display: 'flex',
                flexDirection : 'row',
                justifyContent : 'center',
                gap : '20px'
                }}>
            <li style={{width: '25px', height: '25px', backgroundColor: primaryMid, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}}><a href= "https://twitter.com/FiTalDevs" target = "_blank"><Twitter style = {{color : primaryMain}} /></a></li>
            <li style={{width: '25px', height: '25px', backgroundColor: primaryMid, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}}><a href= "https://github.com/O-latif" target = "_blank"><GitHub  style = {{color : primaryMain}} /></a></li>
            <li style={{width: '25px', height: '25px', backgroundColor: primaryMid, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}}><a href= "https://www.facebook.com/profile.php?id=61556001451096" target = "_blank"><Facebook  style = {{color : primaryMain}} /></a></li>
            <li style={{width: '25px', height: '25px', backgroundColor: primaryMid, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}}><a href= "https://www.instagram.com/fi_devs/" target = "_blank"><Instagram  style = {{color : primaryMain}} /></a></li>
          </ul>
          
          
          
          
        </Box>
    </Box>
    <Box 
    id='lndBx'
    style = {{width : "500px", height: '120%', position : "absolute", top : '-20%', right :'0%',zIndex:'2'}}
            >
      <img src="landing.png" alt="landing" id='LndImg' style = {{width : "400px", height: '100%', position : "absolute", top : '0%', right :'0%',zIndex:'2'}}/>
      
    </Box>
  </FlexBetween>
  </Box>
}

export default Landing;