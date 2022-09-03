import axios from 'axios'
import {usesState, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8080/clients/'

const CompShowClient = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        getClients()
    }, [])

    const getClients = async () => {
        const res = await axios.get(URI)
        setClients(res.data)
    }

    const deleteClient = async (id) => {
        axios.delete(`${URI}${id}`)
        getClients()
    }

    return(
        <div className='container'>
            <div className='row pb-2'>
                <div className='col-auto'><h3 className='mb-0'>Tabla de clientes</h3></div>
                <div className='col'></div>
                <div className='col-auto'><Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i> Crear cliente</Link></div>
            </div>
            <div className='row'>
                <div className='col'>
                    
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Dirrección</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            { clients.map((client) => (
                                <tr key={client.id}>
                                    <th scope="row">{ client.id }</th>
                                    <td>{ client.name }</td>
                                    <td>{ client.address }</td>
                                    <td>{ client.telephone }</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <Link to={`/edit/${client.id}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i> Editar</Link>
                                            <button onClick={() => deleteClient(client.id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i> Eliminar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default CompShowClient
