import React, { useState, useEffect } from "react"
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap"
import { toast } from "react-toastify"
import axios from "axios"

// eslint-disable-next-line react/prop-types
const UpdateModal = ({ updateclose, update, id }) => {
  const [show, setShow] = useState(update)

  useEffect(() => {
    setShow(update)
  }, [update])

  const handleModalClose = () => {
    updateclose()
    setShow(false)
  }

  const [user, setUser] = useState({})

  useEffect(() => {
    const showDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/vendors/${id}`)
        const data = response.data
        setUser(data)
      } catch (error) {
        console.error(error)
      }
    }

    showDetail()
  }, [id])

  const handleChange = event => {
    const { name, value } = event.target
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const updateUser = async user => {
    try {
      const response = await axios.patch(
        `http://localhost:3003/vendors/${user._id}`,
        user
      )
      if (response.status === 200) {
        toast.success("User Successfully Updated!", {
          toastId: "success",
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error) {
      console.error(error)
    }
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        centered
        onHide={handleModalClose}
        animation={false}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#40536e", color: "white" }}>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={12}>
                <Form action="">
                  <Form.Label className="ms-1">First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="First_name"
                    value={user.First_name || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Last_name"
                    value={user.Last_name || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Phone</Form.Label>
                  <Form.Control
                    type="number"
                    name="Phone"
                    value={user.Phone || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email || ""}
                    onChange={handleChange}
                  />{" "}
                  <Form.Label className="ms-1 mt-2">Alternative No</Form.Label>
                  <Form.Control
                    type="text"
                    name="alternative_no"
                    value={user.alternative_no || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="Address"
                    value={user.Address || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Id Proof</Form.Label>
                  <Form.Control
                    type="text"
                    name="Id_Proof"
                    value={user.Id_Proof || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Logo</Form.Label>
                  <Form.Control
                    type="text"
                    name="Logo"
                    value={user.Logo || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Company_Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Company_Name"
                    value={user.Company_Name || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Products</Form.Label>
                  <Form.Control
                    type="text"
                    name="Products"
                    value={user.Products || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">
                    Company_Lisence_Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Company_Lisence_Number"
                    value={user.Company_Lisence_Number || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">
                    Company Lisence_Id
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Company_Lisence_Id"
                    value={user.Company_Lisence_Id || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">
                    Product Category
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Product_Category"
                    value={user.Product_Category || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="status"
                    value={user.status || ""}
                    onChange={handleChange}>
                    <option
                      style={{ backgroundColor: "#40536e" }}
                      value=""
                      className=" text-white">
                      {user.status}
                    </option>
                    <option
                      className={
                        user.status === "Active" ? "d-none" : "d-block"
                      }
                      value="Active">
                      Active
                    </option>
                    <option
                      className={
                        user.status === "Inactive" ? "d-none" : "d-block"
                      }
                      value="Inactive">
                      Inactive
                    </option>
                  </Form.Select>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="text-white"
            onClick={handleModalClose}>
            Close
          </Button>
          <Button
            className="text-white"
            variant="success"
            onClick={() => {
              handleModalClose()
              updateUser(user)
            }}>
            Save
          </  Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateModal;

