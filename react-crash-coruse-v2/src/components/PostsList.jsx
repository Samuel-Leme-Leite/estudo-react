import { useState, useEffect, use } from 'react';  // useState é uma função que retorna um array com dois elementos: o estado atual e uma função para atualizar esse estado.
                                              // useEffect é um hook que permite executar efeitos colaterais em componentes funcionais, como buscar dados ou configurar assinaturas.
import Post from './Post.jsx';
import styles from './PostsList.module.css';

import { useLoaderData } from 'react-router-dom'; 

function PostsList() {
  const posts = useLoaderData();
  
  return <>

    {posts.length > 0 && (<ul className={styles.posts}>
        {
          posts.map((postItem, index) => (
            <Post key={index} author={postItem.author} body={postItem.body} id={postItem.id} />
          ))
        }
      </ul>
      )}

    {posts.length === 0 && <p className={styles.noPosts}>No posts found. Maybe create one?</p>}
  </>;
}



export default PostsList;