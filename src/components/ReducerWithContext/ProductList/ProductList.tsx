import { CartSummary } from "../CartSummary/CartSummary"
import { ProductDetail } from "../ProductDetail/ProductDetail"
import { useCartContext } from "../context/CartContext"
import { Product } from "../models/product"

interface ProductListProps {
  products: Product[]
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { items } = useCartContext();
  return (
    <>
      <CartSummary />
      <section style={{ display: 'flex', flexWrap:'wrap', gap: '1rem'}}>
        {products.map((product: Product) => (
          <ProductDetail product={product} key={product.id}/>
        ))}
      </section>
      <section>
        <h6>cart items</h6>
        {items.map((item: Product)=> (
          <article key={item.id} style={{display: 'flex', flexDirection:'column'}}>
            id: {item.id} - Product: {item.title} - Price: {item.price}
            <p>{item.description}</p>
            
            
          </article>
        ))}
      </section>
    </>
  )
}