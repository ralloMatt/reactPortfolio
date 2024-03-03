import Header from './Header';
import Footer from './Footer';

import AboutMe from './contentPages/AboutMe';
import Contact from './contentPages/Contact';
import Portfolio from './contentPages/Portfolio';
import Resume from './contentPages/Resume';

import { useState } from 'react'; // use this to find out which page to render

function Main() {

  const [currentPage, setCurrentPage] = useState('AboutMe');

 // This function is so I know which page to render 
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );


}

export default Main;
