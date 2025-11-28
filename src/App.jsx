import './index.css'
import ProductList from './ProductList';
import Counter from './Counter';
import Quiz from './Quiz';
import QuizDemo from './QuizDemo';

function App() {

  return (
    <div className='grid grid-cols-1 gap-2 w-full bg-slate-100 justify-center items-center'>
      {/* <ProductList/>
      <Counter/> */}
      <Quiz/>
      <QuizDemo/>
    </div>
  )
}

export default App
