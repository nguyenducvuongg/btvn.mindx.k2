import React from 'react';
import "./list.css"

const ProductsList = (props) => {
    const {item} = props;
    return (
        <div>
             <ul>
                <li className='name'>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.description}</li>
            </ul>
        </div>
    );
};

export default ProductsList;