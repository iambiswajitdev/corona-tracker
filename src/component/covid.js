import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";

const Covid = () => {
  const [covidData, setcovidData] = useState([]);

  const getCovidData = async () => {
    try {
      const response = await fetch("https://api.covid19india.org/data.json");
      const actualData = await response.json();
      setcovidData(actualData.statewise[0]);
      console.log(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="main_covid_table">
        <Container>
          <Row>
            <Col lg={12}>
              <h5 className="animated bounce live">live</h5>
              <h2 className="heading">covid-19 coronavirus tracker</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="covid_box box_1color">
                <h2 className="title">
                  <span>our</span> country
                </h2>
                <h3 className="covid_data">India</h3>
              </div>
            </Col>
            <Col lg={4}>
              <div className="covid_box box_2color">
                <h2 className="title">
                  <span>total</span> Recovered
                </h2>
                <h3 className="covid_data">{covidData.recovered}</h3>
              </div>
            </Col>
            <Col lg={4}>
              <div className="covid_box box_3color">
                <h2 className="title">
                  <span>total</span> confirmed
                </h2>
                <h3 className="covid_data">{covidData.confirmed}</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="covid_box box_4color">
                <h2 className="title">
                  <span>total</span> deaths
                </h2>
                <h3 className="covid_data">{covidData.deaths}</h3>
              </div>
            </Col>
            <Col lg={4}>
              <div className="covid_box box_5color">
                <h2 className="title">
                  <span>total</span> active
                </h2>
                <h3 className="covid_data">{covidData.active}</h3>
              </div>
            </Col>
            <Col lg={4}>
              <div className="covid_box box_6color">
                <h2 className="title_update">
                  <span>Last</span> updated
                </h2>
                <h3 className="covid_data">{covidData.lastupdatedtime}</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Covid;
