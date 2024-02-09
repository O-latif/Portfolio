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

const Credits = () => {
  const theme = useTheme();
  const primaryMid = theme.palette.primary.mid;
  const primaryMain = theme.palette.primary.main;
  const neutralMedium = theme.palette.neutral.mediumMain;

  return <Box sx={{background :'linear-gradient(90deg, rgba(51,28,82,1) 0%, rgba(0,0,0,1) 100%)' , padding : '100px 0'}}>
<a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>  
<a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Pixel perfect - Flaticon</a>
<a href="https://iconscout.com/icons/javascript" class="text-underline font-size-sm" target="_blank">javascript</a> by <a href="https://iconscout.com/contributors/maninderkaur" class="text-underline font-size-sm" target="_blank">maninderkaur</a>
<a href="https://iconscout.com/icons/react" class="text-underline font-size-sm" target="_blank">React</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
<a href="https://iconscout.com/icons/mongodb" class="text-underline font-size-sm" target="_blank">Mongodb</a> by <a href="https://iconscout.com/contributors/icon-54" class="text-underline font-size-sm">Icon 54</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
<a href="https://iconscout.com/icons/bootstrap" class="text-underline font-size-sm" target="_blank">bootstrap</a> by <a href="https://iconscout.com/contributors/maninderkaur" class="text-underline font-size-sm" target="_blank">maninderkaur</a>
<a href="https://iconscout.com/icons/node-js" class="text-underline font-size-sm" target="_blank">Node Js</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
<a href="https://www.flaticon.com/free-icons/full-stack-developer" title="full stack developer icons">Full stack developer icons created by iconfield - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ux-design" title="ux design icons">Ux design icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/server" title="server icons">Server icons created by smashingstocks - Flaticon</a>
<a href="https://iconscout.com/icons/express" class="text-underline font-size-sm" target="_blank">Express</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm" target="_blank">Icon Mafia</a>
<a href="https://www.vecteezy.com/free-png/geometric-shape">Geometric Shape PNGs by Vecteezy</a>
</Box>
}

export default Credits;