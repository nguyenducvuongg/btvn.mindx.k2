import React , { useState }  from 'react';
import './Modal.css';
const Modal = ({close,inputValues,handleInputChange,handleSubmit})=>{
// const Modal = ({close}) => {
//    const [inputValues, setInputValues] = useState({
//     tickets: '',
//     email: '' 
//   });

//   const handleInputChange = (e) => {
//     setInputValues({
//     ...inputValues,
//     [e.target.name]: e.target.value
//     });
//   }

//   const handleSubmit = () => {
//     console.log(`Đã đăng ký ${inputValues.tickets} vé, tin nhắn sẽ được gửi tới ${inputValues.email}`);
//     setInputValues({
//         tickets: '',
//         email: ''
//     });
//   }
    return (
        <div className="Model-container" color='red'>
           
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Tickets</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="number" required name="tickets" value={inputValues.tickets} onChange={handleInputChange} />
                        <label for="">Tickets,$3 per one</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="email" required  name="email" value={inputValues.email}  onChange={handleInputChange}/>
                        <label for="">Send To</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>

                    </div>
                    <button onClick={() => {
                        handleSubmit();
                        close(); 
                    }}>Pay</button>
                    <div class="register">
                        <button onClick={close}>Close</button>
                    </div>
                </form>
            </div>
        </div>
   
        </div>
    );

}
export default Modal;


