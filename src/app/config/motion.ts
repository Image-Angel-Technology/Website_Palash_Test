/**
 * MOTION & INTERACTION DESIGN SPECIFICATION
 * Image Angel — Animation System
 * 
 * This file defines all animation tokens used across the site.
 * Every animation draws from this vocabulary for consistency.
 */

// ─────────────────────────────────────────────
// EASING CURVES
// ─────────────────────────────────────────────

export const easing = {
  /** Elements entering viewport. Fast start, gentle land. */
  enterEase: [0, 0, 0.2, 1] as const,
  
  /** Elements leaving. Slow start, fast exit. */
  exitEase: [0.4, 0, 1, 1] as const,
  
  /** Hover states, small UI changes. */
  microEase: [0.25, 0.1, 0.25, 1] as const,
  
  /** Hero elements, big reveals. Overshoots slightly. */
  dramaticEase: [0.16, 1, 0.3, 1] as const,
} as const;

export const spring = {
  /** Interactive elements (buttons, toggles, cards). */
  springConfig: { type: 'spring' as const, stiffness: 300, damping: 24 },
  
  /** Larger movements (tab panels, modals). */
  gentleSpring: { type: 'spring' as const, stiffness: 120, damping: 20 },
} as const;

// ─────────────────────────────────────────────
// DURATIONS (in milliseconds)
// ─────────────────────────────────────────────

export const duration = {
  /** Hover color changes, active states */
  instant: 100,
  
  /** Button feedback, icon rotations, tooltip show/hide */
  micro: 200,
  
  /** Nav transitions, dropdown open/close, small reveals */
  fast: 300,
  
  /** Section reveals, card entrances (CURRENT DEFAULT) */
  medium: 500,
  
  /** Hero text, large reveals, dramatic moments */
  slow: 800,
  
  /** Founder story paragraphs (emotionally paced) */
  narrative: 600,
  
  /** Number count-up animations */
  count: 1500,
} as const;

// ─────────────────────────────────────────────
// STAGGER INTERVALS (in milliseconds)
// ─────────────────────────────────────────────

export const stagger = {
  /** Bullet points, icon lists, rapid sequences */
  tight: 50,
  
  /** Cards in a grid, table rows */
  regular: 100,
  
  /** Feature sections, larger content blocks */
  relaxed: 150,
  
  /** Founder story paragraphs (emotionally paced) */
  narrative: 600,
} as const;

// ─────────────────────────────────────────────
// DISTANCES (in pixels)
// ─────────────────────────────────────────────

export const distance = {
  /** Page transitions, small UI shifts */
  subtle: 8,
  
  /** Section content reveals (CURRENT DEFAULT) */
  standard: 20,
  
  /** Hero elements, first-impression content */
  dramatic: 40,
} as const;

// ─────────────────────────────────────────────
// COMMON ANIMATION VARIANTS
// ─────────────────────────────────────────────

export const variants = {
  /** Standard fade-up for section content */
  fadeUp: {
    initial: { opacity: 0, y: distance.standard },
    animate: { opacity: 1, y: 0 },
    transition: { duration: duration.medium / 1000, ease: easing.enterEase },
  },
  
  /** Dramatic fade-up for hero elements */
  fadeUpDramatic: {
    initial: { opacity: 0, y: distance.dramatic },
    animate: { opacity: 1, y: 0 },
    transition: { duration: duration.slow / 1000, ease: easing.dramaticEase },
  },
  
  /** Fade-in with scale for buttons */
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: spring.springConfig,
  },
  
  /** Slide from left */
  slideFromLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: duration.medium / 1000, ease: easing.enterEase },
  },
  
  /** Slide from right */
  slideFromRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: duration.medium / 1000, ease: easing.enterEase },
  },
  
  /** Icon spring-in */
  iconSpring: {
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    transition: spring.springConfig,
  },
} as const;

// ─────────────────────────────────────────────
// PAGE TRANSITION VARIANTS
// ─────────────────────────────────────────────

export const pageTransition = {
  exit: {
    opacity: 0,
    y: -distance.subtle,
    transition: { duration: 0.25, ease: easing.exitEase },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easing.dramaticEase, delay: 0.05 },
  },
  initial: {
    opacity: 0,
    y: 12,
  },
} as const;

// ─────────────────────────────────────────────
// NAVIGATION SCROLL THRESHOLDS
// ─────────────────────────────────────────────

export const navScroll = {
  /** Scroll position where nav starts transitioning */
  startThreshold: 0,
  
  /** Scroll position where nav is fully transitioned */
  endThreshold: 80,
  
  /** Scroll position where nav reverts (hysteresis) */
  revertThreshold: 20,
} as const;

// ─────────────────────────────────────────────
// REDUCED MOTION SUPPORT
// ─────────────────────────────────────────────

export function getReducedMotionVariant(variant: any) {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      initial: variant.animate,
      animate: variant.animate,
      transition: { duration: 0 },
    };
  }
  return variant;
}

export function shouldReduceMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
