// import './App.css';
import { Link, Route, NavLink, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom';
import TodoFeature from './features';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi';
import React from 'react';
import CounterFeature from './features/Counter';
import ProductFeature from 'features/Product';

function App() {
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const productList = await productApi.getAll();
    //         console.log(productList);
    //     }
    //     fetchProducts();
    // }, []);

    return (
        <div className="App">
            {/* <p><Link to='/todos'>Todos</Link></p> */}
            {/* <p><Link to='/albums'>Albums</Link></p> */}
            {/* <p><NavLink to='/todos'>Todos</NavLink></p>
            <p><NavLink to='/albums'>Albums</NavLink></p> */}
            <Switch>
                {/* <Redirect from='/home' to='/' />
                <Redirect from='/' to='/next' exact/>
                <Redirect from='/post-list/:todoId' to='/posts/:todoId' /> */}
                {/* <Route path='/' component={CounterFeature} /> */}
                {/* <Route path='/todos' component={TodoFeature} /> */}
                {/* <Route path='/albums' component={AlbumFeature} /> */}
                <Route path="/" component={ProductFeature} />
                <Route path="/products" component={ProductFeature} />
                {/* <Route component={NotFound} /> */}
            </Switch>
            {/* Footer */}
        </div>
    );
}

export default App;
