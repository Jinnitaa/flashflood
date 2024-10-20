import './App.css';
import Features from './Feature';
import RealTime from './RealTime'; 
import Navbar from './Nav'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Historical from './Historical';
import Forecasting from './Forcasting';
import Footer from './Footer';
import LoginPage from './Login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          
         
          <Routes>
           
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <div className="home-container">
                    <div className="text-container">
                      <h1>Real-Time Flash Flood Alert System for Immediate Warning</h1>
                      <p>
                        Stay safe with our Real-Time Flash Flood Alert System, delivering instant notifications to help you act quickly and avoid danger during sudden flood events.
                      </p>
                      <div className="star">
                        <Link to="/real-time">
                          <button>Get started</button>
                        </Link>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src="/home1.png" alt="Sample" />
                    </div>
                  </div>

                  <div className="home-container2">
                  <div className="image-container">
                      <img src="/home2.png" alt="Sample" />
                    </div>
                    
                    <div className="text-container">
                      
                    <h1>Empowering Communities with Real-Time Flood Safety Solutions</h1>
                    <p>
                      At Hydro Alert, we are dedicated to enhancing community safety through advanced flood monitoring and alerting solutions. Our mission is to provide timely, accurate, and actionable information to help individuals and authorities effectively manage flood risks and respond to emergencies.
                    </p>
                     
                    </div>
                    
                  </div>

                  <div className="Feature">
                    <h1>Features</h1>
                    <Features />
                  </div>
                  <Footer/>
                </div>
              }
            />
            {/* Route for RealTime component */}
            <Route path="/real-time" element={<RealTime />} />
            <Route path="/historical" element={<Historical/>} />
            <Route path="/forecasting" element={<Forecasting/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
