import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/homepage/HomePage'
import Diskusi from './components/diskusi/Diskusi'
import Kelas from './components/kelas/Kelas'
import Portofolio from './components/portofolio/Portofolio'
import Footer from './components/Footer'
import DetailKelas from './components/kelas/DetailKelas'
import Course from './components/kelas/Course'
import { useStateValue } from './util/StateProvider'
import Login from './util/Login'

function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/kelas" exact>
              <Kelas />
            </Route>
            <Route path="/portofolio">
              <Portofolio />
            </Route>
            <Route path="/diskusi">
              <Diskusi />
            </Route>
            <Route path="/kelas/:id" children={<DetailKelas />} exact></Route>
            <Route path="/kelas/:id/course" children={<Course />} exact></Route>
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  )
}

export default App
