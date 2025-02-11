import About from '../components/About/About'
import Cover from '../components/Cover/Cover'
import Footer from '../components/Footer/Footer'
import Highlight from '../components/highlight/Highlight'
import Navbar from '../components/Navbar/Navbar'
import Sponsor from '../components/sponsor/Sponsor'
import Ticket from '../components/Ticket/Ticket'

const HomePage = () => {
  return (
    <div>
          <Navbar />
          <Cover />
          <About />
          <Highlight />
          <Ticket />
          <Sponsor />
      <Footer />
      
    </div>
  )
}

export default HomePage
