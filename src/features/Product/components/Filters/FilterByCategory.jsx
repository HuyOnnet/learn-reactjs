import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import categoryApi from 'api/categoryApi';
import { makeStyles } from '@mui/styles';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '16px',
    },

    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',

        '& > li': {
            marginTop: '8px',

            '&:hover': {
                color: '#1565c0',
                cursor: 'pointer',
            },
        },
    },
}));

function FilterByCategory({ onChange }) {
    const [categoryList, setCategoryList] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();
                setCategoryList(
                    list.map((x) => ({
                        id: x.id,
                        name: x.name,
                    })),
                );
            } catch (error) {
                console.log('Failed to fetch category list: ', error);
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id);
        }
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
            <ul className={classes.menu}>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        <Typography variant="body2">{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;
