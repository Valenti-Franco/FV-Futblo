"use client";
import React, { Children, Suspense, useRef } from "react";
import style from "./index.module.css";
// import ImagenConMousemove from "@/escudos/ImagenConMousemove";
// import ImagenConMousemove from "../escudos/ImagenConMousemove";
import { Canvas, useThree } from "react-three-fiber";

import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import json from "../../../public/info.json";
import { motion } from "framer-motion";

// import Experience from "../Experience";

import Experience from "@/app/Experience";
import { useState } from "react";
import Interface from "@/app/Interface";
// import ScrollManager from "../ScrollManager";
import ScrollManager from "@/app/ScrollManager";
import Link from "next/link";
import { useParams } from "next/navigation";
// import { Link } from "react-router-dom";

const Cancha = () => {
  const Escudo = useParams();
  const [section, setSection] = useState(0);
  const cameraRef = useRef();
  // const { gl } = useThree();
  const [enableControls, setEnableControls] = useState(false);
  const [noText, setNoText] = useState(false);
  const equipoInfo = json.equipos.find((equipo) => equipo.nombre === Escudo.id);
  const background = `-webkit-radial-gradient(center center,rgb(255 255 255 / 100%), ${equipoInfo.coloresPrincipales[0]}, ${equipoInfo.coloresPrincipales[1]},#000000)`;
  return (
    <motion.body
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
      }}
      className={style.CanchaContainer}
      style={{ background: background }}
    >
      {/* <div
        key={"container" + Escudo.id}
        id={"container" + Escudo.id}
        // className={style.Escudos}
      ></div> */}
      <div style={{ width: "100%", height: "100vh" }}>
        <Canvas camera={{ zoom: 0.1, position: [25, 10, 5] }}>
          <ambientLight color={"#fffff"} intensity={2.5} />

          <ScrollControls pages={3}>
            {Escudo.id !== "Newells" ? (
              <>
                <directionalLight position={[-10, 10, 10]} intensity={4.5} />
                <directionalLight position={[10, -10, -10]} intensity={2.5} />
                <directionalLight position={[-10, 10, 10]} intensity={4.5} />
                <directionalLight position={[10, -10, -10]} intensity={2.5} />
                <directionalLight position={[-10, 10, 10]} intensity={4.5} />
                <directionalLight position={[10, -10, -10]} intensity={2.5} />
              </>
            ) : (
              <>
                {/* <directionalLight position={[-10, 10, 10]} intensity={4.5} /> */}
              </>
            )}

            <Suspense fallback={null}>
              <Experience
                section={section}
                setSection={setSection}
                Escudo={Escudo}
                enableControls={enableControls}
                setEnableControls={setEnableControls}
              />
            </Suspense>
            <Scroll html></Scroll>
          </ScrollControls>
        </Canvas>
      </div>
      <Interface
        noText={noText}
        section={section}
        setSection={setSection}
        Escudo={Escudo}
        className={style.menu}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={style.menu}
      >
        <Link className={style.button} href={`/`}>
          <svg
            height="34px"
            width="34px"
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#fff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>home [#1391]</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-419.000000, -720.000000)"
                  fill="#fff"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M379.79996,578 L376.649968,578 L376.649968,574 L370.349983,574 L370.349983,578 L367.19999,578 L367.19999,568.813 L373.489475,562.823 L379.79996,568.832 L379.79996,578 Z M381.899955,568.004 L381.899955,568 L381.899955,568 L373.502075,560 L363,569.992 L364.481546,571.406 L365.099995,570.813 L365.099995,580 L372.449978,580 L372.449978,576 L374.549973,576 L374.549973,580 L381.899955,580 L381.899955,579.997 L381.899955,570.832 L382.514204,571.416 L384.001,570.002 L381.899955,568.004 Z"
                      id="home-[#1391]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </Link>
        <button
          className={style.button}
          onClick={() => setEnableControls(!enableControls)}
        >
          <svg
            fill="#fff"
            height="34px"
            width="34px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512.853 512.853"
            xmlSpace="preserve"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="16.411296"
            >
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <circle cx="256" cy="414.293" r="17.067"></circle>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M503.467,47.36H460.8V32.853c0-11.093-8.533-19.627-19.627-19.627h-11.947c-11.093,0-19.627,8.533-19.627,19.627V47.36 h-42.667c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533H409.6v14.507c0,10.24,7.68,17.92,17.067,19.627v27.307 c-10.24,3.413-17.067,12.8-17.067,23.893v29.867l-51.2,38.4v-7.68c0-10.24-7.68-17.92-17.92-17.92H281.6V149.76 c0-5.12-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533v42.667h-17.067v-25.6c0-5.12-3.413-8.533-8.533-8.533 s-8.533,3.413-8.533,8.533v25.6h-58.88c-10.24,0-17.92,7.68-17.92,17.92v7.68l-51.2-38.4V149.76 c0-11.093-6.827-20.48-17.067-23.893V98.56c9.387-0.853,17.067-9.387,17.067-19.627V64.427h42.667c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533H102.4V32.853c0-11.093-8.533-19.627-19.627-19.627H70.827c-11.093,0-19.627,8.533-19.627,19.627V47.36 H8.533C3.413,47.36,0,50.773,0,55.893s3.413,8.533,8.533,8.533H51.2v14.507c0,10.24,7.68,17.92,17.067,19.627v27.307 c-10.24,3.413-17.067,12.8-17.067,23.893v136.533c0,14.507,11.093,25.6,25.6,25.6s25.6-11.093,25.6-25.6v-32.427l43.52,37.547 c-31.573,20.48-65.707,90.453-69.12,148.48H128c4.267-63.147,55.467-110.933,76.8-110.933h17.067v17.067h-18.773 c-8.533,0-15.36,6.827-15.36,15.36v106.667c0,8.533,6.827,15.36,15.36,15.36H309.76c8.533,0,15.36-6.827,15.36-15.36V361.387 c0-8.533-6.827-15.36-15.36-15.36h-19.627V328.96H307.2c21.333,0,71.68,47.787,76.8,110.933h51.2 c-3.413-58.027-36.693-128-68.267-148.48l43.52-37.547v32.427c0,14.507,11.093,25.6,25.6,25.6s25.6-11.093,25.6-25.6V149.76 c0-11.093-6.827-20.48-17.067-23.893V98.56c9.387-0.853,17.067-9.387,17.067-19.627V64.427h42.667c5.12,0,8.533-3.413,8.533-8.533 C512,50.773,508.587,47.36,503.467,47.36z M68.267,32.853c0-1.707,0.853-2.56,2.56-2.56h11.947c1.707,0,2.56,0.853,2.56,2.56 V47.36H68.267V32.853z M82.773,81.493H70.827c-1.707,0-2.56-0.853-2.56-2.56V64.427h17.067v14.507 C85.333,80.64,84.48,81.493,82.773,81.493z M153.6,276.053l-51.2-44.373v-30.72l51.2,38.4V276.053z M221.867,235.093h68.267 c5.12,0,8.533,3.413,8.533,8.533s-3.413,8.533-8.533,8.533h-68.267c-5.12,0-8.533-3.413-8.533-8.533 S216.747,235.093,221.867,235.093z M256,448.427c-18.773,0-34.133-15.36-34.133-34.133c0-18.773,15.36-34.133,34.133-34.133 c18.773,0,34.133,15.36,34.133,34.133C290.133,433.067,274.773,448.427,256,448.427z M238.933,346.027V328.96h34.133v17.067 H238.933z M315.733,286.293H196.267c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h119.467 c5.12,0,8.533,3.413,8.533,8.533S320.853,286.293,315.733,286.293z M409.6,230.827L358.4,275.2v-36.693l51.2-38.4V230.827z M443.733,78.933c0,1.707-0.853,2.56-2.56,2.56h-11.947c-1.707,0-2.56-0.853-2.56-2.56V64.427h17.067V78.933z M443.733,47.36 h-17.067V32.853c0-1.707,0.853-2.56,2.56-2.56h11.947c1.707,0,2.56,0.853,2.56,2.56V47.36z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M384,456.96V480c0,11.093,8.533,19.627,19.627,19.627h11.947c11.093,0,19.627-8.533,19.627-19.627v-23.04H384z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M76.8,456.96V480c0,11.093,8.533,19.627,19.627,19.627h11.947c11.093,0,19.627-8.533,19.627-19.627v-23.04H76.8z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <circle cx="256" cy="414.293" r="17.067"></circle>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M503.467,47.36H460.8V32.853c0-11.093-8.533-19.627-19.627-19.627h-11.947c-11.093,0-19.627,8.533-19.627,19.627V47.36 h-42.667c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533H409.6v14.507c0,10.24,7.68,17.92,17.067,19.627v27.307 c-10.24,3.413-17.067,12.8-17.067,23.893v29.867l-51.2,38.4v-7.68c0-10.24-7.68-17.92-17.92-17.92H281.6V149.76 c0-5.12-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533v42.667h-17.067v-25.6c0-5.12-3.413-8.533-8.533-8.533 s-8.533,3.413-8.533,8.533v25.6h-58.88c-10.24,0-17.92,7.68-17.92,17.92v7.68l-51.2-38.4V149.76 c0-11.093-6.827-20.48-17.067-23.893V98.56c9.387-0.853,17.067-9.387,17.067-19.627V64.427h42.667c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533H102.4V32.853c0-11.093-8.533-19.627-19.627-19.627H70.827c-11.093,0-19.627,8.533-19.627,19.627V47.36 H8.533C3.413,47.36,0,50.773,0,55.893s3.413,8.533,8.533,8.533H51.2v14.507c0,10.24,7.68,17.92,17.067,19.627v27.307 c-10.24,3.413-17.067,12.8-17.067,23.893v136.533c0,14.507,11.093,25.6,25.6,25.6s25.6-11.093,25.6-25.6v-32.427l43.52,37.547 c-31.573,20.48-65.707,90.453-69.12,148.48H128c4.267-63.147,55.467-110.933,76.8-110.933h17.067v17.067h-18.773 c-8.533,0-15.36,6.827-15.36,15.36v106.667c0,8.533,6.827,15.36,15.36,15.36H309.76c8.533,0,15.36-6.827,15.36-15.36V361.387 c0-8.533-6.827-15.36-15.36-15.36h-19.627V328.96H307.2c21.333,0,71.68,47.787,76.8,110.933h51.2 c-3.413-58.027-36.693-128-68.267-148.48l43.52-37.547v32.427c0,14.507,11.093,25.6,25.6,25.6s25.6-11.093,25.6-25.6V149.76 c0-11.093-6.827-20.48-17.067-23.893V98.56c9.387-0.853,17.067-9.387,17.067-19.627V64.427h42.667c5.12,0,8.533-3.413,8.533-8.533 C512,50.773,508.587,47.36,503.467,47.36z M68.267,32.853c0-1.707,0.853-2.56,2.56-2.56h11.947c1.707,0,2.56,0.853,2.56,2.56 V47.36H68.267V32.853z M82.773,81.493H70.827c-1.707,0-2.56-0.853-2.56-2.56V64.427h17.067v14.507 C85.333,80.64,84.48,81.493,82.773,81.493z M153.6,276.053l-51.2-44.373v-30.72l51.2,38.4V276.053z M221.867,235.093h68.267 c5.12,0,8.533,3.413,8.533,8.533s-3.413,8.533-8.533,8.533h-68.267c-5.12,0-8.533-3.413-8.533-8.533 S216.747,235.093,221.867,235.093z M256,448.427c-18.773,0-34.133-15.36-34.133-34.133c0-18.773,15.36-34.133,34.133-34.133 c18.773,0,34.133,15.36,34.133,34.133C290.133,433.067,274.773,448.427,256,448.427z M238.933,346.027V328.96h34.133v17.067 H238.933z M315.733,286.293H196.267c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h119.467 c5.12,0,8.533,3.413,8.533,8.533S320.853,286.293,315.733,286.293z M409.6,230.827L358.4,275.2v-36.693l51.2-38.4V230.827z M443.733,78.933c0,1.707-0.853,2.56-2.56,2.56h-11.947c-1.707,0-2.56-0.853-2.56-2.56V64.427h17.067V78.933z M443.733,47.36 h-17.067V32.853c0-1.707,0.853-2.56,2.56-2.56h11.947c1.707,0,2.56,0.853,2.56,2.56V47.36z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M384,456.96V480c0,11.093,8.533,19.627,19.627,19.627h11.947c11.093,0,19.627-8.533,19.627-19.627v-23.04H384z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M76.8,456.96V480c0,11.093,8.533,19.627,19.627,19.627h11.947c11.093,0,19.627-8.533,19.627-19.627v-23.04H76.8z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <button className={style.button} onClick={() => setNoText(!noText)}>
          {!noText ? (
            <svg
              fill="#fff"
              height="34px"
              width="34px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 415.506 415.506"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>

              <>
                {" "}
                {/* <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5.63605 5.63603L18.364 18.364M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg> */}
              </>

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M383.272,110.52l0.002-0.646l-3.484-0.011l-0.086,27.448c-8.281-6.856-17.703-12.51-26.766-17.017 c-23.309-11.592-48.772-18.684-74.508-23.022l0.041-13.047c12.619-10.885,23.938,5.021,32.303-10.692 c-19.652,0.258-15.338-11.771-32.234-10.734l0.002-0.646l-3.484-0.011l-0.109,34.548c-6.285-0.999-12.58-1.838-18.861-2.541 c-35.063-3.924-70.861-3.619-105.82,1.212c-3.229,0.446-6.465,0.94-9.705,1.463l-0.109-34.682l-3.484,0.011l0.002,0.646 c-16.897-1.037-12.582,10.993-32.234,10.734c8.363,15.713,19.684-0.193,32.301,10.692l0.043,13.168 c-29.039,4.941-58.164,13.233-83.584,28.047c-5.867,3.419-11.984,7.537-17.688,12.285l-0.088-27.863l-3.484,0.011l0.002,0.646 C15.338,109.481,19.654,121.512,0,121.254c8.367,15.712,19.685-0.192,32.303,10.693l0.029,8.801 c-12.324,11.22-21.863,25.568-21.074,42.402c0.912,19.49,12.287,34.646,26.885,46.248v27.828c-5.445-4.65-9.631-9.446-12.393-13.967 c-1.525-2.488-2.686-4.849-3.545-6.978c-0.828-2.137-1.412-4.026-1.752-5.592c-0.346-1.563-0.578-2.787-0.672-3.617 c-0.111-0.833-0.168-1.263-0.168-1.263s-0.033,0.433-0.096,1.271c-0.072,0.841-0.129,2.098-0.059,3.742 c0.156,3.262,0.719,8.221,3.197,14.016c1.211,2.896,2.832,6.002,4.924,9.176c2.078,3.184,4.682,6.381,7.674,9.584 c0.918,0.976,1.891,1.945,2.889,2.91v25.319c-5.445-4.65-9.631-9.445-12.393-13.966c-1.525-2.488-2.686-4.849-3.545-6.978 c-0.828-2.136-1.412-4.026-1.752-5.592c-0.346-1.563-0.578-2.788-0.672-3.617c-0.111-0.833-0.168-1.263-0.168-1.263 s-0.033,0.433-0.096,1.271c-0.072,0.841-0.129,2.098-0.059,3.742c0.156,3.262,0.719,8.22,3.199,14.016 c1.211,2.895,2.832,6.001,4.924,9.176c2.078,3.184,4.682,6.38,7.674,9.583c0.918,0.975,1.889,1.943,2.887,2.908l0.74,0.701 c5.4,5.107,11.889,10.04,19.26,14.613c4.549,2.825,9.438,5.5,14.594,8.053c5.16,2.543,10.615,4.894,16.285,7.137 c11.363,4.416,23.65,8.211,36.555,11.218c6.445,1.538,13.053,2.835,19.764,3.979c0.332,0.057,0.666,0.107,0.998,0.163l1.918,6.39 l4.053-1.216l4.051-1.216l-14.377-47.884c44.209-11.229,87.334-11.229,131.541,0l-14.377,47.883l4.053,1.217l4.051,1.217 l1.918-6.389c0.332-0.056,0.668-0.107,0.998-0.164c6.713-1.144,13.32-2.442,19.766-3.979c12.902-3.007,25.191-6.802,36.555-11.218 c5.668-2.243,11.125-4.594,16.285-7.137c5.154-2.553,10.045-5.228,14.592-8.053c7.371-4.573,13.859-9.506,19.262-14.613l0.74-0.701 c0.998-0.964,1.969-1.933,2.885-2.908c6.031-6.369,10.244-12.928,12.615-18.751c2.439-5.813,3.068-10.751,3.188-14.023 c0.063-1.648,0.012-2.912-0.063-3.743c-0.063-0.838-0.096-1.271-0.096-1.271s-0.059,0.43-0.17,1.263 c-0.096,0.84-0.322,2.057-0.676,3.616c-0.348,1.564-0.939,3.451-1.758,5.59c-0.846,2.132-2.012,4.492-3.551,6.972 c-1.555,2.471-3.467,5.074-5.824,7.667c-1.926,2.099-4.109,4.223-6.551,6.309v-25.321c0.998-0.965,1.971-1.934,2.887-2.91 c6.029-6.369,10.244-12.929,12.613-18.752c2.439-5.813,3.068-10.751,3.188-14.023c0.063-1.648,0.012-2.913-0.063-3.743 c-0.063-0.838-0.096-1.271-0.096-1.271s-0.059,0.43-0.17,1.263c-0.096,0.84-0.322,2.057-0.676,3.616 c-0.348,1.565-0.939,3.451-1.756,5.59c-0.846,2.132-2.012,4.492-3.551,6.972c-1.557,2.471-3.467,5.074-5.824,7.667 c-1.926,2.1-4.111,4.224-6.553,6.31V229.77c14.756-11.677,26.125-26.96,27.268-46.711c-0.061-17.35-9.113-31.51-21.455-42.729 l0.025-8.384c12.619-10.885,23.938,5.019,32.303-10.693C395.852,121.512,400.168,109.481,383.272,110.52z M280.027,114.548 c16.605,3.143,32.943,7.585,48.641,13.701c14,5.455,31.211,13.355,43.342,24.885l-66.66,41.398 c-13.203-10.172-34.381-18.08-59.785-22.076L280.027,114.548z M229.93,108.653c13.213,0.727,26.494,2.042,39.658,4.104 l-34.686,58.282c-8.693-0.95-17.787-1.458-27.148-1.458c-9.363,0-18.455,0.507-27.15,1.458l-34.693-58.297 C173.648,108.351,201.9,107.111,229.93,108.653z M55.637,143.732c23.703-15.661,52.072-24.007,79.842-29.186l34.463,57.909 c-25.404,3.997-46.582,11.904-59.785,22.076l-66.695-41.421C47.25,149.625,51.412,146.522,55.637,143.732z M85.145,316.543 c-7.936-2.711-15.35-5.71-22.109-8.982c-4.535-2.154-8.732-4.49-12.617-6.872c-0.814-0.498-1.605-1.004-2.389-1.513v-24.268 c3.15,2.375,6.525,4.688,10.111,6.914c4.549,2.825,9.439,5.5,14.594,8.053c3.973,1.958,8.123,3.801,12.41,5.569V316.543z M85.145,281.943c-7.936-2.711-15.352-5.711-22.111-8.983c-4.535-2.154-8.73-4.49-12.615-6.872 c-0.816-0.497-1.605-1.004-2.389-1.513v-28.113c3.461,2.231,7,4.297,10.545,6.205c8.537,4.595,17.439,8.505,26.57,11.873V281.943z M76.422,232.545c-13.803-6.317-27.742-14.164-37.881-25.706c-4.895-5.57-11.996-16.036-10.539-24.222 c0.709-3.98,1.832-10.702,4.355-15.745c1.236-2.247,2.668-4.369,4.242-6.385l66.076,41.036c-4.676,5.438-7.244,11.331-7.244,17.49 c0,9.679,6.328,18.706,17.252,26.33C100.236,242.043,88.055,237.868,76.422,232.545z M128.746,327.655 c-11.809-2.156-23.133-4.828-33.715-7.97v-20.436c9.649,3.467,19.881,6.496,30.543,8.981c3.219,0.768,6.479,1.476,9.771,2.135 l5.803,19.328C136.967,329.063,132.828,328.379,128.746,327.655z M320.477,319.685c-10.582,3.143-21.906,5.814-33.717,7.97 c-4.08,0.724-8.221,1.408-12.402,2.039l5.803-19.328c3.293-0.659,6.553-1.367,9.772-2.135c10.664-2.485,20.896-5.515,30.545-8.981 V319.685z M320.477,285.085c-10.582,3.142-21.906,5.814-33.715,7.97c-3.631,0.644-7.309,1.256-11.021,1.828 c-45.701-11.633-90.273-11.633-135.975,0c-3.711-0.572-7.389-1.184-11.02-1.828c-11.811-2.155-23.133-4.828-33.715-7.97v-27.131 c20.076,6.438,41.053,10.423,61.723,12.957c34.283,4.202,69.221,4.148,103.496-0.104c20.242-2.512,40.645-6.456,60.227-12.713 V285.085z M367.478,299.177c-0.783,0.509-1.574,1.015-2.391,1.513c-3.885,2.382-8.08,4.717-12.615,6.872 c-6.76,3.271-14.176,6.27-22.109,8.982v-21.099c4.285-1.769,8.438-3.611,12.41-5.569c5.154-2.552,10.045-5.228,14.592-8.053 c3.588-2.226,6.963-4.54,10.113-6.914V299.177z M367.478,264.575c-0.783,0.509-1.574,1.016-2.389,1.513 c-3.885,2.382-8.08,4.717-12.615,6.872c-6.76,3.272-14.176,6.272-22.111,8.983V254.69c8.365-3.068,16.555-6.584,24.469-10.653 c4.268-2.193,8.52-4.607,12.646-7.247V264.575z M387.141,182.557c-0.145,15.047-13.639,29.256-26.842,38.099 c-17.16,11.493-36.879,19.13-57.113,24.43c10.701-7.569,16.889-16.503,16.889-26.074c0-6.158-2.566-12.052-7.242-17.49 l65.863-40.903C383.428,166.971,386.568,174.235,387.141,182.557z"></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
              fill="#fff"
              viewBox="0 0 1920 1920"
              height="34px"
              width="34px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1664 1600v256H0v-256h1664Zm256-384.128V1472H0v-256.128h1920ZM1664 832v256H0V832h1664Zm256-384v256H0V448h1920ZM1664 63.872V320H0V63.872h1664Z"
                  fill-rule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          )}
        </button>
      </motion.div>
    </motion.body>
  );
};

export default Cancha;
