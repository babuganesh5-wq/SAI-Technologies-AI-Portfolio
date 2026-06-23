# Custom Agent Rules for SAI Technologies AI Portfolio

These instructions apply strictly to any AI coding assistant operating on this project to maintain design aesthetic, responsiveness, and codebase integrity.

## Mobile Responsiveness & Device Scaling Rules
* **Always follow the custom skill [responsive-design](file:///Users/ganeshbabu/antigravity/SAI-Technologies-AI-Portfolio/.agents/skills/responsive-design/SKILL.md) guidelines when updating files.**
* **Never use fixed heights or scroll blocks (`overflow-hidden`)** on main parent sections (like the Hero wrapper). Allow scrollability in landscape viewports.
* **Always check if Three.js WebGL setups** are wrapped inside a safe try/catch block with fallback templates for browsers that block or disable WebGL.
* **Prevent long monospace strings from colliding** in grid lists on mobile. Statically stack rows vertically (`flex-col`) on narrow screens and wrap badges correctly.
