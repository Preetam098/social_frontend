import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import RightNav from "./RightNav";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../Redux/actions/postAction";
import Men from "../Assets/men.jpg";
import { getPost } from "../Redux/actions/postAction";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toast";
import { BASEURL } from "../Redux/utils/endpoints";
import Dropdown from "../Components/Dropdown";


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { posts } = useSelector((state) => state?.getPostReducer);

  const [selectedImage, setSelectedImage] = useState(null);
  const [postData, setpostData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setpostData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
    if (files) {
      setSelectedImage(URL.createObjectURL(files[0]));
      console.log(name);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = new FormData();
    payload.append("title", postData.title);
    payload.append("file", postData.file);
    payload.append("description", postData.description);
    dispatch(
      addPost(payload, () => {
        toast.success("upload successfully!");
        setpostData({
          title: "", 
          file: null, 
          description: "" 
        });
      })
    );
  };

  useEffect(() => {
    dispatch(getPost());
  }, []);

  // console.log("profiledata", posts.file);

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto my- p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* SIDENAV  */}

            <SideNav />

            {/* CENTER */}

            <div className="w-full md:w-5/12 h-full md:my-0 my-1 mx-4">
              <div className="bg-white p-5 shadow-sm rounded-lg ">
                <div className="flex items-center space-x-2 py-2 font-semibold text-gray-900 ">
                  <span clas="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-blue-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Create Post</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid text-sm">
                    <div className="my-2">
                      <input
                        type="text"
                        name="title"
                        placeholder="title"
                        className="border-2 rounded-xl border-gray-300 active:borde w-full p-2"
                        value={postData.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="">
                      <textarea
                        className="border-2 rounded-xl border-gray-300 w-full p-2"
                        id="description"
                        name="description"
                        rows="4"
                        cols="50"
                        value={postData.description}
                        onChange={handleInputChange}
                        placeholder="What's on your mind?"
                      ></textarea>
                    </div>

                    {/* <div>
                      <input
                        type="file"
                        accept="image/*"
                        name="file" // Add this line to provide a name for the input
                        class="block "
                        onChange={handleInputChange}
                      />
                    </div> */}

                    <div className="flex justify-evenly items-center my-1 flex-wrap">
                      <button className="justify-center text-xs sm:text-sm flex items-center  cursor-pointer tracking-wider p-1.5 sm:px-4 rounded text-gray-500 font-bold ">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 text-red-600"
                          >
                            <path
                              stroke-linecap="round"
                              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </span>
                        Live Video
                      </button>
                      <div className=" justify-center text-xs sm:text-sm flex items-center  cursor-pointer tracking-wider rounded text-gray-500 font-bold ">
                        <input
                          type="file"
                          name="file"
                          accept="image/*"
                          onChange={handleInputChange}
                          id="upload"
                          hidden
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-green-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                          </svg>
                        </span>
                        <label
                          for="upload"
                          className="inline bg-white text-gray-500 text-xs sm:text-sm cursor-pointer tracking-wider rounded font-bold "
                        >
                          Photos / Videos
                        </label>
                      </div>

                      <button className=" justify-center text-xs sm:text-sm flex items-center  cursor-pointer tracking-wider p-1.5 sm:px-4 rounded text-gray-500 font-bold ">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 text-yellow-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                            />
                          </svg>
                        </span>
                        Feeling / Activity
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="bg-blue-500 justify-center text-xs sm:text-sm flex items-center  cursor-pointer tracking-wider p-1.5 sm:px-4 rounded text-white font-bold mx-4"
                      >
                        <span></span>
                        Post
                      </button>
                      {/* <Button title={title}>Delete</Button> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-4"></div>

              {/* Updated Post */}

              <div className=" p-2 shadow-sm rounded-sm">
                <div className="grid ">
                  {posts.map((item) => {
                    return (
                      <div className="p-4 bg-white my-1">
                        <div className="flex items-start justify-between space-x-2 font-semibold  mb-2">
                        <div>
                        <img
                            src={Men}
                            className="w-10 rounded-full h-10"
                          ></img>
                          <div>
                            <h3 className="m-0 p-0 text-gray-900 ">
                              Surfiya Zakir
                            </h3>
                            <p className="text-sm text-gray-500">3 hour ago</p>

                          </div>
                          </div>
                          <div>
                          <Dropdown/>
                          </div>
                        </div>

                        <div>
                          <p className="text-3xl font-bold  my-2">
                            {item.title}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm my-2">{item.description}</p>
                        </div>

                        {/* Image */}

                        <div>
                          <img
                            src={`${BASEURL}${item.attachment}`}
                            className="w-full "
                          >
                            {/* "http://localhost:5000/uploads/1692945142226-download (2).jpg" =   for image  */}
                          </img>
                        </div>

                        <div className=" my-1 flex items-center justify-start">
                          <button
                            className="justify-center text-xs sm:text-sm flex items-center cursor-pointer 
                             rounded-lg tracking-wider p-1.5 sm:px-4 text-gray-500 font-bold"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                />
                              </svg>
                            </span>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                              </svg>
                            </span>
                            2.8k Like
                          </button>

                          <button
                            className="justify-center text-xs sm:text-sm flex items-center cursor-pointer 
                             rounded-lg tracking-wider p-1.5 sm:px-4 text-gray-500 font-bold"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                />
                              </svg>
                            </span>
                            22 Comment
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <!-- End of profile tab --> */}
            </div>

            {/* RIGHTNAV */}

            <RightNav />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
