// import logo from './logo.svg';
import './App.css'
import { useState } from 'react'
import Layout from './components/Layout'
import Content from './components/Content'
import Products from './components/Products'
import Cart from './components/Cart'

const products = [
  {
    id: 1,
    name: 'Custom Deep Dish Double Crust',
    price: 32.99,
    category: 'deep-dish',
  },
  {
    id: 2,
    name: 'Fancy Dominoes',
    price: 12.0,
    category: 'regular-pizza',
  },
  {
    id: 3,
    name: 'Its Digornio',
    price: 82.79,
    category: 'regular-pizza',
  },
]

function App() {
  const [cart, updateCart] = useState([])

  return (
    <div className='App'>
      <Layout>
        <header>
          <h1>Peaquods</h1>
        </header>
        <main>
          <Content>
            <Products cart={cart} products={products} updateCart={updateCart} />
            <Cart cart={cart} />
          </Content>
        </main>
        <footer>Peaquods &copy; 2024</footer>
      </Layout>
    </div>
  )
}

export default App
