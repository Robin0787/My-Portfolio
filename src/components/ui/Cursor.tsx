/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const Cursor = () => {
  const defaultCursorDotColor = "white";
  const defaultCursorCircleColor = "#b9b9b9a2";

  useEffect(() => {
    const cursorDot: HTMLElement | null = document.querySelector(".cursor-dot");
    const cursorCircle: HTMLElement | null =
      document.querySelector(".cursor-circle");

    document.body.addEventListener("mouseenter", () => {
      defaultCursor(defaultCursorDotColor, defaultCursorCircleColor);
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

    function defaultCursor(cursorDotColor: string, cursorCircleColor: string) {
      cursorDot?.animate(
        {
          width: "10px",
          height: "10px",
          backgroundColor: cursorDotColor,
          borderRadius: "100%",
        },
        { duration: 100, fill: "forwards" }
      );
      cursorCircle?.animate(
        {
          width: "45px",
          height: "45px",
          border: `1px solid ${cursorCircleColor}`,
        },
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
        { duration: 1000, fill: "forwards" }
      );
    });

    window.addEventListener("mousedown", () => {
      cursorCircle!.animate(
        {
          width: "60px",
          height: "60px",
          borderWidth: "3px",
          borderColor: "white",
        },
        {
          duration: 300,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    });
    window.addEventListener("mouseup", () => {
      cursorCircle!.animate(
        {
          width: "45px",
          height: "45px",
          borderWidth: "1px",
          borderColor: defaultCursorCircleColor,
        },
        {
          delay: 100,
          duration: 300,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    });

    const magnify = document.querySelectorAll(".magnify");
    const blackCursors = document.querySelectorAll(".blackCursor");
    const bigCursors = document.querySelectorAll(".bigCursor");

    magnify.forEach((item: Element) => {
      item.addEventListener("mouseenter", () => {
        let elementsWidth = (item as HTMLElement).offsetWidth;
        elementsWidth = elementsWidth || 60;
        if (elementsWidth <= 50) {
          elementsWidth = 60;
        }
        resizeCursor("white", `${elementsWidth}px`);
        cursorCircle!.style.display = "none";
      });
      item.addEventListener("mouseleave", () => {
        defaultCursor(defaultCursorDotColor, defaultCursorCircleColor);
        cursorCircle!.style.display = "block";
      });
    });
    blackCursors.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        defaultCursor("black", "black");
      });
      item.addEventListener("mouseleave", () => {
        defaultCursor(defaultCursorDotColor, defaultCursorCircleColor);
      });
    });
    bigCursors.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        resizeCursor("white", "200px");
        cursorCircle!.style.display = "none";
      });
      item.addEventListener("mouseleave", () => {
        defaultCursor(defaultCursorDotColor, defaultCursorCircleColor);
        cursorCircle!.style.display = "block";
      });
    });
  });

  return (
    <div>
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
    </div>
  );
};

export default Cursor;
