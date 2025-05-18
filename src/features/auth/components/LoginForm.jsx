// import { useState } from "react";

// function LoginForm({onLoginSuccess}){
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         try{
//           //  const data = await loginAdmin(username, password);

//             const role = setAuthData(data.token);

//             if(onLoginSuccess){
//                 onLoginSuccess(role);
//             }
//         }catch (err) {
//             setError('Login failed. Please check your credentials.')

//         }finally{
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="login-form-container">
//             <h2>Admin Login</h2>
//             {error && <p className="error-message">{error}</p>}

//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="username">
//                         Username:
//                     </label>
//                     <input
//                     type="text"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                     />
//                 </div>
//                 <br/>
//                 <div className="form-group">
//                     <label htmlFor="password">
//                         Password:
//                     </label>
//                     <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     />
//                 </div>
//                 <br/>
//                 <button
//                 type="submit"
//                 className="login-button"
//                 disabled={loading}
//                 >
//                 {loading ? 'Logging in...' : 'Login'}
//                 </button>
//             </form>
//         </div>
//     );
// }
// export default LoginForm;