import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import { Skeleton } from '@material-ui/lab';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {

    // const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
    const thumbnailUrl = THUMBNAIL_PLACEHOLDER;
    return (
        <Box padding={1}>
            <Box padding={1}>
                <img src={thumbnailUrl}
                    alt={product.name}
                    width="100%"
                />
            </Box>
            
            <Typography variant='body2'>{product.name}</Typography>    
            <Typography variant='body2'>
                <Box fontWeight="bold" fontSize="16px" component="span" mr={1}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>{product.promotionPercent  > 0 ? `-${product.promotionPercent}%` : ''}
                </Typography>         
            <Skeleton />
            <Skeleton width="60%"/>
        </Box>
    );
}

export default Product;