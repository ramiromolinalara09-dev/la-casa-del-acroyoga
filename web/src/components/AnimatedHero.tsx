"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Hero animation:
 *  - Primary: 12.2s VEO video loop (greeting → pose construction 9.2s → 3s pose hold)
 *  - Wordmark "LA CASA DEL" / "ACROYOGA" appears via CSS overlay during the
 *    final 3s pose hold (synced to video.currentTime, not a CSS clock).
 *  - Fallback: single static greeting frame while the video buffers.
 */

const VIDEO_DURATION = 12.21;
const WORDMARK_VISIBLE_FROM = 9.5;   // start of freeze frame
const WORDMARK_VISIBLE_TO   = 11.8;  // small fade-out before loop wraps

export function AnimatedHero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [wordmarkVisible, setWordmarkVisible] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    const onCanPlay = () => setVideoReady(true);
    const onError = () => setVideoFailed(true);
    const onTimeUpdate = () => {
      const t = v.currentTime;
      setWordmarkVisible(t >= WORDMARK_VISIBLE_FROM && t <= WORDMARK_VISIBLE_TO);
    };
    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("error", onError);
    v.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("error", onError);
      v.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [reduce]);

  const showVideo = videoReady && !videoFailed && !reduce;

  return (
    <div
      aria-label="La Casa del Acroyoga"
      style={{
        position: "relative",
        width: "clamp(160px, 22vw, 260px)",
        aspectRatio: "1 / 1",
        margin: "0 auto",
        background: "#FBF5E9",
        overflow: "hidden",
      }}
    >
      {!reduce && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: showVideo ? 1 : 0,
            transition: "opacity 600ms ease-out",
            zIndex: 2,
          }}
        >
          <source src="/videos/hero-loop.webm" type="video/webm" />
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
      )}

      {/* Static fallback — final pose, visible until video can play */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          opacity: showVideo ? 0 : 1,
          transition: "opacity 600ms ease-out",
          zIndex: 1,
          transform: "scale(1.18)",
        }}
      >
        <Image
          src="/images/cream-hero-frame-end.png"
          alt=""
          width={500}
          height={500}
          priority
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Wordmark overlay — synced to video time, only visible during pose hold */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6% 4%",
          opacity: wordmarkVisible ? 1 : 0,
          transition: "opacity 600ms ease-out",
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(8px, 0.9vw, 11px)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--cobalt-700)",
          }}
        >
          LA CASA DEL
        </span>
        <span
          style={{
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(18px, 2.2vw, 30px)",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "var(--cobalt-700)",
            lineHeight: 1,
          }}
        >
          ACROYOGA
        </span>
      </div>
    </div>
  );
}
