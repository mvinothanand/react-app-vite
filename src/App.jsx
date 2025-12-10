import './index.css'
import ProductList from './ProductList';
import Counter from './Counter';
import Quiz from './Quiz';
import QuizDemo from './QuizDemo';
// import BootstrapNavbar from './BootstrapNavbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ImpureComponent from './ImpureComponent';
import PureComponent from './PureComponent';

function App() {

  return (
    <div className='grid grid-cols-2 gap-2 border-2'>
      <ImpureComponent/>
      {/* <hr></hr>
      <PureComponent/> */}
    </div>
  )
}

export default App
