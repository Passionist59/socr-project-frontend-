import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import styled from "@emotion/styled";
import { DoughnutGraph } from "../graphs";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import img1 from "../../assets/images/user1.png";
import CallMadeIcon from "@mui/icons-material/CallMade";
export default function Mypage() {
  return (
    <>
      <main className="my_page">
        <section className="mb-5 mt-5">
          <Container>
            <Row>
              <Col>
                <MainHd>
                  MY PAGE <span>&#43;</span>{" "}
                  <font>
                    Docs <UploadFileIcon></UploadFileIcon>
                  </font>
                </MainHd>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row className="align-items-stretch" style={{ rowGap: "1rem" }}>
              <Col md={7}>
                <Styledbg>
                  <SecHd>
                    TOTAL VALUE <ErrorOutlineIcon />
                    <span>
                      665,750 <span>UST</span>
                    </span>
                  </SecHd>
                  <div className="graph_container">
                    <DoughnutGraph />
                  </div>
                </Styledbg>
              </Col>
              <Col md={5}>
                <Styledbg>
                  <div className="d-flex flex-wrap h-100 align-content-between">
                    <div className="w-100">
                      <SecHd className="mb-4">
                        TOTAL PAYED INTEREST <ErrorOutlineIcon />
                        <span>
                          1.75 <span>UST</span>
                        </span>
                        <font>USD $1.75</font>
                      </SecHd>
                      <SecHd>
                        TOTAL VALUE <ErrorOutlineIcon />
                        <span>
                          17 <span>DAYS</span>
                        </span>
                      </SecHd>
                    </div>
                    <Btn className="w-100 mt-3">STAKE MORE</Btn>
                  </div>
                </Styledbg>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="my_tabs">
          <Container>
            <Row className="mt-5">
              <Col>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="ALL" title="ALL">
                    <TabData />
                  </Tab>
                  <Tab eventKey="UST" title="UST">
                    <TabData />
                  </Tab>
                  <Tab eventKey="LUNA" title="LUNA">
                    <TabData />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="mt-5 tran_history">
          <Container>
            <Row>
              <Col>
                <h4>TRANSACTION HISTORY</h4>
                <Styledbg>
                  <div className="table-responsive">
                    <table class="table" style={{ minWidth: "500px" }}>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <font>Earn</font>
                                <p>
                                  Deposited <span>25 UST </span> from{" "}
                                  <CallMadeIcon /> <span>terra...wy62h</span>
                                </p>
                              </div>
                              <Timing>
                                <span>Tue, Jan 13, 2022, 09:01:11 PM</span>
                              </Timing>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex justify-content-between">
                              <div>
                                <font>Earn</font>
                                <p>
                                  Deposited <span>25 UST </span> from{" "}
                                  <CallMadeIcon /> <span>terra...wy62h</span>
                                </p>
                              </div>
                              <Timing>
                                <span>Tue, Jan 13, 2022, 09:01:11 PM</span>
                              </Timing>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex justify-content-between">
                              <div>
                                <font>Earn</font>
                                <p>
                                  Deposited <span>25 UST </span> from{" "}
                                  <CallMadeIcon /> <span>terra...wy62h</span>
                                </p>
                              </div>
                              <Timing>
                                <span>Tue, Jan 13, 2022, 09:01:11 PM</span>
                              </Timing>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Styledbg>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

const Timing = styled.div`
  span {
    font-size: 0.7rem;
    color: #cebfbf;
  }
`;

const Btn = styled.button`
  background-color: #493c3c;
  border-radius: 25px;
  color: #fff;
  font-weight: 600;
  font-size: clamp(0.85rem, 2vw, 1rem);
  padding: 1em;
`;
const Styledbg = styled.div`
  background-color: #212121;
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
`;

const SecHd = styled.div`
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  font-weight: 600;
  line-height: 1.2;
  svg {
    margin-bottom: 5px;
  }
  > span {
    display: block;
    font-size: clamp(1rem, 2vw, 2rem);
    span {
      font-size: clamp(0.85rem, 2vw, 1.4rem);
    }
  }
  font {
    display: block;
    font-size: clamp(0.75rem, 2vw, 1rem);
    opacity: 0.8;
    font-weight: 300;
  }
`;

const MainHd = styled.h4`
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 600;
  font {
    font-size: clamp(0.75rem, 2vw, 0.85rem);
    opacity: 0.8;
    svg {
      font-size: clamp(0.75rem, 2vw, 0.85rem);
    }
  }
`;

const TabData = () => {
  return (
    <div className="table-responsive">
      <table className="table" style={{ minWidth: "767px" }}>
        <thead>
          <tr>
            <th></th>
            <th>APY</th>
            <th>Deposit Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td valign="middle">
              <div class="d-flex align-items-center">
                <div className="img_wrapper">
                  <img src={img1} alt="" className="img-fluid" />
                </div>
                <div className="ms-1">
                  <h4>UST</h4>
                  <p>Terra USD</p>
                </div>
              </div>
            </td>
            <td valign="middle">
              <p>34,87%</p>
            </td>
            <td valign="middle">
              <p>234,234 UST</p>
            </td>
            <td valign="middle">
              <div className="btn_wrapper">
                <button>Deposit</button>
                <button>Withdraw</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
