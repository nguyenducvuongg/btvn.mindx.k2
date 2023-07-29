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
  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => setShowModal(true);
  // const closeModal = () => setShowModal(false);
  // const [inputValues, setInputValues] = useState({
  //   tickets: '',
  //   email: ''
  // });

  // const handleInputChange = (e) => {
  //   setInputValues({
  //     ...inputValues,
  //     [e.target.name]: e.target.value  
  //   });
  // }

  // const handleSubmit = () => {
  //   console.log(`Đã đăng ký ${inputValues.tickets} vé, tin nhắn sẽ được gửi tới ${inputValues.email}`);
  //   setInputValues({
  //     tickets: '',
  //     email: '' ,
  //   });
  // }
  // em không hiểu sao code logic được ở đây thì không chạy được mà để sang file  khác thì chạy được 
  return (
    <div className="App">
    <h1 style={{textAlign : 'center'}}>
      workshop
    </h1>
    
    <Navbar sep ='September' oct ='October' nov ='November' ></Navbar>
    <Card></Card>
    
    <Button2 ></Button2>
    {/* <Modal  
    inputValues={inputValues} 
    handleInputChange={handleInputChange}
    handleSubmit={handleSubmit}
    /> */}
      
      
      
   
    </div>
    
  );
}

export default App;

