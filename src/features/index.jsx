import { Switch, Route, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import React from 'react';
TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch();
    
    console.log(match.path);
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage}></Route>
                <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>
            </Switch>
        </div>
    );
}

export default TodoFeature;