import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import "./ViewTable.css";
import { GoEye } from "react-icons/go";

import ViewModal from "../ViewModal/ViewModal";

import { ToastContainer } from "react-toastify";

const ViewTable = () => {
  //................Table Render Controll.............//

  const [load, setLoad] = useState(false);
  const tableRenderTrue = () => {
    setLoad(true);
  };
  const tableRenderFalse = () => {
    setLoad(false);
  };

  //................Table Render Controll Ends.............//

  // ................Fetching All Data.....................//

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3003/Products");
      const json = await response.json();
      setData(json);
      setSearchData(json);
      setFilterData(json);
      console.log("hp");
    }
    fetchData();
  }, [load]);

  // ................Fetching All Data Enda.....................//

  //  .................Search Data........................//

  const [searchData, setSearchData] = useState([]);

  const Search = (event) => {
    const query = event.target.value;
    const searched = searchData.filter((item) =>
      item.fname.toLowerCase().includes(query.toLowerCase())
    );
    setData(searched);
  };
  useEffect(() => {
    setSearchData(data);
  }, [searchData]);

  //  .................Search Data Ends.....................//

  //  .................Filter Data........................//

  const [filterData, setFilterData] = useState([]);

  const filter = (event) => {
    const filterquery = event.target.value;
    const filtered = filterData.filter(
      (item) =>
        item.status.toUpperCase() === filterquery.toUpperCase() ||
        filterquery === ""
    );
    setData(filtered);
  };
  useEffect(() => {
    setFilterData(data);
  }, [filterData]);

  //  .................Filter Data Ends.....................//

  // ...........View Modal ......................//

  const [viewModal, setViewModal] = useState(false);
  const viewModalClose = () => {
    setViewModal(false);
  };
  const viewModalShow = () => {
    setViewModal(true);
  };

  // ...........View Modal Ends ......................//

  // ...........Row Id.................//
  const [id, setId] = useState(null);
  const handleClick = (id) => {
    console.log(`You clicked me! ${id}`);
    setId(id);
    console.log(id);
  };

  // ...........Row Id Ends..................//

  // .............................//

  const columns = [
    {
      name: "ORG_ID",
      selector: "org_id",
      sortable: true,
    },
 
    {
      name: "PDT_NAME",
      selector: "product_name",
      sortable: true,
    },
    {
      name: "PDT-ITEM",
      selector: "product_item",
      sortable: true,
    },
    {
      name: "PDT_IMAGE",
      selector: "product_image",
      sortable: true,
    },
    ,
    {
      name: "PDT_QTY",
      selector: "product_quantity",
      sortable: true,
    },

   
    {
      name: "PDT_PRICE",
      selector: "product_price",
      sortable: true,
    },
    {
      name: "DISCRIPTION",
      selector: "description",
      sortable: true,
    },
   
    
   
  ];

  const paginationRowsPerPageOptions = [7, 14, 25];
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-1" lg={12}>
            <Card>
              <Card.Body className="pt-4">
                <div style={{ width: "100%" }} className="d-flex ">
                  <input
                    className="ms-auto me-3 mb-2 ps-2 search_inp"
                    type="text"
                    onChange={Search}
                    placeholder="Search"
                  />
                  <div className="me-3 mb-2" style={{ width: "120px" }}>
                    <Form.Select
                      className="ms-auto search_inp "
                      aria-label="Default select example"
                      onChange={filter}
                      name=""
                    >
                      <option
                        style={{ backgroundColor: "#40536e" }}
                        value=""
                        className=" text-white"
                      >
                        Filter
                      </option>
                      <option>New</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Select>
                  </div>
                  <div
                    className="search_inp "
                    style={{
                      width: "95px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      fontWeight: "400",
                      marginRight: "18px",
                      height: "37px",
                    }}
                  >
                    Count : &nbsp;{data.length}
                  </div>
                </div>
                <DataTable
                  columns={columns}
                  data={data}
                  paginationRowsPerPageOptions={paginationRowsPerPageOptions}
                  pagination
                  paginationPerPage={7}
                  fixedHeader
                  selectableRows
                  selectableRowsHighlight
                  fixedHeaderScrollHeight="400px"
                  highlightOnHover
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ViewModal
        tableRenderFalse={tableRenderFalse}
        load={load}
        viewclose={viewModalClose}
        view={viewModal}
        id={id}
      />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ViewTable;
