import React from 'react'
import Form from './components/Form'
import NewProfile from './utils/NewCart'
import Style from '../src/style/style.module.css'

export default function App( ) {
  return (
    <div>
    <div className={Style.body}>
      <h1>Ejecicio</h1>
        <Form></Form>
        <NewProfile ></NewProfile>
        

        </div>
    </div>
  )
}
