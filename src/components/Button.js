import React from 'react'

class Button extends React.Component {
    render() {
        // console.log(this.props)
        const { handleClick } = this.props
        return (
            <div className="row">
                <div className="col mx-3 my-5 d-flex justify-content-center">
                    <button 
                    type="button" 
                    className="me-3 btn btn-outline-primary" 
                    onClick={() => handleClick("add")}>
                    add
                    </button>
                    <button 
                    type="button" 
                    className="me-3 btn btn-outline-success" 
                    onClick={() => handleClick("list")}>
                    list
                    </button>
                    <button 
                    type="button" 
                    className="me-3 btn btn-outline-danger" 
                    onClick={() => handleClick("pay")}>
                    pay
                    </button>                      
            </div>
            </div>
        );
    }
}

export default Button;