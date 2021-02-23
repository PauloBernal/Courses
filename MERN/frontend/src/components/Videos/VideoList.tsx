import React, { useEffect, useState } from "react";
import { Video } from "./Video";
import { getVideos } from "./VideoService";
import { VideoItem } from "./VideoItem";
import { Link, useHistory } from "react-router-dom";

const VideoList = () => {
  const history = useHistory();
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await getVideos();
    const formatedVideos = res.data.map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    setVideos(formatedVideos);
  };
  useEffect(() => {
    loadVideos();
  }, []);
  if (videos.length > 0) {
    return (
      <div className="row">
        {videos.map((video) => {
          return <VideoItem vid={video} key={video._id} />;
        })}
        <button className = "btn btn-primary addVideo" onClick={() => { history.push('/new-video') }}>Add new video</button>
      </div>
    );
  } else {
    return (
      <div className="noContent">
        There is no content yet
        <Link className="ncCreateVideo" to="/new-video">
          Create a video
        </Link>
      </div>
    );
  }
};

export default VideoList;
