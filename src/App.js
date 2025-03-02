
import { gql, useQuery } from '@apollo/client';


import ButtonAppBar from './layout/Layout';

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

        <ButtonAppBar />
    <div className="App min-h-screen p-20 flex flex-col items-center">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
    </>
  );
}

export default App;
