import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from '../About/About';
// import Blog from '../Blog/Blog';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Pages = () => {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/certificate" component={Testimonials} />
                    {/*<Route exact path="/Portfolio/blog" component={Blog} />*/}
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Pages