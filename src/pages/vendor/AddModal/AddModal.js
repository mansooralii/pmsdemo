import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import { GoPlus } from 'react-icons/go'
import { useFormik } from 'formik'
import { ValidSchema } from '../Validation/Validation'
import axios from 'axios'
import { toast } from 'react-toastify'
import './AddModal.css'

const AddModal = () => {
  // .............Modal Controls..................//

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // .............Modal Controls End..................//

  // ...........Validation...............//

  const initialValues = {
    First_name: '',
    Last_name: '',
    Phone: '',
    alternative_no: '',
    email: '',
    Address: '',
    Id_Proof: '',
    Logo: '',
    Company_Name: '',
    Products: '',
    Company_Lisence_Number: '',
    Company_Lisence_Id: '',
    Product_Category: '',
  }
  const handleReset = (formik) => {
    formik.resetForm()
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        create(values)
        resetForm()
        handleClose()
        location.reload();
      } catch (error) {
        console.error(error)
      }
    },
  })
  // ...........Validation Ends..........//

  // ...............Adding User Here.......................//

  const create = async ({
    First_name,
    Last_name,
    email,
    Phone,
    alternative_no,
    Address,
    Id_Proof,
    Logo,
    Company_Name,
    Products,
    Company_Lisence_Number,
    Company_Lisence_Id,
    Product_Category,
  }) => {
    if (First_name == '' && email == '') {
      console.log('enter all detailes')
    } else {
      try {
        const user_lic = {
          First_name: First_name,
          Last_name: Last_name,
          email: email,
          Phone: Phone,
          alternative_no: alternative_no,
          Address: Address,
          Id_Proof: Id_Proof,
          Logo: Logo,
          Company_Name: Company_Name,
          Products: Products,
          Company_Lisence_Number: Company_Lisence_Number,
          Company_Lisence_Id: Company_Lisence_Id,
          Product_Category: Product_Category,
        }

        console.log(formik.values)

        const response = await axios.post(`http://localhost:3003/vendors`, user_lic)

        if (response.status === 200) {
          toast.success('User Successfully Created !', {
            toastId: 'success',
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  // ...............Adding User Ends Here.......................//
  return (
    <>
      <Button
        className="mb-2 fw-600 d-flex align-items-center text-white"
        variant="success"
        onClick={handleShow}
      >
        <GoPlus /> ADD
      </Button>

      <Modal show={show} backdrop="static" centered onHide={handleClose} animation={false}>
        <Modal.Header closeButton style={{ backgroundColor: '#40536e', color: 'white' }}>
          <Modal.Title>Add Vendor</Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Col lg={12}>
              <Form onSubmit={formik.handleSubmit} action="">
                <Modal.Body style={{ height: '310px' }} className="overflow-auto">
                  <Form.Label className="ms-1 ">First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="First_name"
                    autoComplete="off"
                    value={formik.values.First_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.First_name && formik.touched.First_name ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.text}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Last_name"
                    value={formik.values.Last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <Form.Label className="ms-1 mt-1">Phone</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder=""
                    defaultValue=""
                    name="Phone"
                    autoComplete="off"
                    value={formik.values.Phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.number && formik.touched.number ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.number}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder=""
                    defaultValue=""
                    name="email"
                    autoComplete="off"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.email}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Alternative No</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder=""
                    defaultValue=""
                    name="alternative_no"
                    autoComplete="off"
                    value={formik.values.alternative_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.number && formik.touched.number ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.number}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Address"
                    autoComplete="off"
                    value={formik.values.Address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.text}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Id Proof</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Id_Proof"
                    autoComplete="off"
                    value={formik.values.Id_Proof}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.text}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Logo</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Logo"
                    autoComplete="off"
                    value={formik.values.Logo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.text}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Company Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Company_Name"
                    autoComplete="off"
                    value={formik.values.Company_Name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.text}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Products</Form.Label>
                  <Form.Control
                    required
                    type="textr"
                    placeholder=""
                    defaultValue=""
                    name="Products"
                    autoComplete="off"
                    value={formik.values.Products}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.text}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Company Lisence Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Company_Lisence_Number"
                    autoComplete="off"
                    value={formik.values.Company_Lisence_Number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.text}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Company Lisence Id</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Company_Lisence_Id"
                    autoComplete="off"
                    value={formik.values.Company_Lisence_Id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.text}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Product Category</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Product_Category"
                    autoComplete="off"
                    value={formik.values.Product_Category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.text}
                    </p>
                  ) : null}
                </Modal.Body>
                <Modal.Footer className="positoin-fixed">
                  <Button
                    className="text-white"
                    type="reset"
                    variant="danger"
                    onClick={() => {
                      handleReset(formik)
                      handleClose()
                    }}
                  >
                    Close
                  </Button>
                  <Button
                    className="text-white"
                    onClick={() => {
                      formik.isValid ? create(formik.values) : alert(formik.errors)
                      console.log(formik.values)
                    }}
                    type="submit"
                    variant="success ms-2"
                  >
                    Submit
                  </Button>
                </Modal.Footer>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  )
}

export default AddModal
