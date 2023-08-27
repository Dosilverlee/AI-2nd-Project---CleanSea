import { Col, Container, Row } from "react-bootstrap";

const ReviewFormBody = ({ userInputValues, setUserInputValues }) => {
  return (
    <Container className="w-100">
      <Row className="d-flex flex-column">
        <Col className="w-100">
          <label className="w-100">제목</label>
          <input
            className="w-100"
            type="input"
            value={userInputValues?.title}
            onChange={(e) => {
              console.log(e.target.value);
              setUserInputValues({ ...userInputValues, title: e.target.value });
            }}
          />
        </Col>
        <Col className="w-100">
          <label className="w-100">내용</label>
          <textarea
            className="w-100"
            rows={6}
            value={userInputValues.content}
            onChange={(e) => {
              if (userInputValues?.content.length < 300) {
                // 300 길이로 조건 걸어두면 300에서 멈춰서 글자가 지워지지도 않음
                setUserInputValues({
                  ...userInputValues,
                  content: e.target.value,
                });
              }
            }}
          />
        </Col>
        <small
          className={
            userInputValues?.content.length < 300
              ? "text-muted flex-justify-end"
              : "delete flex-justify-end"
          }
        >
          {userInputValues?.content ? userInputValues?.content.length : "0"}/300
        </small>
      </Row>
    </Container>
  );
};

export default ReviewFormBody;
