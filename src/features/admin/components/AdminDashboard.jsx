import { useState } from "react";
import { getDog } from "../../api/dogApi";

function AdminDashboard({setIsLoggedIn, clearDogs, setShowDogCreationForm, showDogCreationForm }){
    
    const [dogSearchId, setDogSearchId] = useState("");
    const handleDogSearchById = async() => {
        if(!dogSearchId){
            alert("Please enter a dog ID");

        }
        
        try{
            const dog = await getDog(dogSearchId);
            console.log("Found dog:", dog);
            alert(`Found: ${dog.name}`);
        }catch(error){
            console.log("Error finding dog: ", error);
            alert("Dog not found");
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        clearDogs();
        setIsLoggedIn(false);
    }

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h2>Admin Dashboard</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        <div className="admin-actions">
            <h3>Admin Actions</h3>
            <button className="admin-button" onClick={() => setShowDogCreationForm(!showDogCreationForm)}>Add New Dog</button>
            <button className="admin-button">View Appointments</button>
            <button className="admin-button">Delete Dog</button>
            <button className="admin-button">Edit Dog</button>
        </div>
    
        <div className="search-section">
            <h3>Search by dog ID</h3>
            <input
            type="number"
            placeholder="Enter a dog ID"
            value={dogSearchId}
            onChange={(e) => setDogSearchId(e.target.value)}>
            </input>
            <button onClick={handleDogSearchById}>Search dog</button>
        </div>
        </div>

    );
}
export default AdminDashboard;

