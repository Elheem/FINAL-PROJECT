import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { commandedelete } from '../JS/commandeSlice';
import Welcome from './Welcome';


function Cart({ ping, setping }) {
    const user = useSelector((state) => state.user?.user);
    const commandes = useSelector((state) => state.commande?.commandeList);
    const dispatch = useDispatch();

    return (
        <div className='welcome'>
            <Welcome />
            <div className='hero'>


                {/*Reservation List */}
                <div>
                    <Table striped bordered hover style={{ width: "100%", fontSize: "20px" }}>
                        <thead>
                            <tr>
                                <th>Product image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>x</th>
                            </tr>
                        </thead>

                        {commandes?.filter((el) => el.username == user?.name).map((el) =>
                            <tbody>
                                <tr>
                                    <td><img src={el?.productimage} alt="" style={{ width: "50px", height: "50px" }} /></td>
                                    <td>{el?.productname}</td>
                                    <td>{el?.price}</td>
                                    <td>{el?.date}</td>
                                    <td ><button type="button" class="btn btn-danger" onClick={() => { dispatch(commandedelete(el._id)); setping(!ping) }}>Delete</button> </td>
                                </tr>

                            </tbody>
                        )}
                    </Table>

                </div>


            </div>
        </div>
    )
}

export default Cart

