import { useState } from 'react'
import ImageContainer from './components/imageContainer'
import { DragDropContext } from "react-beautiful-dnd"
import Data from './data'
import SearchBox from './components/searchbox'

function App() {
  return (
    <div className="">
      <SearchBox/>
      <ImageContainer images={Data}/>
    </div>
  )
}

export default App
