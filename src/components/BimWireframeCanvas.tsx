import React, { useEffect, useRef, useState } from 'react';
import { Layers, Activity, Play, Pause, Eye, RotateCw, Cpu, Sparkles } from 'lucide-react';

type BimMode = 'timelapse' | 'pointcloud' | 'mep';

export const BimWireframeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMode, setActiveMode] = useState<BimMode>('timelapse');
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0.42, y: 0.68 });
  const [buildProgress, setBuildProgress] = useState<number>(0); // 0 to 1
  const [stageName, setStageName] = useState<string>('STAGE 01: FOUNDATION');

  const animationTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let currentAngleY = rotation.y;
    let currentAngleX = rotation.x;

    const render = () => {
      // Advance time unless paused
      if (!isPaused) {
        animationTimeRef.current += 0.015;
      }

      const t = animationTimeRef.current;
      const loopDuration = 10; // 10 seconds per build loop
      const progress = (t % loopDuration) / loopDuration; // 0 to 1
      setBuildProgress(progress);

      // Determine current construction stage name
      if (progress < 0.2) {
        setStageName('STAGE 01: SITE & FOUNDATION');
      } else if (progress < 0.45) {
        setStageName('STAGE 02: STRUCTURAL STEEL FRAMING');
      } else if (progress < 0.7) {
        setStageName('STAGE 03: GLASS FACADE & ENCLOSURE');
      } else if (progress < 0.9) {
        setStageName('STAGE 04: MEP SYSTEMS COORDINATION');
      } else {
        setStageName('STAGE 05: LOD 400 BIM COMPLETE');
      }

      if (isHovered) {
        currentAngleY = rotation.y;
        currentAngleX = rotation.x;
      } else {
        currentAngleY += 0.003;
      }

      const isDarkMode = document.documentElement.classList.contains('dark');

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2 + 20;
      const scale = 1.1;

      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      // Helper 3D projection
      const project3D = (x: number, y: number, z: number) => {
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const fov = 420;
        const distance = 460;
        const pScale = fov / (distance + z2);
        return {
          x: cx + x1 * pScale * scale,
          y: cy + y2 * pScale * scale,
          z: z2,
        };
      };

      // -------------------------------------------------------------
      // 1. DRAW SWAYING TREES & LANDSCAPE (GREENERY)
      // -------------------------------------------------------------
      const drawSwayingTree = (
        baseX: number,
        baseY: number,
        baseZ: number,
        treeHeight: number,
        windPhase: number,
        foliageColor: string,
        trunkColor: string
      ) => {
        const trunkBase = project3D(baseX, baseY, baseZ);
        const windSway = Math.sin(t * 2.2 + windPhase) * 6;
        const trunkTop = project3D(baseX + windSway * 0.4, baseY - treeHeight, baseZ);

        // Trunk
        ctx.beginPath();
        ctx.moveTo(trunkBase.x, trunkBase.y);
        ctx.lineTo(trunkTop.x, trunkTop.y);
        ctx.strokeStyle = trunkColor;
        ctx.lineWidth = Math.max(1, 3.5 * (400 / (460 + trunkBase.z)));
        ctx.stroke();

        // Swaying Foliage Clusters (3 overlapping circles)
        const levels = [0.4, 0.7, 1.0];
        levels.forEach((lvl, idx) => {
          const swayLevel = windSway * (0.5 + idx * 0.3);
          const folCenter = project3D(
            baseX + swayLevel,
            baseY - treeHeight * lvl,
            baseZ
          );
          const radius = (treeHeight * 0.28 * (1.2 - idx * 0.25)) * (400 / (460 + folCenter.z));

          ctx.beginPath();
          ctx.arc(folCenter.x, folCenter.y, Math.max(3, radius), 0, Math.PI * 2);
          ctx.fillStyle = foliageColor;
          ctx.fill();
          ctx.strokeStyle = isDarkMode ? 'rgba(16,185,129,0.3)' : 'rgba(5,150,105,0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      };

      // Draw landscape grass terrain line
      const tGridLeft = project3D(-160, 20, -120);
      const tGridRight = project3D(160, 20, -120);
      const tGridFront = project3D(160, 20, 120);
      const tGridBack = project3D(-160, 20, 120);

      ctx.beginPath();
      ctx.moveTo(tGridLeft.x, tGridLeft.y);
      ctx.lineTo(tGridRight.x, tGridRight.y);
      ctx.lineTo(tGridFront.x, tGridFront.y);
      ctx.lineTo(tGridBack.x, tGridBack.y);
      ctx.closePath();
      ctx.fillStyle = isDarkMode ? 'rgba(16, 185, 129, 0.05)' : 'rgba(5, 150, 105, 0.08)';
      ctx.fill();
      ctx.strokeStyle = isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(5, 150, 105, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Render trees positioned around the site
      const treeColor1 = isDarkMode ? 'rgba(16, 185, 129, 0.85)' : 'rgba(5, 150, 105, 0.9)';
      const treeColor2 = isDarkMode ? 'rgba(52, 211, 153, 0.85)' : 'rgba(16, 185, 129, 0.9)';
      const trunkColor = isDarkMode ? '#78350f' : '#92400e';

      drawSwayingTree(-135, 20, -70, 55, 0, treeColor1, trunkColor);
      drawSwayingTree(-120, 20, 40, 48, 1.2, treeColor2, trunkColor);
      drawSwayingTree(130, 20, -60, 58, 2.4, treeColor1, trunkColor);
      drawSwayingTree(125, 20, 50, 52, 3.8, treeColor2, trunkColor);
      drawSwayingTree(145, 20, -10, 42, 5.1, treeColor1, trunkColor);

      // -------------------------------------------------------------
      // 2. TIMELAPSE BUILDING GEOMETRY & PROGRESSIVE ASSEMBLY
      // -------------------------------------------------------------
      const bWidth = 135;
      const bDepth = 85;
      const bFloors = 5;
      const floorH = 30;
      const ox = -bWidth / 2;
      const oz = -bDepth / 2;

      // Foundation Slab (Appears at progress > 0.05)
      if (progress > 0.05) {
        const p1 = project3D(ox, 20, oz);
        const p2 = project3D(ox + bWidth, 20, oz);
        const p3 = project3D(ox + bWidth, 20, oz + bDepth);
        const p4 = project3D(ox, 20, oz + bDepth);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.closePath();
        ctx.fillStyle = isDarkMode ? 'rgba(6, 182, 212, 0.25)' : 'rgba(2, 132, 199, 0.2)';
        ctx.fill();
        ctx.strokeStyle = isDarkMode ? '#06b6d4' : '#0284c7';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Structural Columns & Floor Slabs (Assemble gradually from floor 0 to bFloors)
      const floorBuildStep = 0.25 / bFloors; // timing per floor

      for (let f = 0; f <= bFloors; f++) {
        const floorStartProgress = 0.12 + f * floorBuildStep;
        if (progress < floorStartProgress) continue;

        // Animation effect: slide up from floor below as it constructs
        const floorLocalProg = Math.min(1, (progress - floorStartProgress) / (floorBuildStep * 0.8));
        const currentY = 20 - (f - 1 + floorLocalProg) * floorH;

        // Draw Floor Slab Frame
        const p1 = project3D(ox, currentY, oz);
        const p2 = project3D(ox + bWidth, currentY, oz);
        const p3 = project3D(ox + bWidth, currentY, oz + bDepth);
        const p4 = project3D(ox, currentY, oz + bDepth);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.closePath();
        ctx.strokeStyle = isDarkMode ? '#38bdf8' : '#0284c7';
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Columns connecting to floor below
        if (f > 0) {
          const prevY = 20 - (f - 1) * floorH;
          const cornerPositions = [
            [ox, oz],
            [ox + bWidth, oz],
            [ox + bWidth, oz + bDepth],
            [ox, oz + bDepth],
            [ox + bWidth / 3, oz],
            [ox + (bWidth * 2) / 3, oz],
            [ox + bWidth / 3, oz + bDepth],
            [ox + (bWidth * 2) / 3, oz + bDepth],
          ];

          cornerPositions.forEach(([cxPos, czPos]) => {
            const bottomP = project3D(cxPos, prevY, czPos);
            const topP = project3D(cxPos, currentY, czPos);

            ctx.beginPath();
            ctx.moveTo(bottomP.x, bottomP.y);
            ctx.lineTo(topP.x, topP.y);
            ctx.strokeStyle = isDarkMode ? '#22d3ee' : '#0369a1';
            ctx.lineWidth = 2;
            ctx.stroke();
          });
        }
      }

      // Facade Glass & Exterior Enclosure (Appears at progress > 0.45)
      if (progress > 0.45) {
        const facadeAlpha = Math.min(0.85, (progress - 0.45) * 3);
        const topY = 20 - bFloors * floorH;

        // Front Glass Facade
        const f1 = project3D(ox, 20, oz + bDepth);
        const f2 = project3D(ox + bWidth, 20, oz + bDepth);
        const f3 = project3D(ox + bWidth, topY, oz + bDepth);
        const f4 = project3D(ox, topY, oz + bDepth);

        ctx.beginPath();
        ctx.moveTo(f1.x, f1.y);
        ctx.lineTo(f2.x, f2.y);
        ctx.lineTo(f3.x, f3.y);
        ctx.lineTo(f4.x, f4.y);
        ctx.closePath();
        ctx.fillStyle = isDarkMode
          ? `rgba(14, 165, 233, ${0.16 * facadeAlpha})`
          : `rgba(2, 132, 199, ${0.2 * facadeAlpha})`;
        ctx.fill();

        // Side Glass Facade (Right side)
        const s1 = project3D(ox + bWidth, 20, oz + bDepth);
        const s2 = project3D(ox + bWidth, 20, oz);
        const s3 = project3D(ox + bWidth, topY, oz);
        const s4 = project3D(ox + bWidth, topY, oz + bDepth);

        ctx.beginPath();
        ctx.moveTo(s1.x, s1.y);
        ctx.lineTo(s2.x, s2.y);
        ctx.lineTo(s3.x, s3.y);
        ctx.lineTo(s4.x, s4.y);
        ctx.closePath();
        ctx.fillStyle = isDarkMode
          ? `rgba(2, 132, 199, ${0.12 * facadeAlpha})`
          : `rgba(3, 105, 161, ${0.15 * facadeAlpha})`;
        ctx.fill();

        // Vertical Mullion Grid Lines on Front
        const mullions = 6;
        for (let m = 1; m < mullions; m++) {
          const mX = ox + (bWidth / mullions) * m;
          const mBottom = project3D(mX, 20, oz + bDepth);
          const mTop = project3D(mX, topY, oz + bDepth);

          ctx.beginPath();
          ctx.moveTo(mBottom.x, mBottom.y);
          ctx.lineTo(mTop.x, mTop.y);
          ctx.strokeStyle = isDarkMode ? 'rgba(56,189,248,0.45)' : 'rgba(2,132,199,0.55)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Vertical Mullion Grid Lines on Side
        const sideMullions = 4;
        for (let sm = 1; sm < sideMullions; sm++) {
          const smZ = oz + (bDepth / sideMullions) * sm;
          const smBottom = project3D(ox + bWidth, 20, smZ);
          const smTop = project3D(ox + bWidth, topY, smZ);

          ctx.beginPath();
          ctx.moveTo(smBottom.x, smBottom.y);
          ctx.lineTo(smTop.x, smTop.y);
          ctx.strokeStyle = isDarkMode ? 'rgba(56,189,248,0.35)' : 'rgba(2,132,199,0.45)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // MEP Systems Ducting & Piping (Appears at progress > 0.7)
      if (progress > 0.7 || activeMode === 'mep') {
        const mepAlpha = activeMode === 'mep' ? 1 : Math.min(1, (progress - 0.7) * 4);

        for (let f = 1; f < bFloors; f++) {
          const mepY = 20 - f * floorH + 12; // plenum
          const d1 = project3D(ox + 15, mepY, oz + 15);
          const d2 = project3D(ox + bWidth - 15, mepY, oz + 15);
          const d3 = project3D(ox + bWidth - 15, mepY, oz + bDepth - 15);

          // HVAC Duct Run (Amber)
          ctx.beginPath();
          ctx.moveTo(d1.x, d1.y);
          ctx.lineTo(d2.x, d2.y);
          ctx.strokeStyle = `rgba(245, 158, 11, ${mepAlpha})`;
          ctx.lineWidth = 3;
          ctx.stroke();

          // Piping Run (Rose)
          ctx.beginPath();
          ctx.moveTo(d2.x, d2.y);
          ctx.lineTo(d3.x, d3.y);
          ctx.strokeStyle = `rgba(225, 29, 72, ${mepAlpha})`;
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }
      }

      // Point Cloud Mode Scanning Dots overlay if active
      if (activeMode === 'pointcloud') {
        const dotCount = 450;
        for (let i = 0; i < dotCount; i++) {
          const dotX = (Math.sin(i * 17.1) * 0.5) * (bWidth + 30);
          const dotY = (Math.cos(i * 9.3) * 0.5) * (bFloors * floorH + 20) - 40;
          const dotZ = (Math.sin(i * 11.7) * 0.5) * (bDepth + 30);

          const pt = project3D(dotX, dotY, dotZ);
          ctx.fillStyle = '#22d3ee';
          ctx.fillRect(pt.x, pt.y, 2, 2);
        }
      }

      // -------------------------------------------------------------
      // 3. LASER SCANNING BEAM SWEEP
      // -------------------------------------------------------------
      const scanYVal = 20 - (progress * (bFloors * floorH + 30));
      const scanBeamLeft = project3D(-150, scanYVal, 0);
      const scanBeamRight = project3D(150, scanYVal, 0);

      ctx.beginPath();
      ctx.moveTo(scanBeamLeft.x, scanBeamLeft.y);
      ctx.lineTo(scanBeamRight.x, scanBeamRight.y);
      ctx.strokeStyle = isDarkMode ? '#22d3ee' : '#0891b2';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#22d3ee';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeMode, isHovered, isPaused, rotation]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({
      x: Math.max(-0.6, Math.min(1.1, 0.35 + relY * 0.9)),
      y: relX * Math.PI * 2.2,
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[460px] flex items-center justify-center rounded-sm bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xl overflow-hidden group hover:border-teal-500/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Background Radial Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-teal-500/10 dark:from-teal-500/10 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 dark:opacity-20 pointer-events-none" />

      {/* Top Status Bar Controls */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-auto">
        <div className="flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-teal-500/30 text-[10px] font-mono text-teal-300 shadow-sm">
          <Sparkles className="w-3 h-3 text-teal-400 animate-pulse" />
          <span className="font-bold tracking-wider">{stageName}</span>
        </div>

        {/* Layer View Switcher */}
        <div className="flex items-center gap-1 bg-slate-100/90 dark:bg-slate-950/80 p-0.5 rounded-sm border border-slate-200 dark:border-slate-800 text-[10px] font-mono shadow-sm">
          <button
            onClick={() => setActiveMode('timelapse')}
            className={`px-2 py-0.5 rounded-sm transition-all flex items-center gap-1 cursor-pointer ${
              activeMode === 'timelapse'
                ? 'bg-teal-600 text-white font-bold shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300'
            }`}
            title="3D Building Construction Assembly"
          >
            <Layers className="w-3 h-3" />
            <span>Timelapse</span>
          </button>

          <button
            onClick={() => setActiveMode('mep')}
            className={`px-2 py-0.5 rounded-sm transition-all flex items-center gap-1 cursor-pointer ${
              activeMode === 'mep'
                ? 'bg-teal-600 text-white font-bold shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300'
            }`}
            title="MEP Systems View"
          >
            <Activity className="w-3 h-3" />
            <span>MEP</span>
          </button>

          <button
            onClick={() => setActiveMode('pointcloud')}
            className={`px-2 py-0.5 rounded-sm transition-all flex items-center gap-1 cursor-pointer ${
              activeMode === 'pointcloud'
                ? 'bg-teal-600 text-white font-bold shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300'
            }`}
            title="Point Cloud Scan View"
          >
            <Eye className="w-3 h-3" />
            <span>Point Cloud</span>
          </button>
        </div>
      </div>

      {/* Main Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        width={480}
        height={420}
        className="w-full h-full max-w-[480px] max-h-[420px] object-contain cursor-crosshair z-0"
      />

      {/* Bottom Progress Bar & HUD Controls */}
      <div className="absolute bottom-2.5 left-3 right-3 flex flex-col gap-1.5 z-10 pointer-events-auto">
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 h-full transition-all duration-200"
            style={{ width: `${Math.round(buildProgress * 100)}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2 bg-slate-100/90 dark:bg-slate-950/80 px-2.5 py-0.5 rounded-sm border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="hover:text-teal-500 flex items-center gap-1 font-bold cursor-pointer"
            >
              {isPaused ? <Play className="w-3 h-3 text-teal-500" /> : <Pause className="w-3 h-3 text-teal-500" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
            <span className="text-slate-400">•</span>
            <span>{Math.round(buildProgress * 100)}% Assembly</span>
          </div>

          <div className="bg-slate-100/90 dark:bg-slate-950/80 px-2 py-0.5 rounded-sm border border-slate-200 dark:border-slate-800 flex items-center gap-1 text-teal-600 dark:text-teal-400 font-bold">
            <RotateCw className="w-3 h-3 animate-spin" />
            <span>360° Interactive Orbit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
