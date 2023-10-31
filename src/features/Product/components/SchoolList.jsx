import React from 'react';
import { useEffect, useState } from 'react';
import schoolApi from 'api/schoolApi';
import { Box, Grid, Typography } from '@mui/material';
import { Skeleton } from '@material-ui/lab';
import { THUMBNAIL_PLACEHOLDER } from 'constants/index';

function SchoolList({ data }) {
    const [filters, setFilters] = useState({
        page: 1,
        limit: 100,
    });

    const [schoolList, setSchoolList] = useState([]);
    const thumbnailUrl = THUMBNAIL_PLACEHOLDER;

    useEffect(() => {
        (async () => {
            try {
                const { data } = await schoolApi.getAll(filters);
                setSchoolList(data);
            } catch (error) {
                console.log('Failed to fetch school list: ', error);
            }

            // setLoading(false);
        })();
    }, [filters]);

    return (
        <Box>
            <Grid container>
                {schoolList.map((school) => (
                    <Grid item key={school.id} xs={12} sm={6} md={4} lg={3}>
                        <Box padding={1}>
                            <Box padding={1}>
                                <img src={thumbnailUrl} alt={school.name} width="100%" />
                            </Box>

                            <Typography variant="body2" fontWeight="bold">
                                {school.name}
                            </Typography>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default SchoolList;
