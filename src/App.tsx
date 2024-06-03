import { useState } from 'react'
import './App.css'
import Image from './component/image.tsx'
import {Input} from './component/input.tsx'
import { Button } from './component/Button.tsx'
import { ItemsSet } from './component/Items.tsx'
import { ItemsType } from './TypeOfData/datatype.ts'
 

 function App() {

  const [items,setItems]=useState<ItemsType[]>([]);
  const [inputvalue,setInputvalue]=useState<string>('')

  const submitHandiler=(event:React.FormEvent)=>{
        event.preventDefault()
        setItems(p=>[...p,{value:inputvalue , id:new Date().toString()}])
        setInputvalue('')
  }

  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
     <Image/>
      <div className='w-[400px] flex flex-col '>
         <Input type='text' inputvalue={inputvalue} setInputvalue={setInputvalue}/>
         <Button submitHandiler={submitHandiler} style='mb-3 w-full rounded-[10px] text-center text-white bg-gray-700 h-9' child='Submit' ></Button>
      </div>
        <h1 className='text-[30px] mb-3'>ITEM LIST</h1>

      <div className='w-[700px] flex flex-col'>

       <ItemsSet item={items} setItem={setItems}/>

      </div>

    </div>
  )
}

export default App
