import { ProductList } from "./ProductList/ProductList"
import { CartProvider } from "./context/CartContext"
import { products } from "./data/products"

export const ReducerWithContext = () => {
  return (
    <CartProvider>
      <h3>Reducer with context Example</h3>
      <ProductList products={products} />
    </CartProvider>
  )
}