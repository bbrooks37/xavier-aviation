import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MaintenanceCards from './MaintenanceCards';
import VendorCards from './VendorCards';
import PlaneRentalsPage from './PlaneRentalsPage';

function AstraPilotsPage() {
  const astraCaptains = [
    { id: 1, name: 'J. Reyes', phone: '786-381-8531' },
    { id: 2, name: 'Alex Salom', phone: '352-215-6131' },
    { id: 3, name: 'Fernando Balsalobre', phone: '954-730-6400' },
    { id: 4, name: 'Roberto Maurant', phone: '954-701-7992' },
    { id: 5, name: 'Scott Bender', phone: '770-508-9067' },
    { id: 6, name: 'Elliott Bing', phone: '832-392-5226' },
    { id: 7, name: 'Jeff Henderson', phone: '678-237-5429' },
    { id: 8, name: 'Xavier Fernandez', phone: '786-200-4467' },
    { id: 9, name: 'Kevin McCamey', phone: '727-235-1368' }
  ];

  const astraCoCaptains = [
    { id: 9, name: 'Bill Dwyer', phone: '513-226-4427' },
    { id: 10, name: 'Armando Diaz', phone: '786-657-6597' },
    { id: 11, name: 'David Johnson', phone: '208-590-2875' },
    { id: 12, name: 'Jake Rhoades', phone: '813-399-3793' },
    { id: 13, name: 'Bryan Salom', phone: '352-283-4128' },
    { id: 14, name: 'Carlos Soto', phone: '786-609-8377' },
  ];

  return (
    <div className="pilots-page">
      <h1>Astra Pilots</h1>
      <div className="pilots-columns">
        <div className="captains-column">
          <h2>Captains</h2>
          <ul>
            {astraCaptains.map(pilot => (
              <li key={pilot.id}>
                {pilot.name} - {pilot.phone}
              </li>
            ))}
          </ul>
        </div>
        <div className="co-captains-column">
          <h2>Co-Captains</h2>
          <ul>
            {astraCoCaptains.map(pilot => (
              <li key={pilot.id}>
                {pilot.name} - {pilot.phone}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function BeechjetPilotsPage() {
  const beechjetCaptains = [
    { id: 15, name: 'John Hinton', phone: '610-248-0787' },
    { id: 16, name: 'Kyle Davis', phone: '863-559-2211' },
    { id: 17, name: 'Daniel Diosa', phone: '786-865-1133' },
    { id: 18, name: 'Israel Hernandez', phone: '361-479-7707' },
    { id: 19, name: 'Genner Fuentes', phone: '954-557-1686' },
    { id: 20, name: 'Santiago Paipilla', phone: '305-850-1329' },
    { id: 21, name: 'Michael Herbert', phone: '904-401-9377' },
    { id: 22, name: 'Jose Suarez', phone: '305-215-2758' },
    { id: 23, name: 'Adam Burrows', phone: '218-849-0869' },
  ];

  const beechjetCoCaptains = [
    { id: 24, name: 'Lauren Diaz', phone: '407-325-0324' },
    { id: 25, name: 'Tom Kovac', phone: '262-880-2503' },
    { id: 26, name: 'Ed Mosch', phone: '321-960-6101' },
    { id: 27, name: 'Jack Patterson', phone: '727-710-2771' },
    { id: 28, name: 'Al Russo', phone: '239-233-3700' },
    { id: 29, name: 'Bill Grob', phone: '440-396-8937' },
    { id: 30, name: 'Bob Shaw', phone: '904-305-6787' },
    { id: 31, name: 'Martin Graham', phone: '727-365-1278' },
  ];

  return (
    <div className="pilots-page">
      <h1>Beechjet Pilots</h1>
      <div className="pilots-columns">
        <div className="captains-column">
          <h2>Captains</h2>
          <ul>
            {beechjetCaptains.map(pilot => (
              <li key={pilot.id}>
                {pilot.name} - {pilot.phone}
              </li>
            ))}
          </ul>
        </div>
        <div className="co-captains-column">
          <h2>Co-Captains</h2>
          <ul>
            {beechjetCoCaptains.map(pilot => (
              <li key={pilot.id}>
                {pilot.name} - {pilot.phone}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isPilotsDropdownOpen, setIsPilotsDropdownOpen] = useState(false);

  const togglePilotsDropdown = () => {
    setIsPilotsDropdownOpen(!isPilotsDropdownOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src="/xa logo.png" alt="XA Logo" className="nav-logo" />
              </Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={togglePilotsDropdown}
              onMouseLeave={togglePilotsDropdown}
            >
              <span className="dropdown-toggle">Pilots</span>
              {isPilotsDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/pilots/astra">Astra</Link></li>
                  <li><Link to="/pilots/beechjet">Beechjet</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/maintenance">Maintenance</Link></li>
            <li><Link to="/vendor">Vendors</Link></li>
            <li><Link to="/plane">Plane Rentals</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={
              <div className="home-container">
                <h1>Welcome to Our Aviation App</h1>
                <img src="/Astra.jpeg" alt="Astra Image" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            } />
            <Route path="/pilots/astra" element={<AstraPilotsPage />} />
            <Route path="/pilots/beechjet" element={<BeechjetPilotsPage />} />
            <Route path="/maintenance" element={<MaintenanceCards />} />
            <Route path="/vendor" element={<VendorCards />} />
            <Route path="/plane" element={<PlaneRentalsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
