import React,{useState} from 'react'
import'./XpTravail.css'

const XpTravail=()=>{
    const [editMode,setEditMode]=useState(false);

    const [experiences,setExperiences]=useState([
        {
            titre:'System Engineer',
            annee:'2022-2022',
            description:'FPIE (P.F.I) Connectis à Uccle'
        },
        {
            titre:'Tri/livreur-Courrier',
            annee:'2022-2022',
            description:'CDD : D.V.Médical'
        },
        {
            titre:'Magasinier',
            annee:'2020-2021',
            description:'MédiaMarkt, Lidl, ALDI (intérims)'
        },
        {
            titre:'INSTALLATEUR SYSTEME ALARME ET CAMÉRA SURVEILLANCE',
            annee:'2018-2019',
            description:'ABsecurity / AMS Allessandrini / IBG security'
        },
        {
            titre:'Magasinier',
            annee:'2015-2018',
            description:'Randstad, Daoust, Abalone ( interims)'
        },
        {
            titre:'Magasinier',
            annee:'2012-2014',
            description:'Alarme International System à Gosselies'
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
        const updateExperience=[...experiences];
        updateExperience[index][key]=value;
        setExperiences(updateExperience);
    }
    const handleDelete=(index)=>{
        const updateExperience=experiences.filter((_,i)=>i !== index);
        setExperiences(updateExperience);
    }
    const handleAddExperience=() => {
        const newExperience={
            titre:'',
            annee:'',
            description:''
        };
        setExperiences([...experiences, newExperience]);
        setEditMode(true);

    }
    return(
        <div className="global">
            <h2>XP TRAVAIL</h2>
            {experiences.map((experience,index)=>(
                <div key={index}>

            {editMode ?(
                <form onSubmit={handleChange}>
                    <input type="text" placeholder="Titre" value={experience.titre} onChange={(e) => handleChange(index,'titre',e.target.value)}/>
                    <input type="text" placeholder="Année" value={experience.annee} onChange={(e) => handleChange(index,'annee',e.target.value)}/>
                    <input className='inputLargeur' type="text" placeholder="Description" value={experience.description} onChange={(e) => handleChange(index,'description',e.target.value)}/>
                </form>
            ) : (
                <div>
                    <p>---------------------------------------------------------------</p>
                    <h3 className='textLigne'>{experience.titre}</h3>
                    <br/>
                    <p>{experience.annee} : {experience.description}</p>
                    <button onClick={()=>handleDelete(index)} className='btn'>Delete</button>


                </div>
            )}
        </div>
            ))}
            {editMode ? (
                <>
                    <br/>
                <button type="submit" onClick={handleSubmit} className='btn'>Submit</button>
                </>
            ) : (
                <>
                    <br/>
                <button onClick={handleEdit} className='btn'>Edit</button>
                </>

            )}
                <button onClick={handleAddExperience} className='btnAdd'>Ajout New Experience </button>
        </div>
    )
}

export default XpTravail;