import React from 'react';

const retailers = [
  {
    id: 'R001',
    name: 'RS Car Decor',
    city: 'Hyderabad',
    phone: '9876543210',
    lastOrder: '2025-06-20',
    paymentDue: 2000
  },
  {
    id: 'R002',
    name: 'AutoTrendz',
    city: 'Bangalore',
    phone: '9123456780',
    lastOrder: '2025-07-01',
    paymentDue: 0
  }
];

const Retailers = () => {
  return (
    <div className="page-container">
      <h1>Retailers</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Phone</th>
            <th>Last Order</th>
            <th>Due Payment</th>
          </tr>
        </thead>
        <tbody>
          {retailers.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.city}</td>
              <td>{r.phone}</td>
              <td>{r.lastOrder}</td>
              <td>{r.paymentDue === 0 ? 'None' : `₹${r.paymentDue}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Retailers;
