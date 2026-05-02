"use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Watch for theme changes
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light" || "dark";
      setTheme(currentTheme);
    };
    
    updateTheme();
    
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Create nodes
    const nodeCount = 50;
    const nodes: Node[] = [];
    const maxDistance = 150;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    // Colors based on theme
    const getColors = () => {
      if (theme === "light") {
        return {
          node: "#E91E63",
          line: "rgba(233, 30, 99, ",
        };
      }
      return {
        node: "#FF6B9D",
        line: "rgba(255, 107, 157, ",
      };
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getColors();

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = colors.node;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = `${colors.line}${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="network-canvas" />;
}
