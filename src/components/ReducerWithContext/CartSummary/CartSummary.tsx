import { useCartContext } from "../context/CartContext";

export const CartSummary = () => {
  const { items, clearCart } = useCartContext();
  const price = items.reduce((acc, curr) => acc = acc + curr.price, 0)
  return (
    <>
      <h3>Cart items: {items ? items.length : 0} - <span style={{color: '#9663A3'}}>Price : { Intl.NumberFormat('es-AR', {style: 'currency', currency:'ARS'}).format(price) }</span></h3> 
      <button onClick={() => clearCart()}>Clear Cart</button>
    </>
  )
}