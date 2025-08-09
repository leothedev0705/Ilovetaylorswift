"use client"

import React, { useRef, useLayoutEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import BaysideSportsImg from '../../assets/Projects/Bayside_Sports.png';

function Image({ id, image, title }) {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const [imgHeight, setImgHeight] = useState(0);
    const [textHeight, setTextHeight] = useState(0);

    // Get scroll progress for this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    useLayoutEffect(() => {
        if (imgRef.current) setImgHeight(imgRef.current.offsetHeight);
        if (textRef.current) setTextHeight(textRef.current.offsetHeight);
    }, []);

    // Map scroll progress to text position: from top of image to bottom
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [0, Math.max(0, imgHeight - textHeight)]
    );

    return (
        <section className="img-container" ref={containerRef}>
            <div style={{ position: 'relative' }}>
                <img
                    ref={imgRef}
                    src={image}
                    alt={`${title} Project`}
                />
                <motion.h2
                    ref={textRef}
                    style={{
                        y,
                        background: "linear-gradient(90deg, #FFFFFF 0%, #D770D7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent"
                    }}
                    className="text-6xl lg:text-8xl font-medium absolute drop-shadow-lg overlay-title whitespace-nowrap"
                >
                    {title}
                </motion.h2>
            </div>
        </section>
    )
}

const Projects = () => {
    const projects = [
        { id: 1, image: BaysideSportsImg, title: "Bayside Sports" },
        { id: 2, image: BaysideSportsImg, title: "Fluxurous Tech" }
    ];

    return (
        <div id="example" className="bg-black relative">
            {/* Vertical Lines Background Pattern */}
            <div className="absolute inset-0 opacity-40">
                <div className="h-full w-full" style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(165, 165, 165, 0.5) 1px, transparent 1px)',
                    backgroundSize: '20px 1px',
                    backgroundPosition: '16px 0'
                }}></div>
            </div>
            
            {/* Header Section */}
            <div className="text-center py-20 relative z-10">
                <h1
                    className="inline-block text-5xl lg:text-6xl font-medium mb-4"
                    style={{
                        background: "linear-gradient(90deg, #FFFFFF 0%, #D770D7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent"
                    }}
                >
                    My Projects
                </h1>
                <p className="text-white text-lg lg:text-xl">
                    Some Subtitle
                </p>
            </div>
            
            {projects.map((project) => (
                <Image key={project.id} id={project.id} image={project.image} title={project.title} />
            ))}
            <StyleSheet />
        </div>
    )
}

function StyleSheet() {
    return (
        <style>{`
        .img-container {
            display: block;
            position: relative;
            min-height: unset;
            height: auto;
            margin-bottom: 8rem;
        }
        .img-container > div {
            width: 800px;
            height: auto;
            margin: 0 auto;
            overflow: visible;
            position: relative;
        }
        .img-container img {
            width: 800px;
            height: auto;
        }
        .overlay-title {
            top: 0;
            left: -150px;
            text-align: left;
            pointer-events: none;
        }
        @media (max-width: 500px) {
            .img-container > div {
                width: 350px;
            }
            .img-container img {
                width: 350px;
            }
        }
    `}</style>
    )
}

export default Projects;
