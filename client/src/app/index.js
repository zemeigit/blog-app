import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer } from '../components'
import { AboutMe, MainPage, BlogList, BlogInsert, BlogUpdate, BlogDetail } from '../pages'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/about" exact component={AboutMe} />
                <Route path="/" exact component={MainPage} />
                <Route path="/blog/list" exact component={BlogList} />
                <Route path="/blog/create" exact component={BlogInsert} />
                <Route
                    path="/blog/update/:id"
                    exact
                    component={BlogUpdate}
                />
                <Route path="/blog/detail/:id" exact component={BlogDetail} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App