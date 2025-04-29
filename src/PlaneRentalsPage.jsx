import React from 'react';
import './App.css'; // Import your global App.css file

function PlaneRentalsPage() {
  const rentalCompanies = [
    {
      name: 'Kevco Aviation',
      phone: '727-235-1368',
      pilot: 'Kevin McCamey',
      planes: ['G100', 'Avanti'],
    },
    {
      name: 'CS Aviation Service',
      phone: '786-609-8377',
      pilot: 'Carlos Soto',
      planes: ['G100', 'Astra SP'],
    },
    {
      name: 'A + J Fly Service',
      phone: '786-381-8531',
      pilot: 'Jhonathan Reyes',
      planes: ['G100', 'Astra', 'Avanti'],
    },
    {
      name: 'Silver Air Private Jets',
      phone: '484-883-6389',
      pilot: 'Garrett Yackel',
      planes: ['Hawker', 'G100', 'Avanti']
    },
    {
      name: 'Elite Air Jet Management',
      phone: '727-896-5880',
      pilot: 'Katelyn Bogus',
      planes: ['Learjet', 'Hawker' ]
    },
    {
      name: 'Jet | Fly Aviation',
      phone: '561-609-5015',
      pilot: 'Alfredo Yanes',
      planes: ['Leer 60', 'Hawker 800XP', 'Citation 3']
    }
  ];

  return (
    <div className="planeRentalsContainer">
      <h1 className="planeRentalsTitle">Plane Rentals</h1>
      <p className="planeRentalsDescription">
        Contact these companies for plane rental options and pilot services.
      </p>

      <div className="rentalList">
        {rentalCompanies.map((company, index) => (
          <div key={index} className="rentalItem">
            <h2 className="itemName">{company.name}</h2>
            <p className="itemDetails">
              <strong>Phone:</strong> {company.phone}
            </p>
            <p className="itemDetails">
              <strong>Contact:</strong> {company.pilot}
            </p>
            <p className="itemDetails">
              <strong>Planes:</strong> {company.planes.join(', ')}
            </p>
            <button className="rentButton">Contact</button> {/* Changed "View Details" to "Contact" */}
          </div>
        ))}
      </div>

      {/* You might want to remove or modify the generic contact info below */}
      <div className="contactInfo">
        <h3>Contact Information</h3>
        <p>Contact the companies listed above directly for rentals.</p>
      </div>
    </div>
  );
}

export default PlaneRentalsPage;