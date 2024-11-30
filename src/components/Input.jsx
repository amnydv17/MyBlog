import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    // all input comming  as a props
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()//create a unique id for connect to label and input field
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}  // pass ref that get by as a prop from user it give ref to your parent component and get ref for state
            {...props}
            id={id}  // connect label and inputfield
            />
        </div>
    )
})

export default Input