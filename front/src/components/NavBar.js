import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  FloatingLabel,
  Image,
  InputGroup,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import Avatar from "./Avatar";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import AddReview from "./AddReview";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleClose = () => setShowModal(false);

  const navigate = useNavigate();
  const handleNavigate = (path) => navigate(path);
  console.log(showModal);
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand
            onClick={() => handleNavigate("/")}
            style={{ cursor: "pointer" }}
          >
            로고
          </Navbar.Brand>
          <Nav className="align-items-center">
            <Nav.Link onClick={() => handleNavigate("/search")}>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">검색</Tooltip>}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/network")}>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">둘러보기</Tooltip>}
              >
                <FontAwesomeIcon icon={faCompass} />
              </OverlayTrigger>
            </Nav.Link>
            {/* 로그인 한 유저에게만 보이기 */}
            <Nav.Link onClick={() => setShowModal(!showModal)}>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">업로드</Tooltip>}
                onClick={() => setShowModal(!showModal)}
              >
                <FontAwesomeIcon icon={faSquarePlus} />
              </OverlayTrigger>
              {/* 클릭하면 오버레이 */}

              <AddReview showModal={showModal} setShowModal={setShowModal} />
            </Nav.Link>

            {/* TO DO: 로그인 했다면 '로그아웃'으로 변경 */}
            <Nav.Link onClick={() => handleNavigate("/login")}>로그인</Nav.Link>
            {/* TO DO: 로그인 했다면 보여주기 & 로그인한 유저의 아이디로 변경 */}
            <Nav.Link onClick={() => handleNavigate("users/:id")}>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">나의 프로필</Tooltip>}
              >
                <Avatar width="50" />
              </OverlayTrigger>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
