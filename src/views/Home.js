import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap'
import logo from '../logo.svg'
import '../App.css'

export default () => (
    <Page>
        <h1>This is the <strong>Home</strong> view.</h1>
            <div>
                    <Navbar inverse fixedTop>
                            <Grid>
                                    <Navbar.Header>
                                            <Navbar.Brand>
                                                    <a href="/"><img src={logo} className="App-logo" alt="logo" />React App</a>
                                            </Navbar.Brand>
                                            <Navbar.Toggle />
                                    </Navbar.Header>
                            </Grid>
                    </Navbar>
                    <Jumbotron>
                            <Grid>
                                    <h1>Welcome to React</h1>
                                    <p>
                                            <Button
                                                bsStyle="success"
                                                bsSize="large"
                                                href="http://react-bootstrap.github.io/components.html"
                                                target="_blank">
                                                    View React Bootstrap Docs
                                            </Button>
                                    </p>
                            </Grid>
                    </Jumbotron>
            </div>

        <Helmet title='Home' />
    </Page>
)