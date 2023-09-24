import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}

export default App;
