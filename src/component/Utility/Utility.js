import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styled from "@emotion/styled";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function Utility() {
  return (
    <>
      <main>
        <section className="mb-5 mt-5">
          <Container>
            <Row>
              <Col>
                <MainHd>
                  UTILITY <span>&#43;</span>{" "}
                  <font>
                    Docs <UploadFileIcon></UploadFileIcon>
                  </font>
                </MainHd>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="mb-5">
          <Container>
            <Row>
              <Col>
                <Message>
                  <ErrorOutlineIcon />
                  <p className="mb-0">
                    You are very early, congrats! You definetly shoud follow our
                    socials, and you won’t miss any update.. See you very SOON!!
                    Lorem ipsum dolor sit amet, consect na aliqua. Ut enim ad
                    minim veniam, etur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam,
                  </p>
                </Message>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

const Message = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  background-color: #deeede;
  border: 2px solid #85e384;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  p {
    color: #487749;
    font-size: clamp(0.75rem, 2vw, 0.89rem);
    font-weight: 600;
  }
  path {
    color: #487749;
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
