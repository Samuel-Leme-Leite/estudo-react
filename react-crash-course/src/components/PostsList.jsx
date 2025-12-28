import { useState } from 'react';
import Post from './Post.jsx';
import Modal from './Modal.jsx';
import NewPost from './NewPost.jsx';
import styles from './PostsList.module.css';

function PostsList({ modalIsVisible, handleHideModal }) {
  const [enteredBody, setEnteredBody] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse.');
  const [enteredAuthor, setEnteredAuthor] = useState('Samuel');

  function handleBodyChange(event) {
    setEnteredBody(event.target.value);
  }

  function handleAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }


  return <>
    {
      modalIsVisible && <Modal onClose={handleHideModal}>
        <NewPost onBodyChange={handleBodyChange} onAuthorChange={handleAuthorChange} />
      </Modal>
    }

    <ul className={styles.posts}>
      <Post author={enteredAuthor} body={enteredBody} />
      <Post author="Maria" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
      <Post author="José" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
      <Post author="Ana" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
      <Post author="Pedro" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
      <Post author="Pedro" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
      <Post author="Pedro" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
      <Post author="Pedro" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
      <Post author="Pedro" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
      <Post author="Pedro" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
    </ul>
  </>;
}



export default PostsList;