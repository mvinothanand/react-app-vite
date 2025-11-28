import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
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

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className='pl-4'>
      <h2 className='font-bold mb-2'>City quiz</h2>
      <p className='my-2'>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
          className='border border-red-400 rounder-sm w-md'
        />
        <br />
        <button 
            disabled={
                answer.length === 0 ||
                status === 'submitting'
            }
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
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
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
