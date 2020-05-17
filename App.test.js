import React from 'react'
import ReactDOM from "react-dom";
import App from './src/component/App'

describe('App Test', () => {
  it('should change backgroundColor after click', async () => {
    ReactDOM.render(<App />, document.body)
    expect(document.querySelector('button').style['backgroundColor']).to.equal('red')
    document.querySelector('button').click()
    expect(document.querySelector('button').style['backgroundColor']).to.equal('blue')
  })
})
