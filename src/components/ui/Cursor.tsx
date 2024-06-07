/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const Cursor = () => {
  // Use useEffect for initial cursor setup and cleanup
  useEffect(() => {
    const cursorDot: HTMLElement | null = document.querySelector(".cursor-dot");
    const cursorCircle: HTMLElement | null =
      document.querySelector(".cursor-circle");

    document.body.addEventListener("mouseenter", () => {
      defaultCursor("white");
    });
    document.body.addEventListener("mouseleave", () => {
      hideCursor();
    });

    function hideCursor() {
      cursorDot?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
      cursorCircle?.animate(
        { border: "transparent" },
        { duration: 100, fill: "forwards" }
      );
    }
    function resizeCursor(color: string, size: string) {
      cursorDot?.animate(
        {
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "100%",
          zIndex: 1,
        },
        { duration: 100, fill: "forwards" }
      );
      cursorCircle?.animate(
        { width: 0, height: 0, borderWidth: "0px" },
        { duration: 100, fill: "forwards" }
      );
    }
    function defaultCursor(color: string) {
      cursorDot?.animate(
        {
          width: "10px",
          height: "10px",
          backgroundColor: color,
          borderRadius: "100%",
        },
        { duration: 100, fill: "forwards" }
      );
      cursorCircle?.animate(
        { width: "40px", height: "40px", border: `1px solid ${color}` },
        { duration: 100, fill: "forwards" }
      );
    }

    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot!.style.left = `${posX}px`;
      cursorDot!.style.top = `${posY}px`;

      cursorCircle!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 300, fill: "forwards" }
      );
    });

    const magnify = document.querySelectorAll(".magnify");
    const blackCursors = document.querySelectorAll(".blackCursor");
    const bigCursors = document.querySelectorAll(".bigCursor");

    magnify.forEach((item: Element) => {
      item.addEventListener("mouseenter", () => {
        let elementsWidth = (item as HTMLElement).offsetWidth;
        elementsWidth = elementsWidth || 40;
        resizeCursor("white", `${elementsWidth}px`);
      });
      item.addEventListener("mouseleave", () => {
        defaultCursor("white");
      });
    });
    blackCursors.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        defaultCursor("black");
      });
      item.addEventListener("mouseleave", () => {
        defaultCursor("white");
      });
    });
    bigCursors.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        resizeCursor("white", "200px");
      });
      item.addEventListener("mouseleave", () => {
        defaultCursor("white");
      });
    });
  }, []);

  return (
    <div>
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
    </div>
  );
};

export default Cursor;
