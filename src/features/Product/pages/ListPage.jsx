import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import React from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import Pagination from '@mui/material/Pagination';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';
import PaginationCustom from '../components/PaginationCustom';

ListPage.propTypes = {
};

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px'
    },

    right: {
        flex: '1 1 0'
    },

    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        marginTop: '30px',
        paddingBottom: '20px'
    } 
}))

function ListPage(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 8,
        total: 8, 
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 8,
        _sort: 'salePrice:ASC'
    });

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll( filters );
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            
            setLoading(false);
        })();
    }, [filters]);

    const handlePageChange = (e, page) => {
        console.log(page);
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page,
        }));
    };

    const handleSortChange = (newSortValue) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _sort: newSortValue,
        }));
    };

    const handleFiltersChange = (newFilters) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
    };

    // Hàm set lại số page
    const setPages = (pageNumber) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: pageNumber,
        }));
     };

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilters filters={filters} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <ProductSort currentSort={filters._sort.toString()} onChange={handleSortChange}></ProductSort>
                        <Paper>
                            {loading ? <ProductSkeletonList /> : <ProductList data={productList} /> }
                            <Box className={classes.pagination}>
                            <PaginationCustom setPages={setPages} className={classes.pagination} paginations={pagination}></PaginationCustom>
                                {/* <Pagination 
                                    count={Math.ceil(pagination.total / pagination.limit)} 
                                    color="primary"
                                    page={pagination.page}
                                    onChange={handlePageChange} 
                                /> */}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;