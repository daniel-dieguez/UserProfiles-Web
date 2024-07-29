import React from 'react'
import Form from './components/Form'
import NewProfile from './utils/NewCart'
import Style from '../src/style/style.module.css' 
import Prueba from './parctica/prueba'
import UpLoad from './components/UpLoad'
import PruebaCart from './parctica/PruebaCart'

export default function App( title) {
  return (
    <div>
    <div className={Style.body}>
      <Prueba title="todo ok bro"></Prueba>
      <span>asd</span>
        <Form></Form>
        <NewProfile ></NewProfile>
        <PruebaCart></PruebaCart>
        <UpLoad></UpLoad>

        </div>
    </div>
  )
}
