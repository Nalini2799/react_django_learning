import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';

function App() {
  const product=[
    {
      price:9999,
      name:"Iphone 13",
      quantity:0,
    },
    {
      price:9988,
      name:"Iphone 10s",
      quantity:0,
    },
  ]
  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList product={product}/>
    </main>
    {/* <Footer/> */}
    </>
  )
}

export default App;
