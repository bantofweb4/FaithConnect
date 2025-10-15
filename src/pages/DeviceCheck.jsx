import { useEffect, useState } from "react";

function DeviceCheck({ children }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px"
      }}>
        <div>
          <h2>Desktop view required</h2>
          <p>Please open this site on a laptop or desktop for the best experience.</p>
        </div>
      </div>
    );
  }

  return children;
}

export default DeviceCheck;
