import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navBar";
import CartCounter from "./components/cartCounter";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 },
        ]
    };
    constructor() {
        super();
        console.log('App - Constructor called');
    }
    componentDidMount() {
        console.log('App - Mounted');
    }
    handleIncrement = counter => {
        const incrementcounters = [...this.state.counters];
        const index = incrementcounters.indexOf(counter)
        incrementcounters[index] = { ...counter };
        incrementcounters[index].value++;
        this.setState({ counters: incrementcounters })

    }
    handleReset = () => {
        const resetcounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters: resetcounters });
    };
    handleDelete = (counterID) => {
        const newcounters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters: newcounters });
        //console.log("Delete Clicked and handled", counterID);
    };

    render() {
        console.log('App - Rendered');
        return (
            <React.Fragment>
                <NavBar
                    totalCounter={this.state.counters.filter(c => c.value >0).length} />

                <main className="container">
                    <CartCounter
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}                    />
                </main>"
            </React.Fragment>);
    }
}

export default App;
