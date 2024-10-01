import ProductCard from "./ProductCard"


const ItemList = ({products}) => {
return(

    <div className="ListGroup">
        {products.map(prod => <ProductCard key={prod.id} {...prod} />)}

    </div>
)
}

export default ItemList