import React,{useState} from 'react'
import'./XpEcole.css'

const XpEcole = () => {
    const [editMode,setEditMode]=useState(false);
    const [ecole,setEcole]=useState([
        {
           titre:'Développeur Web App',
           annee:'2024-2024',
           description:'Formation intensives de 01-2024 à 07-2024 à Technofutur TIC Gosselies ',
        },
        {
            titre:'Développeur Web App',
            annee:'2024-2024',
            description:'Projet : Site Communautaire sur Final Fantasy ⚔️',
        },
        {
            titre:'Développeur .NET',
            annee:'2023-2024',
            description:'Formation intensives de 07-2023 à 01-2024 à Technofutur TIC Gosselies',
        },
        {
            titre:'Développeur .NET',
            annee:'2023-2024',
            description:'Projet : Réveil ⏰',
        },
        {
            titre:'Algorithmes',
            annee:'2023-2023',
            description:'Formation : découverte de la programmation en python 🐍',
        },
        {
            titre:'Administrateur Système Réseaux Orienté Cloud',
            annee:'2021-2022',
            description:'Formation intensives Formation de Avril 2021 à Janvier 2022 à technobel Ciney',
        },
        {
            titre:'',
            annee:'2021-2022',
            description:'Maker Hub 2021 Stockage cloud',
        },
        {
            titre:'',
            annee:'2021-2022',
            description:'PlayZone 2021 PlantC',
        },
        {
            titre:'',
            annee:'2021-2021',
            description:'Formation It Essential : technobel',
        },
        {
            titre:'Enseignement Secondaire Inférieur Professionnel',
            annee:'2007-2008',
            description:'Electricité bâtiment aux Aumôniers du travail – Charleroi',
        },


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
                        <form onSubmit={handleChange}>
                            <input type='text' placeholder='Titre' value={ecole.titre} onChange={(e)=>handleChange(index,'titre',e.target.value)} />
                            <input type='text' placeholder='Année' value={ecole.annee} onChange={(e)=>handleChange(index,'annee',e.target.value)} />
                            <input className='inputLargeur' type='text' placeholder='Description' value={ecole.description} onChange={(e)=>handleChange(index,'description',e.target.value)} />
                        </form>
                    ):(
                        <div>
                            <p>---------------------------------------------------------------</p>
                            <h3 className='textLigne'>{ecole.titre}</h3>
                            <br/>
                            <p>{ecole.annee}  :  {ecole.description}</p>
                            <button onClick={()=>handleDelete(index)} className='btn'>Delete</button>


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
