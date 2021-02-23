import React, { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as vService from "./VideoService";
import { Video } from "./Video";
import { toast } from "react-toastify";

interface Params {
  id: string;
}
const VideoFormEdit = () => {
  const history = useHistory();
  const params = useParams<Params>();
  console.log(params);
  const [video, setVideo] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });

  const getVideo = async (id: string) => {
    const res = await vService.getVideo(id);
    console.log(res);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };
  useEffect(() => {
    if (params.id) {
      console.log(`Id: ${params.id}`);
      getVideo(params.id);
    }
  }, []);
  console.log(video);
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await vService.updateVideo(params.id, video);
    console.log(res);
    toast.success("Successfully updated!");
    history.push("/");
  };
  return (
    <div className="card videoForm">
      <div className="card-body">
        <h3>Edit Video</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              className="card-input form-control"
              type="text"
              name="title"
              placeholder="Introduce the new title for your video"
              onChange={handleInputChange}
              value={video.title}
              autoFocus
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="url"
              placeholder="Introduce the new url"
              onChange={handleInputChange}
              value={video.url}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Introduce the new description for your video"
              rows={3}
              name="description"
              onChange={handleInputChange}
              value={video.description}
            ></textarea>
          </div>
          <button className="btn btn-primary">Save changes</button>
        </form>
      </div>
    </div>
  );
};
export default VideoFormEdit;
