import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ExpanseDashboardPage from '../components/ExpanseDashboardPage';
import AddExpansePage from '../components/AddExpansePage';
import EditPage from '../components/EditPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpanseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpansePage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter