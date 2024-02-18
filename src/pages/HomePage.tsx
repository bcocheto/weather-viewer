import { useContext } from 'react'
import Footer from '../components/Footer'
import Forecast from '../components/Forecast'
import Header from '../components/Header'
import Search from '../components/Search'
import Spinner from '../components/Spinner'
import Weather from '../components/Weather'
import { AppContext } from '../context/AppContext'

function HomePage() {
  const { loading } = useContext(AppContext)

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Search />
      <Weather />
      <Forecast />
      <Footer />
    </>
  )
}

export default HomePage
