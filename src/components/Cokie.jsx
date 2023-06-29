import Author from "./Author"

const Cokie =({cokieData})=>{

          
  return ( 
      
      <div className="fortune-cokie">
            
          <h2>{cokieData.phrase}  </h2>
         
       <Author authorData={cokieData}/>
         
      </div>
      
  )
}

export default Cokie