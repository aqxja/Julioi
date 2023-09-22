import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0F8E99',
      light: '#40c4ff',
      dark: '#0d47a1',
      contrastText: '#263238',
    },
    secondary: {
      main: '#26C3C7',
      light: '#4D7A7A',
      dark: '#4D7A7A',
    },
    text: {
      primary: '#263238',
      secondary: '#000000',
      hint: '#ffb74d',
      disabled: '#bdbdbd',
    },
    error: {
      main: '#ff3c00',
      contrastText: '#ffebee',
    },
    warning: {
      main: '#ffc80d',
    },
    info: {
      main: '#0073b3',
    },
    success: {
      main: '#0ebd3a',
    },
    divider: '#5109b3',
    background: {
      default: '#000000',
      paper: '#9DF8FA',
    },
  },
  typography: {
    fontFamily: 'Oswald',
    fontWeightLight: 700,
    fontWeightRegular: 700,
    fontWeightMedium: 700,
    button: {
      fontWeight: 1000,
      fontSize: '1rem',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
