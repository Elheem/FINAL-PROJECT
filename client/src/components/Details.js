import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { commandeadd } from '../JS/commandeSlice';
import Swal from 'sweetalert2'


function Details({ show, setshow, product, ping, setping }) {
    const user = useSelector((state) => state.user?.user);
    const date = new Date();
    const [commande, setcommande] = useState({
        username: user?.name,
        productname: product?.nameproduct,
        productimage: product?.img,
        price: product?.Prix,
        date: date,
        status: "non payee"
    })
    const dispatch = useDispatch();


    return (
        <div className='modall'>
            <div className='modalcontant'>
                <div>
                    <img src={product.img} alt="" />
                </div>
                <div className='description'>
                    <h3>{product?.nameproduct}</h3>
                    <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis odio autem culpa velit, iusto a id dolor cupiditate minima ratione incidunt nihil suscipit rem! Vel dolore voluptates inventore minus tempora?</p>
                    <button className='btn' onClick={() => setshow(false)}>close</button>
                    {user && <button className='btn' onClick={() => {
                        dispatch(commandeadd(commande)); Swal.fire(
                            'Done!'

                        ); setping(!ping)
                    }}>Command</button>}</div>

            </div>


        </div>
    )
}

export default Details