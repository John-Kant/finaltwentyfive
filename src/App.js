import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Home from './components/Home'
import InsideCity from './components/insidethecity/InsiteCity'
import InsideOrBetweenCity from './InsideOrBetweenCity'
import InsideCityId from './InsideCityId'
import InsideCityIdIt from './InsideCityIdIt'
import BetweenCityId from './BetweencityIt'
import BetweenCityIdit from './BetweenCityId'
import SearchFunction from './components/insidethecity/SearchFunction'
import Footer from './components/insidethecity/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import SenegalMap from './components/SenegalMap'
import Contact from './components/Contact'
import Transport from './components/Transport'
import BetweenCity from './components/betweencity/BetweenCity'
import BackTotop from './help/BackToTop'

function App() {
  return (
    <Router>
      <BackTotop />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/mapofsenegal'>
          <SenegalMap />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/transport'>
          <Transport />
        </Route>

        <Route exact path='/city/'>
          <SearchFunction />
        </Route>
        <Route exact path='/insideorbetween/:id/:name'>
          <InsideOrBetweenCity />
        </Route>
        <Route exact path='/insidecity/:id/:name'>
          <InsideCityId />
        </Route>
        <Route exact path='/betweencity/:id/:name'>
          <BetweenCityId />
        </Route>
        <Route exact path='/betweencity/:id/:name/itineraries'>
          <BetweenCityIdit />
        </Route>
        <Route exact path='/insidecity/:id/:name/itineraries'>
          <InsideCityIdIt />
        </Route>

        <Route exact path='/insidecity'>
          <InsideCity />
        </Route>
        <Route exact path='/betweencity'>
          <BetweenCity />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
