'use client';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {
  const [textData, setTextData] = useState([]);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchData('/api/text', setTextData);
    fetchData('/api/videos', setVideoData);
  }, []);

  const fetchData = async (url, setData) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Text Data:</h1>
        <ul>
          {textData.map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>

        <h1>Video Data:</h1>
        <ul>
          {videoData.map((item) => (
            <li key={item.id}>
              <video width="320" height="240" controls>
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Home;
