import { useState } from 'react';

import PostsList from './components/PostsList.jsx'
import MainHeader from './components/MainHeader.jsx';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  return <>
    <MainHeader onCreateNewPost={() => setModalIsVisible(true)}/>
    <PostsList modalIsVisible={modalIsVisible} handleHideModal={() => setModalIsVisible(false)} />
  </>;
}

export default App
