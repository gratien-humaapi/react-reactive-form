/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import { IReactiveFieldMeta, ReactiveForm } from '@hm-ui/reactive-form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import reactLogo from './assets/react.svg';

const defaultValues = {
  username: '',
  password: ''
};

type Data = typeof defaultValues;

function App() {
  const [count, setCount] = useState(0);
  const form = useForm<Data>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  const meta: IReactiveFieldMeta<any, Data>[] = [
    {
      key: 'username',
      label: 'Test',
      type: 'text',
      customProps: {}
    }
  ];

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {/* count is {deep(count)} */}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <ReactiveForm form={form} meta={meta} />
      </div>
    </div>
  );
}

export default App;
