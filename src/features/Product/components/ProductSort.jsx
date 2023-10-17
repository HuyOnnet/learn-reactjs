import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@mui/material';

ProductSort.propTypes = {
    currentSort: PropTypes.number.isRequired,
    onChange: PropTypes.func
};

function ProductSort({currentSort, onChange}) {
    const handleSortChange = (event, newValue) => {
        if ( onChange ) onChange(newValue);
    };

    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="disabled tabs example"    
        >
            <Tab label="Giá từ thấp tới cao" value="salePrice:ASC"></Tab>
            <Tab label="Giá từ cao tới thấp" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;