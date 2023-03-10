
import React from 'react';
import Item from './Item';

const ItemList = ({ product }) => {
    return (
        <div className='shop-items' >
            {product?.map((product) => (
                <Item
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    category={product.category}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                />
            ))}
        </div>
    )
}

export default ItemList