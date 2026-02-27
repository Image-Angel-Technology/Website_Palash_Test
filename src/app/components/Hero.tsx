import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { duration, easing, distance, shouldReduceMotion } from '../config/motion';
import heroVeil from 'figma:asset/747e1450344a2ca5d0d7bf58d9614db93920c6f6.png';
import heroPhoto from 'figma:asset/00678c0a1aaba125199d319587b67aae60a013e7.png';

type Phase = 'idle' | 'pre-reveal' | 'revealing' | 'concealing' | 'clean' | 'flash1-in' | 'flash1-hold' | 'flash1-out' | 'flash2-in' | 'flash2-hold' | 'flash2-out' | 'rest';

// ============================================================
// FORENSIC REVEAL — Desktop
// ============================================================
function ForensicReveal() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [clipValue, setClipValue] = useState('inset(0 100% 0 0)');
  const [clipTransition, setClipTransition] = useState('none');
  const [innerOpacity, setInnerOpacity] = useState(1);
  const [opacityTransition, setOpacityTransition] = useState('none');
  const [dividerVisible, setDividerVisible] = useState(false);
  const reduceMotion = shouldReduceMotion();

  // Data streams (20 horizontal lines) - boosted opacity by 1.2x
  const dataStreams = [
    {y:28, dash:'2 5 1 3 4 7 1 6',op:0.17,dur:'3.2s'},
    {y:58, dash:'1 4 3 6 2 5 1 7',op:0.11,dur:'4.1s'},
    {y:85, dash:'3 3 1 7 2 4 1 5',op:0.19,dur:'2.8s'},
    {y:112,dash:'1 6 2 4 3 5 1 8',op:0.12,dur:'3.7s'},
    {y:140,dash:'2 4 1 5 3 7 2 3',op:0.16,dur:'3.0s'},
    {y:168,dash:'1 7 3 4 1 6 2 5',op:0.10,dur:'4.5s'},
    {y:195,dash:'3 5 1 3 2 8 1 4',op:0.14,dur:'3.4s'},
    {y:222,dash:'1 5 2 6 3 4 1 7',op:0.11,dur:'3.9s'},
    {y:250,dash:'2 6 1 4 3 5 1 8',op:0.18,dur:'2.6s'},
    {y:278,dash:'1 4 3 7 2 3 1 6',op:0.10,dur:'4.3s'},
    {y:305,dash:'3 4 1 6 2 5 1 3',op:0.16,dur:'3.1s'},
    {y:332,dash:'1 8 2 3 3 6 1 5',op:0.12,dur:'3.6s'},
    {y:360,dash:'2 3 1 7 3 4 2 6',op:0.17,dur:'2.9s'},
    {y:388,dash:'1 6 3 5 1 4 2 7',op:0.08,dur:'4.4s'},
    {y:415,dash:'3 5 2 4 1 7 1 3',op:0.13,dur:'3.3s'},
    {y:442,dash:'1 7 1 5 3 3 2 6',op:0.10,dur:'3.8s'},
    {y:468,dash:'2 4 3 6 1 5 1 8',op:0.14,dur:'3.0s'},
    {y:495,dash:'1 5 2 7 3 4 1 3',op:0.07,dur:'4.2s'},
    {y:150,dash:'2 8 1 3 1 6 3 4',op:0.06,dur:'5.0s'},
    {y:380,dash:'1 3 2 8 3 5 1 4',op:0.06,dur:'4.8s'},
  ];

  // Fingerprint rings (8 ellipses)
  const rings = [
    {rx:18, ry:15, op:0.35,sw:0.9, dur:'50s', dir:1},
    {rx:32, ry:26, op:0.28,sw:0.8, dur:'45s', dir:-1},
    {rx:48, ry:38, op:0.22,sw:0.7, dur:'55s', dir:1},
    {rx:65, ry:52, op:0.18,sw:0.6, dur:'60s', dir:-1},
    {rx:85, ry:68, op:0.14,sw:0.5, dur:'65s', dir:1},
    {rx:108,ry:86, op:0.10,sw:0.5, dur:'70s', dir:-1},
    {rx:135,ry:108,op:0.07,sw:0.4, dur:'80s', dir:1},
    {rx:165,ry:132,op:0.05,sw:0.4, dur:'90s', dir:-1},
  ];

  // Data nodes (22 nodes)
  const nodes: [number,number][] = [
    [195,82],[218,68],[232,95],[208,110],[195,120],
    [225,125],[182,100],[242,78],
    [160,168],[200,158],[240,162],[275,152],
    [168,195],[215,188],[258,198],[292,178],
    [145,248],[190,240],[235,252],[280,242],
    [95,155],[345,125],
  ];

  // Edges
  const edges: [number,number][] = [
    [0,1],[1,2],[2,3],[3,0],[3,4],[4,6],[2,5],[5,3],[1,7],[7,2],[0,6],
    [6,8],[4,8],[3,9],[5,10],[7,11],[5,15],
    [8,9],[9,10],[10,11],[8,12],[9,13],[10,14],[11,15],[12,13],[13,14],[14,15],
    [12,16],[13,17],[14,18],[15,19],
    [16,17],[17,18],[18,19],
    [8,20],[11,21],
  ];

  // Particles (35) - boosted opacity by 1.15x
  const particles = [
    [198,72,0.7,0.18],[215,58,0.9,0.21],[238,82,0.5,0.14],[205,98,0.7,0.16],
    [248,68,0.5,0.13],[188,90,0.8,0.15],[230,105,0.6,0.14],[212,48,0.5,0.12],
    [175,82,0.6,0.13],[255,58,0.7,0.14],[200,115,0.8,0.15],[225,72,0.6,0.12],
    [190,65,0.5,0.10],[240,98,0.7,0.13],[208,85,0.9,0.17],
    [162,155,0.6,0.09],[248,148,0.5,0.08],[288,138,0.6,0.07],[172,188,0.5,0.07],
    [218,178,0.7,0.08],[278,188,0.5,0.06],[148,132,0.6,0.07],[302,108,0.5,0.06],
    [195,210,0.6,0.06],[260,205,0.5,0.05],
    [138,242,0.5,0.05],[228,248,0.6,0.06],[278,255,0.5,0.03],
    [125,322,0.5,0.03],[195,332,0.6,0.05],[262,338,0.5,0.03],
    [68,112,0.5,0.03],[355,82,0.6,0.03],[78,392,0.5,0.02],[342,372,0.5,0.02],
  ];

  // Matrix rain columns - boosted opacity by 1.2x
  const matrixCols = [
    { left:'6%',  op:0.17, dur:'4.2s', chars:'7F3A9C2D41E8B0F56D2A8C' },
    { left:'14%', op:0.11, dur:'5.0s', chars:'A1C8E3F07B4D926F5AE831' },
    { left:'22%', op:0.19, dur:'3.5s', chars:'2D9F4A8C1E6B73F05DA2C9' },
    { left:'30%', op:0.13, dur:'4.6s', chars:'E8B15C3F7A2D064F9C1B3E' },
    { left:'38%', op:0.22, dur:'3.2s', chars:'4F2A7C9D1B8E360F5A9CD2' },
    { left:'46%', op:0.12, dur:'5.3s', chars:'9C3D6F1A5E82B7F04DA1C8' },
    { left:'54%', op:0.18, dur:'3.8s', chars:'1E7B4A9F2C5D83060F7B2D' },
    { left:'62%', op:0.14, dur:'4.4s', chars:'5A8F3C2E7D1B94060F3A9E' },
    { left:'70%', op:0.20, dur:'3.4s', chars:'B04D9E2F6C8A1537FF2C5D' },
    { left:'78%', op:0.11, dur:'4.8s', chars:'3F7A1C9E5B2D84060FA1B8' },
    { left:'86%', op:0.16, dur:'4.0s', chars:'6D2F8B4A1C9E735F0A2C8D' },
    { left:'94%', op:0.10, dur:'5.5s', chars:'8E1F5C3A7D2B94060FC17A' },
  ];

  // Phase state machine
  useEffect(() => {
    if (reduceMotion) return;

    let mounted = true;
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    
    const run = async () => {
      setPhase('idle');
      await sleep(1500);
      
      while (mounted) {
        // Pre-reveal: invisible reset
        if (!mounted) break;
        setPhase('pre-reveal');
        await sleep(50);
        
        // Reveal: slider moves left to right
        if (!mounted) break;
        setPhase('revealing');
        await sleep(2500);
        
        // Conceal: slider recedes right to left
        if (!mounted) break;
        setPhase('concealing');
        await sleep(2000);
        
        // Clean pause
        if (!mounted) break;
        setPhase('clean');
        await sleep(2500);
        
        // Flash 1 — slow bloom
        if (!mounted) break;
        setPhase('flash1-in');
        await sleep(800);
        if (!mounted) break;
        setPhase('flash1-hold');
        await sleep(400);
        if (!mounted) break;
        setPhase('flash1-out');
        await sleep(1000);
        
        // Clean pause
        if (!mounted) break;
        setPhase('clean');
        await sleep(1800);
        
        // Flash 2 — fainter
        if (!mounted) break;
        setPhase('flash2-in');
        await sleep(600);
        if (!mounted) break;
        setPhase('flash2-hold');
        await sleep(200);
        if (!mounted) break;
        setPhase('flash2-out');
        await sleep(800);
        
        // Rest before loop
        if (!mounted) break;
        setPhase('rest');
        await sleep(2500);
      }
    };
    
    run();
    return () => { mounted = false; };
  }, [reduceMotion]);

  // Phase-based styling
  useEffect(() => {
    if (reduceMotion) {
      setClipValue('none');
      setInnerOpacity(0.3);
      return;
    }

    switch (phase) {
      case 'idle':
        setClipValue('inset(0 100% 0 0)');
        setClipTransition('none');
        setInnerOpacity(1);
        setOpacityTransition('none');
        setDividerVisible(false);
        break;
      case 'pre-reveal':
        setClipValue('inset(0 100% 0 0)');
        setClipTransition('none');
        setInnerOpacity(1);
        setOpacityTransition('none');
        setDividerVisible(false);
        break;
      case 'revealing':
        setClipValue('inset(0 20% 0 0)');
        setClipTransition('clip-path 2.5s cubic-bezier(0.25, 0, 0.25, 1)');
        setInnerOpacity(1);
        setOpacityTransition('none');
        setDividerVisible(true);
        break;
      case 'concealing':
        setClipValue('inset(0 100% 0 0)');
        setClipTransition('clip-path 2.0s cubic-bezier(0.25, 0, 0.25, 1)');
        setDividerVisible(true);
        break;
      case 'clean':
        setDividerVisible(false);
        setClipTransition('none');
        setClipValue('inset(0 0% 0 0)');
        setInnerOpacity(0);
        setOpacityTransition('opacity 0.3s ease-out');
        break;
      case 'flash1-in':
        setInnerOpacity(0.3);
        setOpacityTransition('opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)');
        break;
      case 'flash1-hold':
        setOpacityTransition('none');
        break;
      case 'flash1-out':
        setInnerOpacity(0);
        setOpacityTransition('opacity 1.0s cubic-bezier(0.4, 0, 0.8, 1)');
        break;
      case 'flash2-in':
        setInnerOpacity(0.18);
        setOpacityTransition('opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)');
        break;
      case 'flash2-hold':
        setOpacityTransition('none');
        break;
      case 'flash2-out':
        setInnerOpacity(0);
        setOpacityTransition('opacity 0.8s cubic-bezier(0.4, 0, 0.8, 1)');
        break;
      case 'rest':
        setInnerOpacity(0);
        setOpacityTransition('opacity 0.3s ease-out');
        break;
    }
  }, [phase, reduceMotion]);

  const forensicStyles = `
    @keyframes matrixFall {
      0%{transform:translateY(0)}
      100%{transform:translateY(-264px)}
    }
    @keyframes glowPulse {
      0%,100%{opacity:0.7}
      50%{opacity:1}
    }
    @keyframes scanSweep {
      0%{top:-1px;opacity:0}
      3%{opacity:1}
      97%{opacity:1}
      100%{top:100%;opacity:0}
    }
    @keyframes drift1{0%{transform:translate(0,0)}25%{transform:translate(8px,-14px)}50%{transform:translate(-6px,-24px)}75%{transform:translate(10px,-10px)}100%{transform:translate(0,0)}}
    @keyframes drift2{0%{transform:translate(0,0)}25%{transform:translate(-11px,-8px)}50%{transform:translate(8px,-20px)}75%{transform:translate(-10px,-15px)}100%{transform:translate(0,0)}}
    @keyframes drift3{0%{transform:translate(0,0)}25%{transform:translate(7px,11px)}50%{transform:translate(-10px,-7px)}75%{transform:translate(6px,-18px)}100%{transform:translate(0,0)}}
    @keyframes drift4{0%{transform:translate(0,0)}25%{transform:translate(-13px,10px)}50%{transform:translate(11px,-13px)}75%{transform:translate(-8px,-20px)}100%{transform:translate(0,0)}}
  `;

  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <style>{forensicStyles}</style>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0,0,0,0.10), 0 10px 20px rgba(0,0,0,0.06)',
        }}
      >
        {/* Clean Photo */}
        <img
          src={heroPhoto}
          alt="Content creator"
          loading="eager"
          decoding="async"
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center top',
            aspectRatio: '3 / 4',
          }}
        />

        {/* Forensic Layer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          clipPath: clipValue,
          transition: clipTransition,
        }}>
          {/* Forensic Opacity Wrapper */}
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            opacity: innerOpacity,
            transition: opacityTransition,
          }}>
            {/* Darkened Photo - FIX 3 applied */}
            <img
              src={heroPhoto}
              alt=""
              aria-hidden="true"
              style={{
                width: '100%',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center top',
                aspectRatio: '3 / 4',
                filter: 'brightness(0.38) contrast(1.15) saturate(0.35)',
              }}
            />

            {/* Dark Vignette - FIX 3 applied */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 52% 22%, rgba(0,15,10,0.05) 0%, rgba(0,10,6,0.25) 55%, rgba(0,5,3,0.45) 100%)',
              pointerEvents: 'none',
            }} />

            {/* Matrix Rain Columns */}
            {matrixCols.map((col, i) => (
              <div
                key={`matrix-${i}`}
                style={{
                  position: 'absolute',
                  left: col.left,
                  top: 0,
                  bottom: 0,
                  width: '8px',
                  overflow: 'hidden',
                  opacity: col.op,
                  pointerEvents: 'none',
                }}
              >
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '7px',
                  lineHeight: '11px',
                  color: '#00e89d',
                  textAlign: 'center',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                  animation: reduceMotion ? 'none' : `matrixFall ${col.dur} linear infinite`,
                  maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.5) 100%)',
                  WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.5) 100%)',
                }}>
                  {(col.chars.repeat(4)).split('').join('\n')}
                </div>
              </div>
            ))}

            {/* Green Ambient Glow - FIX 3 applied */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(ellipse at 52% 20%, rgba(0,232,157,0.06) 0%, transparent 40%),
                radial-gradient(ellipse at 28% 55%, rgba(0,160,110,0.02) 0%, transparent 30%),
                radial-gradient(ellipse at 78% 35%, rgba(0,140,100,0.015) 0%, transparent 25%)
              `,
              pointerEvents: 'none',
              animation: reduceMotion ? 'none' : 'glowPulse 4s ease-in-out infinite',
            }} />

            {/* SVG Forensic System */}
            <svg viewBox="0 0 400 530" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <defs>
                <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Data Streams */}
              {dataStreams.map((s, i) => (
                <line
                  key={`stream-${i}`}
                  x1="0"
                  y1={s.y}
                  x2="400"
                  y2={s.y}
                  stroke="#00c785"
                  strokeWidth="0.5"
                  strokeOpacity={s.op}
                  strokeDasharray={s.dash}
                >
                  {!reduceMotion && (
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-50"
                      dur={s.dur}
                      repeatCount="indefinite"
                    />
                  )}
                </line>
              ))}

              {/* Fingerprint Rings */}
              {rings.map((r, i) => (
                <ellipse
                  key={`ring-${i}`}
                  cx="210"
                  cy="110"
                  rx={r.rx}
                  ry={r.ry}
                  fill="none"
                  stroke="#00e89d"
                  strokeWidth={r.sw}
                  strokeOpacity={r.op}
                  strokeDasharray="1.5 4.5"
                  strokeLinecap="round"
                >
                  {!reduceMotion && (
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={r.dir > 0 ? "0 210 110" : "360 210 110"}
                      to={r.dir > 0 ? "360 210 110" : "0 210 110"}
                      dur={r.dur}
                      repeatCount="indefinite"
                    />
                  )}
                </ellipse>
              ))}

              {/* Ambient Particles */}
              {particles.map((p, i) => {
                const [cx, cy, r, op] = p;
                const driftAnim = `drift${(i % 4) + 1}`;
                const dur = 15 + (i % 9) * 1.2;
                const opMult = i < 15 ? 1.3 : 1;
                return (
                  <circle
                    key={`particle-${i}`}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="#00e89d"
                    style={{
                      animation: reduceMotion ? 'none' : `${driftAnim} ${dur}s linear infinite`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  >
                    {!reduceMotion && (
                      <animate
                        attributeName="fill-opacity"
                        values={`${op*0.5*opMult};${op*1.2*opMult};${op*0.7*opMult};${op*opMult}`}
                        dur={`${2.5+(i%6)*0.7}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                );
              })}

              {/* Edge Base Lines */}
              {edges.map((edge, i) => {
                const [a, b] = edge;
                return (
                  <line
                    key={`edge-${i}`}
                    x1={nodes[a][0]}
                    y1={nodes[a][1]}
                    x2={nodes[b][0]}
                    y2={nodes[b][1]}
                    stroke="#0a7a5a"
                    strokeWidth="0.4"
                    strokeOpacity="0.18"
                  />
                );
              })}

              {/* Flowing Pulses - FIX 3 applied */}
              {edges.map((edge, j) => {
                const [a, b] = edge;
                const x1 = nodes[a][0], y1 = nodes[a][1];
                const x2 = nodes[b][0], y2 = nodes[b][1];
                const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                const pulseDur = Math.max(1.5, Math.min(4, dist / 55));
                return (
                  <circle
                    key={`pulse-${j}`}
                    r="1"
                    fill="#00ffb2"
                    fillOpacity="0.8"
                    style={{ filter: 'url(#pulseGlow)' }}
                  >
                    {!reduceMotion && (
                      <animateMotion
                        path={`M${x1},${y1} L${x2},${y2}`}
                        dur={`${pulseDur}s`}
                        repeatCount="indefinite"
                        begin={`${(j * 0.35) % 4}s`}
                      />
                    )}
                  </circle>
                );
              })}

              {/* Data Nodes - FIX 3 applied */}
              {nodes.map((node, i) => {
                const [cx, cy] = node;
                const opMult = i < 8 ? 1.3 : 1;
                return (
                  <g key={`node-${i}`}>
                    <circle cx={cx} cy={cy} r="11" fill="none" stroke="#064a38" strokeWidth="0.3">
                      {!reduceMotion && (
                        <>
                          <animate attributeName="stroke-opacity" values={`${0.06*opMult};${0.14*opMult};${0.06*opMult}`} dur={`${2.8+i*0.11}s`} repeatCount="indefinite" />
                          <animate attributeName="r" values="11;14;11" dur={`${2.8+i*0.11}s`} repeatCount="indefinite" />
                        </>
                      )}
                    </circle>
                    <circle cx={cx} cy={cy} r="5" fill="none" stroke="#00e89d" strokeWidth="0.4">
                      {!reduceMotion && (
                        <>
                          <animate attributeName="stroke-opacity" values={`${0.18*opMult};${0.35*opMult};${0.18*opMult}`} dur={`${1.8+i*0.09}s`} repeatCount="indefinite" />
                          <animate attributeName="r" values="5;7;5" dur={`${1.8+i*0.09}s`} repeatCount="indefinite" />
                        </>
                      )}
                    </circle>
                    <circle cx={cx} cy={cy} r="1.5" fill="#00ffb2">
                      {!reduceMotion && (
                        <>
                          <animate attributeName="fill-opacity" values={`${0.55*opMult};${0.9*opMult};${0.55*opMult}`} dur={`${1.1+i*0.07}s`} repeatCount="indefinite" />
                          <animate attributeName="r" values="1.5;2.2;1.5" dur={`${1.1+i*0.07}s`} repeatCount="indefinite" />
                        </>
                      )}
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Dual Scan Lines */}
            {!reduceMotion && (
              <>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent 3%, rgba(0,255,178,0.2) 20%, rgba(0,255,178,0.4) 50%, rgba(0,255,178,0.2) 80%, transparent 97%)',
                  animation: 'scanSweep 5s linear infinite',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent 3%, rgba(0,255,178,0.15) 20%, rgba(0,255,178,0.3) 50%, rgba(0,255,178,0.15) 80%, transparent 97%)',
                  animation: 'scanSweep 5s linear infinite',
                  animationDelay: '2.5s',
                  pointerEvents: 'none',
                }} />
              </>
            )}

            {/* Forensic Label */}
            <div style={{
              position: 'absolute',
              top: 14,
              left: 14,
              zIndex: 5,
              pointerEvents: 'none',
            }}>
              <span style={{
                fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                fontSize: '8px',
                fontWeight: 300,
                letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                color: '#00e89d',
                background: 'rgba(0,12,8,0.7)',
                padding: '3px 7px',
                borderRadius: '3px',
                backdropFilter: 'blur(4px)',
              }}>
                Forensic layer
              </span>
            </div>
          </div>

          {/* Divider Line - Outside opacity wrapper */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '2px',
            background: 'rgba(255,255,255,0.7)',
            boxShadow: '-4px 0 16px rgba(0,232,157,0.12), 4px 0 16px rgba(0,0,0,0.08), 0 0 6px rgba(255,255,255,0.2)',
            opacity: dividerVisible ? 1 : 0,
            transition: 'opacity 0.2s',
            zIndex: 2,
          }} />
        </div>

        {/* Clean Side Label */}
        <div style={{
          position: 'absolute',
          top: 14,
          right: 14,
          zIndex: 5,
          pointerEvents: 'none',
          opacity: dividerVisible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}>
          <span style={{
            fontFamily: "'Aktiv Grotesk Extended', sans-serif",
            fontSize: '8px',
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,0.5)',
            background: 'rgba(0,0,0,0.25)',
            padding: '3px 7px',
            borderRadius: '3px',
            backdropFilter: 'blur(4px)',
          }}>
            As viewed
          </span>
        </div>
      </motion.div>

      {/* Caption */}
      <div style={{
        marginTop: 14,
        textAlign: 'center',
        fontFamily: "'Aktiv Grotesk Extended', sans-serif",
        fontSize: '10px',
        fontWeight: 300,
        letterSpacing: '0.12em',
        color: '#8f877d',
      }}>
        Every piece of content. Protected.
      </div>
    </div>
  );
}

