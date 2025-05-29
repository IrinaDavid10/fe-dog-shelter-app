import { useState } from "react";
import { deleteDog } from "../../api/dogApi";



function DogDeleteForm() {
    const [dogDeleteId, setDogDeleteId] = useState("");

       const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await deleteDog(dogDeleteId);
        if (response === null) {
            alert("Cannot delete dog");
        } else {
            alert("Dog deleted successfully");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter dog id:
                <input
                    type="number"
                    name="id"
                    value={dogDeleteId}
                    onChange={(e) => setDogDeleteId(e.target.value)}>
                </input>
            </label>
             <br></br>
            <button type="submit">Delete</button>
        </form>
    );
}
export default DogDeleteForm;