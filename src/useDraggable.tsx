import * as React from "react";

export default function useDraggable() {
  const [node, setNode] = React.useState<HTMLElement>();
  const [filter, setFilter] = React.useState("");
  const [cursor, setCursor] = React.useState("");
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
      node!.className = "active";
      //setFilter("drop-shadow(0 0 7px #1b5e20)");
      //setCursor("grabbing");
      //node!.style.filter = "drop-shadow(0 0 7px #1b5e20)";
      const handleMouseMove = (e: React.MouseEvent) => {
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        setOffset({ dx, dy });
       //node!.style.filter = "drop-shadow(0 0 15px #1b5e20)";
        //node!.className = "active";
        OverlapCheck(e);
      };

      const handleMouseUp = () => {
        //setFilter("");
        document.removeEventListener("mousemove", handleMouseMove as any);
        document.removeEventListener("mouseup", handleMouseUp);
        //node!.style.filter = "";
        node!.className = "draggable";
      };

      document.addEventListener("mousemove", handleMouseMove as any);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [dx, dy, node],
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
    [dx, dy, node],
  );

  React.useEffect(() => {
    if (node) {
      node.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      //node.style.filter = filter;
      //node.style.cursor = cursor;
    }
  }, [node, dx, dy]);

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

export const OverlapCheck = (e: React.MouseEvent) => {
  const array = Array.from(document.querySelectorAll(".draggable"));
  array.map((item) => {
    //console.log((e.target as Element).id, (item as Element).id);
    let dragged = (e.target as Element).getBoundingClientRect();
    let target = (item as Element).getBoundingClientRect();
    //console.log((e.target as Element).id, (item as Element).id);
    console.log(dragged.right, target.left);
    console.log((e.target as Element).className, item.className);
    if (
      dragged.right > target.left &&
      dragged.left < target.right &&
      dragged.top < target.bottom &&
      dragged.bottom > target.top
    ) {
      console.log("touched");
      return true;
    }
  });
  return false;
};
