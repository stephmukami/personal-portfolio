import Navbar from "./(components)/Navbar";
import Resume from "./(components)/Resume";
import Projects from "./(components)/Projects";
import Communities from "./(components)/Communities";
import Footer from "./(components)/Footer";
import Introduction from "./(components)/Introduction";

export default function Home() {
  return (
      <>
     <Navbar />
     <div>
     <Introduction  />
     </div>
     <div id="resume">
     <Resume  />
     </div>

     <div id="projects">
     <Projects />

     </div>
     <div id="communities">
     <Communities />

     </div>

     <div id="contact">
     <Footer />

     </div>
      </>
  );
}
