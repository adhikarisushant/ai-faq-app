import React, { useState, useRef, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Navbar';
import Faq from './Faq';
import alanBtn from "@alan-ai/alan-sdk-web";
import { scroller } from 'react-scroll';

const App = () => {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  const [toggleColorFlag, setToggleColorFlag] = useState(false);

  useEffect(() => {
      if (!alanBtnInstance.current) {
          alanBtnInstance.current = alanBtn({
              key: '26d921da982620200c38b0b00d27a92c2e956eca572e1d8b807a3e2338fdd0dc/stage',
              onCommand: (commandData) => {
                  if (commandData.command === 'gotoFaq') {
                        scroller.scrollTo(`accordion-item-${commandData.faqId}`, {
                          duration: 800,
                          delay: 0,
                          smooth: 'easeInOutQuart'
                        })
                        setIndex(commandData.faqId - 1)
                  } else if (commandData.command === 'toggleColorMode') {
                    setToggleColorFlag(flag => !flag);
                  }
                  }
          });
      }
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar toggleColorFlag={toggleColorFlag} />
      <Faq index={index} setIndex={setIndex} />
    </ChakraProvider>
  )
}

export default App;
