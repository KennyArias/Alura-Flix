import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'
import CategoryContextProvider from './Context/Context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryContextProvider>
      <Routes />
    </CategoryContextProvider>
  </React.StrictMode>
);

