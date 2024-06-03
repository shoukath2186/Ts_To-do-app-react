 import { SetItemType } from "../TypeOfData/datatype"
 
 type InputType={
    setInputvalue:SetItemType<string>,
    inputvalue:string,
    type:'text'|'color'


 }

export const Input=({type,setInputvalue,inputvalue}:InputType)=>{

    return(
        <input type={type} onChange={(event)=>setInputvalue(event.target.value)} value={inputvalue} className='w-full mb-6 mt-5 h-9 rounded-[10px] border-2 border-black'  />
    )
       

}