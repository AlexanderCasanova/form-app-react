import { useState } from "react"

export const useForm=(initialForm={username:"",email:"",password:""})=>{
    const[formData,setFormData]=useState(initialForm)
    const onInputChange=(event :any)=>{
        const {name,value}=event.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    
    return{
        formData,
        onInputChange
    }
}