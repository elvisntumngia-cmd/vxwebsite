import { motion, useScroll, useTransform } from "motion/react";
import type { CSSProperties } from "react";

type StarStyle = CSSProperties & {
  "--star-left": string;
  "--star-top": string;
  "--star-size": string;
  "--star-opacity": number;
  "--star-duration": string;
  "--star-delay": string;
};

const stars = Array.from({ length: 150 }, (_, index) => {
  const isLargeStar = index % 11 === 0;
  const isMediumStar = index % 5 === 0;

  const size = isLargeStar ? 3.4 : isMediumStar ? 2.3 : 1.5;
  const opacity = 0.38 + ((index * 19) % 55) / 100;
  const duration = 3.8 + ((index * 11) % 6);
  const delay = -((index * 7) % 10);

  return {
    id: index,
    style: {
      "--star-left": `${(index * 47 + index * index * 3) % 100}%`,
      "--star-top": `${(index * 71 + index * index * 5) % 100}%`,
      "--star-size": `${size}px`,
      "--star-opacity": Math.min(opacity, 0.92),
      "--star-duration": `${duration}s`,
      "--star-delay": `${delay}s`,
    } as StarStyle,
  };
});

type AmbientBackgroundProps = {
  showOrbital?: boolean;
};

function AmbientBackground({ showOrbital = false }: AmbientBackgroundProps) {
  const { scrollY } = useScroll();
  const orbitalOpacity = useTransform(scrollY, [0, 480, 720], [0.95, 0.5, 0]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#010204]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_42%,rgba(8,13,27,0.6),transparent_48%)]" />

      <div className="space-grid absolute inset-0 opacity-15" />

      <motion.div
        className="absolute inset-[-5%]"
        animate={{
          x: [0, 12, -7, 0],
          y: [0, -9, 7, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {stars.map((star) => (
          <span key={star.id} className="space-star" style={star.style} />
        ))}
      </motion.div>

      <motion.div
        className="ambient-light absolute right-[18%] top-[12%] h-56 w-56 rounded-full bg-[#2463ff]/14 blur-[60px] sm:blur-[105px]"
        animate={{
          x: [0, 36, -16, 0],
          y: [0, 26, 58, 0],
          scale: [1, 1.1, 0.96, 1],
          opacity: [0.62, 0.88, 0.68, 0.62],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="ambient-light ambient-light-secondary absolute bottom-[7%] right-[36%] h-52 w-52 rounded-full bg-[#16e0be]/12 blur-[60px] sm:blur-[110px]"
        animate={{
          x: [0, 46, -20, 0],
          y: [0, -34, 12, 0],
          scale: [1, 1.12, 0.96, 1],
          opacity: [0.55, 0.8, 0.62, 0.55],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="ambient-light ambient-light-secondary absolute bottom-[-4%] right-[4%] h-56 w-56 rounded-full bg-[#933cff]/13 blur-[60px] sm:blur-[115px]"
        animate={{
          x: [0, -42, 18, 0],
          y: [0, -38, -12, 0],
          scale: [1, 0.96, 1.12, 1],
          opacity: [0.58, 0.84, 0.64, 0.58],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {showOrbital && (
        <motion.div
          className="ambient-orbit absolute right-[-7rem] top-[17%] h-[56%] w-[54%] min-w-[560px]"
          animate={{
            x: [0, -90, -30, 40, 0],
            y: [0, 70, 140, 50, 0],
            rotate: [-2, 2, -1, 1.5, -2],
            scale: [0.92, 1, 0.95, 1.03, 0.92],
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "62% 50%",
            opacity: orbitalOpacity,
          }}
        >
          <svg
            className="h-full w-full overflow-visible"
            viewBox="0 0 900 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="blueOrbit"
                x1="80"
                y1="100"
                x2="820"
                y2="500"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2563eb" stopOpacity="0.16" />
                <stop offset="0.35" stopColor="#6cc8ff" stopOpacity="1" />
                <stop offset="0.7" stopColor="#4f7cff" stopOpacity="0.82" />
                <stop offset="1" stopColor="#2563eb" stopOpacity="0.12" />
              </linearGradient>

              <linearGradient
                id="cyanOrbit"
                x1="140"
                y1="440"
                x2="760"
                y2="150"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0f766e" stopOpacity="0.1" />
                <stop offset="0.42" stopColor="#5eead4" stopOpacity="0.9" />
                <stop offset="0.7" stopColor="#22d3ee" stopOpacity="0.65" />
                <stop offset="1" stopColor="#0f766e" stopOpacity="0.08" />
              </linearGradient>

              <linearGradient
                id="purpleOrbit"
                x1="100"
                y1="100"
                x2="820"
                y2="500"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6d28d9" stopOpacity="0.1" />
                <stop offset="0.48" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="0.76" stopColor="#9333ea" stopOpacity="0.65" />
                <stop offset="1" stopColor="#6d28d9" stopOpacity="0.08" />
              </linearGradient>

              <radialGradient id="coreGradient">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="0.22" stopColor="#dbeafe" />
                <stop offset="0.55" stopColor="#60a5fa" />
                <stop offset="0.82" stopColor="#2563eb" />
                <stop offset="1" stopColor="#1d4ed8" stopOpacity="0" />
              </radialGradient>

              <filter
                id="blueGlow"
                x="-400%"
                y="-400%"
                width="900%"
                height="900%"
              >
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id="cyanGlow"
                x="-400%"
                y="-400%"
                width="900%"
                height="900%"
              >
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id="purpleGlow"
                x="-400%"
                y="-400%"
                width="900%"
                height="900%"
              >
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id="coreGlow"
                x="-500%"
                y="-500%"
                width="1100%"
                height="1100%"
              >
                <feGaussianBlur stdDeviation="20" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g transform="rotate(-12 450 300)">
              <ellipse
                cx="450"
                cy="300"
                rx="350"
                ry="176"
                stroke="url(#blueOrbit)"
                strokeWidth="2.8"
                filter="url(#blueGlow)"
              />

              <ellipse
                cx="450"
                cy="300"
                rx="292"
                ry="142"
                stroke="url(#cyanOrbit)"
                strokeWidth="2.4"
                filter="url(#cyanGlow)"
              />

              <ellipse
                cx="450"
                cy="300"
                rx="392"
                ry="214"
                stroke="url(#purpleOrbit)"
                strokeWidth="2.4"
                filter="url(#purpleGlow)"
              />

              <ellipse
                cx="450"
                cy="300"
                rx="244"
                ry="112"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.1"
                strokeDasharray="4 11"
              />

              <ellipse
                cx="450"
                cy="300"
                rx="318"
                ry="194"
                stroke="rgba(125,162,255,0.12)"
                strokeWidth="1.1"
                strokeDasharray="3 14"
              />

              <circle
                cx="450"
                cy="300"
                r="46"
                fill="url(#coreGradient)"
                opacity="0.32"
                filter="url(#coreGlow)"
              >
                <animate
                  attributeName="r"
                  values="42;56;46;60;42"
                  keyTimes="0;0.18;0.38;0.58;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.26;0.48;0.32;0.58;0.26"
                  keyTimes="0;0.18;0.38;0.58;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="450"
                cy="300"
                r="20"
                fill="#60a5fa"
                opacity="0.82"
                filter="url(#coreGlow)"
              >
                <animate
                  attributeName="r"
                  values="18;25;20;28;18"
                  keyTimes="0;0.18;0.38;0.58;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.62;0.95;0.72;1;0.62"
                  keyTimes="0;0.18;0.38;0.58;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle cx="450" cy="300" r="8" fill="#ffffff" opacity="0.9">
                <animate
                  attributeName="r"
                  values="7;10;8;11;7"
                  keyTimes="0;0.18;0.38;0.58;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="450"
                cy="300"
                r="30"
                stroke="#60a5fa"
                strokeWidth="2"
                fill="none"
                opacity="0"
              >
                <animate
                  attributeName="r"
                  values="30;95"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.58;0"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Blue energy stream */}
              <circle
                r="22"
                fill="#3b82f6"
                opacity="0.22"
                filter="url(#blueGlow)"
              >
                <animateMotion
                  dur="9.5s"
                  repeatCount="indefinite"
                  path="M 100 300 a 350 176 0 1 0 700 0 a 350 176 0 1 0 -700 0"
                />
              </circle>

              <circle r="8" fill="#ffffff" filter="url(#blueGlow)">
                <animateMotion
                  dur="9.5s"
                  repeatCount="indefinite"
                  path="M 100 300 a 350 176 0 1 0 700 0 a 350 176 0 1 0 -700 0"
                />
              </circle>

              <circle
                r="4.8"
                fill="#60a5fa"
                opacity="0.9"
                filter="url(#blueGlow)"
              >
                <animateMotion
                  dur="9.5s"
                  begin="-0.24s"
                  repeatCount="indefinite"
                  path="M 100 300 a 350 176 0 1 0 700 0 a 350 176 0 1 0 -700 0"
                />
              </circle>

              <circle
                r="3.2"
                fill="#3b82f6"
                opacity="0.74"
                filter="url(#blueGlow)"
              >
                <animateMotion
                  dur="9.5s"
                  begin="-0.48s"
                  repeatCount="indefinite"
                  path="M 100 300 a 350 176 0 1 0 700 0 a 350 176 0 1 0 -700 0"
                />
              </circle>

              <circle
                r="2.3"
                fill="#2563eb"
                opacity="0.5"
                filter="url(#blueGlow)"
              >
                <animateMotion
                  dur="9.5s"
                  begin="-0.72s"
                  repeatCount="indefinite"
                  path="M 100 300 a 350 176 0 1 0 700 0 a 350 176 0 1 0 -700 0"
                />
              </circle>

              <circle
                r="3.8"
                fill="#bfdbfe"
                opacity="0.85"
                filter="url(#blueGlow)"
              >
                <animateMotion
                  dur="15s"
                  begin="-6s"
                  repeatCount="indefinite"
                  path="M 100 300 a 350 176 0 1 0 700 0 a 350 176 0 1 0 -700 0"
                />
              </circle>

              {/* Cyan energy stream */}
              <circle
                r="22"
                fill="#2dd4bf"
                opacity="0.22"
                filter="url(#cyanGlow)"
              >
                <animateMotion
                  dur="11.5s"
                  begin="-4s"
                  repeatCount="indefinite"
                  path="M 158 300 a 292 142 0 1 0 584 0 a 292 142 0 1 0 -584 0"
                />
              </circle>

              <circle r="8" fill="#ffffff" filter="url(#cyanGlow)">
                <animateMotion
                  dur="11.5s"
                  begin="-4s"
                  repeatCount="indefinite"
                  path="M 158 300 a 292 142 0 1 0 584 0 a 292 142 0 1 0 -584 0"
                />
              </circle>

              <circle
                r="4.8"
                fill="#5eead4"
                opacity="0.9"
                filter="url(#cyanGlow)"
              >
                <animateMotion
                  dur="11.5s"
                  begin="-4.24s"
                  repeatCount="indefinite"
                  path="M 158 300 a 292 142 0 1 0 584 0 a 292 142 0 1 0 -584 0"
                />
              </circle>

              <circle
                r="3.2"
                fill="#2dd4bf"
                opacity="0.72"
                filter="url(#cyanGlow)"
              >
                <animateMotion
                  dur="11.5s"
                  begin="-4.48s"
                  repeatCount="indefinite"
                  path="M 158 300 a 292 142 0 1 0 584 0 a 292 142 0 1 0 -584 0"
                />
              </circle>

              <circle
                r="2.3"
                fill="#14b8a6"
                opacity="0.5"
                filter="url(#cyanGlow)"
              >
                <animateMotion
                  dur="11.5s"
                  begin="-4.72s"
                  repeatCount="indefinite"
                  path="M 158 300 a 292 142 0 1 0 584 0 a 292 142 0 1 0 -584 0"
                />
              </circle>

              <circle
                r="3.8"
                fill="#ccfbf1"
                opacity="0.82"
                filter="url(#cyanGlow)"
              >
                <animateMotion
                  dur="17s"
                  begin="-9s"
                  repeatCount="indefinite"
                  path="M 158 300 a 292 142 0 1 0 584 0 a 292 142 0 1 0 -584 0"
                />
              </circle>

              {/* Purple energy stream */}
              <circle
                r="23"
                fill="#a855f7"
                opacity="0.24"
                filter="url(#purpleGlow)"
              >
                <animateMotion
                  dur="13.5s"
                  begin="-7s"
                  repeatCount="indefinite"
                  path="M 58 300 a 392 214 0 1 0 784 0 a 392 214 0 1 0 -784 0"
                />
              </circle>

              <circle r="8.5" fill="#ffffff" filter="url(#purpleGlow)">
                <animateMotion
                  dur="13.5s"
                  begin="-7s"
                  repeatCount="indefinite"
                  path="M 58 300 a 392 214 0 1 0 784 0 a 392 214 0 1 0 -784 0"
                />
              </circle>

              <circle
                r="5"
                fill="#c084fc"
                opacity="0.92"
                filter="url(#purpleGlow)"
              >
                <animateMotion
                  dur="13.5s"
                  begin="-7.24s"
                  repeatCount="indefinite"
                  path="M 58 300 a 392 214 0 1 0 784 0 a 392 214 0 1 0 -784 0"
                />
              </circle>

              <circle
                r="3.2"
                fill="#a855f7"
                opacity="0.72"
                filter="url(#purpleGlow)"
              >
                <animateMotion
                  dur="13.5s"
                  begin="-7.48s"
                  repeatCount="indefinite"
                  path="M 58 300 a 392 214 0 1 0 784 0 a 392 214 0 1 0 -784 0"
                />
              </circle>

              <circle
                r="2.3"
                fill="#7e22ce"
                opacity="0.5"
                filter="url(#purpleGlow)"
              >
                <animateMotion
                  dur="13.5s"
                  begin="-7.72s"
                  repeatCount="indefinite"
                  path="M 58 300 a 392 214 0 1 0 784 0 a 392 214 0 1 0 -784 0"
                />
              </circle>

              <circle
                r="4"
                fill="#e9d5ff"
                opacity="0.84"
                filter="url(#purpleGlow)"
              >
                <animateMotion
                  dur="19s"
                  begin="-12s"
                  repeatCount="indefinite"
                  path="M 58 300 a 392 214 0 1 0 784 0 a 392 214 0 1 0 -784 0"
                />
              </circle>
            </g>
          </svg>
        </motion.div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_44%,transparent_0%,rgba(2,3,5,0.03)_56%,rgba(2,3,5,0.58)_100%)]" />
    </div>
  );
}

export default AmbientBackground;
