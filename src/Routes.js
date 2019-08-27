import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ContactUs from './Container/Contactus/Contactus';
import Tournaments from './Container/TournamentListing/TournamentListing';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                <Link to='/'>Tournamets</Link> 
                           </Typography>
                            <Typography variant="title" color="inherit">
                                <Link to='/contact-us'>ContactUs</Link>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Route path="/" exact component={Tournaments} />
                    <Route path="/contact-us/" exact component={ContactUs} />
                </div>
            </Router>
        )
    }
}
