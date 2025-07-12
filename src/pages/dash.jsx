import Card from "../webpages/card";

function Dash(){
    return(
        <div className="pages">
            <h1>Dashboard</h1>
            <div className="cards">
                <Card title="Total Revenue" value="50"></Card>
                <Card title="Pending Orders" value="5000"></Card>
                <Card title="Cash Flow" value="5000000"></Card>
                <Card title="Retailers Active" value="12"></Card>
            </div>
        </div>
    );
}

export default Dash;