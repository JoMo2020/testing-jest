import React from "react";

class Bgcolor extends React.Component {
    state = {
      color: 'blue'
    }
    onChange = () => {
       this.setState({ color: 'green' | 'blue' });
    }
    render () {
      return (
        <div 
         style={{ backgroundColor: this.state.color }} 
         onClick={this.onChange}
        >
          <p>Some content goes here</p>
          <p>Some other content</p>
        </div>
      );
    }
  }

export default Bgcolor;