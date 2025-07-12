import { useState } from "react";
import Swal from "sweetalert2";

const AddForm = ({inventory, setInventory}) => {
    const [form, setForm] = useState({id:'', name:'', category:'', stock:0, threshold:5});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleAdd = async(e) => {
        e.preventDefault();
        const exists = inventory.find((item)=>item.id === form.id);
        if (exists){
            Swal.fire('Error', 'Product ID already exists', 'error');
            return;
        }
        const confirm = await Swal.fire({
            title: 'Add this product?',
            text: `Product: ${form.name}`,
            icon: 'question',
            showCancelButton: true
        });

        if(confirm.isConfirmed){
            setInventory([...inventory], {...form, stock: Number(form.stock), threshold: Number(form.threshold)});
            Swal.fire('Added!', 'Product has been added.', 'success');
            setForm({id:'', name:'', category:'', stock:0, threshold:5});
        }
    };

    return(
        <form onSubmit={handleAdd}>
            <input name="id" placeholder="ID" value={form.id} onChange={handleChange} required></input>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required></input>
            <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required></input>
            <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required></input>
            <input name="threshold" type="number" placeholder="Threshold" value={form.threshold} onChange={handleChange} required></input>
            <button type="submit">Add Product</button>
        </form>
    )
}

export default AddForm;