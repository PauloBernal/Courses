import React, { ChangeEvent, useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import * as vService from "./VideoService";
import { Video } from "./Video";
import { toast } from "react-toastify";

const VideoForm = () => {
  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  const history = useHistory();
  const [video, setVideo] = useState<Video>(initialState);
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await vService.createVideo(video);
    console.log(res);
    toast.success("New video created");
    history.push('/');
    setVideo(initialState);
  };
  return (
    <div className="card videoForm">
      <div className="card-body">
        <h3>New Video</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              className="card-input form-control"
              id="vtitle"
              type="text"
              name="title"
              placeholder="Introduce a title for your video"
              onChange={handleInputChange}
              value={video.title}
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              id="vurl"
              type="text"
              name="url"
              placeholder="Introduce your video's URL"
              onChange={handleInputChange}
              value={video.url}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="vdescription"
              placeholder="Introduce a description for your video"
              rows={3}
              name="description"
              onChange={handleInputChange}
              value={video.description}
            ></textarea>
          </div>
          <button className="btn btn-primary">Create video</button>
        </form>
      </div>
    </div>
  );
};
export default VideoForm;
