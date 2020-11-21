import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import userApi from '../../../api/userApi';
import getCroppedImg from './CropImage';
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
const imageMaxSize = 5242880;
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => { return item.trim() });
export default function UploadAvatarUI({ backToScreenUpdateInfo }) {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleChangeImage = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            let file = e.target.files[0];
            const isVerified = verifyFile(file);
            if (isVerified) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    setSelectedFile(reader.result);
                };
            }
        }
    }

    const handleChangeSlide = (event) => {
        setZoom(event.target.value);
    }

    const verifyFile = (currentFile) => {
        const currentFileType = currentFile.type;
        const currentFileSize = currentFile.size;
        if (currentFileSize > imageMaxSize) {
            window.$.NotificationApp.send("Opps", "File này có dung lượng > 5mb", "top-right", "rgba(0,0,0,0.2)", "error");
            return false;
        }
        if (!acceptedFileTypesArray.includes(currentFileType)) {
            window.$.NotificationApp.send("Opps", "File này Không phải là file ảnh", "top-right", "rgba(0,0,0,0.2)", "error");
            return false;
        }
        return true;

    }

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                selectedFile,
                croppedAreaPixels
            )

            userApi.uploadAvatar(croppedImage).then((response) => {
                window.$.NotificationApp.send("Yeah", "Cập nhật ảnh đại diện thành công", "top-right", "rgba(0,0,0,0.2)", "success");
                backToScreenUpdateInfo();
            }).catch((error) => {
                console.log(error);
            });

        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    return (
        <div className="row align-items-center">
            <div className="text-center col-6">
                <input
                    className="inputfile"
                    id="fileInput"
                    type="file"
                    multiple={false}
                    onChange={(e) => handleChangeImage(e)}
                />
                <h4>Chọn ảnh đại diện cho tài khoản</h4>
                <i className="uil uil-export d-block display-4"></i>

                <label htmlFor="fileInput" className="btn btn-success btn-sm mt-2">
                    Chọn ảnh từ máy tính
                </label>
            </div>
            <div className="col-6 text-center">
                {selectedFile ?
                    <>
                        <div className="position-relative w-100" style={{ height: '400px' }}>
                            <Cropper
                                image={selectedFile}
                                crop={crop}
                                zoom={zoom}
                                aspect={1 / 1}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </div>


                        <div className="mt-1">
                            <input className="custom-range" id="example-range" value={zoom}
                                onChange={(e) => handleChangeSlide(e)}
                                type="range" name="range" min="1" max="3" step="0.1" />
                        </div>


                    </> : <img style={{ height: "400px" }} src="/assets/images/300x300.png" alt="images" />}
            </div>

            {selectedFile ? <div className="col-12 text-center mt-2">
                <button onClick={showCroppedImage} className="btn btn-primary btn-sm mb-2">
                    Upload ảnh
                    </button>
            </div> : <></>}
        </div>

    )
}
