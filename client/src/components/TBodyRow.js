import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { commandedelete } from '../JS/commandeSlice';
import { deleteproduct, editproduct } from '../JS/productslice';

const TBodyRow = ({ el, ping, setping }) => {
    const [newProduct, setNewProduct] = useState({})
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    return (
        show ? <tbody>
            < tr >
                <td><input onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })} type="text" defaultValue={el?.img} /></td>
                <td><input onChange={(e) => setNewProduct({ ...newProduct, nameproduct:e.target.value})} type="text" defaultValue={el?.nameproduct} /></td>
                <td><input onChange={(e) => setNewProduct({ ...newProduct, Prix: e.target.value })} type="text" defaultValue={el?.Prix} /></td>
                <td><input onChange={(e) => setNewProduct({ ...newProduct, categorie: e.target.value })} type="text" defaultValue={el?.categorie} /></td>
                <td ><button type="button" class="btn btn-danger" onClick={() => { setShow(false) }}>Cancel</button> </td>
                <td ><button type="button" class="btn btn-danger" onClick={() => { dispatch(editproduct({id:el._id,edit:newProduct})); setping(!ping); setShow(false) }}>Save</button> </td>

            </tr >

        </tbody >
            : <tbody>
                <tr>
                    <td><img src={el?.img} alt="" style={{ width: "50px", height: "50px" }} /></td>
                    <td>{el?.nameproduct}</td>
                    <td>{el?.Prix}</td>
                    <td>{el?.categorie}</td>
                    <td ><button type="button" class="btn btn-danger" onClick={() => { dispatch(deleteproduct(el._id)); setping(!ping) }}>Delete</button> </td>
                    <td ><button type="button" class="btn btn-danger" onClick={() => { setShow(true) }}>Edit</button> </td>

                </tr>

            </tbody>
    )
}

export default TBodyRow