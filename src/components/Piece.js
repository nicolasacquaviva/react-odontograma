import React from 'react'
import Polygon from './Polygon'
import Text from './Text'

const faces = {
  face0: [[0, 0], [20, 0], [15, 5], [5, 5]],
  face1: [[5, 15], [15, 15], [20, 20], [0, 20]],
  face2: [[15, 5], [20, 0], [20, 20], [15, 15]],
  face3: [[0, 0], [5, 5], [5, 15], [0, 20]],
  face4: [[5, 5], [15, 5], [15, 15], [5, 15]]
}

class Piece extends React.Component {
  getPolygonProps (index) {
    return {
      key: index,
      points: this.getPoints(faces['face' + index]),
      fill: 'white',
      stroke: 'navy',
      strokeWidth: '0.5',
      opacity: '1'
    }
  }

  getPoints (pointsMatrix) {
    return pointsMatrix.join(' ')
  }

  renderPiece () {
    const polygon = []

    for (let i = 0; i < 5; i++) {
      polygon.push(<Polygon {...this.getPolygonProps(i)} />)
    }

    return polygon
  }

  render () {
    return (
      <g transform={this.props.translateTransform}>
        {this.renderPiece()}
      </g>
    )
  }
}

export default Piece
