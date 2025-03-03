import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';

const client = new ApolloClient({
  uri: 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cls621f810gn201w3gd57bl3o/master',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)

reportWebVitals();
