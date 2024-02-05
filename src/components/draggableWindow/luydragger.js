
import React from 'react';
import ReactDOM from 'react-dom';
import Dragger from '@props/dragger';
import { createRoot } from '@react-three/fiber';


const Demo = () => {
    return (
      <Dragger>
        {({ style, handle }) => (
          <div className='bg-slate-700'></div>
        )}
      </Dragger>
    );
  };
  
  createRoot.render(<Demo />, document.getElementById('root'));
  export default Demo;