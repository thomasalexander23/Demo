import { Link } from 'react-router-dom';
import './App.css';
export default function Top(){
  return(
    <div className='nav'>
      <ul>
        <li>
          <Link to="/Thomas">HOME</Link></li>
        <li>
          <Link to="/" >MESSAGE</Link>
        </li>
        <li>
          <Link to="/Form">
          NOTIFICATION
          </Link>
        </li>
        <li>
          <Link to="/Lists">
          ABOUT
          </Link>
        </li>
        <li>CONTACTUS
        </li>
      </ul>
    </div>
  )
}