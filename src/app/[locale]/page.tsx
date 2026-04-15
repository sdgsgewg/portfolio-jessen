"use client";

import useAnimationObserver from "../../hooks/useAnimationObserver";
import { sections } from "../../constants/sections";
import { Section } from "@/components/section/Section";

export default function HomePage() {
  useAnimationObserver("slide-in-left", ".slide-left");
  useAnimationObserver("slide-in-right", ".slide-right");

  return (
    <>
      {sections.map((section, index) => (
        <Section key={section.name} section={section} isOdd={index % 2 !== 0}>
          {section.element}
        </Section>
      ))}
    </>
  );
}
