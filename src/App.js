
import { gql, useQuery } from '@apollo/client';


import HomePage from './components/home/HomePage';
import NavBar from './layout/Layout';

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

  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )
}

export default App;
