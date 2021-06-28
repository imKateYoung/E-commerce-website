import React from 'react';
// import Products from './components/Products/Products';
// import NavBar from './components/Navbar/Navbar';
import { commerce} from './lib/commerce';
import {useState, useEffect} from 'react';
import { Products, Navbar,Cart, Checkout} from './components';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        // const cart = await commerce.cart.retrieve();
        // setCart( cart)
        setCart(await commerce.cart.retrieve());
    }
    
    const handleAddToCart = async (productId, quantity) =>{
        const res = await commerce.cart.add(productId,quantity);
        setCart(res.cart);
    }

    const handleUpdateCartQty = async (productId,quantity) =>{
        const res = await commerce.cart.update(productId, {quantity});
        setCart(res.cart)
    }

    const handleRemoveFromCart = async(productId) =>{
        const res = await commerce.cart.remove(productId);
        setCart(res.cart);
    }

    const handleEmptyCart = async () =>{
        const res = await commerce.cart.empty();
        setCart(res.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    //console.log(products);
    //console.log(cart);
    //console.log(handleCart);

    return (
        <Router>

            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} 
                            handleUpdateCartQty = {handleUpdateCartQty}
                            handleRemoveFromCart = {handleRemoveFromCart}
                            handleEmptyCart = {handleEmptyCart}
                        />
                    </Route>
                    <Route path="/checkout" exact>
                        <Checkout cart={cart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
