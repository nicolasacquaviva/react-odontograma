import React from 'react'

class Text extends React.Component {
  render () {
    // return <text x='6' y='30' stroke='navy' fill='navy' strokeWidth='0.1'>18</text>
    return <text>{this.props.children}</text>
  }
}

export default Text
