import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import CreateNote from "./CreateNote"
import Note from "./Note"

const App=()=>{
  const [addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    // alert("hi")
    setAddItem((prevData)=>{
      return [...prevData,note];
    })
  }

  const onDelete=(id)=>{
    setAddItem((prevData)=>{
      return(
        prevData.filter((current,idx)=>{
          return idx!==id;
        })
      )
    })
  }
  return (
  <>
    <Header/>
    <div className="temp">
    <CreateNote passNote={addNote}/>
    {addItem.map((val,index)=>{
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
    })}
    </div>
    <Footer/>
  </>
);};

export default App;