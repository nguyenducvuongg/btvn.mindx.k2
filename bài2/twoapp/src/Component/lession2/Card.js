import React from 'react';
import './Card.css'
import Right from '../../Assets/Images/Right.jpg'
import Main from '../../Assets/Images/Main.jpg'
import Left from '../../Assets/Images/Left.jpg'
import Button2 from './Button2';

const Card = () => {
    return (
        <div className='card-container'>
            <div className='card' style={{backgroundColor:"white"}}>
                <div><img className='Img' src={Left} style={{}}></img></div>
                <h3>Hanoi</h3>
                <h4>Fri 28 Nov 2021</h4>
                <p>Ha Noi faith and hope. We always wating for you!</p>
                <Button2></Button2>

            </div>
            <div className='card'>
                <div><img className='Img' src={Left} style={{}}></img></div>
                <h3>Hanoi</h3>
                <h4>Fri 28 Nov 2021</h4>
                <p>Da Nang regional stature. We always wating for you!</p>
                <Button2></Button2>

            </div>
            <div className='card'>
                <div><img className='Img' src={Left} style={{}}></img></div>
                <h3>Hanoi</h3>
                <h4>Fri 28 Nov 2021</h4>
                <p>HCM City active and  mordernization. We always wating for you!</p>
                <Button2></Button2>
            </div>
            
        </div>
    );
};

export default Card;
