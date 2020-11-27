import React, { useState, useEffect } from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => {
  // State definieren
  const [hasScrolled, setHasScrolled] = useState(false);
  // hasScrolled = lesen, variable; setHasScrolled = schreiben, funktion

  // 1x mal eventlistener global hinzufügen - bei jeder scrollbewegung checken
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => { // wird ausgeführt wenn die funktion unmounted wird
       window.removeEventListener('scroll', handleScroll)
    }
  }, [] //updated sich wenn neue daten reinkommen, bei leer wirds 1x mal beim mounten ausgeführt (compoenntdidmount)
  )

  // ändern des states bei über 50 offset
  const handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }

  return (
    <div className={hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/Buy"><button>Buy</button></Link>
      </div>
    </div>
  )
}


// const functionABC = (parameter) => {
//   return 3;
// }

// const functionABC = (parameter) => (3)

export default Header
