import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import CheckOut from './CheckOut/CheckOut';
import Login from './Login/Login';
import { auth } from './Firebase/Firebase';
import { useStateValue } from './StateProvider/StateProvider';
import Payment from './Payment/Payment';
import Orders from './Orders/Orders';

const promise = loadStripe('pk_test_51HyVzHJOSZQVKTCXCNMXMkMoCAcDNhbx3NLB9dQJ9i6whkp9TNHLzUeiNS4Ky6tiWWVMjQP6GTbgz5TUYHfi746i00cbqeTRvK');

const App = () => {
    const [{ }, dispatch ] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if(authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, []);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                        <Footer />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                        <Footer />
                    </Route>
                    <Route path="/login">
                        <Header />
                        <Login />
                        <Footer />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <CheckOut />
                        <Footer />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;