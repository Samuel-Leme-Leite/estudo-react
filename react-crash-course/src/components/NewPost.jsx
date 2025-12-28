
import { useState } from 'react';   // useState é uma função que retorna um array com dois elementos: o estado atual e uma função para atualizar esse estado. 
                                    // Utilizamos a desestruturação de arrays para extrair esses dois elementos em variáveis separadas.
import styles from './NewPost.module.css';


function NewPost(props) {
    
    return <form className={styles.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required name="body" rows={3} onChange={props.onBodyChange}></textarea>
        </p>
        <p>{props.enteredBody}</p>
        <p>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required name="name" onChange={props.onAuthorChange} />
        </p>
    </form>
}



export default NewPost;