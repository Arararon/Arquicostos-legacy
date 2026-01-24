import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import api from "../api";


function Listados(props){
    const{obraId}=useParams();
    const[listados,setListados]=useState([]);
    const columnas = {
        materiales: ["Clave", "Descripción", "Cantidad", "Unidad", "Costo Unitario", "Total"],
        mano_obra: ["Clave", "Descripción", "Cantidad", "Unidad", "Salario", "Total"],
        equipo_herramienta: ["Clave", "Descripción", "Cantidad", "Unidad","Costo Unitario", "Total"]
    };
    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
    });


    useEffect(()=>{
        getListados();
    },[]);


    const getListados=()=>{
        api
            .get(`/api/obras/${obraId}/cuantificacion/`)
            .then((res)=>res.data)
            .then((data)=>{
                setListados(data);
                console.log(data)
            })
            .catch((err)=>{
                console.log("Error fetching Listados",err);
            });
    }


    return(
        <div>
            <h2>Materiales</h2>
            <table>
            <thead>
                <tr>
                    {columnas.materiales.map((col) => (
                        <th key={col}> <strong>{col}</strong></th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {listados.materiales!=undefined?
                    listados.materiales.map((insumo, i) => (
                        <tr key={i}>
                            <td>{insumo.clave}</td>
                            <td>{insumo.descripcion}</td>
                            <td>{insumo.cantidad_total}</td>
                            <td>{insumo.unidad}</td>
                            <td>{formatter.format(parseFloat(insumo.costoUnitario).toFixed(2))}</td>
                            <td>{formatter.format((insumo.costoUnitario*insumo.cantidad_total).toFixed(2))}</td>
                        </tr>
                )):
                <tr>
                    <td colSpan={6}>cargando...</td>
                </tr>}
            </tbody>
        </table>

        <h2>Mano de Obra</h2>
            <table>
            <thead>
                <tr>
                    {columnas.mano_obra.map((col) => (
                        <th key={col}> <strong>{col}</strong></th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {listados.mano_obra!=undefined?listados.mano_obra.map((insumo, i) => (
                    <tr key={i}>
                    <td>{insumo.clave}</td>
                    <td>{insumo.descripcion}</td>
                    <td>{insumo.cantidad_total}</td>
                    <td>{insumo.unidad}</td>
                    <td>{formatter.format(parseFloat(insumo.salario).toFixed(2))}</td>
                    <td>{formatter.format((insumo.salario*insumo.cantidad_total).toFixed(2))}</td>
                    </tr>
                )):<tr>
                    <td colSpan={6}>cargando...</td>
                </tr>}
            </tbody>
        </table>
        <h2>Equipo y Herramienta</h2>
            <table>
            <thead>
                <tr>
                    {columnas.equipo_herramienta.map((col) => (
                        <th key={col}> <strong>{col}</strong></th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {listados.equipo_herramienta!=undefined?listados.equipo_herramienta.map((insumo, i) => (
                    <tr key={i}>
                    <td>{insumo.clave}</td>
                    <td>{insumo.descripcion}</td>
                    <td>{insumo.cantidad_total}</td>
                    <td>{insumo.unidad}</td>
                    <td>{formatter.format(parseFloat(insumo.costoUnitario).toFixed(2))}</td>
                    <td>{formatter.format((insumo.costoUnitario*insumo.cantidad_total).toFixed(2))}</td>
                    </tr>
                )):<tr>
                    <td colSpan={6}>cargando...</td>
                </tr>}
            </tbody>
        </table>
        </div>

        

    
        
    )

}
export default Listados