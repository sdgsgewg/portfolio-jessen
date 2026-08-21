import { useState } from "react";
import { useEffect } from "react";
import { TECH_ICONS } from "@/constants/tech-icons";

export default function TechIcons() {
  const [iconSize, setIconSize] = useState(40);

  const baseClasses =
    "grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:text-[var(--tech-icon-color)]";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIconSize(35); // Small Screens
      } else if (window.innerWidth < 1024) {
        setIconSize(40); // Medium Screens
      } else {
        setIconSize(40); // Large Screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {Object.values(TECH_ICONS)
        .flat()
        .map(({ name, icon: Icon, hoverColor }) => (
          <div key={name}>
            <Icon
              size={iconSize}
              title={name}
              className={baseClasses}
              style={
                {
                  "--tech-icon-color": hoverColor ?? "currentColor",
                } as React.CSSProperties
              }
            />
          </div>
        ))}
    </>
  );
}
