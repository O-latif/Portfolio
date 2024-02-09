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
import Slider from "../../Widgets/slider";
import "../../Css/skills.css";

const Skills = () => {
  const theme = useTheme();
  const primaryMid = theme.palette.primary.mid;
  const primaryMain = theme.palette.primary.main;
  const neutralMedium = theme.palette.neutral.mediumMain;

  return <Box id='Skills' sx={{background :'linear-gradient(90deg, rgba(51,28,82,1) 0%, rgba(0,0,0,1) 100%)' , padding : '100px 0'}}>
    <h1 style= {{
                  color :neutralMedium, 
                  textAlign :'center', 
                  fontFamily: "'Protest Riot', sans-serif",
                  fontSize: '50px',
                  fontWeight : 'bold'
                }}>Skills</h1>
    <Box sx={{overflow:'hidden'}}>
      <div className="logos">
        <div className="logo-slide">
          <div className="treeImg" id="Html"><img src="html.png" alt="Html" width="90px" /></div>
          <div className="treeImg" id="Css"><img src="css-3.png" alt="Css" width="90px" /></div>
          <div className="treeImg" id="React"><img src="react.png" alt="React" width="90px" /></div>
          <div className="treeImg" id="JavaScript"><img src="javascript.svg" alt="JavaScript" width="80px"/></div>
          <div className="treeImg" id="Bootstrap"><img src="bootstrap.png" alt="Bootstrap" width="90px"/></div>
          <div className="treeImg" id="Node js"><img src="node-js.png" alt="Node js" width="90px"/></div>
          <div className="treeImg" id="Express"><img src="express.png" alt="Express" width="90px"/></div>
          <div className="treeImg" id="Mongodb"><img src="mongodb.png" alt="Mongodb" width="90px"/></div>
        </div>

        <div className="logo-slide">
          <div className="treeImg" id="Html"><img src="html.png" alt="Html" width="90px" /></div>
          <div className="treeImg" id="Css"><img src="css-3.png" alt="Css" width="90px" /></div>
          <div className="treeImg" id="React"><img src="react.png" alt="React" width="90px" /></div>
          <div className="treeImg" id="JavaScript"><img src="javascript.svg" alt="JavaScript" width="80px"/></div>
          <div className="treeImg" id="Bootstrap"><img src="bootstrap.png" alt="Bootstrap" width="90px"/></div>
          <div className="treeImg" id="Node js"><img src="node-js.png" alt="Node js" width="90px"/></div>
          <div className="treeImg" id="Express"><img src="express.png" alt="Express" width="90px"/></div>
          <div className="treeImg" id="Mongodb"><img src="mongodb.png" alt="Mongodb" width="90px"/></div>
        </div>
      </div>
    </Box>
  </Box>
}

export default Skills;