import { RequestHandler } from 'express';
import videoModel from './Video'

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await videoModel.find();
    console.log(videos);
    return res.json(videos);
  }
  catch (err) {
    console.error(err);
  }
}

export const createVideo: RequestHandler = async (req, res) => {

  const videoFound = await videoModel.findOne({ url: req.body.url })
  if (videoFound) {
    return res.status(301).json({message: "The url already exists"})
  }
  const video = new videoModel(req.body);
  console.log(video);

  try {
    const savedVideo = await video.save();
    res.json(savedVideo);
  }
  catch (err) {
    console.error(err);
  }
}

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const videoFound = await videoModel.findById(req.params.id);
    console.log(`Video '${videoFound.title}' found`)
    return res.json(videoFound);
  }
  catch (err) {
    console.log("Video not found");
    return res.json("The video doesn't exist or has been removed").status(204);
  }
}

export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const videoFound = await videoModel.findByIdAndDelete(req.params.id);
    console.log(`Video '${videoFound.title}' deleted`)
    return res.json(videoFound);
  }
  catch (err) {
    console.log("Video not found");   
    return res.json("The video doesn't exist or has alreay been removed").status(204)
  }
}

export const updateVideo: RequestHandler = async (req, res) => {
  try {
    const videoFound = await videoModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(`Video '${videoFound.title}' successfully updated`)
    return res.json(videoFound);
  }
  catch (err) {
    console.log("Video not found");
    return res.json("The video doesn't exist or has been removed").status(204);
  }
}