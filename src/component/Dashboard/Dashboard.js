import React from "react";
import { Container, Image, Row, Col, Form, Dropdown } from "react-bootstrap";
import Button from "@mui/material/Button";
import { PieChart } from "react-minimal-pie-chart";
import { LineGraph1, LineGraph2 } from "../graphs";
import styled from "@emotion/styled";
import Luna from '../../assets/images/luna.png';
import Ust from '../../assets/images/ust.png';

export default function Dashboard() {
  return (
    <>
      <Container className="content-container">
        <div className="title-container">
          <h1>
            Dashboard<span className="docs-container"> Docs</span>
          </h1>
        </div>

        {/* Total value Locked of Luna and UST */}
        <div className="deposit-container">
          <Row>
            <Col md={4}>
              <h5 style={{ fontWeight: "650", marginBottom: "0px" }}>
                TOTAL VALUE LOCKED
              </h5>
              <h2>
                <span>15,859,532,875</span>
                <span style={{ fontSize: "18px", fontWeight: "650" }}>UST</span>
                <span style={{ color: "green", fontSize: "15px" }}>2%</span>
              </h2>
              <Row>
                <Col md={6}>
                  <div
                    className="mx-auto"
                    style={{ width: "80%", paddingTop: "1em" }}
                  >
                    <PieChart
                      data={[
                        { title: "UST", value: 100000, color: "#E38627" },
                        { title: "LUNA", value: 150000, color: "#C13C37" },
                      ]}
                    />
                  </div>
                </Col>
                <Col md={6} style={{ marginTop: "2em" }}>
                  <div>
                    <span>
                      <b style={{ color: "#C13C37" }}>NUNA</b>
                    </span>
                    <p>$ 40,859,532,875 </p>
                  </div>
                  <div>
                    <span>
                      <b style={{ color: "#E38627" }}>UST</b>
                    </span>
                    <p>$ 80,569,902,875 </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              md={8}
              className="border-sm-0"
              style={{ borderLeft: "1px solid white" }}
            >
              <LGContainer>
                <LineGraph1 bool={false} />
              </LGContainer>
            </Col>
          </Row>
        </div>

        {/* UST/LUNA container */}
        <div className="ust-luna-container">
          <div className="ust-container">
            <Image src={Ust} alt="UST"style={{width:"20%"}} />
            <h2 style={{ marginBottom: "20px" }}>UST</h2>
            <div className="apr-container">
              <Button>APR</Button>
              <p>34.87%</p>
            </div>
            <hr style={{ marginTop: "8%" }} />

            <div className="deposit-withdraw-container2">
              <Button className="deposit-btn">Deposit</Button>
              <Button className="withdraw-btn">Withdraw</Button>
            </div>
          </div>

          <div className="luna-container">
            <Image src={Luna} alt="LUNA" style={{width:"15%"}} />
            <h2 style={{ marginBottom: "20px" }}>LUNA</h2>
            <div className="apr-container">
              <Button>APR</Button>
              <p>14.87%</p>
            </div>
            <hr style={{ marginTop: "8%" }} />

            <div className="deposit-withdraw-container2">
              <Button className="deposit-btn">Deposit</Button>
              <Button className="withdraw-btn">Withdraw</Button>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-5">
        <Styledbg>
          <Row>
            <Col>
              <SecHd>How Much can i Earn</SecHd>
            </Col>
          </Row>
          <Row style={{ rowGap: "2rem" }}>
            <Col md={3} className="align-self-center">
              <div className="side_container">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      <h4 className="mb-0">LUNA</h4>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">LUNA</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">LUNA</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">LUNA</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <span className="hr"></span>
                  <h5 className="label">Your Deposit</h5>
                </div>
                <div>
                  <h4>100,000</h4>
                  <span className="hr"></span>
                  <h5 className="label">Amount in UST</h5>
                </div>
                <Form.Range />
              </div>
            </Col>
            <Col
              md={9}
              style={{ borderLeft: "1px solid #ccc" }}
              className="border-sm-0"
            >
              <div className="containerf87">
                <Total>
                  <li>
                    <h4>
                      $148,700
                      <span>Interest Earned</span>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      $148,700
                      <span>Interest Earned</span>
                    </h4>
                  </li>
                  <li>
                    <div className="d-flex mb-1">
                      <div
                        className="colored"
                        style={{ backgroundColor: "yellow" }}
                      ></div>
                      <h5 className="mb-0">TT Performance</h5>
                    </div>
                    <div className="d-flex">
                      <div
                        className="colored"
                        style={{ backgroundColor: "#000" }}
                      ></div>
                      <h5 className="mb-0">Traditional Market</h5>
                    </div>
                  </li>
                </Total>
                <div style={{ width: "100%", overflowX: "scroll" }}>
                  <LineGraph2 />
                </div>
              </div>
            </Col>
          </Row>
        </Styledbg>
      </Container>
      <Container className="mt-5">
        <Styledbg>
          <Row>
            <Col>
              <Hde2>
                TVL OF THE ENTIRE EXOSYSTEM
                <span>534,342,345,343 UST</span>
              </Hde2>
              <LineGraph1 />
            </Col>
          </Row>
        </Styledbg>
      </Container>
    </>
  );
}

const LGContainer = styled.div`
  width: 100%;
`;

const Styledbg = styled.div`
  background-color: #212121;
  border-radius: 20px;
  padding: 4% 3%;
`;

const Total = styled.ul`
  padding: 0;
  margin: 0;
  margin-right: 1rem;
  margin-left: 1rem;
  list-style: none;
  li {
    margin-bottom: 1rem;
  }
  h4 {
    font-size: clamp(1.4rem, 2.5vw, 2.4rem);
    span {
      font-size: clamp(0.75rem, 2vw, 0.8rem);
      line-height: 1;
      display: block;
    }
  }
  .d-flex {
    align-items: center;
    column-gap: 0.5rem;
    .colored {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 3px;
    }
    h5 {
      font-size: clamp(0.75rem, 2vw, 0.8rem);
    }
  }
`;

const SecHd = styled.h4`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  text-align: start;
  font-weight: 600;
  text-transform: uppercase;
`;

const Hde2 = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-align: start;
  font-weight: 600;
  margin-bottom: 2rem;
  span {
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    display: block;
    font-weight: 700;
    line-height: 1;
  }
`;
