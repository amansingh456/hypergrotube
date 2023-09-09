import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, Theme } from './utils/Theme';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import Video from './page/Video';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import './App.css';
import styled from 'styled-components';
// import { useTheme } from './provider/ThemeContext';

interface AppProps { }

const App: React.FC<AppProps> = () => {
  const [darkMode, setDarkMode] = useState(true);
  // const theme = useTheme()

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ChakraProvider>
        <div className="flex h-full">
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <div className="p-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/video/:id" element={<Video />} />
              </Routes>
            </div>
          </Main>
        </div>
      </ChakraProvider>
    </ThemeProvider>
  );
};

const Main = styled.div<{ theme: Theme }>`
  flex: 6;
  background-color: ${({ theme }) => theme.bg};
`;

// const Wrapper = styled.div`
//   padding: 30px 10px;
// `;

export default App;