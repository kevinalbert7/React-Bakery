import React from 'react'

class Button extends React.Component {
    render() {
        console.log("render du component button:", this.props)
        const { handleClick } = this.props
    
        return (
            <div className="row">
                <div className="col mx-3 my-5 d-flex justify-content-center">
                    <button 
                    type="button" 
                    className="me-3 btn btn-outline-primary"
                    onClick={() => handleClick("add")}
                    isSelected={this.props.activeTab}
                    >add
                    </button>
                    <button 
                    type="button" 
                    className="me-3 btn btn-outline-primary" 
                    onClick={() => handleClick("list")}
                    isSelected={this.props.activeTab}
                    >list
                    </button>
                    <button 
                    type="button" 
                    className="me-3 btn btn-outline-primary" 
                    onClick={() => handleClick("pay")}
                    isSelected={this.props.activeTab}
                    >pay
                    </button>                      
            </div>
            </div>
        );
    }
}

export default Button;