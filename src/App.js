import { useSelector } from 'react-redux';
import MainRoute from './router';
import { useState } from 'react';
import Loader from './utils/Loader/Loader';

function App() {
  const { isLoading } = useSelector((state)=>state.auth);
  return (
    <div>
      {isLoading && <Loader visible={true} open={true} />}
      < MainRoute />
    </div>
  );
}

export default App;
