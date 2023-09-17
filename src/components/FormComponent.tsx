import { FormEvent} from "react"
import { useForm } from "../hooks/FormHook"


export const FormComponent = () => {
    const initialForm={username:"",email:"",password:""}
    const{formData,onInputChange} =useForm(initialForm)
    const {username,email,password}=formData
    const onSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(formData)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Nombre:</label>
                <input type="text" id="username" name="username" value={username} onChange={onInputChange} required />

                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" value={email} onChange={onInputChange} required />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" value={password} onChange={onInputChange} required />

                <button type="submit">Enviar</button>
            </form>
        </>
                    )
}