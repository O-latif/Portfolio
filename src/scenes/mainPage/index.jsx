
import NavBar from "../navBar";
import Landing from "../landing";
import About from "../about";
import Skills from "../skills";
import Projects from "../projects";
import Contact from "../contact";
import Footer from "../footer";
import {useState, useEffect} from 'react';
import {InfinitySpin} from 'react-loader-spinner';
import { Box } from "@mui/system";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  },[])
  return <>
  {
    isLoading ? 
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100vh'}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#E1EBED"
        ariaLabel="infinity-spin-loading"
        
        />
    </Box>
    : 
    <Box id='greatBx'>
      <NavBar/>
      <Landing/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Box>
  }
  
  </>
}

export default MainPage;