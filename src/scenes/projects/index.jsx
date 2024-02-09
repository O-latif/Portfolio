import { Box,useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { useState } from "react";

const Projects = () => {
  const theme = useTheme();
  const primaryMid = theme.palette.primary.mid;
  const primaryMain = theme.palette.primary.main;
  const neutralMedium = theme.palette.neutral.mediumMain;
  const [margin, setMargin] = useState(0);
  const navigate = useNavigate();
  const {palette} = useTheme();
  const restos = useSelector((state) => state.restos);

  return <Box id="Projects" sx={{bgcolor : neutralMedium , padding : '100px 0'}}>
    <div className="shape">
      <div className="left"></div>
    </div>
    <h1 style= {{
                  color :primaryMain, 
                  textAlign :'center', 
                  fontFamily: "'Protest Riot', sans-serif",
                  fontSize: '50px',
                  fontWeight : 'bold'
                }}>My Projects</h1>
    <Box sx ={{display: "flex", justifyContent: 'center', marginTop: '20px'}}>
    <Box width={'80%'} m={'30px auto'} p={'0 10px'} overflow={'hidden'}  position={'relative'}>
      
      <Box 
        display={'flex'} 
        width={'100%'} 
        gap={'40px'} 
        justifyContent={'space-evenly'}
        flexWrap={'wrap'} 
        marginLeft={`${-300 * margin}px`} 
        sx={{transition:'0.5s'}}
        p={'10px'}
      >
      
        
                <Box 
                  width={'300px'}
                  minWidth={'300px'} 
                  height={'335px'} 
                  borderRadius={'5px'} 
                  boxShadow={'0 2px 4px rgb(45 51 63 / 20%);'} 
                  // onClick={() => window.location.href =`http://localhost:3000/restaurant/${rest._id}`}
                  sx={{
                    transition:'0.3s',
                    '&:hover' : {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <img src="mf.jpg" alt="" width={'100%'} height={'235px'} style={{borderRadius:'5px 5px 0 0'}}/>
                  <Box p={'20px 20px 20px'} bgcolor={palette.background.alt} borderRadius={'0 0 5px 5px'} height={'100px'}>
                    <h3 style= {{
                      color :neutralMedium, 
                      textAlign :'center', 
                      fontFamily: "'Protest Riot', sans-serif",
                      fontSize: '30px',
                      fontWeight : 'bold'
                    }}>MyFood</h3>
                    <p style= {{
                      color :neutralMedium, 
                      textAlign :'center', 
                      fontFamily: "'Protest Riot', sans-serif",
                      fontSize: '16px',
                      
                    }}> Your guide into restaurants world </p>
                    
                  </Box>
                </Box>
      
      
      
      
        
                <Box 
                  width={'300px'}
                  minWidth={'300px'} 
                  height={'335px'} 
                  borderRadius={'5px'} 
                  boxShadow={'0 2px 4px rgb(45 51 63 / 20%);'} 
                  // onClick={() => window.location.href =`http://localhost:3000/restaurant/${rest._id}`}
                  sx={{
                    transition:'0.3s',
                    '&:hover' : {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <img src="js.png" alt="" width={'100%'} height={'235px'} style={{borderRadius:'5px 5px 0 0'}}/>
                  <Box p={'20px 20px 20px'} bgcolor={palette.background.alt} borderRadius={'0 0 5px 5px'} height={'100px'}>
                    <h3 style= {{
                      color :neutralMedium, 
                      textAlign :'center', 
                      fontFamily: "'Protest Riot', sans-serif",
                      fontSize: '30px',
                      fontWeight : 'bold'
                    }}>JustSew</h3>
                    <p style= {{
                      color :neutralMedium, 
                      textAlign :'center', 
                      fontFamily: "'Protest Riot', sans-serif",
                      fontSize: '16px',
                      
                    }}> All You Need Is Just Sew </p>
                    
                  </Box>
                  
                </Box>
              
                <Box 
                  width={'300px'}
                  minWidth={'300px'} 
                  height={'335px'} 
                  borderRadius={'5px'} 
                  boxShadow={'0 2px 4px rgb(45 51 63 / 20%);'} 
                  // onClick={() => window.location.href =`http://localhost:3000/restaurant/${rest._id}`}
                  sx={{
                    transition:'0.3s',
                    '&:hover' : {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <img src="elzero.png" alt="" width={'100%'} height={'235px'} style={{borderRadius:'5px 5px 0 0'}}/>
                  <Box p={'20px 20px 20px'} bgcolor={palette.background.alt} borderRadius={'0 0 5px 5px'} height={'100px'}>
                    <h3 style= {{
                      color :neutralMedium, 
                      textAlign :'center', 
                      fontFamily: "'Protest Riot', sans-serif",
                      fontSize: '30px',
                      fontWeight : 'bold'
                    }}>Elzero Template</h3>
                    <p style= {{
                      color :neutralMedium, 
                      textAlign :'center', 
                      fontFamily: "'Protest Riot', sans-serif",
                      fontSize: '16px',
                      
                    }}> Landing Page </p>
                    
                  </Box>
                </Box>
      </Box>

    </Box>
    </Box>
    <div className="shape">
      <div className="right"></div>
    </div>
  </Box>
}

export default Projects;