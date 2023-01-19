import './Searchbar.css';

export const Searchbar = () => {
  return (
    <>
    <div className="searchbar">
    <nav className='navbar bottom-email'>
    <input type="search" className="search" placeholder="Email address" aria-label="Search" aria-describedby="search-addon" />
    <button type="button" className="btn btn-danger btn-lg email-button">Get Started </button>
    </nav>
    </div>
    </>
  ) 
}

