import Swal from "sweetalert2";
import { useState } from "react";

const StockManager = ({inventory, setInventory}) => {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [add, setAdd] = useState('add');

    const handleSubmit = async(event) => {
        event.preventDefault();
        const selected = inventory.find((item) => item.id === productId);
        if(!selected) return;
        
        const result = await Swal.fire({
            title : 'Are you sure?',
            text : `You want to ${add} ${quantity} units of ${selected.name}?`,
            icon:'warning',
            showCancelButton : true
        });

        if(result.isConfirmed){
            setInventory((prev) =>
                prev.map((item) => 
                    item.id === productId?{
                        ...item, stock: add === 'add'? item.stock + Number(quantity) : Math.max(item.stock - Number(quantity), 0)
                    } : item
                )
            );
            Swal.fire('Done!', 'Stock updated.', 'success');
            setProductId('');
            setQuantity('');
            setAdd('add');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <select value={productId} onChange={(e) => setProductId(e.target.value)} required>
                <option value="">Select Product</option>
                {inventory.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
            <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} required placeholder="Qty" />
            <select value={add} onChange={(e) => setAdd(e.target.value)}>
                <option value="add">Add</option>
                <option value="remove">Remove</option>
            </select>
            <button type="submit">Update Stock</button>
        </form>
    );
}

export default StockManager;