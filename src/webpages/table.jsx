import Swal from 'sweetalert2'

const Inventory = ({inventory, setInventory}) => {
    const handleDelete = async (id, name) => {
        const result = await Swal.fire({
            title : 'Delete this Product?',
            text : `Product: ${name}`,
            icon : 'warning',
            showCancelButton : true
        });

        if (result.isConfirmed){
            setInventory(inventory.filter((item) => item.id !== id));
            Swal.fire('Deleted!', 'Product Removed', 'Success');
        }
    };

    return(
        <table border = "1" cellPadding = "10">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {inventory.map((item) => 
                <tr key={item.id} style={{color: item.stock < item.threshold ? 'red' : 'black'}}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.stock}</td>
                    <td>
                        <button onClick={() => handleDelete(item.id, item.name)}>Delete</button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default Inventory;