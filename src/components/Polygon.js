import React from 'react'

class Polygon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false,
      rightClicked: false
    }

    // this.handleOnContextMenu = this.handleOnContextMenu.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleMouseEnter = this.handleMouseEnter.bind(this)
    // this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleClick (e) {
    e.preventDefault()

    const clicked = !this.state.clicked

    if (clicked) {
      e.target.setAttribute('fill', 'blue')
    } else {
      e.target.setAttribute('fill', '#fff')
    }

    this.setState({
      clicked: clicked
    })
  }

  // right click
  handleOnContextMenu (e) {
    e.preventDefault()

    const rightClicked = !this.state.rightClicked

    if (rightClicked) {
      e.target.setAttribute('fill', 'red')
    } else {
      e.target.setAttribute('fill', '#fff')
    }

    this.setState({
      rightClicked: rightClicked
    })
  }

  handleMouseEnter (e) {
    if (!this.state.rightClicked && !this.state.clicked) {
      e.target.setAttribute('fill', '#d6ecfa')
    }
  }

  handleMouseLeave (e) {
    if (!this.state.rightClicked && !this.state.clicked) {
      e.target.setAttribute('fill', '#fff')
    }
  }

  render () {
    const props = this.props
    return (
      <polygon
        id={props.id}
        points={props.points}
        fill={props.fill}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        opacity={props.opacity}
        onContextMenu={this.handleOnContextMenu.bind(this)}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={this.handleClick.bind(this)} />
    )
  }
}

export default Polygon
