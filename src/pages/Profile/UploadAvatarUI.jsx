import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from "react-hook-form";
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImage';

const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
const imageMaxSize = 1000000000;
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => { return item.trim() });
export default function UploadAvatarUI() {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedImage, setCroppedImage] = useState(null);
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
            alert("This file is not allowed. " + currentFileSize + " bytes is too large");
            return false;
        }
        if (!acceptedFileTypesArray.includes(currentFileType)) {
            alert("This file is not allowed. Only images are allowed.");
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
            console.log('donee', { croppedImage })
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    return (
        <div>
            <div className="text-center">

                <input
                    className="inputfile"
                    id="fileInput"
                    type="file"
                    multiple={false}
                    onChange={(e) => handleChangeImage(e)}
                />
                <label htmlFor="fileInput" className="btn btn-success btn-sm mb-2">
                    Chọn ảnh từ máy tính
                </label>

            </div>

            <div className="position-relative w-100" style={{ height: '300px' }}>
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


            <div className="controls">
                <input class="custom-range" id="example-range" value={zoom}
                    onChange={(e) => handleChangeSlide(e)}
                    type="range" name="range" min="1" max="3" step="0.1" />
            </div>

            <button onClick={showCroppedImage} className="btn btn-success btn-sm mb-2">
                Chọn ảnh từ máy tính
                </button>
        </div>
    )
}
