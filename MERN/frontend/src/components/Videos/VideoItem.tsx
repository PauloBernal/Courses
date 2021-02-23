import React, { useState } from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import "./VideoItem.css";
import { useHistory } from "react-router-dom";
import { deleteVideo } from "./VideoService";
import { toast } from "react-toastify";

interface Props {
  vid: Video;
}

export const VideoItem = ({ vid }: Props, key: string) => {
  const [video, setVideo] = useState<Video>();
  const history = useHistory();
  const delVideo = async (e) => {
    const res = await deleteVideo(vid._id);
    console.log(res);
    toast.success('Video Successfully deleted');
    history.push('/a');
    history.push('/')
  }
  return (
    <div key={key} className="col-md-4">
      <div className="card car-body vs-card">
        <div className="d-flex justify-content-between">
          <h2
            onClick={() => {
              history.push(`/editvideo/${vid._id}`);
            }}
          >
            {vid.title}
          </h2>
          <span
            className="btn text-danger"
            onClick={delVideo}
          >
            X
          </span>
        </div>
        <p className="videoDesc">{"Description: " + vid.description}</p>
        <p>
          <a
            className="videoURL"
            href={vid.url}
            target="_blank"
            rel="noreferrer"
          >
            Go to link
          </a>
        </p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={vid.url} />
        </div>
      </div>
    </div>
  );
};
