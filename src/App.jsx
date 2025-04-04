import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import { useState, useEffect } from 'react'

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const [data, setData] = useState({})

  const [showModal, setShowModal] = useState(true)
  const [apod, setApod] = useState({})
  function handleToggleModal() {
    setShowModal(!showModal)
  }
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`


      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  
  return (
    <>
    {data ? <Main data={data} /> : <div className="loadingState">Loading... <i className="fa-solid fa-spinner"></i></div>}
    {showModal && <SideBar data={data} handleToggleModal={handleToggleModal} />}
    {data && <Footer data={data} handleToggleModal={handleToggleModal}/>
    }
  </>
  )
}

export default App
