import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../services/firebase';

function ItemListContainer({greeting}) {

    let {category} = useParams();

    const [Items, setItems] = useState({})
    
    useEffect(() => {
        const db = getFirestore()
        db.collection('Items').get()
        .then(resp => setItems(resp.docs.map(it => ({id: it.id, ...it.data() }))))
    }, [category])
    
    return (
        <div className="div-ItemListContainer">
            <h2>{greeting}</h2>
            <div className="container-fluid">
            <ItemList category={category}/>
            </div>
        </div>
    )
}

export default ItemListContainer
