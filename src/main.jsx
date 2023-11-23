import ReactDOM from 'react-dom/client'
import 'modern-normalize/modern-normalize.css';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <BrowserRouter basename='/OHCRAFT'> */}
      <App />
    </BrowserRouter>

)