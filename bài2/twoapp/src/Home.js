import './App.css'
import Navbar from './Component/lession2/Navbar';
import Card from './Component/lession2/Card';
import Button2 from './Component/lession2/Button2';
import { useState } from 'react';
import Modal from './Component/lession3/Modal';
import ProductsList from './Component/lesion5/ProductsList';
import Left from '../src/Assets/Images/Left.jpg'


function App() {
  const sep ='September' 
  const oct ='October'
  const nov ='November'
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [inputValues, setInputValues] = useState({
    tickets: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value  
    });
  }

  const handleSubmit = () => {
    console.log(`Đã đăng ký ${inputValues.tickets} vé, tin nhắn sẽ được gửi tới ${inputValues.email}`);
    setInputValues({
      tickets: '',
      email: '' ,
    });
  }
  // em không hiểu sao code logic được ở đây thì không chạy được mà để sang file  khác thì chạy được 
  const datCard = [
    { id: 1, city: 'Ha Noi', time: 'Fri 28 Nov 2021', description: 'Hanoi faith and hope. We always waiting for you!', image: Left },
    { id: 2, city: 'Ho Chi Minh City', time: 'Tue 28 Nov 2021', description: 'HCM City active and modernization. We always waiting for you!', image: Left },
    { id: 3, city: 'Da Nang', time: 'Thu 28 Nov 2021', description: 'HCM City active and modernization. We always waiting for you!', image: Left },
  ]
  const products = [
    {
        id : 1,
        name: 'Product 1',
        price: '$10',
        description: 'Máy ảnh'
    },
    {
        id : 2,
        name: 'Product 2',
        price: '$20',
        description: 'Tàu'
    },
    {   
        id : 3,
        name: 'Product 3',
        price: '$30',
        description: 'xe'
    },
    {
        id : 4,
        name: 'Product 4',
        price: '$40',
        description: 'cơm'
    }]
    const [inputProducts, setInputProducts] = useState('');
    const search = (q) => {
      return products.filter(p => 
        p.name.toLowerCase().includes(q.toLowerCase())
      );
    }
    const handleSearch = (e) => {
      setInputProducts(e.target.value);
    }
  
    const results = search(inputProducts);

  return (
    <div className="App">
    <div className='header-container'>
    <h1 style={{textAlign : 'center'}}>
      workshop
    </h1>

    
    <Navbar sep ='September' oct ='October' nov ='November' ></Navbar>
    <Card></Card>
    
    
    <Button2 ></Button2>
    </div>
    <Modal  
    inputValues={inputValues} 
    handleInputChange={handleInputChange}
    handleSubmit={handleSubmit}
    />
      <div className='List'>
      <input 
        value={inputProducts}
        onChange={handleSearch} 
      />

      {inputProducts && !results.length && <div>Not found</div>}

      {results.map((v,i) => (
        <ProductsList index={i} item={v} key={i}/> 
      ))}
      
      </div>
      
      
   
    </div>
    
  );
}

export default App;

