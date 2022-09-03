import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8080/clients/'

const CompEditBlog = () => {
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            name: name,
            telephone: telephone,
            address: address
        })
        navigate('/')
    }

    useEffect( ()=>{
        getClientById()
    },[])

    const getClientById = async () => {
        const res = await axios.get(URI+id)
        setName(res.data.name)
        setTelephone(res.data.telephone)
        setAddress(res.data.address)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
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
            <button type="submit" className="btn btn-primary"><i className="fa-regular fa-pen-to-square"></i> Actualizar</button>
            <Link to="/" className='btn btn-primary'><i className="fa-solid fa-house"></i> volver</Link>
        </form>
    </div>
    )

}

export default CompEditBlog