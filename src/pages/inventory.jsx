import { useState } from 'react';
import InventoryTable from '../webpages/table';
import StockManager from '../webpages/Stocks';
import AddProductForm from '../webpages/ProductForm';

const initialInventory = [
  { id: 'P001', name: 'Virtus Boot Lip Spoiler', category: 'Exterior', stock: 45, threshold: 25 },
  { id: 'P002', name: 'LED Ambient Lights', category: 'Interior', stock: 12, threshold: 15 },
  { id: 'P003', name: 'Android Infotainment System', category: 'Electronics', stock: 8, threshold: 10 }
];

const Inventory = () => {
  const [inventory, setInventory] = useState(initialInventory);

  return (
    <div className="page-container">
      <h1>Inventory</h1>
      <AddProductForm inventory={inventory} setInventory={setInventory} />
      <StockManager inventory={inventory} setInventory={setInventory} />
      <InventoryTable inventory={inventory} setInventory={setInventory} />
    </div>
  );
};

export default Inventory;
