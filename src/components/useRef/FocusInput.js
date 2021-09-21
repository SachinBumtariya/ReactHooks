//UseRef Focus on input Text
import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current.focus()
  }, []);
  return (
    <div>
      <h2>Use Ref</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
