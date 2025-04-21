"use client";

import React, { useState, useEffect, useMemo } from "react";
import Ballpit from "./Ballpit";

const PhotoUploader = () => {
  const [photo] = useState("https://dev-storage.fotoowl.ai/events/1057/j8NCXEn4MSXSqwBIJPrdPFvEfjY2/med/912A8628.webp?last=1744976508");
  const [clickBursts, setClickBursts] = useState([]);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const randomStars = useMemo(() => (
    [...Array(60)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 10 + 5}px`,
      opacity: Math.random(),
      color: `hsl(${Math.random() * 360}, 100%, 90%)`
    }))
  ), []);

  const randomBalloons = useMemo(() => (
    [...Array(20)].map(() => ({
      bottom: `-${Math.random() * 20}px`,
      left: `${Math.random() * 100}%`,
      color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`
    }))
  ), []);

  const randomShapes = useMemo(() => (
    [...Array(50)].map(() => ({
      width: `${Math.random() * 8 + 4}px`,
      height: `${Math.random() * 8 + 4}px`,
      background: `hsl(${Math.random() * 360}, 70%, 60%)`,
      left: `${Math.random() * 100}%`,
      transform: `rotate(${Math.random() * 360}deg)`,
      borderRadius: Math.random() > 0.5 ? "50%" : "0"
    }))
  ), []);

  const randomPolygons = useMemo(() => (
    [...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      background: `hsl(${Math.random() * 360}, 70%, 60%)`
    }))
  ), []);

  useEffect(() => {
    const audioInstance = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audioInstance.loop = true;
    audioInstance.play().catch((err) => console.log("Autoplay blocked:", err));
    setAudio(audioInstance);

    return () => audioInstance.pause();
  }, []);

  const handleBurst = (e) => {
    const newBurst = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    setClickBursts((prev) => [...prev, newBurst]);
    setTimeout(() => {
      setClickBursts((prev) => prev.filter((b) => b.id !== newBurst.id));
    }, 2000);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => console.log("Autoplay blocked:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={handleBurst}
      style={{
        textAlign: "center",
        padding: "20px",
        background: "linear-gradient(135deg, #2b5876, #4e4376)",
        backgroundSize: "400% 400%",
        color: "#333",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        @keyframes glowPulse {
          0%, 100% {
            text-shadow: 
              0 0 15px rgba(255,105,180,0.8),
              0 0 30px rgba(255,182,193,0.6),
              0 0 50px rgba(255,20,147,0.7),
              0 0 70px rgba(255,182,193,0.5);
          }
          50% {
            text-shadow: 
              0 0 5px rgba(255,105,180,1),
              0 0 15px rgba(255,182,193,0.9),
              0 0 25px rgba(255,20,147,1),
              0 0 35px rgba(255,182,193,0.8);
          }
        }
        @media (max-width: 768px) {
          img {
            width: clamp(80vw, 90vw, 100vw);
          }
        }
        @keyframes photoFloat {
  0% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(-10px) rotate(1deg) scale(1.02);
  }
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
}

      `}</style>

      {randomStars.map((star, i) => (
        <div key={i} style={{
          position: "absolute",
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          borderRadius: "50%",
          backgroundColor: star.color,
          opacity: star.opacity,
          zIndex: 0
        }}></div>
      ))}

      {randomBalloons.map((balloon, i) => (
        <div key={i}>
          <div style={{
            position: "absolute",
            bottom: balloon.bottom,
            left: balloon.left,
            width: "30px",
            height: "50px",
            backgroundColor: balloon.color,
            borderRadius: "50%",
            zIndex: 0
          }}></div>
          <div style={{
            position: "absolute",
            bottom: `calc(${balloon.bottom} - 50px)`,
            left: `calc(${balloon.left} + 15px)`,
            width: "2px",
            height: "50px",
            backgroundColor: "#333",
            zIndex: 0
          }}></div>
        </div>
      ))}

      {randomShapes.map((shape, i) => (
        <div key={i} style={{
          position: "absolute",
          width: shape.width,
          height: shape.height,
          background: shape.background,
          top: "0",
          left: shape.left,
          transform: shape.transform,
          borderRadius: shape.borderRadius,
          zIndex: 0
        }}></div>
      ))}

      {randomPolygons.map((polygon, i) => (
        <div key={i} style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          background: polygon.background,
          clipPath: "polygon(50% 0%, 100% 35%, 85% 100%, 50% 75%, 15% 100%, 0 35%)",
          top: polygon.top,
          left: polygon.left,
          zIndex: 0
        }}></div>
      ))}

      {clickBursts.map((burst) => (
        [...Array(15)].map((_, i) => (
          <div key={burst.id + "_" + i} style={{
            position: "fixed",
            width: "20px",
            height: "20px",
            background: `hsl(${Math.random() * 360}, 70%, 60%)`,
            clipPath: "polygon(50% 0%, 100% 35%, 85% 100%, 50% 75%, 15% 100%, 0 35%)",
            left: burst.x + "px",
            top: burst.y + "px"
          }}></div>
        ))
      ))}

      <h1 style={{
        fontSize: "clamp(32px, 8vw, 64px)",
        marginBottom: "20px",
        color: "#C71585",
        fontFamily: "'Pacifico', cursive",
        letterSpacing: "2px",
        animation: "glowPulse 3s ease-in-out infinite"
      }}>
        🎂 Happy Birthday! 🎈
      </h1>

      {photo && (
        <div style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 1
        }}>
          <img
            src={photo}
            alt="Uploaded or Default"
            style={{
              width: "clamp(400px, 80vw, 700px)",
              maxWidth: "90%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
            }}
          />
        </div>
      )}

      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
        <Ballpit count={200} gravity={0.7} friction={0.8} wallBounce={0.95} followCursor={true} />
      </div>
    </div>
  );
};

export default PhotoUploader;
