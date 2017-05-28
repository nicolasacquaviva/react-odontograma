import React from 'react'
import ReactDOM from 'react-dom'
import Odontogram from './components/Odontogram'

class App extends React.Component {
  getProps () {
    return {
      // version: '1.1',
      // width: '100%',
      // height: '100%'
    }
  }

  render () {
    return (
      <div>
        <h3>Odontogram</h3>
        <svg {...this.getProps}>
          <Odontogram />
        </svg>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
