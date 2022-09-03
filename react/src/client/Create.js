import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8080/clients/'

const CompCreateClient = () => {
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            name: name,
            telephone: telephone,
            address: address
        })
        navigate('/')
    }   

    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                     <label className='form-label'>Teléfono</label>
                    <textarea
                        value={telephone}
                        onChange={ (e)=> setTelephone(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                     <label className='form-label'>Dirección</label>
                    <textarea
                        value={address}
                        onChange={ (e)=> setAddress(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'><i className="fa-solid fa-plus"></i> Guardar</button>
                <Link to="/" className='btn btn-primary'><i className="fa-solid fa-house"></i> volver</Link>
           </form>
        </div>
    )
}

export default CompCreateClient