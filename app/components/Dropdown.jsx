"use client"
import React, { useState, useRef, useEffect } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button to toggle the dropdown */}
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        Menu
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded z-10">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
