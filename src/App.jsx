import './App.css'
import Cokie from './components/Cokie'
import phrases from './data/phrases.json'
import { useState } from 'react'
import Author from "./components/Author"


function App() {
  const backs = ['url(./fondo1.png)', 'url(./fondo2.png)', 'url(./fondo3.png)', 'url(./fondo4.png)' ]  
  const [index, setIndex]= useState(0)


  const changePhrase =() =>{
   
      setIndex(Math.floor(Math.random()*15))
    }

    const images=Math.floor(Math.random()*backs.length)
   
  
return(

<div className="App" style={{backgroundImage: backs[images] }}>
 <div className='title'><h1>-Galleta de la Fortuna-</h1></div>   
  <Cokie cokieData={phrases[index]}/>

  
<button className="Boton" onClick={changePhrase}>
 Probar Suerte
</button>

</div>
)  
}

export default App
