import React from "react";
// Assets
import images from "../../img";

const Input = () => {
  return (
    <div className="flex justify-between items-center py-5 px-3 bg-gray-100">
      <input
        type="text"
        name=""
        id=""
        placeholder="Type something..."
        className="basis-full bg-transparent border-none outline-none"
      />
      <div className="flex items-center gap-2">
        <button>
          <img src={images.attach_file} alt="" />
        </button>
        <button>
          <img src={images.add_img} alt="" />
        </button>
        <button className="px-4 py-2 text-slate-100 bg-[#8da4f1] hover:opacity-80">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
