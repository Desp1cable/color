import { useContext } from 'react';
import { ColorContext } from './App';

const Color = () => {
  const electricViolet = useContext(ColorContext)
  console.log(electricViolet);
  return ( 
    <div className="color-card">
      <div className="color-prev" style={{background: electricViolet.color}}></div>
    </div>
   );
}
 
export default Color;