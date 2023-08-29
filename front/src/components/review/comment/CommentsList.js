import { useContext } from "react";
import Comment from "./Comment";
import { ModalVisibleContext } from "../../../App";
import { MODAL_TYPE } from "../../../constants";

const CommentsList = ({
  comments,
  newComments,
  selectedReview,
  setSelectedReview,
  review,
  reviewId,
  setNewComments,
  setReviews,
  showDetails,
}) => {
  const { setModalVisible } = useContext(ModalVisibleContext);

  return (
    <>
      {/* 댓글 3개까지만 미리보기 */}
      {comments?.map(
        (comment, index) =>
          index < 2 && (
            <div key={comment._id}>
              <Comment
                comment={comment}
                selectedReview={selectedReview}
                setSelectedReview={setSelectedReview}
              />
            </div>
          )
      )}
      {/* 새로 작성될 커맨트 리스트 */}
      {newComments && (
        <div>
          {newComments.map((item) => (
            <Comment
              comment={item}
              key={item._id}
              selectedReview={selectedReview}
              setSelectedReview={setSelectedReview}
              review={review}
            />
          ))}
        </div>
      )}
      {/* ::::댓글 모두 보기:::: 클릭시 floatingReview 모달에 데이터 보내주기 */}
      <div
        onClick={() =>
          setModalVisible({
            type: MODAL_TYPE.floatingReview,
            isVisible: true,
            data: {
              reviewId,
              review,
              setNewComments,
              setReviews,
            },
          })
        }
        className="link"
      >
        {/* 임시로 2개!! 원래 3개임 */}
        {showDetails && `댓글 ${comments.length}개 모두 보기`}
      </div>
    </>
  );
};

export default CommentsList;