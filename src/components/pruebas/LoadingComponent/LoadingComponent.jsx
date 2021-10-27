import React, { useState } from 'react'

const LoadingComponent = ({otro="p-2"}) => {

    const [loading, setLoading] = useState(false)
    const [condicion, setCondicion] = useState(false)
    const cambiarEstado = () => {
        {!condicion ? setCondicion(true) : setCondicion(false)}
        
    } 
    
    return (
        <div className="text-center">


            <h2 
                onClick={()=>cambiarEstado()}
                className={  (condicion === true) ? `btn btn-success ${otro || ""}` : "btn btn-danger"}
                style={ {fontFamily : condicion ? "Arial" : "Times New Roaman"}}
            >
                soy un h2 con cambios de estado
            </h2>

        </div>

    )
}

export default LoadingComponent