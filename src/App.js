/* eslint-disable no-redeclare */

import './App.css';
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";


function App() {

  const [data,setData] = useState("")
  const [createData,setCreateData] = useState([])
   
  function newData(event) {
    event.preventDefault()
    setData(event.target.value);
   }
  
  function add(e){
  
   setCreateData((prevState) => {
    // console.log("uuidv4--- ", uuidv4());
    return [{data,id:uuidv4(),isChecked:false}, ...prevState]
    });
    setData("")
  }

  let date=new Date()
  let text = date.toLocaleDateString()


  function changeData(id){
    console.log(id)
    let newData = createData.map((ele)=>{
      if (id===ele.id){
        return{...ele,
               isChecked:!ele.isChecked}
      }else{
        return ele
      }
   })
   
    setCreateData(newData)
  }

  function deleteTasks(id){
    console.log(id)
    const newData = createData.filter((elem) => elem.id !== id)
    console.log("newData--- ", newData);
  // let index = createData.map((ele)=>{
  //   return ele.id
  // }).indexOf(id)
  // let c = createData.splice(index,1)
  // let b = createData.map((ele)=>{
  //   if(id===ele.id){
  //     return c
  //   }else{
  //     return ele
  //   }

  // })
  setCreateData(newData);
  }
 
  
 return (
   <div>
     <div className="nav1">
       <p className="nav1p">Log in</p>
       <p className="navlist">+NewList</p>
     </div>
     <nav className="nav2">
       <h3 className="navhead">My to-do list {text}</h3>
       <button  className="addbtn" onClick={add}>
         Save This List
       </button>
     </nav>
     <input
       className="input" 
       type="text"
       onChange={newData}
       placeholder="Write Your Next Tasks Here...."
       value={data} 
       
     ></input>
     <br></br>
     <p className="tasks">
      
       {createData.map((ele) =>{
       return (
         <li
          style={{ textDecoration: ele.isChecked ? "line-through" : "none" }}
           className="list"
           key={ele.id}
           >
           <input onChange={()=>changeData(ele.id)} type="checkbox"></input> {ele.data}
           <button onClick={()=>deleteTasks(ele.id)}className="delbtn" type='button'>
            Delete
           </button>
           
         </li>
       )})}
     </p>
   </div>
 );
}
export default App;
