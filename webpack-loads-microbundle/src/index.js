import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import MyMicroBundle from '@mymicrobundle'

import './index.scss'

const App = () => {
  const [session, setSession] = useState('some session value')
  return (
    <div>
      <h1>Hello</h1>
      <MyMicroBundle session={session} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
