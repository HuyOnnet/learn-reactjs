import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, NavLink, Switch, Redirect, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import ListPage from './pages/ListPage';
import { Box } from '@mui/material';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    const match = useRouteMatch();
    return (
        <Box>
            <div>
                <Switch>
                    <Route path={match.url} exact component={ListPage}></Route>
                </Switch>
            </div>
        </Box>
    );
}

export default ProductFeature;