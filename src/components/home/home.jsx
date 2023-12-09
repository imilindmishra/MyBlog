


import { Grid } from '@mui/material';

//component
import Banner from '../banner/banner';
import Categories from './Categories';


function Home() {
    return (
        <>
            <Banner />
            <Grid container>
                <Grid item lg={2} sm={2} xs={12}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    Posts
                </Grid>
            </Grid>

        </>
    );
}

export default Home;