import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DecayCard = ({ width = 420, height = 520, image, children }) => {
  const svgRef = useRef(null);
  const displacementMapRef = useRef(null);
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cachedCursor = useRef({ ...cursor.current });

  useEffect(() => {
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1, x2, y1, y2) => Math.hypot(x1 - x2, y1 - y2);

    const handleMouseMove = (ev) => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const values = {
      x: 0,
      y: 0,
      rz: 0,
      scale: 0,
    };

    const render = () => {
      values.x = lerp(values.x, map(cursor.current.x, 0, window.innerWidth, -70, 70), 0.08);
      values.y = lerp(values.y, map(cursor.current.y, 0, window.innerHeight, -70, 70), 0.08);
      values.rz = lerp(values.rz, map(cursor.current.x, 0, window.innerWidth, -2, 2), 0.08);

      gsap.set(svgRef.current, {
        x: values.x,
        y: values.y,
        rotateZ: values.rz,
      });

      const dist = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );

      values.scale = lerp(values.scale, map(dist, 0, 200, 0, 0), 0.06);

      gsap.set(displacementMapRef.current, {
        attr: { scale: values.scale },
      });

      cachedCursor.current = { ...cursor.current };
      requestAnimationFrame(render);
    };

    render();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={svgRef} className="relative">
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="4"
            seed="2"
            result="turbulence"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence"
            scale="0"
          />
        </filter>

        <image
          href={image}
          x="0"
          y="0"
          width="600"
          height="750"
          filter="url(#imgFilter)"
        />
      </svg>

      {children && (
        <div className="absolute bottom-6 left-6 text-white text-3xl font-bold">
          {children}
        </div>
      )}
    </div>
  );
};

export default DecayCard;
