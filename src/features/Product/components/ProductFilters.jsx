import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

function ProductFilters({ filters, onChange }) {
    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            "category.id": newCategoryId
        };

        onChange(newFilters);
    };

    const handlePriceChange = (values) => {
        if (onChange) onChange(values);
    };

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange}></FilterByCategory>
            <FilterByPrice onChange={handlePriceChange}></FilterByPrice>
        </Box>
    );
}

export default ProductFilters;