import React from 'react';
import './App.css';

function VendorCards() {
  const categorizedVendors = {
    maintenanceRepair: [
      { company_name: 'Turbine Engine Specialists', contact_name: 'Chip Rappold', phone_number: '817-287-8331', email: 'chip.rappold@tesservice.com', services: 'Jet Engine Heavy Maint. & repair' },
      { company_name: 'Roberts Aviation', contact_name: '', phone_number: '904-466-2330', email: '', address: '435 Hawkeye View Lane, St Augustine, FL 32095', services: 'Airframe/engine Maint. & repair' },
      { company_name: 'JDM Aviation Services', contact_name: 'Josh McCurdy', phone_number: '', email: '', address: '260 Winchester Ln Weatherford, Tx 76085', services: 'Astra Specialized airframe/engine maint. & heavy maint., TS Slat System' },
      { company_name: 'Dixie Jet & Rotor Service', contact_name: '', phone_number: '', email: '', address: '3770 airfield Drive West Lakeland, FL 33811', services: 'Light maint. & line maint., Lead acid battery, cap check' },
      { company_name: 'Hampton Aviation', contact_name: '', phone_number: '', email: '', services: 'Heavy specialized airframe maint & repair' },
      { company_name: 'Rose Aircraft Services', contact_name: 'Wendy Ellis', phone_number: '', email: '', address: '132 Flight Lane, P.O. Box 1850 Mena Arkansas 71953', services: 'Performed battery capacity check' },
      { company_name: 'Penta star Aviation', contact_name: 'Bruce Atlas', phone_number: '248.666.3630', email: '', website: 'www.pentastaraviation.com', address: 'Oakland County international Airport - 7002 Highland Road Waterford, MI 48327', services: 'Airframe & engine Heavy maint., bought airplane from heavy maint' },
      { company_name: 'Trimec Aviation', contact_name: '', phone_number: '1-800-303-1124', email: '', address: '116 Texas Way, Fort worth, Tx 76106', services: 'Astra Airframe & engine Heavy Maint., specialized in astra' },
    ],
    partsSupplies: [
      { company_name: 'AVIALL: Wheel & Brakes', contact_name: 'Bryan K Henry', phone_number: '', email: '', address: '2755 Regent Blvd DFW airport, TX 75261', services: 'Airframe & engine Parts/Component Vendor, product repair services: tire change, west wind nose wheel, ASTRA/G150 MWA' },
      { company_name: 'Hammonds Fuel Additives', contact_name: '', phone_number: '281-820-5674 / 800-548-9166', email: '', address: '6951 W. Little York Rd Houston, Tx 77040', fax: '281-847-5129', services: 'Fuel system supplies vendor, Hum-Bug Detector Kit' },
      { company_name: 'Aircraft spruce & specialty', contact_name: '', phone_number: '1-877-4-spruce', email: '', website: 'www.aircraftspruce.com', services: 'Sell just about everything for aviation' },
      { company_name: 'Roberts Oxygen Company', contact_name: '', phone_number: '301-315-9090', email: '', address: '15830 Redland Road Po Box 5507 Rockville, MD 20855', services: 'Bottle Gas supplier (oxygen, nitrogen)' },
    ],
    avionicsInstruments: [
      { company_name: 'Duncan Aviation', contact_name: 'Dustin C Johnson / K Scott Heath', phone_number: '800-525-2376 / 214-352-3468', email: '', address: 'Dallas Texas', services: 'Radios, Electronics, Heavy Maint., Paint & Interior, replaced lamps - backlighting is inoperative' },
      { company_name: 'Universal Aero Accessories', contact_name: '', phone_number: '210.979.9536', email: '', address: '130 Braniff Dr. San Antonio, Tx 78216', fax: '210.979.9560', services: 'Radios, FMS manufacture & support, FMS & database download from site' },
      { company_name: 'Texas Gyro', contact_name: '', phone_number: '', email: '', address: '13551 Wing Way avenue Suite 201 - Burleson, Tx 76028', services: 'Flight instrument overhaul & sales' },
    ],
    refinishingOther: [
      { company_name: 'Foster’s Aircraft Refinishing', contact_name: 'Rob Dinic (through Foster)', phone_number: '', email: '', services: 'Paint & Interior work, Removed flight controls, checked balance after painting and re-installed' },
      { company_name: 'Contact Aviation', contact_name: '', phone_number: '', email: '', address: '1675 Airport Road  Waterford, MI 48327', services: 'FAA Repair Station' }, // Could be argued for maintenance too
    ],
  };

  return (
    <div className="vendor-categories-container">
      <h1>Aviation Vendors</h1>
      {Object.keys(categorizedVendors).map(category => (
        <div key={category} className="vendor-category">
          <h2>
            {category === 'maintenanceRepair' ? 'Maintenance & Repair Services' :
             category === 'partsSupplies' ? 'Parts & Supplies Vendors' :
             category === 'avionicsInstruments' ? 'Avionics & Instruments' :
             category === 'refinishingOther' ? 'Refinishing & Other Services' :
             ''}
          </h2>
          <div className="vendor-cards-container">
            {categorizedVendors[category].map(vendor => (
              <div
                key={vendor.company_name}
                className="vendor-card"
                // onClick={() => onVendorClick(vendor)} // If you still want click functionality
              >
                <h2>{vendor.company_name}</h2>
                {vendor.contact_name && <p>Contact: {vendor.contact_name}</p>}
                {vendor.phone_number && <p>Phone: {vendor.phone_number}</p>}
                {vendor.email && <p>Email: {vendor.email}</p>}
                {vendor.address && <p>Address: {vendor.address}</p>}
                {vendor.fax && <p>Fax: {vendor.fax}</p>}
                {vendor.website && <p>Web: <a href={vendor.website} target="_blank" rel="noopener noreferrer">{vendor.website}</a></p>}
                <p>Services: {vendor.services}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default VendorCards;