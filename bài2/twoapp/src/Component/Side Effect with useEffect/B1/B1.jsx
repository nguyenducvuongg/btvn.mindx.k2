import React, {useState, useEffect}  from 'react';
import './B1.css'

const B1 = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {

        const toggleVisible = () => {
          if (window.pageYOffset > 500) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      
        window.addEventListener('scroll', toggleVisible);
      
        return () => window.removeEventListener('scroll', toggleVisible);
      
      }, []);
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      }
    return (
        <div className='btn'>
        {visible && <button onClick={scrollToTop}>Back to top</button>}
        </div>
            
            
        
    );
};

export default B1;