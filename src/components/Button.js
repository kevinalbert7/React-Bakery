import React from 'react'

class Button extends React.Component {
    render() {
        // console.log("render du component button:", this.props)
        // console.log("activeTab:", this.props.activeTab)
        const { handleClick, isSelected } = this.props
        console.log("isSelected:", isSelected)
    
        return (
            <div className="row">
                <div className="col mx-3 my-5 d-flex justify-content-center">
                    <button 
                        type="button" 
                        className={`me-3 btn btn-outline-primary ${isSelected === "add" && 'bg-primary text-white'}`}
                        onClick={() => handleClick("add")}
                        value="add"
                        >add
                    </button>
                    <button 
                        type="button" 
                        className={`me-3 btn btn-outline-primary ${isSelected === "list" && 'bg-primary text-white'}`}
                        onClick={() => handleClick("list")}
                        >list
                    </button>
                    <button 
                        type="button" 
                        className={`me-3 btn btn-outline-primary ${isSelected === "pay" && 'bg-primary text-white'}`}
                        onClick={() => handleClick("pay")}
                        >pay
                    </button>                      
            </div>
            </div>
        );
    }
}

export default Button;