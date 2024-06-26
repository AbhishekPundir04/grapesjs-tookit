import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import CustomButton from '../../app/components/button/CustomButton';
import NfcImg from "../../../src/assets/images/nfcImg.svg";
import CustomTextField from '../../app/components/TextField/CustomTextField';
import "./style.scss";

const QrCode = ({ editorValue }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [qrCodeValue, setQrCodeValue] = useState("");
    const [username, setUserName] = useState("");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [fgColor, setFgColor] = useState("#000000");
    const usernames = ["user1", "user2", "user3", "user4", "user5"];
    useEffect(() => {
        const interval = setInterval(() => {
            const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
            setUserName(randomUsername);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const generateQrCode = () => {
        setQrCodeValue(`https://github.com/${username}`);
        const code = editorValue.getHtml();
        const cssCode = editorValue.getCss();
        const jsCode = editorValue.getJs();
        const combinedCode = `
            <html>
                <head>
                    <style>${cssCode}</style>
                </head>
                <body>
                    <pre>${code}</pre>
                    <script>${jsCode}</script>
                </body>
            </html>`;
        const blob = new Blob([combinedCode], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    };

    const downloadQRCode = () => {
        const canvas = document.querySelector('canvas');
        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'qrcode.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div className='qr-container'>
            <RadioGroup
                aria-label="judgement"
                name="judgementInFavor"
                value={selectedOption}
                onChange={handleRadioChange}
            >
                <div className='radio-container'>
                    <div className='form-container'>
                        <FormControlLabel
                            value="QR_Code"
                            control={<Radio />}
                            label="QR Code"
                        />
                        {selectedOption === "QR_Code" && qrCodeValue &&
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <QRCode
                                    value={qrCodeValue}
                                    bgColor={bgColor}
                                    fgColor={fgColor}
                                    logoImage="path_to_your_logo_image.svg"
                                    logoWidth={50}
                                    logoHeight={50}
                                />
                                <div>
                                    <div>

                                        <div> Change Background Color:</div>
                                        <input

                                            type="color"
                                            value={bgColor}
                                            onChange={(e) => setBgColor(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <div>Foreground:</div>
                                        <input
                                            type="color"
                                            value={fgColor}
                                            onChange={(e) => setFgColor(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                        }
                        {selectedOption === "QR_Code" && qrCodeValue &&
                            <div style={{ marginTop: "10px" }}>
                                <CustomButton onClick={downloadQRCode}>Download QR Code</CustomButton>
                            </div>
                        }
                        {selectedOption === "QR_Code" && !qrCodeValue &&
                            <CustomButton onClick={generateQrCode}>Generate QR Code</CustomButton>
                        }
                    </div>
                    <div className='form-container'>
                        <FormControlLabel
                            value="DEPARTMENT"
                            control={<Radio />}
                            label="NFC"
                        />
                        {selectedOption === "DEPARTMENT" && (
                            <div>
                                <div style={{ display: "flex" }}>
                                    <img src={NfcImg} alt='' />
                                    <div style={{ marginLeft: "10px" }}>
                                        <CustomTextField istextField={true} title="Your Url" />
                                        <div style={{ marginTop: "24px" }}>
                                            <CustomButton>Order Nfc</CustomButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </RadioGroup>
        </div>
    );
};

export default QrCode;
