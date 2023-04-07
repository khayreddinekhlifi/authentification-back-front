import React from "react";
import{Link} from "react-router-dom";
import  {useState} from "react";
import { useDispatch } from "react-redux";
import { addproduct } from "../JS/productSlice/productSlice";
export default function Navbar({handleAdd}) {
  const [show, setshow] = useState(false)
  const [newM, setnewM] = useState({
    name:"",
    image:"",
    cathegorie:"",
    price:"",
  })
  const dispatch=useDispatch()
  return (
    <div className="navbar">
      <h1>
        affare.tn
      </h1>
      <div className="link">
        <ul>
        <Link to="/"><li className="active">page acceuill</li></Link>
        <Link to="/réference"><li>commande par référence</li></Link>
          <li >obtenir un devis</li>
          <Link to="/Contactez"><li>nous contacter</li></Link>
          <div>
          <button  className="ADD"onClick={()=>setshow(true)}>Add new phone</button>
          {show &&(
         <div className='model-bg'> 
         <div className="model-content">
           <span onClick={()=>setshow(false)}>X</span>
           <input type="text" placeholder="name" onChange={(e)=>setnewM({...newM,name:e.target.value})}/>
           <input type="text" placeholder="image" onChange={(e)=>setnewM({...newM,image:e.target.value})}/>
           <input type="text" placeholder="cathegorie"onChange={(e)=>setnewM({...newM,cathegorie:e.target.value})}/>
           <input type="text" placeholder="price" onChange={(e)=>setnewM({...newM,price:e.target.value})}/>
           <button className="button"onClick={()=>{
            dispatch(addproduct(newM));
            setshow(false);
            }}>Add</button>
         </div>
       </div>
       )}
          </div>
        </ul>
      
        </div>
      </div> 
          
          
          
          
         

  );
}