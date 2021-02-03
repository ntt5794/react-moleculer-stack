import { Box, Toolbar, Typography } from '@material-ui/core';

import BaseLayout from '../../layouts/BaseLayout';
import React, { useEffect } from 'react';
import { SkeletonGrid } from '../../components/Skeleton';
import Table from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../../redux/actions/product.actions';

const Products = (props) => {
    const loading = useSelector(state => state.product.list.loading)
    const products = useSelector(state => state.product.list.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsAction());
    }, [dispatch]);
    return (
        <BaseLayout nav="about">
            <Table data={products} />
            <Box px={3}>
                {loading && (<SkeletonGrid num={4} xs={12} md={3} lg={3} spacing={2} height={100} />)}
            </Box>
        </BaseLayout>
    )
};

export default Products;
