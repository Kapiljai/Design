import React, { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

function Model({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("language");
  const useRefclose = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (useRefclose.current && !useRefclose.current.contains(event.target))
        onClose();
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="container" ref={useRefclose}>
      <div className="row">
        <div className="popup-language  popup-language-show">
          <div className="overlay">
            <div className="col-lg-12 col-12 ">
              <span onClick={onClose} className="closebutton p-3">
                <X size={30} />
              </span>
            </div>
            <div className="col-lg-12">
              <div className="heading">
                <h4
                  className={`tab ${activeTab === "language" ? "active" : ""}`}
                  onClick={() => setActiveTab("language")}
                >
                  Language And Region
                </h4>
                <h4
                  className={`tab ${
                    activeTab === "currency" ? "active" : ""
                  } mx-5`}
                  onClick={() => setActiveTab("currency")}
                >
                  Currency
                </h4>
              </div>
            </div>
            <div className="content">
              {activeTab === "language" ? (
                <div>
                  <p>Content for Language And Region</p>
                </div>
              ) : (
                <div>
                  <p>Content for Currency</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
