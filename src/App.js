import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

class App extends React.Component {
	state = {
		cartsInfo: [
				{id:1, value:1},
				{id:2, value:0},
				{id:3, value:2},
				{id:4, value:0}
			],
	};

	totalCart = () => {
		const cartsInfo = this.state.cartsInfo;
		let total = 0;

		for(let cart of cartsInfo) {
			if(cart.value) total += 1;
		}
		return total;
	}

	handleDelete = id => {
		const cartsInfo = this.state.cartsInfo.filter(cart => {
			if(cart.id != id) return cart;
		});
		this.setState({cartsInfo});
	}

	handleIncrement = id => {
		const cartsInfo = [...this.state.cartsInfo];
		for(let cart of cartsInfo) {
			if(cart.id == id) {
				cart.value += 1;
				break;
			}
		}
		this.setState({cartsInfo});
	}

	resetAll = () => {
		let cartsInfo = this.state.cartsInfo.map(cart => {
			cart.value = 0;
			return cart;
		});
		console.log(cartsInfo)
		this.setState({cartsInfo});
	}

	render() {
		return (
			<div className="container">
				<Navbar totalCart={this.totalCart()} resetAll={this.resetAll} />

				{
					this.state.cartsInfo.map(cart => {
						return <Cart key={cart.id}
									 cart={cart}
									 handleIncrement={this.handleIncrement}
									 handleDelete={this.handleDelete}
								/>
					})
				}
			</div>
		);
	}
}

export default App;
