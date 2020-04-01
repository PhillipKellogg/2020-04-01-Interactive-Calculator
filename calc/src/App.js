import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import "./style.scss";
class App extends Component {
  state = {
    calorie: 0,
    done: false
  };

  calculate = e => {
    e.preventDefault();
    let calorieCalc;
    let finalCalc = 0;
    const height =
      Number(e.target.inches.value) + Number(e.target.feet.value) * 12;

    if (e.target.gender.value === "male") {
      calorieCalc =
        66 +
        6.3 * e.target.weight.value +
        12.9 * height -
        6.8 * e.target.age.value;
    } else {
      calorieCalc =
        655 +
        4.3 * e.target.weight.value +
        4.7 * height -
        4.7 * e.target.age.value;
    }

    const activity = e.target.activity.value;
    switch (activity) {
      case "0":
        finalCalc = calorieCalc * 1.12;
        break;
      case "1":
        finalCalc = calorieCalc * 1.375;
        break;
      case "2":
        finalCalc = calorieCalc * 1.55;
        break;
      case "3":
        finalCalc = calorieCalc * 1.725;
        break;
      case "4":
        finalCalc = calorieCalc * 1.9;
        break;
    }

    this.setState({
      done: true,
      calorie: Math.floor(finalCalc)
    });
  };

  render() {
    return (
      <main className="main">
        <h1>Calorie Calculator</h1>
        {this.state.done ? (
          <section>
            <h2>
              Your recomended daily calorie intake for maintance is{" "}
              {this.state.calorie}
            </h2>
            <p>
              To lose a pound a week, it is recomended that you consume{" "}
              {Math.floor(this.state.calorie - 71)} calories a day
            </p>
          </section>
        ) : null}
        <section>
          <form onSubmit={this.calculate}>
            <div>
              <h3>Sex</h3>
              <input
                required
                type="radio"
                id="male"
                name="gender"
                value="male"
              />
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
            </div>
            <div>
              <h3>Age</h3>
              <label for="Age">Age</label>
              <input type="number" required id="age" name="age" />
            </div>
            <div>
              <h3>Weight</h3>
              <label for="weight">Weight in LB</label>
              <input type="number" required id="weight" name="weight" />
            </div>
            <div>
              <h3>Height in Feet and Inches</h3>
              <label for="feet">Feet</label>
              <input type="number" required id="feet" name="feet" />
              <label for="inches">Inches</label>
              <input type="number" id="inches" name="inches" />
            </div>
            <div>
              <h3>Activity Level</h3>
              <article className="activity">
                <div className="activity__item">
                  <input
                    required
                    type="radio"
                    id="0"
                    name="activity"
                    value="0"
                  />
                  <label for="0">No Activity</label>
                </div>
                <div className="activity__item">
                  <input type="radio" id="1" name="activity" value="1" />
                  <label for="1">Light Activity [1-3 days a week]</label>
                </div>
                <div className="activity__item">
                  <input type="radio" id="2" name="activity" value="2" />
                  <label for="2">Heavy Activity [4-5 day a week]</label>
                </div>
                <div className="activity__item">
                  <input type="radio" id="3" name="activity" value="3" />
                  <label for="3">Near Daily Activity [6-7 day a week]</label>
                </div>
                <div className="activity__item">
                  <input type="radio" id="4" name="activity" value="4" />
                  <label for="4">
                    Daily Activity + Active job [Everyday, multiple times a day]
                  </label>
                </div>
              </article>
            </div>
            <div>
              <input type="submit" value="submit" />
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default App;
