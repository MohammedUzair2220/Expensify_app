import React from 'react';
import { BrowserRouter, Route, Switch,Link,NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ExpanseDashboardPage from '../components/ExpanseDashboardPage';
import AddExpansePage from '../components/AddExpansePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpanseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpansePage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter