import { MdPostAdd, MdMessage } from 'react-icons/md';
import styles from './MainHeader.module.css';

function MainHeader({ onCreateNewPost }) {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <MdPostAdd />
                React Poster
            </h1>
            <p>
                <button className={styles.button} onClick={onCreateNewPost}>
                    <MdPostAdd size={18} />
                    New Post
                </button>
            </p>
        </header>
    )
}

export default MainHeader;