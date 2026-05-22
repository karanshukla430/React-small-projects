import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);

  const fetchImages = async() => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    const result = await response.json();
    setImages((prev) => [...prev, ...result]);
  }

  useEffect(() => {
    fetchImages();
  },[page]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (bottom) {
        setPage((prev) => prev+1);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  return (
    <div style={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))", gap: '10px'}}>
    {images.map((image) => {
      return (
        <img
          key={image.key}
          src={image.download_url}
          alt=''
          style={{
            width: "100%",
            height: "500px",
            // objectFit: "cover",
          }}
        />
      )
    })}
      
    </div>
  )
}

export default App
