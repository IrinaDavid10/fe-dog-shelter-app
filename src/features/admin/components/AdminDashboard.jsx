
function AdminDashboard({setIsLoggedIn, clearDogs}){

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
            <button className="admin-button">Add New Dog</button>
            <button className="admin-button">View Appointments</button>
            <button className="admin-button">Delete Dog</button>
            <button className="admin-button">Edit Dog</button>
        </div>
        </div>

    );
}
export default AdminDashboard;

