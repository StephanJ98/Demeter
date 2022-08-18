import React from 'react'
//import styles from './Ruben.module.css'

export default function Ruben() {

    /**
     * Prerequisitos:
     *  - Tener el backend encendido ( cd Demeter/backend & yarn dev )
     * 
     * Hay una ruta expuesta en la API http://localhost:4000/ruben a la que puedes
     * llamar mismamente desde el navegador.
     * 
     * Esta ruta devuelve datos en JSON , el objeto que devuelve se llama 'letras'
     * y contiene un array con el abecedario en un orden aleatorio que cambia a cada llamada.
     * 
     * Ejercicio:
     * 1- Crear un cuadro que ocupe 50% de alto de la pantalla y 80% - 20 pixeles de ancho de la pantalla.
     * 
     * 2- Centrar este cuadro en la esquina inferior derecha, pero separado de 10 pixeles le los bordes
     * derecho e inferior de la pantalla.
     * 
     * 3- Hacer que los los 4 bordes del cuadro tengan 2 pixeles de ancho, sean de estilo solido y sean de colores
     * distintos entre ellos.
     * 
     * 4- Hacer que cuando se cargue por primera vez el componente Ruben se haga una llamada a la ruta de la API
     * especificada.
     * 
     * 5- Ordenar el array del objeto JSON y mostrar las 10 primeras letras concatenadas dentro del cuadro construido.
     */

    return (
        <div>
            Los desafios de Ruben
        </div>
    )
}