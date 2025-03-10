import { Route, Routes } from "react-router-dom";

import Blogs from "./components/blogs/Blogs";
import HomePage from "./components/home/HomePage";
import Authors from "./components/authors/Authors";
import BlogPage from "./components/blogs/BlogPage";
import AuthorPage from "./components/authors/AuthorPage";


function App() {
  
  return (
    <>
<Routes>
  <Route path="/" element={<HomePage />} /> 
  <Route path="/blogs" element={<Blogs />} /> 
  <Route path="/authors" element={<Authors />} /> 
  <Route path="/blogs/:slug" element={<BlogPage />} /> 
  <Route path="/authors/:slug" element={<AuthorPage />} /> 
</Routes>
     
    </>
    
  )
}

export default App;
