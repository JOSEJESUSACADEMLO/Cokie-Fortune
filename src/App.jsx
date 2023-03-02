import './App.css'
import Cokie from './components/Cokie'
import phrases from './data/phrases.json'
import { useState } from 'react'



function App() {
  const backs = ['url(./fondo1.jpg)', 'url(./fondo2.jpg)', 'url(./fondo3.jpg)', 'url(./fondo4.jpg)' ]  
  const [index, setIndex]= useState(0)
 // const [index2, setIndex2]= useState2(0)

  const changePhrase =() =>{
   
      setIndex(Math.floor(Math.random()*15))
    }

    const images=Math.floor(Math.random()*backs.length)
   
  
return(

<div className="App" style={{backgroundImage: backs[images] }}>
 <div className='title'><h1>-Galleta de la Fortuna-</h1></div>   
  <Cokie cokieData={phrases[index]}/>

  
<button className="Boton" onClick={changePhrase}>
 Nueva Frase
</button>


</div>
)  
}

export default App
