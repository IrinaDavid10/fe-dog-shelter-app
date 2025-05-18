import { useState } from "react";
import { getAllDogs } from "../../api/dogApi";
import DogCard from "./DogCard";
import { login } from "../../api/authApi";

function DogList() {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchDogs = async () => {
      setLoading(true);
      try {
        const data = await getAllDogs();
        setDogs(data || []);
      } catch (err) {
        console.error('Error fetching dogs:', err);
      } finally {
        setLoading(false);
      }
    };

    return(
        <div className="dog-list-container">
            <h2>Dog List</h2>
            <button onClick={()=> login()}>APASA</button>
            <button
                onClick={fetchDogs}
                disabled={loading}
                className="fetch-button"
                >
                    {loading ? 'Loading...' : 'Show Dogs'}

            </button>

            <div className="dogs-grid">
                {dogs.length>0 ? (
                    <ul className="dogs-ul">
                        { dogs.map(dog => (
                            <DogCard key={dog.id} dog={dog} />
                        ))} 
                    </ul>
                ) : (
                    !loading && <p>No dogs found. Click the button to fetch dogs.</p>
                )}

            </div>
        </div>

    );
}

export default DogList;
