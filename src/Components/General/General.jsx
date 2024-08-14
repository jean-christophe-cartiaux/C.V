import React,{useState} from 'react'
import './General.css'
const General=()=>{
    const [editMode,setEditMode]=useState(false);
    const[nom,setNom]=useState('  Cartiaux');
    const[prenom,setPrenom]=useState('  Jean-Christophe')
    const[email,setEmail]=useState('  cartiaux.jc@gmail.com');
    const[phone,setPhone]=useState('  +32 472540065');

    const handleSubmit=(e)=>{
        e.preventDefault();
        setEditMode(false)
    };
    return(
        <div className='global'>
            <h2>Information Général</h2>
            {editMode ?(
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Nom" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                    <input type="text" placeholder="Prenom" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="GSM" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            ) :(
                <div>
                    <p> Name:{nom}</p>
                    <p> Prenom:{prenom}</p>
                    <p> Email:{email}</p>
                    <p> GSM:{phone}</p>
                    <button onClick={()=>setEditMode(true)}>Edit</button>
                </div>
            )
            }
        </div>
    )
}

export default General;