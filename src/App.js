import React from "react";

import { Card, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://github.com/adrianhajdin/project_corona_tracker/blob/master/src/images/image.png?raw=true"
          alt="COVID-19"
        />
        <Card data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
