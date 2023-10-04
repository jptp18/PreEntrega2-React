import cart from './assets/cart.png'

const CartWidget = () => {
    return(
        <div className='Carrito'>
            <img src={cart} alt="Logo" className="cart"/>
            0
        </div>
    )
}

export default CartWidget