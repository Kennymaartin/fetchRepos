import {Link, useRouteError} from 'react-router-dom'
import Navbar from './navbar'

const ErrorBoundary = () => {
    const error = useRouteError()
  return(
    <div>
      <Navbar/>
      <h3>{error.status}: {error.statusText}</h3>
      <p>{error.data}</p>
      <p>Go back to home</p>
      <Link to="/"><button>Home</button></Link>
    </div>
  )
}

export default ErrorBoundary;