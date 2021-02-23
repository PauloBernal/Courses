import axios from "axios";
import {Video} from "./Video";

const API = "http://192.168.0.14:5000"

export const getVideos = async () => {
  return axios.get<Video[]>(`${API}/videos`);

};

export const getVideo = async (id: string) => {
  return axios.get(`${API}/video/${id}`)
};

export const createVideo = async (video: Video) => {
  return axios.post(`${API}/newvideo`, video);
};

export const updateVideo = async (id: string, video: Video) => {
  return axios.put(`${API}/putvideo/${id}`, video)
};

export const deleteVideo = async (id: string) => {
  return axios.delete(`${API}/delvideo/${id}`)
};