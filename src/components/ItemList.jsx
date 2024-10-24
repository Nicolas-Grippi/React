import ProductCard from './ProductCard';

const ItemList = ({ productos }) => {
    return (
        <div className="product-list">
            {productos.map((producto) => (
                <ProductCard key={producto.id} producto={producto} />
            ))}
        </div>
    );
};

export default ItemList;
