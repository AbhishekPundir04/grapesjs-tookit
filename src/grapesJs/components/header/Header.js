import React, { useState } from 'react'
import "./style.scss"
import { Preview } from '@mui/icons-material'
import { Button, useStepContext } from '@mui/material'
import CommonModal from '../../../app/components/Modal/CommonModal'
import QrCode from '../../qr-code/QrCode'
const Header = ({ editorValue }) => {
  const [open,setIsOpen] = useState(false)
  console.log("header", editorValue)
  const handleClose = () =>{
    setIsOpen(false)
  }

  const publishCode = () => {
    setIsOpen(true)
    // const code = editorValue.getHtml();
    // const cssCode = editorValue.getCss();
    // const jsCode = editorValue.getJs();
    // console.log("jsCode", jsCode)

    // const combinedCode = `
    //     <html>
    //         <head>
    //             <style>${cssCode}</style>
    //         </head>
    //         <body>
    //             <pre>${code}</pre>
    //             <script>${jsCode}</script>
    //         </body>
    //     </html>`;
    // console.log("combinedCode", combinedCode)
    // const blob = new Blob([combinedCode], { type: 'text/html' });

    // // Create a URL for the Blob
    // const url = URL.createObjectURL(blob);

    // // Open a new window with the URL
    // const combinedWindow = window.open(url, '_blank');

  };

  // Function to clear the canvas
  const clearCanvas = (editorValue) => {
    editorValue?.DomComponents?.clear();
    editorValue?.CssComposer?.clear();
    // editorValue?.StorageManager?.clear();
    editorValue?.render();
  };

  // Event listener for the button
  document?.getElementById('clearCanvasButton')?.addEventListener('click', () => {
    clearCanvas(editorValue);
  });

  return (
    <>
      <div className='main-header-container'>
        <div className='left-header'>
          <div>
            File Name
          </div>
          <div className='aviation_file'>
            Aviation File
          </div>
        </div>
        <div className='right-header'>
          <div>
            <span className='preview-icon'>Preview</span>
            <span className='save-icon'>Save</span>

            <Button onClick={() => publishCode()}>Publish</Button>

            {/* <Button id="clearCanvasButton" >Clear Canvas</Button> */}

          </div>

        </div>
      </div>
      <CommonModal open={open} handleClose={handleClose} bodyData={<QrCode editorValue={editorValue}/>}/>

    </>
  )
}

export default Header