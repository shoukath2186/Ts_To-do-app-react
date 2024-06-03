
type ButtenType={
    style:string,
    child:string,
    submitHandiler: (event: React.MouseEvent<HTMLButtonElement>) => void
}


export const Button=({style,child,submitHandiler}:ButtenType) => {
  return (
    <button onClick={submitHandiler} className={style} >{child}</button>
  )
}
