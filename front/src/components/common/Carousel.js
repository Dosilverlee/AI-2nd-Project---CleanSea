import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { serverUrl } from "../../Api";

const CarouselWrapper = ({ preview, setReview }) => {
  // 블롭이라면 그냥 src,
  // 백엔드 이미지라면 + http://localhost:5001/ + imgurl

  // 업로드, 수정 할 때 삭제버튼 누르면 하나씩 제거
  // const removeUrl = (index) => {
  //   const newImageUrls = preview.filter((_, idx) => index !== idx);
  //   setReview((current) => ({ ...current, imageUrls: newImageUrls }));
  // };

  return (
    <Carousel
      className="carousel__container px-0"
      interval={null}
      variant="dark"
      indicators={preview?.length > 1}
      prevIcon={
        <FontAwesomeIcon icon={faArrowLeft} className="carousel-arrow-icon" />
      }
      nextIcon={
        <FontAwesomeIcon icon={faArrowRight} className="carousel-arrow-icon" />
      }
    >
      {preview?.map((img, index) => {
        // image 주소 바꾸기
        // db 데이터 (1692779441756.png) 라면 그대로 보여준다
        return (
          // to do: 인덱스 바꾸기::::: img 주소로 넣어두면 중복때문에 에러 안없어져서 임시로 사용
          <Carousel.Item key={img + "" + index}>
            <Image
              src={
                img
                // isBlobURL(img) ? img : serverUrl + "uploads/" + img
              }
              fluid
            />
            {/* 업로드 한 이미지 삭제하기 - 일단 패스 */}
            {/* {setReview && (
              <Carousel.Caption className="d-flex justify-content-end">
                <Button variant="danger" onClick={() => removeUrl(index)}>
                  삭제 <FontAwesomeIcon icon={faTrashCan} />
                </Button>
              </Carousel.Caption>
            )} */}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselWrapper;