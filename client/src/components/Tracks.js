import React, { useState } from "react";
import "../css/Tracks.css";
import aiHover from "../images/tracks/ai-hover.png";
import ai from "../images/tracks/ai.png";
import cloudHover from "../images/tracks/cloud-hover.png";
import cloud from "../images/tracks/cloud.png";
import healthHover from "../images/tracks/health-hover.png";
import health from "../images/tracks/health.png";
import iot from "../images/tracks/iot.png";
import iotHover from "../images/tracks/iot-hover.png";
import ml from "../images/tracks/ml.png";
import mlHover from "../images/tracks/ml-hover.png";
import vr from "../images/tracks/vr.png";
import vrHover from "../images/tracks/vr-hover.png";

export default function Tracks() {
  const [isAiHover, setIsAiHover] = useState(false);
  const [isCloudHover, setIsCloudHover] = useState(false);
  const [isHealthHover, setIsHealthHover] = useState(false);
  const [isIotHover, setIsIotHover] = useState(false);
  const [isMlHover, setIsMlHover] = useState(false);
  const [isVrHover, setIsVrHover] = useState(false);

  return (
    <div className="tracks">
      <h1>Tracks</h1>

      <div>
        <img
          src={isHealthHover ? healthHover : health}
          onMouseOver={() => setIsHealthHover(true)}
          onMouseOut={() => setIsHealthHover(false)}
          alt=""
        />
        <p>Health</p>
      </div>

      <div>
        <img
          src={isVrHover ? vrHover : vr}
          alt=""
          onMouseOver={() => setIsVrHover(true)}
          onMouseOut={() => setIsVrHover(false)}
        />
        <p>Virtual Reality</p>
      </div>

      <div>
        <img
          src={isCloudHover ? cloudHover : cloud}
          alt=""
          onMouseOver={() => setIsCloudHover(true)}
          onMouseOut={() => setIsCloudHover(false)}
        />
        <p>Cloud Computing</p>
      </div>

      <br />
      <div>
        <img
          src={isIotHover ? iotHover : iot}
          alt=""
          onMouseOver={() => setIsIotHover(true)}
          onMouseOut={() => setIsIotHover(false)}
        />
        <p>Internet of Things</p>
      </div>

      <div>
        <img
          src={isMlHover ? mlHover : ml}
          alt=""
          onMouseOver={() => setIsMlHover(true)}
          onMouseOut={() => setIsMlHover(false)}
        />
        <p>Machine Learning</p>
      </div>

      <div>
        <img
          src={isAiHover ? aiHover : ai}
          alt=""
          onMouseOver={() => setIsAiHover(true)}
          onMouseOut={() => setIsAiHover(false)}
        />
        <p>Artificial Intelligence</p>
      </div>
    </div>
  );
}
