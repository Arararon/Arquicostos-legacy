import "../style/obracard.css"


function ObraCard({obra,handleVerMas,handleDuplicate,handleDelete,handleGrupos}){

    return(
        <div className="obraCard">
            <div className="obraImagen"/>
            <div className="obraInfo">
                <h3>{obra.name}</h3>
                <div>{obra.calle} {obra.numero}, {obra.municipio}, {obra.estado} C.P. {obra.codigoPostal}</div>
            </div>
            <div className="ObraButtonBar">
                <button onClick={()=>handleVerMas()}>Ver más</button>
                <button onClick={()=>handleDuplicate()}>duplicar</button>
                <button onClick={() => handleDelete()}>eliminar</button>
                <button onClick={() => handleGrupos()}>grupos de trabajo</button>
            </div>

        </div>
    )

}

export default ObraCard