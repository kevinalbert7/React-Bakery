import React from 'react'

class List extends React.Component {
    render() {
        return (
            <div>
                <h1>List</h1>
                    <ul className="list-group">
                    {this.props.items.map((item, index) => (
                        <li key={index} className="list-group-item">
                        </li>
                            )}
                    <ul/>
            </div>
        );
    }
}

export default List