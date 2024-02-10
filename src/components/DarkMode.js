import React from "react";

export default function DarkMode({ setDarkMode }) {
  return (
    <div class="checkbox-wrapper-54">
      <label class="switch">
        <input type="checkbox" checked={setDarkMode((prev) => !prev)} />
        <span class="slider"></span>
      </label>
    </div>
  );
}
