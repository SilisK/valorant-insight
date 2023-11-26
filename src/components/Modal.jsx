import { useEffect } from "react";

export default function Modal() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="modal-overlay fixed w-screen h-screen backdrop-blur z-50"></div>
  );
}
