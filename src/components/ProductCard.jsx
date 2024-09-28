export default function ProductCard(product){

    return (
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top"
            style={{ height: '200px', objectFit: 'cover' }} // Asegúrate de que la imagen se ajusta al tamaño
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price}</p>
          </div>
        </div>
      );
    };