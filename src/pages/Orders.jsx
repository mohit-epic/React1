import { useState } from 'react';
import Swal from 'sweetalert2';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      retailer: 'RS Car Decor',
      items: 'Spoiler x2, LED x5',
      status: 'Pending',
      amount: 6300
    },
    {
      id: 'ORD002',
      retailer: 'AutoTrendz',
      items: 'Infotainment x1',
      status: 'Delivered',
      amount: 15500
    }
  ]);

  const handleStatusUpdate = async (id) => {
    const result = await Swal.fire({
      title: 'Mark as Delivered?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    });

    if (result.isConfirmed) {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === id ? { ...order, status: 'Delivered' } : order
        )
      );
      Swal.fire('Updated!', 'Order marked as delivered.', 'success');
    }
  };

  return (
    <div className="page-container">
      <h1>Orders</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Retailer</th>
            <th>Items</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.retailer}</td>
              <td>{order.items}</td>
              <td>{order.status}</td>
              <td>₹{order.amount}</td>
              <td>
                {order.status === 'Pending' && (
                  <button onClick={() => handleStatusUpdate(order.id)}>
                    Mark as Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
