import { Router } from 'express';
import * as videoCtl from './videos.controller';

const router = Router();

router.get('/videos', videoCtl.getVideos);

router.get('/video/:id', videoCtl.getVideo);

router.post('/newvideo', videoCtl.createVideo);

router.delete('/delvideo/:id', videoCtl.deleteVideo);

router.put('/putvideo/:id', videoCtl.updateVideo);

export default router;