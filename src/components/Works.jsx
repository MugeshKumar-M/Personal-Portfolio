import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import MotionUp from "./MotionUp"; // Ensure the correct path for MotionUp component
import { ProjectCard } from "./ProjectCard";
import { IoIosEye } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { PROJECTS } from "../constants/index";

const Works = () => {
  // State to control modal visibility and modal data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (data) => {
    setModalData(data); // Update modal data if dynamic data is needed
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
    setModalData(null); // Clear modal data
  };

  return (
    <section
      id="projects"
      className="relative w-full mx-auto p-10 overflow-hidden"
      style={{ background: "#120712" }}
    >
      <h1 className="absolute top-72 left-5 text-[15rem] font-bold text-gray-700 opacity-15 z-0 rotate-90">
        Works
      </h1>
      <div className="gap-3 flex justify-center font-extrabold text-4xl sm:text-7xl">
        <h2 className="text-neutral-100">My Recent</h2>
        <h2 className="text-customText">Works</h2>
      </div>

      <MotionUp delay={0.1}>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 sm:mt-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} onClick={() => handleOpenModal(project)} data={project} />
          ))}
        </div>
      </MotionUp>

      {/* Modal Implementation */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#250e25", // Set background color
            color: "white", // Ensure text is visible on dark background
          },
        }}
      >
        <div className="flex justify-between items-center">
          <DialogTitle className="font-semibold">
            {modalData?.title || "Project Details"}
          </DialogTitle>
          <DialogActions>
          <Button onClick={handleCloseModal} color="white" disableRipple>
          <IoCloseSharp className="size-5"/>
          </Button> 
          </DialogActions>
        </div>
        <DialogContent>
          <div className="flex gap-4 mb-2">
            {modalData?.liveUrl && (
              <a
                href={modalData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-customText font-semibold flex gap-2 items-center"
              >
                <IoIosEye size={20} /> Check Live Site
              </a>
            )}
            {modalData?.giturl && (
              <a
                href={modalData.giturl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-customText font-semibold flex gap-2 items-center"
              >
                <AiFillGithub size={20} /> Get Code
              </a>
            )}
          </div>
          <div className="mb-4">
            <div className="bg-[#120712] text-white p-4 rounded-lg border border-customText/30">
              <p>{modalData?.description || "No description available."}</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 mb-4 items-center">
            {modalData?.techStack?.map((item, index) => (
              <div
                key={index}
                className="bg-slate-600 px-4 py-2 text-sm text-blue-100 rounded-md"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-3 mt-4">
            {modalData?.image?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project Image ${index + 1}`}
                className="rounded-lg w-full max-h-52 object-cover"
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Works;
