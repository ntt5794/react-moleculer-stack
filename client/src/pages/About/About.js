import { Box, Toolbar, Typography } from '@material-ui/core';

import BaseLayout from '../../layouts/BaseLayout';
import React from 'react';
import { SkeletonGrid } from '../../components/Skeleton';

const About = (props) => {
    const loading = false;

    return (
        <BaseLayout nav="about">
            <Toolbar>
                <Typography variant='h1'>About iCommerce</Typography>
            </Toolbar>
            <Box px={3}>
                {loading && (<SkeletonGrid num={4} xs={12} md={3} lg={3} spacing={2} height={100} />)}
            </Box>
        </BaseLayout>
    )
};

About.propTypes = {
};

About.defaultProps = {
};

export default About;
