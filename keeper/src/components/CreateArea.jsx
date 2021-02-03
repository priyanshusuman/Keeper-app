import React from "react";

function CreateArea(props) {
  const [data, Setdata]= React.useState({
    title : "",
    content: ""
  })

function handleChange(event){
 const {name, value}=event.target;
Setdata(prevVal=>{
return {
...prevVal,
[name]: value
}
})
}

function SaveData(event){
 props.onAdd(data);
 Setdata({
  title : "",
  content: ""
})
 event.preventDefault();
}

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={data.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={data.content} placeholder="Take a note..." rows="3" />
        <button onClick={SaveData}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
