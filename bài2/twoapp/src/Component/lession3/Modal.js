import React from 'react';
import './Modal.css';
const Modal = ({close}) => {
    return (
        <div className="Model-container">
           
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required/>
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required/>
                        <label for="">Password</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>

                    </div>
                    <button>Log in</button>
                    <div class="register">
                        <button onClick={close}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    
        </div>
    );
};

export default Modal;


