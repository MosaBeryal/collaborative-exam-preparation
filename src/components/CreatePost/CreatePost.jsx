import { MdOutlinePostAdd, MdPostAdd } from "react-icons/md";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { PiTextTBold } from "react-icons/pi";
import { AiFillPicture } from "react-icons/ai";
import { BiSolidFilePdf } from "react-icons/bi";
import { TbCloudUpload } from "react-icons/tb";
const CreatePost = ({ showModal, setShowModal }) => {
  return (
    <>
      {/* You can open the modal using ID.showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box  flex flex-col gap-4">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Create post</h3>
          <hr></hr>

          {/* lg */}
          <textarea
            placeholder="what's on your mind, Loyce Kuvalis?"
            className="textarea  textarea-lg w-full "
          ></textarea>
          {/* 
          <div className=" flex justify-center text-blue-400 flex-col items-center ">
            <TbCloudUpload className="text-[6rem]" />
            <span>
              <input type="file" placeholder="Choose files" />
              Choose pdf files to upload
            </span>
          </div> */}
          <hr />
          <div className="flex gap-3 justify-between">
            <div>
              <select className="select select-xs max-w-sm w-[150px]">
                <option disabled selected>
                  Select subject
                </option>
                <option>Genral</option>
                <option>Political science</option>
                <option>International law</option>
                <option>Geography</option>
                <option>Islamiat</option>
                <option>English</option>
              </select>
            </div>
            <div className="flex  gap-3">
              <div className="text-2xl">
                <PiTextTBold />
              </div>
              <div className="text-2xl text-red-700  ">
                <BiSolidFilePdf />
              </div>
              <div className="text-2xl text-green-600">
                <AiFillPicture />
              </div>
            </div>
          </div>
          <hr />
          <button className="btn btn-sm btn-block  bg-[#399bf7] hover:bg-[#1c6fbd] hover:text-white">
            Post
          </button>
        </form>
      </dialog>
    </>
  );
};

export default CreatePost;
