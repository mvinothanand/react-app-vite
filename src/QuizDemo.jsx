import { useState } from 'react';

export default function QuizDemo() {
    const [status, setStatus] = useState('initial');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        console.log(answer);
        e.preventDefault();
        setStatus('submitting');
        try {
          await submitForm(answer);
          setStatus('success');
        } catch (err) {
          setStatus('typing');
          setError(err);
        }
      }
    
    if (status === 'success') {
        return <h1 className='m-4 font-bold'>Correct answer!</h1>
    }

    return(
        <div className='pl-5 m-4'>
            <h1 className='font-bold mb-2'>City Quiz</h1>
            <p className='my-2'>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    className='border border-red-400 rounder-sm w-md'
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                >
                </textarea>
                <br />
                <button
                    disabled={ answer.length === 0 || status === 'submitting'}
                    className='bg-blue-600/70 px-3 py-2 rounded-md disabled:bg-blue-300 disabled:text-blue-200'
                >
                    Submit
                </button>
                {error !== null && 
                    <p className="Error">
                        {error.message}
                    </p>
                }                
            </form>
        </div>
    )
}

function submitForm(answer) {
    // Pretend it's hitting the network.
    console.log(`submitForm: ${answer}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  }