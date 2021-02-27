import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import background from "../myImage.gif";

const LayoutDefault = ({ children }) => (
  <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </div>
);

export default LayoutDefault;  