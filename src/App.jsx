import Header from "./component/Header"
import About from "./pages/About"
import './App.css'
import Footer from "./component/Footer"

const App = () => {
  return (
    <div className=' max-w-screen-2xl'>
      <div>
        <Header />
        <main className="relative">
          <About />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App