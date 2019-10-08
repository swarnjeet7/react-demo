import React from 'react';

class Cart extends React.Component {

    render() {
		const {cart, handleDelete, handleIncrement} = this.props;
        return (
            <div className={"container"} >
                <span className="btn btn-primary m-2">
                    { this.formatedValue(cart.value) }
                </span>
                <button 
                    className={"btn btn-primary m-2"} 
                    onClick={()=> handleIncrement(cart.id)}>
                        Increment
                </button>
                <button 
                    className={"btn btn-danger m-2"}
                    onClick={() => handleDelete(cart.id)}>
                        Delete
                </button>
            </div>
        );
    }

    formatedValue(val) {
    	return val === 0 ? 'Zero' : val;
	}
}

export default Cart;
