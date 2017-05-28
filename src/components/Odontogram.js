import React from 'react'
import PieceRow from './PieceRow'

class Odontogram extends React.Component {
  renderOdontogram () {
    return (
      <g>
        <PieceRow rowType='T' rowId='1' rowPosition='R' />
        <PieceRow rowType='T' rowId='1' rowPosition='L' />
        <PieceRow rowType='T' rowId='2' rowPosition='R' />
        <PieceRow rowType='T' rowId='2' rowPosition='L' />

        <PieceRow rowType='B' rowId='3' rowPosition='R' />
        <PieceRow rowType='B' rowId='3' rowPosition='L' />
        <PieceRow rowType='B' rowId='4' rowPosition='R' />
        <PieceRow rowType='B' rowId='4' rowPosition='L' />
      </g>
    )
  }

  render () {
    return this.renderOdontogram()
  }
}

export default Odontogram
