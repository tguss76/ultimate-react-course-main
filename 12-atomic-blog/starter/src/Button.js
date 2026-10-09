import { useEffect, useState } from "react";

function Button() {
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).

  const [isFakeDark, setIsFakeDark] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark],
  );

  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default Button;
