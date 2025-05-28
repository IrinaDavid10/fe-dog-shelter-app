import { useState } from "react";
import { createDog } from "../../api/dogApi";

function DogCreationForm(){
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await createDog(name, breed);
        if(response === null){
            alert("Cannot create dog");
        }else{
            alert("Dog created successfully");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Enter dog name:
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}>
                </input>
            </label>
            <br/>
             <label>
                Enter dog breed:
                <input
                type="text"
                name="breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}>
                </input>
            </label>
            <br/>
            <button type="submit">Add</button>
        </form>
    );
}
export default DogCreationForm;