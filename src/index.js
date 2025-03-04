import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';
import Layout from './layout/Layout';


const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <App />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)

reportWebVitals();
