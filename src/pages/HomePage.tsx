import Footer from '../components/Footer'
import Header from '../components/Header'
import Search from '../components/Search'
import Spinner from '../components/Spinner'

function HomePage() {
  const loading = false

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Search />
      <div>HomePage</div>
      <Footer />
    </>
  )
}

export default HomePage
