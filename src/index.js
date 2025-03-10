import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Layout from './layout/Layout';

import reportWebVitals from './reportWebVitals';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import theme from './mui/theme';
import { ThemeProvider } from '@mui/material';


const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout>
            <App />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)

reportWebVitals();
