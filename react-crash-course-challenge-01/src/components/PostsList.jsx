import Post from './Post.jsx';
import styles from './PostsList.module.css';

function PostsList() {
  return <ul className={styles.posts}>
    <Post author="Samuel" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
    <Post author="Maria" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
    <Post author="José" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
    <Post author="Ana" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
    <Post author="Pedro" body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odit id nobis officiis expedita ipsam quae esse." />
  </ul>;
}

export default PostsList;