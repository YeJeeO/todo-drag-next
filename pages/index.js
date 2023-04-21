import Form from "../components/Form"
import { DataList } from "../components/MyContext"
import ToDoList from "../components/ToDoList"


export default function HomePage(){

    return <><h1>Let's begin...</h1>
    <DataList>
      <Form/>
    <ToDoList/>
    </DataList>
    
    </>
  }