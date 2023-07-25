import './App.css'
import Navbar from './Component/lession2/Navbar';
import Card from './Component/lession2/Card';
import Button2 from './Component/lession2/Button2';
import { useState } from 'react';
import Modal from './Component/lession3/Modal';


function App() {
  const sep ='September' 
  const oct ='October'
  const nov ='November'
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="App">
    <h1 style={{textAlign : 'center'}}>
      workshop
    </h1>
    
    <Navbar sep ='September' oct ='October' nov ='November' ></Navbar>
    <Card></Card>
    <Button2 onClick={openModal}></Button2>
      
      {showModal && <Modal close={closeModal}/>}
    
   
    </div>
    
  );
}

export default App;

