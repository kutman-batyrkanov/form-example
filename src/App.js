import { useState } from "react";
import "./App.css";
function App() {
  const classNames = ["App"];
  const [submitted, setSubmitted] = useState(false);

  


  function formSubmitCallback(event) {
    const data = new FormData(event.target);
    const user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      gender: data.get('gender'),
      firstName: data.get('email'),
      // ...
    }
    console.log(user);
    event.preventDefault();
  }
  return (
    <form className="App" onSubmit={formSubmitCallback}> 
      <div>
        <label for="firstName">First name</label>
        <input type="text"
          name="firstName"
          id="firstName"
          required />
          <span className="error">required firstName</span>
      </div>
      <div>
        <label for="lastName">Last name</label>
        <input type="text"
          name="lastName"
          id="lastName"
          required />
          <span className="error">required lastName</span>

      </div>
      <div>
        <label for="email">Email</label>
        <input type="email"
          name="email"
          id="email"
          required />
          <span className="error">required Email</span>

      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="tel"
          name="phone"
          id="phone"
          minlength="10"
          maxlength="10"
          required />
          <span className="error">required Phone</span>

      </div>
      <div>
        <label for="dateOfBirth">Date of birth</label>
        <input type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          required />
          <span className="error">required Date Of Birth</span>

      </div>
      <div>
        <label for="gender">Gender</label>
        <select name="gender"
          required
          id="gender">
          <option value="">- Select -</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span className="error">required Gender</span>
      </div>
      <div>
        <label>Education</label>
        <div>
          <label for="school">
            <input type="radio"
              name="education"
              id="school"
              value="school"
              required />School
          </label>
        </div>
        <div>
          <label for="university">
            <input type="radio"
              name="education"
              id="university"
              value="university"
              required /> University
          </label>
        </div>
      </div>
      <div>
        <label>Languages</label>
        <div>
          <label for="english">
            <input type="checkbox"
              name="language"
              id="english"
              value="english" /> English
          </label>
        </div>
        <div>
          <label for="kyrgyz">
            <input type="checkbox"
              name="language"
              id="kyrgyz"
              value="kyrgyz" /> Kyrgyz
          </label>
        </div>
        <div>
          <label for="russian">
            <input type="checkbox"
              name="language"
              id="russian"
              value="russian" /> Russian
          </label>
        </div>
      </div>
      <div>
        <label for="address">Address</label>
        <input type="text"
          name="address"
          id="address"
          required />
          <span className="error">required Address</span>
      </div>
      <div>
        <label for="city">City</label>
        <input type="text"
          name="city"
          id="city"
          required />
          <span className="error">required City</span>
      </div>
      <div>
        <label for="zip">ZIP</label>
        <input type="number"
          name="zip"
          id="zip"
          min="720000"
          max="740000"
          required />
          <span className="error">required ZIP</span>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
export default App;