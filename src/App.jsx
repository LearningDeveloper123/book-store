import { BrowserRouter,Routes,Route,Navigate } from "react-router";

import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

import './App.css'

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path ="/" element = {<Home/>}/>
  <Route path ="/books" element = {<BookList/>}/>
  <Route path ="/books/:id" element = {<BookDetails/>}/>
  <Route path ="/checkout" element = {<Checkout/>}/>
  <Route path ="/cart" element = {<Cart/>}/>
  <Route path = "*" element = {<Navigate to ="/not-found"/>}/>
</Routes>
</BrowserRouter>   
  )
}

export default App
