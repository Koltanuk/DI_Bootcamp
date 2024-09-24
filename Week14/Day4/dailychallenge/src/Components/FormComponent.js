
import React from "react";

function FormComponent({ handleChange, handleSubmit, formData }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          /> Female
        </label>
        <br />

        <label>
          Destination:
          <select name="destination" value={formData.destination} onChange={handleChange}>
            <option value="">--Choose a destination--</option>
            <option value="Japan">Japan</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
          </select>
        </label>
        <br />

        <fieldset>
          <legend>Dietary restrictions:</legend>

          <label>
            Nuts free:
            <input
              type="checkbox"
              name="nutsFree"
              checked={formData.nutsFree}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Lactose free:
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.lactoseFree}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Vegan:
            <input
              type="checkbox"
              name="vegan"
              checked={formData.vegan}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* Display the entered information */}
      <div>
        <h2>Entered information:</h2>
        <p>Your name: {formData.firstName} {formData.lastName}</p>
        <p>Your age: {formData.age}</p>
        <p>Your gender: {formData.gender}</p>
        <p>Your destination: {formData.destination}</p>
        <p>Your dietary restrictions:</p>
        <ul>
          <li>Nuts free: {formData.nutsFree ? "Yes" : "No"}</li>
          <li>Lactose free: {formData.lactoseFree ? "Yes" : "No"}</li>
          <li>Vegan meal: {formData.vegan ? "Yes" : "No"}</li>
        </ul>
      </div>
    </div>
  );
}

export default FormComponent;
