import "./App.css";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Date from "./Date";
import Time from "./Time";
import Form from "./Form";
import LocationBtn from "./LocationBtn";
import Github from "./Github";
import Temperature from "./Temperature";
import MyLocation from "./MyLocation";

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="forecast"></div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <Form />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col">
            <MyLocation />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <span className="weatherData">
              <p>
                <Humidity />
                <br />
                <Wind />
              </p>
            </span>
          </div>
          <div className="col-6">
            <p>
              <span className="description"></span>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt=""
              />
            </p>
          </div>
          <div className="col-3">
            <span className="time-date">
              <p>
                <Date />
                <br />
                <Time />
              </p>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <LocationBtn />
          </div>
          <div className="col-3">
            <Temperature />
          </div>
        </div>
      </div>
      <Github />
    </div>
  );
}
