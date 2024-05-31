
import { ThemeProvider } from "@mui/material/styles";
import theme from './Components/theme';
import HomeComponent from './Components/HomeComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeComponent />
    </ThemeProvider>
  );
}

export default App;