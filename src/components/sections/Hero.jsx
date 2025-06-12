import React from "react";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "../../data/personal";
import Button from "../common/Button";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          id="visual"
          viewBox="0 0 400 400"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          preserveAspectRatio="xMidYMid slice"
        >
          <style>
            {`
              @keyframes float {
                0% { transform: translateY(0px) translateX(0px); }
                25% { transform: translateY(-10px) translateX(-15px); }
                50% { transform: translateY(0px) translateX(-20px); }
                75% { transform: translateY(10px) translateX(-15px); }
                100% { transform: translateY(0px) translateX(0px); }
              }
              .float-animation {
                animation: float 15s ease-in-out infinite;
              }
              .float-animation-delayed {
                animation: float 35s ease-in-out infinite;
                animation-delay: -3.5s;
              }
            `}
          </style>
          <rect x="0" y="0" width="900" height="550" fill="#001220"></rect>
          <defs>
            <linearGradient id="grad1_0" x1="33.3%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stop-color="#fbae3c" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#fbae3c" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_1" x1="33.3%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stop-color="#fbae3c" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#f48350" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_2" x1="33.3%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stop-color="#d96162" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#f48350" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_3" x1="33.3%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stop-color="#d96162" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#af4b6d" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_4" x1="33.3%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stop-color="#7c3e6b" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#af4b6d" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_5" x1="33.3%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stop-color="#7c3e6b" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#49335c" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_6" x1="33.3%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stop-color="#1d2540" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#49335c" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_7" x1="33.3%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stop-color="#1d2540" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#001220" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_0" x1="0%" y1="100%" x2="66.7%" y2="0%">
              <stop offset="20%" stop-color="#fbae3c" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#fbae3c" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_1" x1="0%" y1="100%" x2="66.7%" y2="0%">
              <stop offset="20%" stop-color="#f48350" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#fbae3c" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_2" x1="0%" y1="100%" x2="66.7%" y2="0%">
              <stop offset="20%" stop-color="#f48350" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#d96162" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_3" x1="0%" y1="100%" x2="66.7%" y2="0%">
              <stop offset="20%" stop-color="#af4b6d" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#d96162" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_4" x1="0%" y1="100%" x2="66.7%" y2="0%">
              <stop offset="20%" stop-color="#af4b6d" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#7c3e6b" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_5" x1="0%" y1="100%" x2="66.7%" y2="0%">
              <stop offset="20%" stop-color="#49335c" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#7c3e6b" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_6" x1="0%" y1="100%" x2="66.7%" y2="0%">
              <stop offset="20%" stop-color="#49335c" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#1d2540" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_7" x1="0%" y1="100%" x2="66.7%" y2="0%">
              <stop offset="20%" stop-color="#001220" stop-opacity="1"></stop>
              <stop offset="80%" stop-color="#1d2540" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <g transform="translate(900, 600)" className="float-animation">
            <path
              d="M-351.5 0C-323.9 -40.1 -296.2 -80.2 -272.5 -112.9C-248.9 -145.6 -229.2 -171 -209.3 -209.3C-189.4 -247.6 -169.4 -298.9 -134.5 -324.8C-99.6 -350.6 -49.8 -351.1 0 -351.5L0 0Z"
              fill="#0c1c30"
            ></path>
            <path
              d="M-307.6 0C-283.4 -35.1 -259.2 -70.1 -238.5 -98.8C-217.8 -127.4 -200.5 -149.6 -183.1 -183.1C-165.8 -216.7 -148.3 -261.6 -117.7 -284.2C-87.2 -306.8 -43.6 -307.2 0 -307.6L0 0Z"
              fill="#312c4f"
            ></path>
            <path
              d="M-263.7 0C-242.9 -30.1 -222.2 -60.1 -204.4 -84.7C-186.6 -109.2 -171.9 -128.2 -157 -157C-142.1 -185.7 -127.1 -224.2 -100.9 -243.6C-74.7 -263 -37.4 -263.3 0 -263.7L0 0Z"
              fill="#623965"
            ></path>
            <path
              d="M-219.7 0C-202.4 -25.1 -185.1 -50.1 -170.3 -70.6C-155.5 -91 -143.2 -106.9 -130.8 -130.8C-118.4 -154.8 -105.9 -186.8 -84.1 -203C-62.3 -219.2 -31.1 -219.4 0 -219.7L0 0Z"
              fill="#96446e"
            ></path>
            <path
              d="M-175.8 0C-161.9 -20 -148.1 -40.1 -136.3 -56.4C-124.4 -72.8 -114.6 -85.5 -104.7 -104.7C-94.7 -123.8 -84.7 -149.5 -67.3 -162.4C-49.8 -175.3 -24.9 -175.5 0 -175.8L0 0Z"
              fill="#c55469"
            ></path>
            <path
              d="M-131.8 0C-121.5 -15 -111.1 -30.1 -102.2 -42.3C-93.3 -54.6 -85.9 -64.1 -78.5 -78.5C-71 -92.9 -63.5 -112.1 -50.4 -121.8C-37.4 -131.5 -18.7 -131.7 0 -131.8L0 0Z"
              fill="#e9705a"
            ></path>
            <path
              d="M-87.9 0C-81 -10 -74.1 -20 -68.1 -28.2C-62.2 -36.4 -57.3 -42.7 -52.3 -52.3C-47.4 -61.9 -42.4 -74.7 -33.6 -81.2C-24.9 -87.7 -12.5 -87.8 0 -87.9L0 0Z"
              fill="#fa9845"
            ></path>
            <path
              d="M-43.9 0C-40.5 -5 -37 -10 -34.1 -14.1C-31.1 -18.2 -28.6 -21.4 -26.2 -26.2C-23.7 -31 -21.2 -37.4 -16.8 -40.6C-12.5 -43.8 -6.2 -43.9 0 -43.9L0 0Z"
              fill="#fbae3c"
            ></path>
          </g>
          <g transform="translate(0, 0)" className="float-animation-delayed">
            <path
              d="M351.5 0C337.4 41 323.2 81.9 309.5 128.2C295.8 174.5 282.6 226 248.6 248.6C214.6 271.2 159.7 264.8 114.8 277.2C69.9 289.5 35 320.5 0 351.5L0 0Z"
              fill="#0c1c30"
            ></path>
            <path
              d="M307.6 0C295.2 35.9 282.8 71.7 270.8 112.2C258.8 152.6 247.3 197.7 217.5 217.5C187.7 237.3 139.7 231.7 100.5 242.5C61.2 253.3 30.6 280.5 0 307.6L0 0Z"
              fill="#312c4f"
            ></path>
            <path
              d="M263.7 0C253 30.7 242.4 61.5 232.1 96.1C221.9 130.8 212 169.5 186.4 186.4C160.9 203.4 119.8 198.6 86.1 207.9C52.4 217.1 26.2 240.4 0 263.7L0 0Z"
              fill="#623965"
            ></path>
            <path
              d="M219.7 0C210.9 25.6 202 51.2 193.4 80.1C184.9 109 176.6 141.2 155.4 155.4C134.1 169.5 99.8 165.5 71.8 173.2C43.7 180.9 21.8 200.3 0 219.7L0 0Z"
              fill="#96446e"
            ></path>
            <path
              d="M175.8 0C168.7 20.5 161.6 41 154.7 64.1C147.9 87.2 141.3 113 124.3 124.3C107.3 135.6 79.9 132.4 57.4 138.6C35 144.8 17.5 160.3 0 175.8L0 0Z"
              fill="#c55469"
            ></path>
            <path
              d="M131.8 0C126.5 15.4 121.2 30.7 116.1 48.1C110.9 65.4 106 84.7 93.2 93.2C80.5 101.7 59.9 99.3 43.1 103.9C26.2 108.6 13.1 120.2 0 131.8L0 0Z"
              fill="#e9705a"
            ></path>
            <path
              d="M87.9 0C84.3 10.2 80.8 20.5 77.4 32C74 43.6 70.7 56.5 62.1 62.1C53.6 67.8 39.9 66.2 28.7 69.3C17.5 72.4 8.7 80.1 0 87.9L0 0Z"
              fill="#fa9845"
            ></path>
            <path
              d="M43.9 0C42.2 5.1 40.4 10.2 38.7 16C37 21.8 35.3 28.2 31.1 31.1C26.8 33.9 20 33.1 14.4 34.6C8.7 36.2 4.4 40.1 0 43.9L0 0Z"
              fill="#fbae3c"
            ></path>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl relative z-10 mx-auto text-center flex flex-col items-center justify-center py-24 sm:py-32 lg:py-40">
        <div className="mt-20">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light mb-6 leading-tight text-white">
            Hello, I'm{" "}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-base w-full font-code sm:text-xl lg:text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 font-code justify-center mb-12 w-full">
          <Button onClick={() => scrollToSection("featured-work")} variant="primary" className="w-full sm:w-auto">
            View My Work
          </Button>
          <Button onClick={() => scrollToSection("contact")} variant="outline" className="w-full sm:w-auto">
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown
            size={32}
            className="mx-auto text-white cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
