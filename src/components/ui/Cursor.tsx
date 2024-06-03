import { useEffect } from "react";

const Cursor = () => {
  // Use useEffect for initial cursor setup and cleanup
  useEffect(() => {
    const cursorDot: HTMLElement | null =
      document.querySelector("[data-cursor-dot]");
    const cursorShadow1: HTMLElement | null = document.querySelector(
      "[data-cursor-shadow-1]"
    );
    const cursorShadow2: HTMLElement | null = document.querySelector(
      "[data-cursor-shadow-2]"
    );
    const cursorShadow3: HTMLElement | null = document.querySelector(
      "[data-cursor-shadow-3]"
    );
    const cursorShadow4: HTMLElement | null = document.querySelector(
      "[data-cursor-shadow-4"
    );

    document.body.addEventListener("mouseenter", () => {
      showCursor();
    });
    document.body.addEventListener("mouseleave", () => {
      hideCursor();
    });

    function showCursor() {
      cursorDot?.animate(
        { backgroundColor: "white" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow1?.animate(
        { backgroundColor: "white" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow2?.animate(
        { backgroundColor: "white" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow3?.animate(
        { backgroundColor: "white" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow4?.animate(
        { backgroundColor: "white" },
        { duration: 100, fill: "forwards" }
      );
    }
    function hideCursor() {
      cursorDot?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow1?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow2?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow3?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow4?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
    }

    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot!.style.left = `${posX}px`;
      cursorDot!.style.top = `${posY}px`;

      cursorShadow1!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 300, fill: "forwards" }
      );

      cursorShadow2!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 600, fill: "forwards" }
      );

      cursorShadow3!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 900, fill: "forwards" }
      );

      cursorShadow4!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 1200, fill: "forwards" }
      );
    });

    const menus = document.querySelectorAll(".magnet");
    const hideCursors = document.querySelectorAll(".hideCursor");

    hideCursors.forEach((menu) => {
      menu.addEventListener("mouseenter", () => {
        hideCursor();
      });
      menu.addEventListener("mouseleave", () => {
        showCursor();
      });
    });
    menus.forEach((menu) => {
      menu.addEventListener("mouseenter", () => {
        // hideCursor();
      });
      menu.addEventListener("mouseleave", () => {
        // showCursor();
      });
    });
  }, []);

  return (
    <div>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-shadow" data-cursor-shadow-1></div>
      <div className="cursor-shadow" data-cursor-shadow-2></div>
      <div className="cursor-shadow" data-cursor-shadow-3></div>
      <div className="cursor-shadow" data-cursor-shadow-4></div>
    </div>
  );
};

export default Cursor;
