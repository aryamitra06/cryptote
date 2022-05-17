import "./style/global.css";
import Appbar from './components/Appbar';
import Footer from './components/Footer'
import Main from './components/Main';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Encrypt from "./components/Encrypt";
import Decrypt from "./components/Decrypt";
import { Toaster } from 'react-hot-toast';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Appbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/encrypt" element={<Encrypt />} />
            <Route path="/decrypt" element={<Decrypt />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: 'black',
                color: 'white'
              },
            }
          }}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
