import { useCartContext } from "../context/CartContext"
import { Product } from "../models/product"

interface ProductProps {
  product: Product
}

export const ProductDetail: React.FC<ProductProps> = ({ product }) => {

  const {addToCart} = useCartContext();

  return (
    <article key={product.id} style={{ border: '1px solid #f0f0f0', borderRadius: '1rem', padding: '1rem', width: '400px' }}>
      <h5>{product.title}</h5>
      <h5 style={{ color: '#9663A3' }}>$ {product.price}</h5>
      <button style={{ background: '#9663A3', color: 'white', border: 'none', borderRadius: '1rem', padding: '0.25rem 0.8rem' }}
      onClick={() => addToCart(product)}>
        Add to cart</button>
    </article>
  )
}