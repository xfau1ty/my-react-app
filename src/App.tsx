// App.tsx
import React from 'react';
import { Message } from './Message';

const App: React.FC = () => {
  const msg: string = 'Привет, мир!';
  return (
    <div>
      <Message text={msg} />
    </div>
  );
};

export default App;
