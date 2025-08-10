import React from 'react'
import './Navbar.css'
import $ from 'jquery'
import './NavMob.css'



function Navbar() {

  $(document).ready(function () {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
  });

    return (
      <div>
        <header>
          <nav
            className="navbar is-black"
            role="navigation"
            arial-label="main navigation"
          >
            <div className="nav is-flex">
              <a
                href="/App"
                className="has-text-white is-flex is-hidden-mobile"
              >
                <figure className="image is-128x128 ">
                  <img src="/img/logo-de-bet.png" alt="logo-ats" />
                </figure>
                <div className="logo-text">
                  <h3 className="title has-text-white is-3">Architecture</h3>
                  <h5 className="title is-5 has-text-white">
                    Technique et Suivi
                  </h5>
                </div>
              </a>

              <a
                href="/App"
                className="has-text-white is-flex is-hidden-tablet"
              >
                <figure className="image is-64x64">
                  <img src="/img/logo-de-bet.png" alt="logo-ats" />
                </figure>
                <div className="logo-text1">
                  <h3 className="title has-text-white is-4">Architecture</h3>
                  <h5 className="title has-text-white is-6">
                    Technique et Suivi
                  </h5>
                </div>
              </a>

              <a role="button" className="navbar-burger has-text-primary is-black"  data-target="navMenu"  aria-label="menu"
                aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>

              </a>
            </div>
            <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <div className="navbar-item is-size-3" id="Acceuil">
                <a href="/App" className="has-text-primary">
                  Accueil
                </a>
              </div>

              <div className="navbar-item is-size-3" id="Architecture">
                <a href="/App" className="has-text-primary">
                  Architecture
                </a>
              </div>

              <div className="navbar-item is-size-3" id="Expertises">
                <a href="/App" className="has-text-primary">
                  Expertises
                </a>
              </div>

              <div className="navbar-item is-size-3" id="Infos">
                <a href="/App" className="has-text-primary">
                  Infos
                </a>
              </div>
            </div>
           </div>
          </nav>
          
          
          
        </header>
      </div>
    );
    
}

export default Navbar