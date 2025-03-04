
import { gql, useQuery } from '@apollo/client';


import HomePage from './components/home/HomePage';

const QUERY = gql`
  query  {
    authors {
      name
    }
    posts {
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(QUERY);
  console.log(loading, data, error)
  
  return <HomePage/>
}

export default App;
