

const InputBox = ({type, placeholder, reference}: {type: string, placeholder: string, reference?: any}) => {
  return (
    <div>
        <input ref={reference} type={type} placeholder={placeholder} className='border border-slate-400 rounded-lg px-2' />
    </div>
  )
}

export default InputBox