import Footer from '../components/Footer'
import Forecast from '../components/Forecast'
import Header from '../components/Header'
import Search from '../components/Search'
import Spinner from '../components/Spinner'
import Weather from '../components/Weather'

function HomePage() {
  const loading = false

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
