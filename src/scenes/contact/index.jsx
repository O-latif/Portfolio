import 'bootstrap/dist/css/bootstrap.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  useTheme,
  TextField,
  Button
} from "@mui/material";
import {
  GitHub,
  Twitter,
  Facebook,
  Instagram
} from "@mui/icons-material";
import Slider from "../../Widgets/slider";
import "../../Css/skills.css";

const Contact = () => {
  const theme = useTheme();
  const primaryMid = theme.palette.primary.mid;
  const primaryMain = theme.palette.primary.main;
  const neutralMedium = theme.palette.neutral.mediumMain;

  // submit form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_115yyka', 'template_kdz7kiu', form.current, {
        publicKey: '8q1w0cR1F77UL-xLe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return <Box id="Contact" sx={{background :'linear-gradient(90deg, rgba(51,28,82,1) 0%, rgba(0,0,0,1) 100%)' , padding : '100px 0'}}>
            <h1 style= {{
                          color :neutralMedium, 
                          textAlign :'center', 
                          fontFamily: "'Protest Riot', sans-serif",
                          fontSize: '50px',
                          fontWeight : 'bold'
                        }}>Send Me A Message</h1>
            <p  style= {{
                          color :neutralMedium, 
                          textAlign :'center', 
                          fontFamily: "'Protest Riot', sans-serif",
                          fontSize: '30px',
                          fontWeight : 'bold'
                        }}>Got a question or proposal, or just want
                                    to say hello? Go ahead.</p>
            <Box 
              display={'flex'}
              justifyContent={'center'}
              mt={'70px'}
            >
              <form  ref={form} onSubmit={sendEmail} style={{width:'80%'}}>
                <Box
                  display={'grid'}
                  gridTemplateColumns={'repeat( 2,minmax( 0, 1fr))'}
                  gap={'30px'}
                  width={'100%'}
                >
                
                        <TextField
                          label="Your Name"
                          name="user_name"
                          color="secondary"
                          variant="filled"
                          sx={{ gridColumn: "span 1", color : theme.palette.background.alt }}
                        />

                      <TextField
                      label="Your Email"
                      name="user_email"
                      color="secondary"
                      variant="filled"
                      sx={{ gridColumn: "span 1" }}
                    />
                    <TextField
                      label="Your Message"
                      type="text"
                      name="message"
                      color="secondary"
                      variant="filled"
                      multiline
                      rows ={4}
                      sx={{ gridColumn: "span 2" }}
                    />
                </Box>
                <Box sx={{display: "flex",
                      justifyContent: "center",}}>
                  <Button
                    fullWidth
                    type="submit"
                    sx={{
                      m: "2rem 0",
                      p: "1rem",
                      width: "30%",
                      backgroundColor: neutralMedium,
                      color: primaryMain,
                      "&:hover": {backgroundColor: theme.palette.primary.light, color: neutralMedium },
                    }}
                  >
                    Send
                  </Button>
                  
                </Box>
              </form>
            </Box>
            
          </Box>
}

export default Contact;