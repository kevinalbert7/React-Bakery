import React from 'react'

import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super () 
    
    this.state = {
      activeTab: "add",
      items: []
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)

  }

  handleButtonClick(str, index) {
    // console.log("handleButtonClick:", str)
    this.setState({activeTab: str, index})

  }

  render() {
    console.log("activeTab:",this.state.activeTab)
    return (
      <div>
        <Button
        handleClick={this.handleButtonClick}
        isSelected={this.props.activeTab === "str"}
        />
      </div>
    );
  }

}

export default App