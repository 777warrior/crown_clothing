import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div classsName='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;