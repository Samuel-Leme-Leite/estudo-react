import { useState, useEffect, use } from 'react';  // useState é uma função que retorna um array com dois elementos: o estado atual e uma função para atualizar esse estado.
                                              // useEffect é um hook que permite executar efeitos colaterais em componentes funcionais, como buscar dados ou configurar assinaturas.
import Post from './Post.jsx';
import styles from './PostsList.module.css';

import { useLoaderData } from 'react-router-dom'; 

function PostsList() {
  const posts = useLoaderData();
  
  // const [posts, setPost] = useState([]);
  // const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //   async function fetchPosts() {
  //       const response = await fetch('http://localhost:8080/posts')
  //       const resData = await response.json();
  //       setPost(resData.posts)
  //       setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, [])
  



  function handleAddPost(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    setPost((prevPosts) => {
      return [postData, ...prevPosts];
    });
    console.log(posts);
  }


  // return <>

  //   {!isFetching && posts.length > 0 && (<ul className={styles.posts}>
  //       {
  //         posts.map((postItem, index) => (
  //           <Post key={index} author={postItem.author} body={postItem.body} />
  //         ))
  //       }
  //     </ul>
  //     )}

  //   {!isFetching && posts.length === 0 && <p className={styles.noPosts}>No posts found. Maybe create one?</p>}

  //   {isFetching && (
  //     <p className={styles.noPosts}>Loading posts...</p>
  //   )}
  // </>;


  return <>

    {posts.length > 0 && (<ul className={styles.posts}>
        {
          posts.map((postItem, index) => (
            <Post key={index} author={postItem.author} body={postItem.body} />
          ))
        }
      </ul>
      )}

    {posts.length === 0 && <p className={styles.noPosts}>No posts found. Maybe create one?</p>}
  </>;
}



export default PostsList;