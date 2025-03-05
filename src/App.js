import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import BlogPage from "./components/blogs/BlogPage";
import AuthorPage from "./components/authors/AuthorPage";


function App() {
  
  return (
    <>
<Routes>
  <Route path="/" element={<HomePage />} /> 
  <Route path="/blogs/:slug" element={<BlogPage />} /> 
  <Route path="/authors/:slug" element={<AuthorPage />} /> 
</Routes>
     
    </>
    
  )
}

export default App;
