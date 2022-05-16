import Appbar from './components/Appbar';
import Main from './components/Main';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Appbar/>
    <Main/>
    </ThemeProvider>
    </>
  );
}

export default App;
