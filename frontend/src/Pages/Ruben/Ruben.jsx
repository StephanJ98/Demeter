import React, { useState } from 'react'
import styles from './Ruben.module.css'

import CustomP from './CustomP'

export default function Ruben() {
    const [count, setCount] = useState(1)

    /*
<p>- El desafio consiste en tener un div que ocupe el 50% de la pantalla de alto y ancho.</p> V
<p>- Que este div este centrado en el centro de la pantalla y que tenga un fondo de color distinto a blanco.</p> V
<p>- Dentro de este div habra un un boton, un campo de texto.</p>
<p>- En interno tendras una variable que este inicializada a 1.</p>
<p>- Cada vez que pulses el boton la variable se incrementara de 1.</p>
<p>- Dentro del boton debes mostrar el valor de la variable.</p>
<p>- Y dentro del campo de texto deves mostrar el valor de la variables x2.</p>
*/

    return (
        <div id={styles.padre}>
            <div id={styles.divContainer}>
                <button className={styles.btn} onClick={() => setCount(count + 1)}>{count}</button>
                <CustomP count={count} />
            </div>
        </div>
    )
}