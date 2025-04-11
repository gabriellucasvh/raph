"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CommandExamples from "@/components/CommandExamples";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";

export default function PageComponents() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Make sure framer-motion animations are properly reset when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-neutral-900">
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-yellow z-50 origin-left"
                style={{ scaleX }}
            />

            <Navbar />

            <main className="flex-1">
                <Hero />
                <Features />
                <CommandExamples />
                <Demo />
            </main>

            <Footer />
        </div>
    );
};