import React from 'react'

import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super () 
    
    this.state = {
      activeTab: "add",
      items: [],
      isSelected: true
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)

  }

  handleButtonClick(str) {
    console.log("handleButtonClick:", str)
    this.setState({activeTab: str})

  }

  render() {
    console.log("activeTab:",this.state.activeTab)
    return (
      <div>
        <Button
        handleClick={this.handleButtonClick}
        />
      </div>
    );
  }

}

export default App