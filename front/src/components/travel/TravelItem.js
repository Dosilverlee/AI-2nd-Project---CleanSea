import React, { useState } from 'react';
import { Row, FormControl, Button, Modal } from "react-bootstrap";
import * as Api from "../../Api";

const TravelItem = ({ travelData, onTravelUpdate, onTravelDelete, displayToast }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [travelId, setTravelId] = useState({
    _id: travelData._id
  });

  const [editedTravel, setEditedTravel] = useState({
    beachId: travelData.beachId,
    date: travelData.date
  });

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleUpdateTravel = async () => {
    try {
      await Api.put(`travels/${travelId._id}`, editedTravel);
      onTravelUpdate(travelData._id, editedTravel);
      setIsEditing(false);
      displayToast('방문 로그가 성공적으로 업데이트 되었습니다.');
    } catch (error) {
      displayToast('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleDeleteClick = async () => {
    try {
      await Api.delete(`travels/${travelId._id}`);
      onTravelDelete();
      displayToast('방문 로그가 성공적으로 삭제되었습니다.');
    } catch (error) {
      displayToast('오류가 발생했습니다. 다시 시도해주세요.');
    }
    handleCloseDeleteModal();
  };

  return (
    <>
      <Row>
        <h5>
          {isEditing
            ? <FormControl type="text" value={editedTravel.beachId} onChange={e => setEditedTravel({ ...editedTravel, beachId: e.target.value })} />
            : travelData.beachId
          }
        </h5>
        <p>
          {isEditing
            ? <FormControl type="text" value={editedTravel.date} onChange={e => setEditedTravel({ ...editedTravel, date: new Date(e.target.value) })} />
            : travelData.date
          }
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          {isEditing ? (
            <>
              <Button variant="link" onClick={() => setIsEditing(false)}>취소</Button>
              <Button variant="link" onClick={handleUpdateTravel}>업데이트</Button>
            </>
          ) : (
            <>
              <Button variant="link" onClick={() => setIsEditing(true)}>편집</Button>
              <Button variant="link" onClick={handleShowDeleteModal}>삭제</Button>
            </>
          )}
        </div>

        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
          <Modal.Header closeButton>
            <Modal.Title>삭제 확인</Modal.Title>
          </Modal.Header>
          <Modal.Body>정말 삭제하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDeleteModal}>취소</Button>
            <Button variant="danger" onClick={handleDeleteClick}>삭제</Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </>
  );
};

export default TravelItem;
