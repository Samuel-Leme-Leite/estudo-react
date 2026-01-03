
import { useState } from 'react';   // useState é uma função que retorna um array com dois elementos: o estado atual e uma função para atualizar esse estado. 
// Utilizamos a desestruturação de arrays para extrair esses dois elementos em variáveis separadas.
import { Link } from 'react-router-dom';
import styles from './NewPost.module.css';
import Modal from '../components/Modal.jsx';


function NewPost(props) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function handleBodyChange(event) {
        setEnteredBody(event.target.value);
    }

    function handleAuthorChange(event) {
        setEnteredAuthor(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        props.onAddPost(postData);
        props.onCancel();
    }
    return <Modal>
        <form className={styles.form} onSubmit={handleSubmit}>
            <p>
                <label htmlFor="body">Texto</label>
                <textarea id="body" required name="body" rows={3} onChange={handleBodyChange}></textarea>
            </p>
            <p>
                <label htmlFor="name">Seu Nome</label>
                <input type="text" id="name" required name="name" onChange={handleAuthorChange} />
            </p>
            <p className={styles.actions}>
                <Link type="button" to="..">Cancelar</Link>
                <button type="submit">Enviar</button>
            </p>
        </form>
    </Modal>
}



export default NewPost;