import { MdOutlinePostAdd, MdPostAdd } from "react-icons/md";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { FcAddImage } from "react-icons/fc";
import { PiTextTBold } from "react-icons/pi";
import { AiFillPicture } from "react-icons/ai";
import { BiSolidFilePdf } from "react-icons/bi";
import { TbCloudUpload } from "react-icons/tb";
import { useRef, useState } from "react";

const CreatePost = ({ showModal, setShowModal }) => {
  const [showPdfUpload, setShowUploadPdf] = useState(false)
  const [showTextarea, setShowTextArea] = useState(true)
  const [showImageUpload, setShowImageUpload] = useState(false)
  const [uploadPdf, setUploadPdf] = useState(false)
  const [fileName, setFileName] = useState('');
  const [uploadImage, setUploadImage] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleUploadFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setUploadPdf(true);
    } else {
      setFileName('');
      setUploadPdf(false);
    }
  };

  const handlePdfUpload = () => {
    setShowUploadPdf(true)
    setShowTextArea(false)
    setShowImageUpload(false)
  }
  const handleTextAreaChange = () => {
    setShowTextArea(true)
    setShowUploadPdf(false)
    setShowImageUpload(false)
  }
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageIconClick = () => {
    imageInputRef.current.click();
  };


  const handleImageUpload = () => {
    setShowImageUpload(true)
    setShowTextArea(false)
    setShowUploadPdf(false)
  }

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setUploadImage(true);
    }
  };

  return (
    <>
      {/* The modal HTML */}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box flex flex-col gap-4">
          {/* Modal Header */}
          <div className="modal-header">
            <h3 className="font-bold text-lg">Create post</h3>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-200"
              onClick={()=>window.my_modal_3.showModal()}
            >
              ✕
            </button>
          </div>
          <hr />

          {/* Post Content */}
          <textarea
            placeholder="What's on your mind, Loyce Kuvalis?"
            className="textarea textarea-lg w-full border-none focus:outline-none resize-y"
          ></textarea>

          {/* File Upload */}
          <div className="flex justify-center text-blue-400 flex-col items-center">
            {showPdfUpload && (
              <div>
                {uploadPdf ? (
                  <>
                    <p className="text-sm text-gray-500">PDF uploaded</p>
                    <div className="file-preview">{fileName}</div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={handleIconClick}
                      className="flex justify-center items-center flex-col"
                    >
                      <TbCloudUpload className="text-[6rem]" />
                      <span>
                        <p>Click to upload pdf files</p>
                      </span>
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleUploadFileChange}
                    />
                  </>
                )}
              </div>
            )}

            {/* Image Upload */}
            {showImageUpload && (
              <div>
                {uploadImage ? (
                  <div className="flex justify-center items-center flex-col">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{ maxWidth: "200px" }}
                    />
                    <p className="text-sm text-gray-500">Image uploaded</p>
                    {/* Add any other content or actions you want to show when an image is uploaded */}
                  </div>
                ) : (
                  <>
                    <div
                      onClick={handleImageIconClick}
                      className="flex justify-center items-center flex-col"
                    >
                      <FcAddImage className="text-[6rem]" />
                      <span>
                        <p>Upload images</p>
                      </span>
                    </div>
                    <input
                      type="file"
                      ref={imageInputRef}
                      style={{ display: "none" }}
                      onChange={handleImageFileChange}
                      accept="image/*"
                    />
                  </>
                )}
              </div>
            )}
          </div>

          <hr />

          {/* Post Options */}
          <div className="flex gap-3 justify-between">
            <div>
              <select className="select select-xs max-w-sm w-[150px]">
                <option disabled selected>
                  Select subject
                </option>
                <option>General</option>
                <option>Political science</option>
                <option>International law</option>
                <option>Geography</option>
                <option>Islamiat</option>
                <option>English</option>
              </select>
            </div>
            <div className="flex gap-3">
              {/* Text Post Icon */}
              <div className="text-2xl">
                <PiTextTBold onClick={handleTextAreaChange} />
              </div>
              {/* PDF Upload Icon */}
              <div className="text-2xl text-red-700" onClick={handlePdfUpload}>
                <BiSolidFilePdf />
              </div>
              {/* Image Upload Icon */}
              <div className="text-2xl text-green-600" onClick={handleImageUpload}>
                <AiFillPicture />
              </div>
            </div>
          </div>

          <hr />

          {/* Post Button */}
          <button className="btn btn-sm btn-block bg-[#399bf7] hover:bg-[#1c6fbd] hover:text-white">
            Post
          </button>
        </form>
      </dialog>
    </>
  );
};

export default CreatePost;
