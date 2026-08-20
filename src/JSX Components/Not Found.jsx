import { Link } from 'react-router';

function NotFound() {

  return (
    <div className="pt-10">
        <h1>
            <div className="text-red-600 mb-9">Error 404</div>
            <div className="text-red-600 mt-9">Page Not Found</div>
        </h1>
        <div className="mt-40 text-violet-500 text-3xl">Go to Home Page : <Link className="italic underline hover:text-yellow-300" to="/">Home</Link></div>
    </div>
  )
}

export default NotFound
