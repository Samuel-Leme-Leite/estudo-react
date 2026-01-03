import { Link, Form, redirect } from 'react-router-dom';
import styles from './NewPost.module.css';
import Modal from '../components/Modal.jsx';


function NewPost(props) {
    return <Modal>
        <Form method='post' className={styles.form}>
            <p>
                <label htmlFor="body">Texto</label>
                <textarea id="body" required name="body" rows={3} ></textarea>
            </p>
            <p>
                <label htmlFor="name">Seu Nome</label>
                <input type="text" id="name" required name="author" />
            </p>
            <p className={styles.actions}>
                <Link type="button" to="..">Cancelar</Link>
                <button type="submit">Enviar</button>
            </p>
        </Form>
    </Modal>
}



export default NewPost;

export async function action(data) {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    const responst = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    return redirect('/');
}