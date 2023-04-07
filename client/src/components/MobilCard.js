import { useDispatch } from "react-redux";
import { deleteproduct, getproduct, updateproduct } from "../JS/productSlice/productSlice";
import { useEffect, useState } from "react";

export default function MobilCard({ mobil }) {
  const dispatch = useDispatch();
  const [showedit, setshowedit] = useState(0)
  const [editprod, seteditprod] = useState({
image:mobil.image,
name:mobil.name,
cathegorie:mobil.cathegorie,
price: mobil.price,
  }) 
   const [ping, setping] = useState(false)
  useEffect(() => {
    dispatch(getproduct())
  }, [ping])

  return (
  <div className="mobil-liste">
    <div className="liste">
      <img src={mobil.image} alt=""/>
      <h4>{mobil.name}</h4>
      <h4>{mobil.cathegorie}</h4>
      <h4>{mobil.price}</h4>
      <div className="handle-counte" >
<div className="edit-suprim-btn">
  <button className="edt-btn" onClick={()=>setshowedit(1)}>editer</button>
{showedit===1?(  
  <div className="inp-btn">
<input type="text" placeholder={mobil.name}  onChange={(e)=>seteditprod({...editprod,name:e.target.value})}/>
,<button className="ok" onClick={()=>(dispatch(updateproduct({id:mobil?._id,product:editprod})),setping(!ping))}>ok</button>
</div>
) :null}

  <button className="supprim-btn" onClick={()=>(dispatch(deleteproduct({id:mobil?._id})),setping(!ping))}>suprimer</button>
</div>
</div>
    </div> 
    </div>
  );
}
