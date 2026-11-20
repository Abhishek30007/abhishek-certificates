"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Maximize2,
} from "lucide-react";

interface ImageViewerProps {
  imageSrc: string;
  documentId: string;
  fileName: string;
}

export default function ImageViewer({
  imageSrc,
  documentId,
  fileName,
}: ImageViewerProps) {
  const [zoom, setZoom] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(3.0, +(prev + 0.25).toFixed(2)));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(0.4, +(prev - 0.25).toFixed(2)));
  };

  const handleResetZoom = () => {
    setZoom(1.0);
  };

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Keyboard zoom controls (+, -, 0)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "=" || e.key === "+")) {
        e.preventDefault();
        handleZoomIn();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === "-" || e.key === "_")) {
        e.preventDefault();
        handleZoomOut();
      } else if ((e.ctrlKey || e.metaKey) && e.key === "0") {
        e.preventDefault();
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const percentage = Math.round(zoom * 100);

  return (
    <div className="flex flex-col h-full w-full bg-neutral-100 select-none">
      {/* Top Navigation / Toolbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200 shadow-xs px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Document Identity */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight">
                  {documentId}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800">
                  Verified
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 hidden sm:block">
                Official NPTEL Certificate Document
              </p>
            </div>
          </div>

          {/* Center: Zoom Controls */}
          <div className="flex items-center bg-neutral-100 border border-neutral-200 rounded-lg p-0.5 shadow-2xs">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 0.4}
              title="Zoom Out (Ctrl -)"
              className="p-1.5 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-white disabled:opacity-35 disabled:hover:bg-transparent transition-all cursor-pointer disabled:cursor-not-allowed"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            <button
              onClick={handleResetZoom}
              title="Click to Reset Zoom (Ctrl 0)"
              className="px-2 py-1 text-xs font-medium text-neutral-700 hover:text-neutral-900 hover:bg-white rounded-md transition-all cursor-pointer min-w-[50px] text-center"
            >
              {percentage}%
            </button>

            <button
              onClick={handleZoomIn}
              disabled={zoom >= 3.0}
              title="Zoom In (Ctrl +)"
              className="p-1.5 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-white disabled:opacity-35 disabled:hover:bg-transparent transition-all cursor-pointer disabled:cursor-not-allowed"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <div className="w-px h-4 bg-neutral-200 mx-0.5" />

            <button
              onClick={handleResetZoom}
              title="Reset Zoom to 100%"
              className="p-1.5 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-white transition-all cursor-pointer"
              aria-label="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              title="Copy public verification link to clipboard"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:text-neutral-900 transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="hidden sm:inline">Copy Link</span>
                </>
              )}
            </button>

            {/* Open Raw Image in New Tab */}
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              title="Open full raw image in a new tab"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:text-neutral-900 transition-all shadow-2xs cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              <span className="hidden sm:inline">Open Full Image</span>
            </a>

            {/* Download Original Image */}
            <a
              href={imageSrc}
              download={fileName}
              title="Download original image file"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Scrollable Viewer Stage */}
      <div
        ref={containerRef}
        className="flex-1 w-full overflow-auto p-4 sm:p-8 flex items-start justify-center"
      >
        <div
          className="relative transition-all duration-150 ease-out flex justify-center items-start my-auto"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "top center",
          }}
        >
          {/* Certificate Frame */}
          <div className="relative bg-white rounded-lg shadow-xl ring-1 ring-black/10 overflow-hidden max-w-[95vw] md:max-w-4xl">
            {!isLoaded && (
              <div className="w-[1024px] max-w-full aspect-[1024/724] bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400">
                <span className="text-sm">Loading document...</span>
              </div>
            )}
            <img
              src={imageSrc}
              alt={`Certificate Document ${documentId}`}
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-auto block select-none pointer-events-auto transition-opacity duration-300 ${
                isLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="py-2 px-4 bg-white/80 border-t border-neutral-200 text-center text-[11px] text-neutral-500 flex items-center justify-between">
        <span>NPTEL Online Certification Document Verification</span>
        <div className="flex items-center gap-2">
          <span>Format: Original High-Res JPEG</span>
          <span>•</span>
          <span>Status: Verified Genuine</span>
        </div>
      </footer>
    </div>
  );
}
