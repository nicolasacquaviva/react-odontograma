import React from 'react'
import Piece from './Piece'
// import Text from './Text'

const T_ROW_PIECES = 8
const B_ROW_PIECES = 5

class PieceRow extends React.Component {
  getPieceProps (index) {
    return {
      key: index,
      translateTransform: `translate(${this.xAxisTranslate},${this.yAxisTranslate})`
    }
  }

  renderPieceRow () {
    const pieces = []
    let piecesQuantity

    switch (this.props.rowPosition) {
      case 'L':
        this.xAxisTranslate = 0
        break
      case 'R':
        this.xAxisTranslate = 210
        break
    }

    switch (this.props.rowId) {
      case '1':
        this.yAxisTranslate = 0
        break
      case '2':
        this.yAxisTranslate = 40
        break
      case '3':
        this.yAxisTranslate = 80
        break
      case '4':
        this.yAxisTranslate = 120
        break
    }

    switch (this.props.rowType) {
      case 'T':
        piecesQuantity = T_ROW_PIECES
        break
      case 'B':
        piecesQuantity = B_ROW_PIECES
        break
    }

    if (this.props.rowType === 'B' && this.props.rowPosition === 'R') {
      this.xAxisTranslate = 210
    } else if (this.props.rowType === 'B' && this.props.rowPosition === 'L') {
      this.xAxisTranslate = 75
    }

    for (let i = 0; i < piecesQuantity; i++) {
      if (i > 0) this.xAxisTranslate += 25
      pieces.push(<Piece {...this.getPieceProps(i)} />)
    }

    return pieces
  }

  render () {
    return (
      <g transform='scale(1.5)'>
        {this.renderPieceRow()}
      </g>
    )
  }
}

export default PieceRow
