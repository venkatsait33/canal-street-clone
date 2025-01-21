import Header from "./component/Header"
import About from "./pages/About"
import './App.css'
import Footer from "./component/Footer"

const App = () => {
  return (
    <div className='bg-white max-w-screen-2xl'>
      <div>
        <Header />
        <main className="relative">
          <About />
        </main>
       
      </div>
    </div>
  )
}

export default App