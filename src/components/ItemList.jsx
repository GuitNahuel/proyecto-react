
import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
    return (
        <div className='shop-items' >
            {data?.map((data) => (
                <Item
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    category={data.category}
                    description={data.description}
                    image={data.image}
                    price={data.price}
                />
            ))}
        </div>
    )
}

export default ItemList