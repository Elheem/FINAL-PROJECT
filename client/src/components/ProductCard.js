import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { commandeadd, commandedelete } from '../JS/commandeSlice';
import Details from './Details';
import { useState } from 'react';

function ProductCard({ product, ping, setping }) {
    const [show, setshow] = useState(false)
    const dispatch = useDispatch();
    const location = useLocation()
    return (
        <div> <Card style={{ width: '36rem', margin: '20px', position: 'static' }}>
            <Card.Img variant="top" src={product.img} style={{ minWidth: '358px', maxWidth: '358px', maxHeight: '447px', minHeight: '447px' }} />
            <Card.Body>
                <Card.Title>{product?.nameproduct}</Card.Title>
                <Card.Text>
                    {product?.description}
                </Card.Text>
                <button onClick={() => setshow(true)}>Details</button>    {show ? <Details product={product} show={show} setshow={setshow} ping={ping} setping={setping} /> : null}
            </Card.Body>
            {/*    {location.pathname.toLocaleLowerCase().includes("profil") ? <p><button
                onClick={() => {
                    dispatch(commandedelete(product._id));
                    setping(!ping)
                }}>delete</button></p> : <p><button
                    onClick={() => {
                        dispatch(commandeadd(product));
                        setping(!ping);
                    }}
                >Add to Cart</button></p>} */}
        </Card></div>
    )
}

export default ProductCard