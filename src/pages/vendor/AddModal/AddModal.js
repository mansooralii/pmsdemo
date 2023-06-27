import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { useFormik } from "formik";
import { ValidSchema } from "../Validation/Validation";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddModal.css";

const AddModal = () => {
  // .............Modal Controls..................//

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // .............Modal Controls End..................//

  // ...........Validation...............//

  const initialValues = {
    firstname: "",
    lastname: "",
    mobile_no: "",
    alternative_no: "",
    email: "",
    address: "",
    id_proof: "",
    logo: "",
    company_name: "",
    products: "",
    company_licens_no: "",
    company_licens_id: "",
    product_category: "",

  };
  const handleReset = (formik) => {
    formik.resetForm();
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values.firstname);
      try {
        create(values);
        resetForm();
        handleClose();
      } catch (error) {
        console.error(error);
      }
    },
    
  });
  // ...........Validation Ends..........//

  // ...............Adding User Here.......................//

  const create = async ({
    firstname,
    lastname,
    email,
    mobile_no,
    alternative_no,
    address,
    id_proof,
    logo,
    company_name,
    products,
    company_lisence_no,
    company_lisence_id,
    product_category,

  }) => {
    try {
      const user_lic = {
        f_name: firstname,
        l_name: lastname,
        email: email,
        mobile_no: mobile_no,
        alternative_no: alternative_no,
        address: address,
        id_proof: id_proof,
        logo: logo,
        company_name: company_name,
        products: products,
        company_lisence_no: company_lisence_no,
        company_lisence_id: company_lisence_id,
        product_category:  product_category,
        
      };
      const response = await axios.post(
        `http://localhost:8000/licensee`,
        user_lic
      );
      if (response.status === 200) {
        toast.success("User Successfully Created !", {
          toastId: "success",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


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

      <Modal
        show={show}
        backdrop="static"
        centered
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#40536e", color: "white" }}
        >
          <Modal.Title>Add Vendor</Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Col lg={12}>
              <Form  onSubmit={formik.handleSubmit} action="">
                <Modal.Body
                  style={{ height: "310px" }}
                  className="overflow-auto"
                >
                  <Form.Label className="ms-1 ">First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="firstname"
                    autoComplete="off"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.firstname && formik.touched.firstname ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.firstname}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                  />
                  <Form.Label className="ms-1 mt-1">Phone</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder=""
                    defaultValue=""
                    name="mobile_no"
                    autoComplete="off"
                    value={formik.values.mobile_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.mobile_no && formik.touched.mobile_no ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.mobile_no}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
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
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.email}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">alternative_no</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder=""
                    defaultValue=""
                    name="alternative number"
                    autoComplete="off"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.number && formik.touched.number ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
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
                    name="address"
                    autoComplete="off"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
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
                    name="id_proof"
                    autoComplete="off"
                    value={formik.values.id_proof}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.id_proof && formik.touched.id_proof ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.id_proof}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Logo</Form.Label>
                  <Form.Control
                    required
                    type="src"
                    placeholder=""
                    defaultValue=""
                    name="image"
                    autoComplete="off"
                    value={formik.values.src}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.src && formik.touched.src ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.src}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Company Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Company_name"
                    autoComplete="off"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
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
                    name="products"
                    autoComplete="off"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
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
                    name="companyu_lisence_no"
                    autoComplete="off"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
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
                    name="company_lisence_id"
                    autoComplete="off"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
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
                    name="product_category"
                    autoComplete="off"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.text && formik.touched.text ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
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
                      handleClose();
                    }}
                  >
                    Close
                  </Button>
                  <Button
                    className="text-white"
                    onClick={() => {
                      formik.isValid ? create(formik.values) : alert(formik.errors);
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
  );
};

export default AddModal;
