import React, { useState, useEffect } from 'react';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            display: index === currentIndex ? 'block' : 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            background: `url(${image}) center/cover no-repeat`,
            textAlign: 'center',
            color: '#fff',
            fontSize: '2rem',
            lineHeight: '1.5',
          }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            Your Text Here
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;
