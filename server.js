import { express } from 'express';
import { next } from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Custom API route for text data
  server.get('/api/text', (req, res) => {
    const textData = [
      { id: 1, content: 'Sample text 1' },
      { id: 2, content: 'Sample text 2' },
    ];
    res.json(textData);
  });

  // Custom API route for video data
  server.get('/api/videos', (req, res) => {
    const videoData = [
      { id: 1, url: 'https://www.example.com/video1.mp4' },
      { id: 2, url: 'https://www.example.com/video2.mp4' },
    ];
    res.json(videoData);
  });

  // Default handler for other Next.js routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3001;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
