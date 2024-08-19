import React,{useState} from 'react'
import'./XpEcole.css'

const XpEcole = () => {
    const [editMode,setEditMode]=useState(false);
    const [ecole,setEcole]=useState([
        {
           titre:'test',
           annee:'1992',
           description:'42',
        }
    ])

    const handleSubmit=(e)=>{
        e.preventDefault();
        setEditMode(false);
    }
    const handleEdit=()=>{
        setEditMode(true);
    }
    const handleChange=(index,key,value)=>{
        const update=[...ecole];
        update[index][key]=value;
        setEcole(update);
    }
    const handleDelete=(index)=>{
        const update=ecole.filter((_,i)=>i !== index);
        setEcole(update);
    }
    const handleAdd=()=>{
        const newEcole={
            titre:'',
            annee:'',
            description:'',
        };
        setEcole([...ecole,newEcole]);
        setEditMode(true);
    }
    return(
        <div className="global">
            <h2> Ecole et Formation</h2>
            {ecole.map((ecole,index)=>(
                <div key={index}>
                    {editMode ?(
                        <form onSubmit={handleChange}></form>
                    ):(
                        <div>

                        </div>
                    )}
                </div>
            ))}
            {editMode?(
                <>
                    <br/>
                    <button type="submit" onClick={handleSubmit} className='btn'>Submit</button>
                </>
            ):(
                <>
                    <br/>
                    <button onClick={handleEdit} className='btn'>Edit</button>
                </>
            )}
            <button onClick={handleAdd} className='btnAdd'>Ajout New ECole / Formation </button>
        </div>
    )
}

export default XpEcole
