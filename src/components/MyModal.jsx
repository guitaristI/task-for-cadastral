import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal(props) {
    const [show, setShow] = useState(props.visible);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Описание</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><span>Дата записи:</span> {props.data.dateCreated}</p>
                    <p><span>Наименование:</span> {props.data.name}</p>
                    <div className='encumbrance'><span>Обременение:</span> {props.data.objectType === 'building' ?
                        props.data.building.encumbrancesExists ? <p>Зарегистрированы</p> : <p>Не зарегистрированы</p>
                        : props.data.objectType === 'flat' ?
                            props.data.flat.encumbrancesExists ? <p>Зарегистрированы</p> : <p>Не зарегистрированы</p>
                        : props.data.objectType === 'building' ?
                            props.data.building.encumbrancesExists ? <p>Зарегистрированы</p> : <p>Не зарегистрированы</p>
                        : props.data.objectType === 'parcel' ?
                            props.data.parcelData.encumbrancesExists ? <p>Зарегистрированы</p> : <p>Не зарегистрированы</p>
                                : <p>empty</p>}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModal;