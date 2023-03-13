import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data.json";
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { id } = useParams()
    const getDatos = () => {
        return new Promise((resolve, reject) => {
            if (data.length === 0) {
                reject(new Error("No hay datos"));
            }

            setTimeout(() => {
                resolve(data)
            }, 2500);
        });
    };
    useEffect(() => {
        getDatos()
            .then((res) => setProducto(res.find((item) => item.id === parseInt(id))))
    }, [id])
    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}
export default ItemDetailContainer