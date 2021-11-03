import React from 'react'

class Add extends React.Component {
    constructor () {
        super ()

        this.state = {
        name: "",
        price: 0
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)

    }

    handleNameChange(e) {
        console.log("handleNameChange:",e)
        this.setState({name: e.target.value})
    }

    handlePriceChange(e) {
        console.log("handlePriceChange:",e)
        this.setState({price: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Add</h1>
                 <input 
                    type="text" 
                    onChange={this.state.handleNameChange}
                >
                </input>
                 <input 
                    type="rang" 
                    minValue={0} 
                    maxValue={10}
                    onChange={this.state.handlePriceChange}
                >
                </input>
                <button 
                className="me-3 btn btn-outline-secondary"
                onClick={() => this.props.addItem}></button>
            </div>
        );
    }
}

export default Add