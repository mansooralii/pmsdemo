import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
const ViewModal = ({ viewclose, view, id }) => {
  // ..................Modal Controlls......................//

  const [show, setShow] = useState(view)
  useEffect(() => {
    setShow(view)
  }, [view])
  const handleModalClose = () => {
    viewclose()
    setShow(false)
  }

  // ..................Modal Controlls Ends......................//

  //.................fetch one data....................//

  const [details, setDetails] = useState(id)
  useEffect(() => {
    setDetails(id)
  }, [id])

  const [user, setUser] = useState({})
  const showDetail = async (details) => {
    console.log('hai' + details)
    try {
      const response = await axios.get(`http://localhost:8000/licensee/${details}`)
      const data = response.data
      console.log('response' + response.data.f_name)
      setUser(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    showDetail(details)
  }, [details])

  //.................fetch one data ends....................//
  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        centered
        onHide={handleModalClose}
        animation={false}
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: '#40536e', color: 'white' }}>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '310px' }} className="overflow-auto">
          <Container>
            <Row>
              <Col lg={12}>
                <Form.Label className="ms-1 mt-2">First name</Form.Label>
                <Form.Control disabled type="text" value={user.f_name} />
                <Form.Label className="ms-1 mt-2">Last name</Form.Label>
                <Form.Control disabled type="text" value={user.l_name} />
                <Form.Label className="ms-1 mt-2">Email</Form.Label>
                <Form.Control disabled type="text" value={user.email} />
                <Form.Label className="ms-1 mt-2">Password</Form.Label>
                <Form.Control disabled type="text" value={user.password} />
                <Form.Label className="ms-1 mt-2">Phone</Form.Label>
                <Form.Control disabled type="text" value={user.mobile_no} />
                <Form.Label className="ms-1 mt-2">Role</Form.Label>
                <Form.Control disabled type="text" value={user.role_opt} />
                <Form.Label className="ms-1 mt-2">Join Date</Form.Label>
                <Form.Control disabled type="text" value={user.createdAt} />
                <Form.Label className="ms-1 mt-2">Status</Form.Label>
                <Form.Control disabled type="text" value={user.status} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className='text-white' variant="danger" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ViewModal
