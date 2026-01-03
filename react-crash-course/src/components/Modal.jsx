import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';

function Modal({children, onClose}) {
    const navigate = useNavigate();
    function handleClose() {
        navigate(-1);
    }
    return <>
        <div className={styles.backdrop} onClick={handleClose}></div>
        <dialog open className={styles.modal}>
            {children}
        </dialog>
    </>
}

export default Modal;