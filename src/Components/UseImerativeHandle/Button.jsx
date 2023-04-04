import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button type="text" className="border p-3 mt-2">
        Button From Child!
      </button>
      <div>{toggle && <span>toggle</span>}</div>
    </div>
  );
});

export default Button;
