import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, colors } from '@mui/material';
import  CloseImg from  "../../../assets/images/icons/closeImg.svg"
import "./style.scss"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color: "#ffffff",
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000000',
  boxShadow: 24,
  p: 4,
};

export default function CommonModal({open,handleClose,bodyData}) {


  return (
    <div className='modal-container'>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      > 
        <Box sx={style}>
        <div onClick={()=>handleClose()} style={{display:"flex",justifyContent:"space-between"}}><div>Publish Menu </div><img src={CloseImg} alt='CloseImg'/></div>
          <div>
            {bodyData}
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}