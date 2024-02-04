import * as React from "react";

export default function useDraggable() {
  const [node, setNode] = React.useState<HTMLElement>();
  const [color, setColor] = React.useState("");
  const [{ dx, dy }, setOffset] = React.useState({
    dx: 0,
    dy: 0,
  });

  const ref = React.useCallback((nodeEle: HTMLDivElement) => {
    setNode(nodeEle);
  }, []);

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      const startPos = {
        x: e.clientX - dx,
        y: e.clientY - dy,
      };
      setColor("red");
      const handleMouseMove = (e: React.MouseEvent) => {
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        setOffset({ dx, dy });
      };

      const handleMouseUp = () => {
        setColor("");
        document.removeEventListener("mousemove", handleMouseMove as any);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove as any);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [dx, dy],
  );

  const handleTouchStart = React.useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];

      const startPos = {
        x: touch.clientX - dx,
        y: touch.clientY - dy,
      };
      const handleTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        const dx = touch.clientX - startPos.x;
        const dy = touch.clientY - startPos.y;
        setOffset({ dx, dy });
      };

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove as any);
        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchmove", handleTouchMove as any);
      document.addEventListener("touchend", handleTouchEnd);
    },
    [dx, dy],
  );

  React.useEffect(() => {
    if (node) {
      node.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      node.style.background = color;
    }
  }, [node, dx, dy, color]);

  React.useEffect(() => {
    if (!node) {
      return;
    }
    node.addEventListener("mousedown", handleMouseDown as any);
    node.addEventListener("touchstart", handleTouchStart as any);
    return () => {
      node.removeEventListener("mousedown", handleMouseDown as any);
      node.removeEventListener("touchstart", handleTouchStart as any);
    };
  }, [node, dx, dy]);

  return [ref];
}

export const handleOverlapCheck = (e: React.MouseEvent) => {
  const array = Array.from(document.querySelectorAll(".draggable"));
  array.map((item) => {
    if (
      item?.getBoundingClientRect().left -
        (e.target as Element).getBoundingClientRect().left <
      1
    ) {
      if (
        !(
          item?.getBoundingClientRect().right >
          (e.target as Element).getBoundingClientRect().left
        )
      ) {
        console.log("touched");
      }
    }
  });
  //return array;
};
