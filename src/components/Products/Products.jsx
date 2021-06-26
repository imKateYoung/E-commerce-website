import React from 'react';
import {Grid }from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products =[
//     // { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e871982a-5bac-46ef-97cb-26f06b6ee6b6/zoomx-invincible-run-flyknit-mens-running-shoe-NgvDVX.png'},
//     // { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsFCq5OwYKWp9DMvhvRLAZJWAVqG8ymyNIg&usqp=CAU'},

// ];

const Products = ({products,onAddToCart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;