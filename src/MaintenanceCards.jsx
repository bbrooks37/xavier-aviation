import React from 'react';

function MaintenanceCards() {
  // Function to parse date strings into Date objects for easier comparison
  const parseDate = (dateString) => {
    if (!dateString) return null;
    const [year, month, day] = dateString.split('-');
    return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
  };

  const maintenanceItemsData = [
    { component: 'THROTTLE RETARDER REMOVAL/INSTALLATION', last_done: '2022-01-11', interval: 'M: 36', next_due_date: '2025-01-11', remaining: '1750' },
    { component: 'THROTTLE RETARDER-REMOVAL/INSTALLATION', last_done: '2022-01-11', interval: 'M: 36', next_due_date: '2025-01-11', remaining: '1750' },
    { component: 'COCKPIT PORTABLE HALON FIRE EXTINGUISHER-HEFT CHECK PER NFPA 10', last_done: '2025-01-25', interval: 'D: 30', next_due_date: '2025-02-24', remaining: '175' },
    { component: 'CABIN PORTABLE HALON FIRE EXTINGUISHER-HEFT CHECK PER NFPA 10', last_done: '2025-01-25', interval: 'D: 30', next_due_date: '2025-02-24', remaining: '175' },
    { component: 'FUEL TANK MICROBIAL CONTAMINATION TEST - SPECIAL DETAILED INSPECTION', last_done: '2024-10-25', interval: 'M: 4', next_due_date: '2025-02-25', remaining: '332' },
    { component: 'ELT FUNCTIONAL CHECK', last_done: '2024-04-02', interval: 'M: 12', next_due_date: '2025-04-02', remaining: '285' },
    { component: 'NO. 1 ENGINE - COMBUSTION CHAMBER PLENUM CASE PERIODIC INSPECTION', last_done: '1997-08-02', interval: 'H: 2100.00', next_due_date: '2025-04-18', remaining: '0' },
    { component: 'NO. 2 ENGINE - COMBUSTION CHAMBER PLENUM CASE PERIODIC INSPECTION', last_done: '1997-07-31', interval: 'H: 2100.00', next_due_date: '2025-04-18', remaining: '0' },
    { component: 'NO. 1 ENGINE FAN ROTOR ASSEMBLY - BLADES - INSPECT FOR FOREIGN OBJECT DAMAGE', last_done: '2022-04-08', interval: 'H: 300.00', next_due_date: '2025-04-18', remaining: '0' },
    { component: 'NO. 2 ENGINE FAN ROTOR ASSEMBLY - BLADES - INSPECT FOR FOREIGN OBJECT DAMAGE', last_done: '2022-04-08', interval: 'H: 300.00', next_due_date: '2025-04-18', remaining: '0' },
    { component: 'NO. 2 ENGINE - 250 HOUR INSPECTION', last_done: '2022-04-08', interval: 'H: 250.00', next_due_date: '2025-04-18', remaining: '0' },
    { component: 'NO. 2 ENGINE - MAJOR PERIODIC INSPECTION', last_done: '2022-04-08', interval: 'H: 2100.00', next_due_date: '2025-04-18', remaining: '0' },
    { component: 'NO. 1 ENGINE - MAJOR PERIODIC INSPECTION', last_done: '2022-04-08', interval: 'H: 2100.00', next_due_date: '2025-04-18', remaining: '0' },
    { component: 'NO. 1 ENGINE - 250 HOUR INSPECTION', last_done: '2022-04-08', interval: 'H: 250.00', next_due_date: '2025-04-18', remaining: '0' },
    { component: 'PS-835 EMERGENCY POWER SUPPLY - AHRS-PERIODIC CHECK', last_done: '2024-10-25', interval: 'M: 6', next_due_date: '2025-04-25', remaining: '685' },
    { component: 'PS-835 EMERGENCY POWER SUPPLY - GYRO - PERIODIC CHECK', last_done: '2024-10-25', interval: 'M: 6', next_due_date: '2025-04-25', remaining: '685' },
    { component: 'RVSM STC 12 MONTH CHECKS', last_done: '2023-05-01', interval: 'M: 24', next_due_date: '2025-05-01', remaining: '3900' },
    { component: 'FUNCTIONAL TEST/LEAK TEST OF THE PITOT-STATIC SYSTEM', last_done: '2023-05-01', interval: 'M: 24', next_due_date: '2025-05-01', remaining: '0' },
    { component: 'DOWN LOAD DIGITAL ELECTRONIC ENGINE CONTROL (DEEC) ECTM #2 R/H ENGINE', last_done: '2024-07-24', interval: 'C: 40', next_due_date: '2025-09-08', remaining: '0' },
    { component: 'DOWN LOAD DIGITAL ELECTRONIC ENGINE CONTROL (DEEC) ECTM #1 L/H ENGINE', last_done: '2024-07-24', interval: 'C: 40', next_due_date: '2025-09-08', remaining: '0' },
  ];

  // Categorize items by the month they are due
  const upcomingMaintenance = {};
  const now = new Date();

  maintenanceItemsData.forEach(item => {
    const dueDate = parseDate(item.next_due_date);
    if (dueDate) {
      const year = dueDate.getFullYear();
      const month = dueDate.toLocaleString('default', { month: 'long' });
      const categoryKey = `${year}-${month}`;

      if (!upcomingMaintenance[categoryKey]) {
        upcomingMaintenance[categoryKey] = [];
      }
      upcomingMaintenance[categoryKey].push(item);
    }
  });

  // Sort the categories by due date
  const sortedMaintenanceKeys = Object.keys(upcomingMaintenance).sort((a, b) => {
    const [yearA, monthA] = a.split('-');
    const [yearB, monthB] = b.split('-');
    const dateA = new Date(parseInt(yearA, 10), new Date(Date.parse(monthA + " 1, 2000")).getMonth(), 1);
    const dateB = new Date(parseInt(yearB, 10), new Date(Date.parse(monthB + " 1, 2000")).getMonth(), 1);
    return dateA - dateB;
  });

  return (
    <div className="maintenance-categories-container">
      <h1>Upcoming Maintenance</h1>
      {sortedMaintenanceKeys.map(monthYear => (
        <div key={monthYear} className="maintenance-category">
          <h2>{monthYear.split('-')[1]} {monthYear.split('-')[0]}</h2>
          <div className="maintenance-cards-container">
            {upcomingMaintenance[monthYear].map(item => (
              <div key={item.component} className="maintenance-card" onClick={() => handleMaintenanceClick(item)}>
                <h3>{item.component}</h3>
                <p>Next Due Date: {item.next_due_date}</p>
                {item.remaining && <p>Remaining: {item.remaining}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MaintenanceCards;