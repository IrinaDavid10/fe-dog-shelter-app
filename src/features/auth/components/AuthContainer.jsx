import { useEffect, useState } from "react";
function AuthContainer() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('');

    useEffect(
        () => {
            const token = localStorage.getItem('token');
            const storedRole = localStorage.getItem('userRole');

            if(token && storedRole){
                setLoggedIn(true);
                setUserRole(storedRole);
            }
        }, []);
    
    const handleLoginSuccess = (role) => {
        setLoggedIn(true);
        setUserRole(role);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUserRole('');
    };

    return (
        <div>
            {/* {!loggedIn ? (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            ) : (
                userRole === 'ROLE_ADMIN' && (
                    <AdminDashboard onLogout={handleLogout} />
                )
            )} */}
        </div>
    );
}
export default AuthContainer;