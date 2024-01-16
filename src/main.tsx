// import ReactDOM from 'react-dom/client'
// import 'modern-normalize/modern-normalize.css';
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(

//   <BrowserRouter>
//     {/* <BrowserRouter basename='/OHCRAFT'> */}
//       <App />
//     </BrowserRouter>

// )
import * as React from "react";
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/OHCRAFT'>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)