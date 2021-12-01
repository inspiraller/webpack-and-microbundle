import React, {useState} from 'react'
import ReactDOM from 'react-dom'
// react and reactdom must com before @mymicrobundle

import MyMicroBundle from '@mymicrobundle'
import '@mymicrobundle/dist/index.css'

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
