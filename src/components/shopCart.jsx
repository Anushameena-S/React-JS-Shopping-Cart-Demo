import React, { Component } from 'react';

export default class ShopCart extends Component {
    //state is object holds all properties (data - object and attributes)that a component needs
   /* state = {
      //  count: this.props.shopcart.value
        //count: 0,
        //imageUrl: "https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_1280.jpg",
        //items: []
        //items: ["Item1", "Item2", "Item3"]
   };*/

    styles = {
    fontSize: 10,
    fontWeight: "bold"
    }

   /* renderTags() {
        if (this.state.items.length === 0) return <p>There are no items!</p>;
        return <ul>{this.state.items.map(item => <li key={item}>{item}</li>)}</ul>;
    }*/

    /*handleIncrement = (product) => {
        this.setState({ count: this.state.count + 1 });
        console.log("Increment Clicked");
        console.log(product);
    };*/
    componentDidUpdate(prevProps,prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        console.log(prevProps.shopcart.value);
        console.log(this.props.shopcart.value);
    }
    componentWillUnmount() {
        console.log('Shopcart - Unmount');
    }
    render() {
        //console.log("props", this.props);
        console.log('ShopCart - Rendered');
        return (
            <React.Fragment>
                {/* <h1>Hello World!!!!</h1>
                <img src={this.state.imageUrl} alt="React" />
                <br></br>
                <span>{2 + 2}</span>
                <button>Sample Button</button>
                <br></br>
                <span>The count displayed from state is</span>
                <span>{this.state.count}</span>
                <br></br>
                <span>The count displayed from function is</span>
                <span>{this.formatCount()}</span>
                <br></br>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>*/}
                {/* <span style={{ fontSize: 10 }} className="badge bg-primary m-2">{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> */}
                {/* <button onClick={() => this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
                <div>{this.state.items.length === 0 && "Please create a new item!"}</div>
                <ul>{this.renderTags()}</ul> */}
                {/* <h4>{this.props.id}</h4> */}
                {/* <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> */}

                {this.props.children}
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.shopcart)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.shopcart.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <br></br>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.shopcart.value === 0 ? "warning" : "primary";
        return classes;
        //classes += this.state.count === 0 ? "warning" : "primary";
    }

    formatCount() {
        const { value } = this.props.shopcart;
        return value === 0 ? "Zero" : value;
        //const { count } = this.state;
        //return count === 0 ? <h1>Zero</h1> : count;
        }
   
}
