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
    const cursorShadow5: HTMLElement | null = document.querySelector(
      "[data-cursor-shadow-5"
    );
    const cursorShadow6: HTMLElement | null = document.querySelector(
      "[data-cursor-shadow-6"
    );

    document.body.addEventListener("mouseenter", () => {
      showCursor("white");
    });
    document.body.addEventListener("mouseleave", () => {
      hideCursor();
    });

    function showCursor(color: string) {
      cursorDot?.animate(
        { backgroundColor: color },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow1?.animate(
        { backgroundColor: color },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow2?.animate(
        { backgroundColor: color },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow3?.animate(
        { backgroundColor: color },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow4?.animate(
        { backgroundColor: color },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow5?.animate(
        { backgroundColor: color },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow6?.animate(
        { backgroundColor: color },
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
      cursorShadow5?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow6?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
    }
    function outlineCursor(color: string) {
      cursorDot?.animate(
        {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: color,
          zIndex: 10,
        },
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
      cursorShadow5?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
      cursorShadow6?.animate(
        { backgroundColor: "transparent" },
        { duration: 100, fill: "forwards" }
      );
    }
    function bigCursor(color: string, size: string) {
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
        { duration: 100, fill: "forwards" }
      );

      cursorShadow2!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 300, fill: "forwards" }
      );

      cursorShadow3!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 600, fill: "forwards" }
      );

      cursorShadow4!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 800, fill: "forwards" }
      );
      cursorShadow5!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 1000, fill: "forwards" }
      );
      cursorShadow6!.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 1200, fill: "forwards" }
      );
    });

    const menus = document.querySelectorAll(".magnet");
    const hideCursors = document.querySelectorAll(".hideCursor");
    const blackCursors = document.querySelectorAll(".blackCursor");
    const outlineCursors = document.querySelectorAll(".outlineCursor");
    const bigCursors = document.querySelectorAll(".bigCursor");

    hideCursors.forEach((menu) => {
      menu.addEventListener("mouseenter", () => {
        hideCursor();
      });
      menu.addEventListener("mouseleave", () => {
        showCursor("white");
      });
    });
    menus.forEach((menu) => {
      menu.addEventListener("mouseenter", () => {
        hideCursor();
      });
      menu.addEventListener("mouseleave", () => {
        showCursor("white");
      });
    });
    blackCursors.forEach((menu) => {
      menu.addEventListener("mouseenter", () => {
        showCursor("black");
      });
      menu.addEventListener("mouseleave", () => {
        showCursor("white");
      });
    });
    outlineCursors.forEach((menu) => {
      menu.addEventListener("mouseenter", () => {
        outlineCursor("black");
      });
      menu.addEventListener("mouseleave", () => {
        showCursor("white");
      });
    });
    bigCursors.forEach((menu) => {
      menu.addEventListener("mouseenter", () => {
        bigCursor("white", "200px");
      });
      menu.addEventListener("mouseleave", () => {
        bigCursor("white", "20px");
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
      <div className="cursor-shadow" data-cursor-shadow-5></div>
      <div className="cursor-shadow" data-cursor-shadow-6></div>
    </div>
  );
};

export default Cursor;
