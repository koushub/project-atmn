import React from "react";

const BackgroundChakra = () => {
  return (
    // fixed inset-0: Locks it to the screen
    // z-0: Puts it behind everything
    // pointer-events-none: Lets clicks pass through it
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
      <img
        src="chakra-bg.png"
        alt="Dharma Chakra"
        // opacity-10 makes it subtle.
        // animate-spin-slow uses the 60s rotation we defined in CSS.
        className="w-[150vw] max-w-none md:w-[1200px] opacity-5 animate-spin-slow"
      />
    </div>
  );
};

export default BackgroundChakra;
