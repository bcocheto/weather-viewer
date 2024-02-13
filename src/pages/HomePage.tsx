import Footer from '../components/Footer'
import Header from '../components/Header'
import Spinner from '../components/Spinner'

function HomePage() {
  const loading = false

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <div>HomePage</div>
      <Footer />
    </>
  )
}

export default HomePage
