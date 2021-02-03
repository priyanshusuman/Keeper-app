import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [dataArray, SetdataArray]=React.useState([])

function Adddata(newItem){
 SetdataArray(prevVal=>{
 return [...prevVal, newItem]
 })
}

function Deletedata(id){
SetdataArray(prevVal=>{
 return prevVal.filter((Item, index)=>{
   return index !== id
 })
})

}

  return (
    <div>
      <Header />
      <CreateArea onAdd={Adddata}/>
       {dataArray.map((data, index) =>{
          return <Note key={index} id={index} title={data.title} content={data.content} delItem={Deletedata}/>
        })}

     <Footer />
    </div>
  );
}

export default App;
