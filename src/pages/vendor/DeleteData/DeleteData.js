import React, { useState,useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import {toast } from "react-toastify";


const DeleteData = ({ deleteclose,dlt,id }) => {
  const [remove,setRemove]=useState(id)
 useEffect(() => {
  setRemove(id)
  }, [id]);
    const [show, setShow] = useState(dlt);
    useEffect(() => {
      setShow(dlt)
    }, [dlt])
    const handleModalClose = () => {
      deleteclose()
      setShow(false)
    }
    const handleDelete = async (remove) => {
      console.log(remove);
        try {
          const response = await axios.delete(`http://localhost:8000/licensee/${remove}`);
          if(response.status===200){
            toast.success('User Successfully Deleted !', {
                toastId: 'success',
                position: toast.POSITION.TOP_RIGHT
            });
          } 
        } catch (error) {
        alert(error)
        };
      };
    // useEffect(() => {
    //   handleDelete(remove);
    // },[remove]);
  return (
    <>
     
      <Modal show={show}  backdrop="static" centered onHide={handleModalClose} animation={false}>
        <Modal.Header closeButton style={{ backgroundColor: "#40536e", color: "white" }}>
          <Modal.Title>Delete ?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fw-bold">
           Are you sure you wish to delete this user ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className='text-white' onClick={handleModalClose}>
            No
          </Button>
          <Button variant="success" className='text-white' onClick={()=>{
            handleDelete(remove);
            handleModalClose();
          }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteData
