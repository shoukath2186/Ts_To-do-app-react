//import React from 'react'
import { Button } from './Button'
import { ItemsType,SetItemType } from '../TypeOfData/datatype'

type Model={
    item:ItemsType[],
    setItem:SetItemType<ItemsType[]>
}


export const ItemsSet= ({setItem,item}:Model) => {

    function handilDelete(id:string){
        setItem(v=>v.filter((v)=>v.id!==id))
      }

  return item.map((data)=>(
    <div key={data.id} className='mb-2 boar rounded-[10px] border-2 border-black h-12 flex items-center justify-between p-4'>
    <p className='text-2xl'>{data.value}</p>
    <Button submitHandiler={()=>handilDelete(data.id)} style='text-red-900' child='delete'/>
  </div>
   ))
}