// ============================================================
// FORENSIC REVEAL — Mobile
// ============================================================
function ForensicRevealMobile() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [clipValue, setClipValue] = useState('inset(0 100% 0 0)');
  const [clipTransition, setClipTransition] = useState('none');
  const [innerOpacity, setInnerOpacity] = useState(1);
  const [opacityTransition, setOpacityTransition] = useState('none');
  const [dividerVisible, setDividerVisible] = useState(false);
  const reduceMotion = shouldReduceMotion();

  // Mobile data (reduced counts) - boosted opacity by 1.2x
  const dataStreams = [
    {y:18, dash:'2 5 1 3 4 7',op:0.17,dur:'3.0s'},
    {y:42, dash:'1 4 3 6 2 5',op:0.11,dur:'3.8s'},
    {y:68, dash:'3 3 1 7 2 4',op:0.19,dur:'2.5s'},
    {y:95, dash:'1 6 2 4 3 5',op:0.12,dur:'3.4s'},
    {y:122,dash:'2 4 1 5 3 7',op:0.16,dur:'2.8s'},
    {y:150,dash:'1 7 3 4 1 6',op:0.10,dur:'4.0s'},
    {y:178,dash:'3 5 1 3 2 8',op:0.14,dur:'3.2s'},
    {y:205,dash:'1 5 2 6 3 4',op:0.11,dur:'3.6s'},
    {y:232,dash:'2 6 1 4 3 5',op:0.18,dur:'2.4s'},
    {y:258,dash:'1 4 3 7 2 3',op:0.10,dur:'4.1s'},
    {y:280,dash:'3 4 1 6 2 5',op:0.16,dur:'2.9s'},
    {y:110,dash:'2 8 1 3 1 6',op:0.06,dur:'4.5s'},
  ];

  const rings = [
    {rx:15, ry:12, op:0.35,sw:0.8, dur:'45s', dir:1},
    {rx:28, ry:22, op:0.28,sw:0.7, dur:'40s', dir:-1},
    {rx:42, ry:33, op:0.22,sw:0.6, dur:'50s', dir:1},
    {rx:58, ry:46, op:0.18,sw:0.5, dur:'55s', dir:-1},
    {rx:78, ry:62, op:0.14,sw:0.4, dur:'60s', dir:1},
  ];

  const nodes: [number,number][] = [
    [238,35],[255,25],[270,42],[252,52],[238,58],
    [264,60],[228,45],[278,32],
    [205,88],[248,82],[280,78],[310,75]
  ];

  const edges: [number,number][] = [
    [0,1],[1,2],[2,3],[3,0],[3,4],[4,6],[2,5],[5,3],[1,7],[7,2],[0,6],[6,8],[9,10],[10,11]
  ];

  const particles = [
    [242,38,0.7,0.17],[258,28,0.9,0.20],[268,45,0.5,0.13],[245,55,0.7,0.15],
    [260,62,0.5,0.12],[235,48,0.9,0.14],[248,85,0.7,0.13],
    [210,92,0.7,0.09],[275,80,0.5,0.08],[305,75,0.7,0.07],
    [220,145,0.5,0.06],[255,140,0.7,0.06],[285,143,0.5,0.05],
    [195,195,0.5,0.03],[270,205,0.6,0.03],[190,120,0.5,0.05],
    [320,90,0.6,0.05],[185,85,0.5,0.03],[240,65,0.6,0.12],[260,38,0.5,0.09],
  ];

  const matrixCols = [
    { left:'10%', op:0.14, dur:'4.0s', chars:'7F3A9C2D41E8' },
    { left:'20%', op:0.10, dur:'4.8s', chars:'A1C8E3F07B4D' },
    { left:'30%', op:0.17, dur:'3.5s', chars:'2D9F4A8C1E6B' },
    { left:'42%', op:0.12, dur:'4.5s', chars:'E8B15C3F7A2D' },
    { left:'54%', op:0.19, dur:'3.2s', chars:'4F2A7C9D1B8E' },
    { left:'66%', op:0.11, dur:'5.0s', chars:'9C3D6F1A5E82' },
    { left:'78%', op:0.16, dur:'3.8s', chars:'1E7B4A9F2C5D' },
    { left:'90%', op:0.13, dur:'4.3s', chars:'5A8F3C2E7D1B' },
  ];

  // State machine (mobile timing)
  useEffect(() => {
    if (reduceMotion) return;

    let mounted = true;
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    
    const run = async () => {
      setPhase('idle');
      await sleep(1200);
      
      while (mounted) {
        // Pre-reveal: invisible reset
        if (!mounted) break;
        setPhase('pre-reveal');
        await sleep(50);
        
        // Reveal
        if (!mounted) break;
        setPhase('revealing');
        await sleep(2000);
        
        // Conceal
        if (!mounted) break;
        setPhase('concealing');
        await sleep(1500);
        
        // Clean pause
        if (!mounted) break;
        setPhase('clean');
        await sleep(2000);
        
        // Flash 1
        if (!mounted) break;
        setPhase('flash1-in');
        await sleep(600);
        if (!mounted) break;
        setPhase('flash1-hold');
        await sleep(300);
        if (!mounted) break;
        setPhase('flash1-out');
        await sleep(800);
        
        // Clean pause
        if (!mounted) break;
        setPhase('clean');
        await sleep(1500);
        
        // Flash 2
        if (!mounted) break;
        setPhase('flash2-in');
        await sleep(500);
        if (!mounted) break;
        setPhase('flash2-hold');
        await sleep(150);
        if (!mounted) break;
        setPhase('flash2-out');
        await sleep(600);
        
        // Rest
        if (!mounted) break;
        setPhase('rest');
        await sleep(2000);
      }
    };
    
    run();
    return () => { mounted = false; };
  }, [reduceMotion]);

  // Phase-based styling
  useEffect(() => {
    if (reduceMotion) {
      setClipValue('none');
      setInnerOpacity(0.3);
      return;
    }

    switch (phase) {
      case 'idle':
        setClipValue('inset(0 100% 0 0)');
        setClipTransition('none');
        setInnerOpacity(1);
        setOpacityTransition('none');
        setDividerVisible(false);
        break;
      case 'pre-reveal':
        setClipValue('inset(0 100% 0 0)');
        setClipTransition('none');
        setInnerOpacity(1);
        setOpacityTransition('none');
        setDividerVisible(false);
        break;
      case 'revealing':
        setClipValue('inset(0 15% 0 0)');
        setClipTransition('clip-path 2.0s cubic-bezier(0.25, 0, 0.25, 1)');
        setInnerOpacity(1);
        setOpacityTransition('none');
        setDividerVisible(true);
        break;
      case 'concealing':
        setClipValue('inset(0 100% 0 0)');
        setClipTransition('clip-path 1.5s cubic-bezier(0.25, 0, 0.25, 1)');
        setDividerVisible(true);
        break;
      case 'clean':
        setDividerVisible(false);
        setClipTransition('none');
        setClipValue('inset(0 0% 0 0)');
        setInnerOpacity(0);
        setOpacityTransition('opacity 0.3s ease-out');
        break;
      case 'flash1-in':
        setInnerOpacity(0.25);
        setOpacityTransition('opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)');
        break;
      case 'flash1-hold':
        setOpacityTransition('none');
        break;
      case 'flash1-out':
        setInnerOpacity(0);
        setOpacityTransition('opacity 0.8s cubic-bezier(0.4, 0, 0.8, 1)');
        break;
      case 'flash2-in':
        setInnerOpacity(0.14);
        setOpacityTransition('opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)');
        break;
      case 'flash2-hold':
        setOpacityTransition('none');
        break;
      case 'flash2-out':
        setInnerOpacity(0);
        setOpacityTransition('opacity 0.6s cubic-bezier(0.4, 0, 0.8, 1)');
        break;
      case 'rest':
        setInnerOpacity(0);
        setOpacityTransition('opacity 0.3s ease-out');
        break;
    }
  }, [phase, reduceMotion]);

  const forensicStyles = `
    @keyframes matrixFallMobile {
      0%{transform:translateY(0)}
      100%{transform:translateY(-168px)}
    }
    @keyframes glowPulse {
      0%,100%{opacity:0.7}
      50%{opacity:1}
    }
    @keyframes scanSweep {
      0%{top:-1px;opacity:0}
      3%{opacity:1}
      97%{opacity:1}
      100%{top:100%;opacity:0}
    }
    @keyframes drift1{0%{transform:translate(0,0)}25%{transform:translate(8px,-14px)}50%{transform:translate(-6px,-24px)}75%{transform:translate(10px,-10px)}100%{transform:translate(0,0)}}
    @keyframes drift2{0%{transform:translate(0,0)}25%{transform:translate(-11px,-8px)}50%{transform:translate(8px,-20px)}75%{transform:translate(-10px,-15px)}100%{transform:translate(0,0)}}
    @keyframes drift3{0%{transform:translate(0,0)}25%{transform:translate(7px,11px)}50%{transform:translate(-10px,-7px)}75%{transform:translate(6px,-18px)}100%{transform:translate(0,0)}}
    @keyframes drift4{0%{transform:translate(0,0)}25%{transform:translate(-13px,10px)}50%{transform:translate(11px,-13px)}75%{transform:translate(-8px,-20px)}100%{transform:translate(0,0)}}
  `;

  return (
    <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>
      <style>{forensicStyles}</style>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1], delay: 0.6 }}
        style={{
          position: 'relative',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
        }}
      >
        <img
          src={heroPhoto}
          alt="Content creator"
          loading="eager"
          decoding="async"
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center top',
            aspectRatio: '16 / 10',
          }}
        />

        <div style={{
          position: 'absolute',
          inset: 0,
          clipPath: clipValue,
          transition: clipTransition,
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            opacity: innerOpacity,
            transition: opacityTransition,
          }}>
            <img
              src={heroPhoto}
              alt=""
              aria-hidden="true"
              style={{
                width: '100%',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center top',
                aspectRatio: '16 / 10',
                filter: 'brightness(0.38) contrast(1.15) saturate(0.35)',
              }}
            />

            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 53% 25%, rgba(0,15,10,0.05) 0%, rgba(0,10,6,0.25) 55%, rgba(0,5,3,0.45) 100%)',
              pointerEvents: 'none',
            }} />

            {matrixCols.map((col, i) => (
              <div
                key={`matrix-${i}`}
                style={{
                  position: 'absolute',
                  left: col.left,
                  top: 0,
                  bottom: 0,
                  width: '7px',
                  overflow: 'hidden',
                  opacity: col.op,
                  pointerEvents: 'none',
                }}
              >
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '6px',
                  lineHeight: '12px',
                  color: '#00e89d',
                  textAlign: 'center',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                  animation: reduceMotion ? 'none' : `matrixFallMobile ${col.dur} linear infinite`,
                  maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.5) 100%)',
                  WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.5) 100%)',
                }}>
                  {(col.chars.repeat(3)).split('').join('\n')}
                </div>
              </div>
            ))}

            <div style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(ellipse at 53% 25%, rgba(0,232,157,0.06) 0%, transparent 40%),
                radial-gradient(ellipse at 32% 50%, rgba(0,160,110,0.02) 0%, transparent 30%),
                radial-gradient(ellipse at 78% 40%, rgba(0,140,100,0.015) 0%, transparent 25%)
              `,
              pointerEvents: 'none',
              animation: reduceMotion ? 'none' : 'glowPulse 4s ease-in-out infinite',
            }} />

            <svg viewBox="0 0 480 300" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <defs>
                <filter id="pulseGlowMobile" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {dataStreams.map((s, i) => (
                <line
                  key={`stream-${i}`}
                  x1="0"
                  y1={s.y}
                  x2="480"
                  y2={s.y}
                  stroke="#00c785"
                  strokeWidth="0.5"
                  strokeOpacity={s.op}
                  strokeDasharray={s.dash}
                >
                  {!reduceMotion && (
                    <animate attributeName="stroke-dashoffset" from="0" to="-50" dur={s.dur} repeatCount="indefinite" />
                  )}
                </line>
              ))}

              {rings.map((r, i) => (
                <ellipse
                  key={`ring-${i}`}
                  cx="255"
                  cy="68"
                  rx={r.rx}
                  ry={r.ry}
                  fill="none"
                  stroke="#00e89d"
                  strokeWidth={r.sw}
                  strokeOpacity={r.op}
                  strokeDasharray="1.5 4.5"
                  strokeLinecap="round"
                >
                  {!reduceMotion && (
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={r.dir > 0 ? "0 255 68" : "360 255 68"}
                      to={r.dir > 0 ? "360 255 68" : "0 255 68"}
                      dur={r.dur}
                      repeatCount="indefinite"
                    />
                  )}
                </ellipse>
              ))}

              {particles.map((p, i) => {
                const [cx, cy, r, op] = p;
                const driftAnim = `drift${(i % 4) + 1}`;
                const dur = 13 + (i % 7) * 1.2;
                const opMult = i < 8 ? 1.3 : 1;
                return (
                  <circle
                    key={`particle-${i}`}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="#00e89d"
                    style={{
                      animation: reduceMotion ? 'none' : `${driftAnim} ${dur}s linear infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    {!reduceMotion && (
                      <animate
                        attributeName="fill-opacity"
                        values={`${op*0.5*opMult};${op*1.2*opMult};${op*0.7*opMult};${op*opMult}`}
                        dur={`${2.2+(i%5)*0.6}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                );
              })}

              {edges.map((edge, i) => {
                const [a, b] = edge;
                return (
                  <line
                    key={`edge-${i}`}
                    x1={nodes[a][0]}
                    y1={nodes[a][1]}
                    x2={nodes[b][0]}
                    y2={nodes[b][1]}
                    stroke="#0a7a5a"
                    strokeWidth="0.4"
                    strokeOpacity="0.18"
                  />
                );
              })}

              {edges.map((edge, j) => {
                const [a, b] = edge;
                const x1 = nodes[a][0], y1 = nodes[a][1];
                const x2 = nodes[b][0], y2 = nodes[b][1];
                const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                const pulseDur = Math.max(1.5, Math.min(3.5, dist / 55));
                return (
                  <circle
                    key={`pulse-${j}`}
                    r="0.9"
                    fill="#00ffb2"
                    fillOpacity="0.8"
                    style={{ filter: 'url(#pulseGlowMobile)' }}
                  >
                    {!reduceMotion && (
                      <animateMotion
                        path={`M${x1},${y1} L${x2},${y2}`}
                        dur={`${pulseDur}s`}
                        repeatCount="indefinite"
                        begin={`${(j * 0.3) % pulseDur}s`}
                      />
                    )}
                  </circle>
                );
              })}

              {nodes.map((node, i) => {
                const [cx, cy] = node;
                const opMult = i < 8 ? 1.3 : 1;
                return (
                  <g key={`node-${i}`}>
                    <circle cx={cx} cy={cy} r="4" fill="none" stroke="#00e89d" strokeWidth="0.4">
                      {!reduceMotion && (
                        <>
                          <animate attributeName="stroke-opacity" values={`${0.18*opMult};${0.35*opMult};${0.18*opMult}`} dur={`${1.6+i*0.08}s`} repeatCount="indefinite" />
                          <animate attributeName="r" values="4;5.5;4" dur={`${1.6+i*0.08}s`} repeatCount="indefinite" />
                        </>
                      )}
                    </circle>
                    <circle cx={cx} cy={cy} r="1.2" fill="#00ffb2">
                      {!reduceMotion && (
                        <>
                          <animate attributeName="fill-opacity" values={`${0.55*opMult};${0.9*opMult};${0.55*opMult}`} dur={`${1.0+i*0.06}s`} repeatCount="indefinite" />
                          <animate attributeName="r" values="1.2;1.8;1.2" dur={`${1.0+i*0.06}s`} repeatCount="indefinite" />
                        </>
                      )}
                    </circle>
                  </g>
                );
              })}
            </svg>

            {!reduceMotion && (
              <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent 3%, rgba(0,255,178,0.2) 20%, rgba(0,255,178,0.4) 50%, rgba(0,255,178,0.2) 80%, transparent 97%)',
                animation: 'scanSweep 4s linear infinite',
                pointerEvents: 'none',
              }} />
            )}

            <div style={{
              position: 'absolute',
              top: 11,
              left: 11,
              zIndex: 5,
              pointerEvents: 'none',
            }}>
              <span style={{
                fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                fontSize: '7px',
                fontWeight: 300,
                letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                color: '#00e89d',
                background: 'rgba(0,12,8,0.7)',
                padding: '2px 6px',
                borderRadius: '3px',
                backdropFilter: 'blur(4px)',
              }}>
                Forensic layer
              </span>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '2px',
            background: 'rgba(255,255,255,0.7)',
            boxShadow: '-4px 0 14px rgba(0,232,157,0.11), 4px 0 14px rgba(0,0,0,0.07), 0 0 5px rgba(255,255,255,0.2)',
            opacity: dividerVisible ? 1 : 0,
            transition: 'opacity 0.2s',
            zIndex: 2,
          }} />
        </div>

        <div style={{
          position: 'absolute',
          top: 11,
          right: 11,
          zIndex: 5,
          pointerEvents: 'none',
          opacity: dividerVisible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}>
          <span style={{
            fontFamily: "'Aktiv Grotesk Extended', sans-serif",
            fontSize: '7px',
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,0.5)',
            background: 'rgba(0,0,0,0.25)',
            padding: '2px 6px',
            borderRadius: '3px',
            backdropFilter: 'blur(4px)',
          }}>
            As viewed
          </span>
        </div>
      </motion.div>

      <div style={{
        marginTop: 11,
        textAlign: 'center',
        fontFamily: "'Aktiv Grotesk Extended', sans-serif",
        fontSize: '9px',
        fontWeight: 300,
        letterSpacing: '0.12em',
        color: '#8f877d',
      }}>
        Every piece of content. Protected.
      </div>
    </div>
  );
}

// ============================================================
// HERO COMPONENT
// ============================================================
export function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  const reduceMotion = shouldReduceMotion();

  return (
    <section ref={heroRef} className="relative flex items-center justify-center" style={{
      minHeight: 'auto', backgroundColor: '#f7f6f5', overflow: 'hidden', paddingTop: 'var(--nav-height)',
    }}>
      <style>{`
        @media (min-width: 768px) { .hero-section { min-height: 60vh !important; } }
        @media (min-width: 1024px) { .hero-section { min-height: 81vh !important; } }
      `}</style>
      <div className="hero-section absolute inset-0" />

      <div className="absolute inset-0" style={{
        backgroundImage: `url(${heroVeil})`, backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', opacity: 0.3, pointerEvents: 'none',
      }} />

      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(247,246,245,0.3) 0%, rgba(247,246,245,0) 40%, rgba(247,246,245,0) 60%, rgba(247,246,245,0.5) 100%)',
        pointerEvents: 'none',
      }} />

      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 w-full z-10 py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={reduceMotion ? { opacity: 1, letterSpacing: '0.14em' } : { opacity: 0, letterSpacing: '0.25em' }}
              animate={isInView ? { opacity: 1, letterSpacing: '0.14em' } : {}}
              transition={{ duration: duration.narrative / 1000, ease: easing.enterEase, delay: 0.2 }} style={{
                fontFamily: "'Aktiv Grotesk Extended', sans-serif", fontSize: 'clamp(11px, 1.5vw, 12px)', fontWeight: 300,
                color: '#8f877d', textTransform: 'uppercase', marginBottom: '16px',
              }}>
              EMBEDDED ACCOUNTABILITY
            </motion.div>

            <motion.h1 initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.dramatic }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: duration.slow / 1000, ease: easing.dramaticEase, delay: 0.35 }} style={{
                fontFamily: "'Aktiv Grotesk Extended', sans-serif", fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900,
                color: '#221f1f', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px', maxWidth: '700px',
              }}>
              Know Who Leaked It.
            </motion.h1>

            <motion.p initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.standard }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: duration.narrative / 1000, ease: easing.enterEase, delay: 0.55 }} style={{
                fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 400,
                color: '#6e6c6a', lineHeight: 1.6, maxWidth: '540px', marginBottom: '32px',
              }}>
              Image Angel embeds invisible, unique forensic marks into digital content — one for every viewer. If content leaks, those marks trace it back to the account responsible.
            </motion.p>

            <motion.div initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: duration.medium / 1000, ease: easing.enterEase, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3">
              <Link to="/solutions#platforms" className="sm:w-auto w-full">
                <motion.button className="w-full sm:w-auto transition-all" style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#ffffff',
                  padding: '14px 28px', minHeight: '48px', borderRadius: '12px', backgroundColor: '#f85838', border: 'none',
                  letterSpacing: '0.08em', textTransform: 'uppercase', transitionDuration: `${duration.fast}ms`,
                }} whileHover={{ backgroundColor: '#ff6a4d', boxShadow: '0 0 32px rgba(248,88,56,0.35)', y: -1 }}
                  whileTap={{ y: 1, boxShadow: '0 0 16px rgba(248,88,56,0.2)' }}>
                  FOR PLATFORMS
                </motion.button>
              </Link>

              <Link to="/solutions#creators" className="sm:w-auto w-full">
                <motion.button className="w-full sm:w-auto transition-all" style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#221f1f',
                  padding: '14px 28px', minHeight: '48px', borderRadius: '12px', border: '1px solid rgba(34,31,31,0.1)',
                  backgroundColor: 'rgba(34,31,31,0.04)', letterSpacing: '0.08em', textTransform: 'uppercase',
                  transitionDuration: `${duration.micro}ms`,
                }} whileHover={{ backgroundColor: 'rgba(34,31,31,0.08)', borderColor: 'rgba(34,31,31,0.16)', y: -1 }}
                  whileTap={{ y: 1 }}>
                  FOR CREATORS
                </motion.button>
              </Link>
            </motion.div>

            <div className="lg:hidden mt-8 px-0">
              <ForensicRevealMobile />
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <ForensicReveal />
          </div>
        </div>
      </div>

      {!reduceMotion && (
        <motion.div className="absolute bottom-8 left-1/2 hidden md:block" style={{ transform: 'translateX(-50%)' }}
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: duration.slow / 1000, delay: 1.2 }}>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}>
            <ChevronDown size={24} color="#b5aea6" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
