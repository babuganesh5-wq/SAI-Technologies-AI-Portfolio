---
name: responsive-design
description: Strict guidelines for ensuring absolute mobile, tablet, and portrait/landscape rotation responsiveness on web projects, including WebGL canvas scaling and overlay sizing.
---

# Responsive Design & Mobile Rotation Guidelines

Use this skill when designing, building, auditing, or refactoring web pages, interactive layouts, or 3D/Canvas spaces to ensure they scale flawlessly on mobile viewports (320px–480px), tablets, and mobile rotation (landscape/portrait orientation).

## 1. Mobile Rotation & Landscape Viewport Safeguards
* **Allow Vertical Scroll**: Never set absolute `overflow-hidden` or `min-h-screen overflow-hidden` on high-level section wrappers. If vertical height is small (such as mobile landscape orientation, 320px–480px high), layout contents *will* stack and exceed viewport heights. Always use `overflow-x-hidden overflow-y-visible` to hide horizontal scrollbars while keeping vertical scroll functionality active.
* **Aspect Ratio Scaling**: Use tailwind `aspect-square` or custom fluid calculations for 3D elements, video loops, and custom canvases instead of fixed width/height pixel dimensions on container elements.

## 2. Three.js / Canvas WebGL Bounds Checks
* **WebGL try/catch Guards**: Always wrap `new THREE.WebGLRenderer` and WebGL context initializations in `try/catch` blocks. If initialization fails, catch the error, set the local error state, and render a beautiful static SVG/CSS-animated fallback card instead of letting the application mount phase crash.
* **Canvas Sizing on Mount**: Ensure size observers handle early React mount phases. If container dimensions return `0px`, fallback to default values (e.g. `300px`) to prevent rendering issues.
* **Explicit Canvas CSS**: Always force `width: 100%; height: 100%` on generated canvas DOM elements via style parameters to keep them bounded inside their parent grid columns.
* **Rotation-Aware Camera Z**: When setting camera Z-distance, check both width and height:
  ```typescript
  camera.position.z = (width < 600 || height < 500) ? MobileDistance : DesktopDistance;
  ```

## 3. Fullscreen Overlays & Popups
* **Keyboard & Viewport Constraints**: Mobile overlays (e.g., chat consoles, drawer menus) must use viewport-relative heights like `h-[70vh] max-h-[500px]` instead of fixed heights (like `h-[500px]`) to prevent layout clipping when soft keyboards open.
* **Safe Padding Margins**: Use `w-[calc(100%-2rem)] left-4 right-4` for overlay positioning to guarantee center alignment with exactly 1rem safe-margins on both sides.
* **Overlay Spacing**: Hide dense columns and non-essential telemetry on screens `< 1024px` inside navigation menus. Keep font sizes to `text-2xl` and gaps to `gap-2` so the overlay menu stays compact.

## 4. Grid Col Collision Prevention
* **Stacking Long Strings**: Avoid `flex justify-between items-center` with long strings (like repo names or status matrices) on mobile cards. Stack them vertically on mobile (`flex flex-col sm:flex-row`) and use `break-all` or `truncate` to prevent clipping.
* **Column wrapping**: Switch grids from `grid-cols-2` directly to `grid-cols-1 sm:grid-cols-2` on viewports `< 480px` to prevent card squashing.
* **Marquee gap tightening**: Keep scrolling tickers tight on mobile. Change spacing from `gap-8` to `gap-4 sm:gap-8` and individual margins from `mx-8` to `mx-3 sm:mx-8`.
