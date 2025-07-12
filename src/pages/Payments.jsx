import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Payments = () => {
  const [payments, setPayments] = useState([
    { id: 1, retailer: 'RS Car Decor', amount: 2000, status: 'Due', date: '2025-07-05' },
    { id: 2, retailer: 'AutoTrendz', amount: 15500, status: 'Paid', date: '2025-07-01' }
  ]);

  const handleMarkPaid = async (id) => {
    const result = await Swal.fire({
      title: 'Mark payment as complete?',
      icon: 'question',
      showCancelButton: true
    });

    if (result.isConfirmed) {
      setPayments((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: 'Paid' } : p))
      );
      Swal.fire('Updated!', 'Payment marked as paid.', 'success');
    }
  };

  return (
    <div className="page-container">
      <h1>Payments</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Retailer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id}>
              <td>{p.retailer}</td>
              <td>₹{p.amount}</td>
              <td>{p.status}</td>
              <td>{p.date}</td>
              <td>
                {p.status === 'Due' && (
                  <button onClick={() => handleMarkPaid(p.id)}>Mark Paid</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
