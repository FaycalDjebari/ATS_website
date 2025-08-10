import React from 'react'
import $ from 'jquery'
import Navbar from './Navbar/Navbar'
import Article1 from './Article1'
import Article2 from './Article2'
import Article3 from './Article3'
import Article4 from './Article4'
import Article5 from './Article5'
import Footer from './Footer'


function Acceuil() {

  $(document).ready(function() {
      if ('./Acceuil/Acceuil' == './Acceuil/Acceuil') {
      $('#Acceuil').addClass('is-active')}
  });
    return(
         <div>
           <Navbar />
           <Article1 />
           <Article2 />
           <Article3 />
           <Article4 />
           <Article5 />
           <Footer />
         </div>
    )
}
export default Acceuil