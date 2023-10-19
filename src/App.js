import { useEffect, useState } from 'react';
import './App.css';
import Model from './Model';


//
function App() {
  const [data, setData] = useState([])
  const [modelData, setModeldata] = useState({})
  const [isModel, setIsmodel] = useState(false)
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?page=1&per_page=30&query=nature&client_id=ecitejPwLFCkiNsiuF6DHJV3Ih5I6kzncXwwIHZduS0')
      .then(response => {
        response.json().then(info => {
          console.log(info)
          setData(info.results);
        })
      })
  }, [])

  const handleClick = async (id) => {
    await fetch(`https://api.unsplash.com/photos/${id}?client_id=ecitejPwLFCkiNsiuF6DHJV3Ih5I6kzncXwwIHZduS0`)
      .then(response => {
        response.json().then(postInfo => {
          setModeldata(postInfo)
          setIsmodel(true)
          console.log(modelData)
        })
      })
  }

  const Back =(e)=>{
    fetch('https://api.unsplash.com/search/photos?page=1&per_page=30&query=nature&client_id=ecitejPwLFCkiNsiuF6DHJV3Ih5I6kzncXwwIHZduS0')
      .then(response => {
        response.json().then(info => {
          console.log(info)
          setData(info.results);
        })
      })
  }

  const Search=(e)=>{
    if(search.length!=0){
      fetch(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${search}&client_id=ecitejPwLFCkiNsiuF6DHJV3Ih5I6kzncXwwIHZduS0`)
      .then(response => {
        response.json().then(info => {
          console.log(info)
          setData(info.results);
        })
      })

    }
    
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
        <div className='container-fluid justify-content-center'>
          <h1 className='text-light'>Image Gallary</h1>
        </div>
      </nav>


      <div className='container mt-5'>
        <form >
          <div className='row justify-content-center'>
            <div className='col'>
              <input type='text' className='form-control' placeholder='Search' onChange={e=>{setSearch(e.target.value)}} ></input>
            </div>
            <div className='col'>
              <button type='button' className='btn btn-primary' onClick={Search}>Search</button>
              <button type='button' className='btn btn-danger ms-3' onClick={Back}>Back</button>
            </div>
          </div>
        </form>

        <div className='row mt-5'>
          {
            data.map((item,index) => (
              <div className='col m-1' key={index}>
                <div className="card" style={{ width: 200 }}>
                  <img className="card-img-top" src={item.urls.small} alt="Card image" />
                  <div className="card-body">
                    <h4 className="card-title">{item.user.name}</h4>
                    <p className="card-text">
                      <span style={{ width: 30 }} className='d-inline-block me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                      </span>
                      {item.likes}
                    </p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={e => { handleClick(item.id) }}>Details </button>
                  </div>
                </div>
              </div>

            ))
            
          }
        </div>
      </div>
      {
        isModel ? <Model value={modelData} /> : ''
      }

    </>
  );

}

export default App;
