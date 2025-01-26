
import { ButtonProps, sizeProps, varientProps } from './index'


function Button(props: ButtonProps) {
  return (
   <button type={props.type} className={`${varientProps[props.variant]} ${sizeProps[props.size]}  ${props.className}`} onClick={props.onclick}>
   <div className='flex gap-x-3 items-center'>
    {props.startIcon}
    {props.text}
    {props.endIcon}
   </div>
   </button> 
  )
}

export default Button