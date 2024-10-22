import '../components/ProductCard.css';

import { Link } from 'react-router-dom';

export default function ProductCard({ producto }) {
    const { img, nombre, tipo, precio } = producto;

    return (
        <>
            <Link to={`/item/${producto.id}`}>
                <div className="card">
                    <img src={img} alt={nombre} />
                    <div className='description-card'>
                        <h3>{nombre}</h3>
                        <p className='parrafo-desc'><span>Tipo:</span> {tipo}</p>
                    </div>
                    <div className='buy-product'>
                        <span>${precio}</span>
                        <button className='btn-buy'>Detalles</button>
                    </div>
                </div>
            </Link>
        </>
    );
}