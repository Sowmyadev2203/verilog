import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";

const data = [
  { size: "180 nm", year: 1999 },
  { size: "130 nm", year: 2001 },
  { size: "90 nm", year: 2003 },
  { size: "65 nm", year: 2005 },
  { size: "45 nm", year: 2007 },
  { size: "32 nm", year: 2009 },
  { size: "22 nm", year: 2011 },
  { size: "14 nm", year: 2014 },
  { size: "7 nm", year: 2016 },
  { size: "5 nm", year: 2020 },
  { size: "3 nm", year: 2022 },
  { size: "2 nm", year: 2024 },
];

const ROTATION_DURATION = 3000; // ms per full rotation

export default function AnimatedTable() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const ringRef = useRef(null);

  const minYear = Math.min(...data.map((d) => d.year));
  const maxYear = Math.max(...data.map((d) => d.year));

  const minWidth = 80;
  const maxWidth = 160;
  const minHeight = 50;
  const maxHeight = 100;

  useEffect(() => {
    const handleAnimationIteration = () => {
      setIndex((prev) => (prev + 1) % data.length);
    };

    const ringCurrent = ringRef.current;
    if (ringCurrent) {
      ringCurrent.addEventListener("animationiteration", handleAnimationIteration);
    }

    return () => {
      if (ringCurrent) {
        ringCurrent.removeEventListener("animationiteration", handleAnimationIteration);
      }
    };
  }, []);

  const currentYear = data[index].year;
  const yearRatio = (currentYear - minYear) / (maxYear - minYear);
  const width = maxWidth - yearRatio * (maxWidth - minWidth);
  const height = maxHeight - yearRatio * (maxHeight - minHeight);

  const pinCount = 4;
  const pinSpacing = width / (pinCount + 1);

  return (
    <>
      <style>{`
        @keyframes spin-horizontal {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(180deg); }
        }
        @keyframes spin-vertical {
          from { transform: rotateX(0deg); }
          to   { transform: rotateX(180deg); }
        }
        @keyframes spin-horizontal-reverse {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(-180deg); }
        }
        @keyframes chipZoomIn {
          0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
      `}</style>

      <div
        style={{
          width: 300,
          height: 300,
          position: "relative",
          margin: "40px auto",
          perspective: 1000,
          transformStyle: "preserve-3d",
          userSelect: "none",
        }}
      >
        {/* Horizontal ring */}
        <div
          ref={ringRef}
          style={{
            width: 400,
            height: 400,
            border: "4px solid #29b6f6",
            borderRadius: "50%",
            position: "absolute",
            top: "-12%",
            left: "-12%",
            boxShadow: "0 0 15px #29b6f6, 0 0 30px #29b6f6",
            transform: "translate(-50%, -50%)",
            animation: `spin-horizontal ${ROTATION_DURATION}ms linear infinite`,
          }}
        />

        {/* Vertical ring */}
        <div
          style={{
            width: 400,
            height: 400,
            border: "3px solid #29b6f6",
            borderRadius: "50%",
            position: "absolute",
            top: "-12%",
            left: "-12%",
            boxShadow: "0 0 15px #29b6f6, 0 0 30px #29b6f6",
            transform: "translate(-50%, -50%) rotateZ(90deg)",
            animation: `spin-vertical ${ROTATION_DURATION}ms linear infinite`,
          }}
        />

        {/* Reverse ring */}
        <div
          style={{
            width: 400,
            height: 400,
            border: "2px solid #29b6f6",
            borderRadius: "50%",
            position: "absolute",
            top: "-12%",
            left: "-12%",
            boxShadow: "0 0 10px #29b6f6, 0 0 20px #29b6f6",
            transform: "translate(-50%, -50%) rotateZ(90deg)",
            animation: `spin-horizontal-reverse ${ROTATION_DURATION}ms linear infinite`,
          }}
        />

        {/* Central chip with zoom-in effect */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1)",
            width,
            height,
            border: "2px solid #29b6f6",
            borderRadius: 8,
            boxShadow: "0 0 15px #29b6f6, inset 0 0 5px #29b6f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: "bold",
            color: theme.palette.text.primary,
            userSelect: "none",
            animation: "chipZoomIn 0.9s ease-out forwards",
            transition: "width 0.5s ease, height 0.5s ease",
          }}
        >
          {/* Pins */}
          {[...Array(pinCount)].map((_, i) => (
            <div
              key={`pin-top-${i}`}
              style={{
                width: 6,
                height: 15,
                backgroundColor: "#29b6f6",
                position: "absolute",
                top: -15,
                left: pinSpacing * (i + 1) - 3,
                borderRadius: 2,
              }}
            />
          ))}
          {[...Array(pinCount)].map((_, i) => (
            <div
              key={`pin-bottom-${i}`}
              style={{
                width: 6,
                height: 15,
                backgroundColor: "#29b6f6",
                position: "absolute",
                bottom: -15,
                left: pinSpacing * (i + 1) - 3,
                borderRadius: 2,
              }}
            />
          ))}

          {/* Text inside chip */}
          <div style={{ textAlign: "center" }}>
            <div>{data[index].size}</div>
            <div style={{ fontSize: 12 }}>Year: {data[index].year}</div>
          </div>
        </div>
      </div>
    </>
  );
}
