import FirstComponent from './FirstComponent'
import {FifthComponent} from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThridComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'


export default function LearningComponent() {
    return (
    <div className='LearningComponent'>    
        <FirstComponent />
        <SecondComponent />
        <ThridComponent />
        <FourthComponent />
        <FifthComponent />
    </div>    
    );
  }