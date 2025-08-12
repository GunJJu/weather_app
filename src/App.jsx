import { useState, useRef, useEffect } from 'react'
import './App.css'
import WeatherCard from './coomponents/WeatherCard'
import { fetchWheaterByCoords } from './api/weather'
import { fetchCoordinates } from './api/geo'

function App() {
  const [city, setCity] = useState('seoul')
  const [weather, setWeater] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handelSearch = async () => {
    const q = city.trim()
    if (!q) return
    try {
      setLoading(true)
      setErr('')
      const { lat, lon, name, country } = await fetchCoordinates(q)
      // console.log(lat, lon, name, country)

      const data = await fetchWheaterByCoords(lat, lon)
      setWeater(data)
      console.log(data)
      setCity('')

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  const onChangeInput = (e) => setCity(e.target.value)
  const onKeyup = (e) => {
    if (e.key === 'Enter') handelSearch()
  }


  return (
    <div className='app'>
      <h1>김선민 날씨 앱</h1>
      <div className="input-wrap">
        <input
          ref={inputRef}
          value={city}
          onChange={onChangeInput}
          onKeyUp={onKeyup}
          type="text" placeholder='도시 이름을 입력하세요' />
        <button
          onClick={handelSearch}
          disabled={loading}>
          {loading ? "검색중..." : "검색"}
        </button>
      </div>
      {err && <p className='error'>{err}</p>}
      {loading && <p className='info'>불러오는 중...</p>}
      <WeatherCard weather={weather} />
    </div>
  )
}

export default App
