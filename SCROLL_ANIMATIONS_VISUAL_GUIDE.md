# Scroll Animations Visual Guide

## Animation Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        USER SCROLLS DOWN                     │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│            Element Approaches Viewport                       │
│    (User scrolls, element gets closer to screen)           │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│        IntersectionObserver Detects Entry                   │
│            (Element 10% visible - threshold)                │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│          hasTriggered = true                                │
│          (State change in React)                            │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│      CSS Transition Applies                                 │
│      opacity-0 → opacity-100                                │
│      translate-y-10 → translate-y-0                         │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│    1000ms Smooth Animation                                  │
│    Element fades in + slides up                             │
│    Duration: 1 second (1000ms)                              │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│              ✨ ANIMATION COMPLETE ✨                        │
│         Element fully visible and in place                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Stagger Animation Timeline

### With 4 Items (Cards)

```
Time ──────────────────────────────────────────────── 1000ms

Card 0:  ████████████████████ (starts at 0ms)
         │
         └─ delay: 0ms

Card 1:  ░░███████████████████ (starts at 100ms)
         │
         └─ delay: 100ms

Card 2:  ░░░░█████████████████ (starts at 200ms)
         │
         └─ delay: 200ms

Card 3:  ░░░░░░███████████████ (starts at 300ms)
         │
         └─ delay: 300ms

░ = waiting
█ = animating
```

**Result**: Cards reveal sequentially, 100ms apart for smooth effect

---

## State Transitions

### Initial State (Before Scroll)

```
┌─────────────────────────────────┐
│         Element Hidden          │
├─────────────────────────────────┤
│ opacity: 0                      │
│ transform: translateY(40px)     │
│ (40px below final position)     │
│ (completely transparent)        │
└─────────────────────────────────┘
```

### Transition State (During Animation)

```
┌─────────────────────────────────┐
│      Animating (1000ms)         │
├─────────────────────────────────┤
│ opacity: 0 → 100                │
│ transform: translateY(40px) →   │
│           translateY(0)         │
│ (smooth easing over 1 second)   │
└─────────────────────────────────┘
```

### Final State (After Scroll)

```
┌─────────────────────────────────┐
│       Element Visible           │
├─────────────────────────────────┤
│ opacity: 100                    │
│ transform: translateY(0)        │
│ (fully visible at final pos)    │
│ (stays visible - not repeating) │
└─────────────────────────────────┘
```

---

## Component Animation Patterns

### Pattern 1: Title → Content

```
┌─ Section ─────────────────────────┐
│                                   │
│  ┌─ Title ─────────┐              │
│  │ opacity: 0→100  │ (0ms)        │
│  └─────────────────┘              │
│         ↓                         │
│  ┌─ Description ───┐              │
│  │ opacity: 0→100  │ (150ms)      │
│  └─────────────────┘              │
│         ↓                         │
│  ┌─ Content Grid ──┐              │
│  │  ┌─ Card 1 ──┐  │              │
│  │  │ (200ms)   │  │              │
│  │  └───────────┘  │              │
│  │  ┌─ Card 2 ──┐  │              │
│  │  │ (300ms)   │  │              │
│  │  └───────────┘  │              │
│  └─────────────────┘              │
│                                   │
└───────────────────────────────────┘
```

### Pattern 2: Grid Items with Stagger

```
┌─ Section ──────────────────────────────┐
│                                        │
│  ┌─ Card 1 ──┐  ┌─ Card 2 ──┐  ...    │
│  │ delay: 0ms│  │ delay:100ms│         │
│  └───────────┘  └───────────┘         │
│       ↓              ↓                 │
│  ┌─ Card 3 ──┐  ┌─ Card 4 ──┐  ...    │
│  │ delay:200ms│  │ delay:300ms│        │
│  └───────────┘  └───────────┘         │
│       ↓              ↓                 │
│      ...            ...               │
│                                        │
└────────────────────────────────────────┘
```

---

## Timing Chart

```
Delay (ms)  Use Case           Components
─────────────────────────────────────────
0           Heading            ServicesSnapshot, Team, WorkPreview
50          Accordion items    FAQ (rapid)
75          Long lists         (if 6+ items)
100         Card grid          ServicesSnapshot (9 cards)
100         Team members       Team carousel
150         Section elements   FinalCTA sub-sections
200         Images             WorkPreview
300         Buttons            FinalCTA, ProcessSection
400         Final CTA button   FinalCTA
600         Benefits section   ProcessSection
```

---

## Viewport Trigger Threshold

```
                              ← User's viewport (screen)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                           Scroll down ↓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           10% of element visible (threshold: 0.1)
                        ↓ TRIGGERS ANIMATION
┌──────────────────────┐
│                      │
│      ELEMENT         │ ← 10% visible, animation starts
│      CONTENT         │
│                      │
└──────────────────────┘

Animation progress: 0% ─────────── 100%
Time: 0ms ────────────── 1000ms
```

---

## CSS Animation States

### Class Application Timeline

```
On Mount:
hasTriggered = false
├─ opacity-0 (transparent)
├─ translate-y-10 (40px down)
└─ transition-all duration-1000 (ready to animate)

On Scroll Into View:
hasTriggered = true
├─ opacity-100 (visible)
├─ translate-y-0 (normal position)
└─ Animation runs over 1000ms

Complete:
└─ Classes remain, stays visible
   (observer unobserves - no repeat)
```

---

## Multi-Step Animation Example (FinalCTA)

```
Timeline:    0ms         100ms       200ms       300ms       400ms
             │           │           │           │           │
Opacity:     ███████████ ███████████ ███████████ ███████████ ███████████
             │           │           │           │           │
Badge:       ███
             │
Heading:                 ███
                         │
Subheading:                         ███
                                    │
Description:                                    ███
                                               │
Button:                                                     ███
                                                          │
             0%          10%         20%         30%       40%
             └────────────────────────────────────────────┘
                         1000ms total duration
```

---

## Performance Comparison

### ✅ Good (GPU Accelerated)

```
❯ opacity         ← CSS property (fast)
❯ transform       ← GPU accelerated
  └─ translateY   ← 60fps smooth
  └─ scale        ← 60fps smooth

Total: 1ms reflow time
```

### ❌ Avoid (CPU Heavy)

```
✗ left/right      ← Triggers reflow
✗ width/height    ← Triggers reflow
✗ rotation        ← Heavy computation
✗ box-shadow      ← Expensive rendering
✗ filter          ← GPU intensive

Total: 10-20ms reflow time
```

---

## Mobile vs Desktop

```
DESKTOP (1920px)
┌────────────────────────────────────┐
│  ┌──────┬──────┬──────────────┐    │
│  │Card 1│Card 2│Card 3        │ ✨ │ ← Stagger visible
│  └──────┴──────┴──────────────┘    │
│  Animation delay visible            │
└────────────────────────────────────┘

MOBILE (375px)
┌─────────────────┐
│  ┌───────────┐  │
│  │ Card 1    │ ✨│ ← Faster perception
│  └───────────┘  │   (less items visible)
│  ┌───────────┐  │
│  │ Card 2    │ ✨│
│  └───────────┘  │
│  ┌───────────┐  │
│  │ Card 3    │ ✨│
│  └───────────┘  │
└─────────────────┘
```

---

## Browser Paint Timeline

```
Event                    Action
─────────────────────────────────────────────────
User scrolls             → Passive event listener fires
                         → Measure scroll position
                         → Check IntersectionObserver

Element at threshold     → Entry callback fires
                         → setHasTriggered(true)
                         → React re-renders

Classes change           → Browser: hasTriggered ? ... : ...
                         → New classes applied to DOM

Paint cycle begins       → Calculate new positions
                         → Apply transform: translateY()
                         → Apply opacity change

Animation runs (1000ms)  → Every frame (60fps = ~16ms)
                         → Browser interpolates values
                         → GPU renders transforms
                         → Display updates

Complete                 → Observer unobserves
                         → Element stays visible
                         → No repeated animations
```

---

## Color-Coded Animation Phases

```
Phase 1: READY
┌──────────────────────────────────┐
│ ░ Element below viewport         │ (gray = waiting)
│ ░ Hidden (opacity: 0)            │
│ ░ Displaced down (translateY)    │
└──────────────────────────────────┘

Phase 2: TRIGGER
┌──────────────────────────────────┐
│ █ Element entering viewport      │ (yellow = starting)
│ █ IntersectionObserver fires     │
│ █ hasTriggered = true            │
└──────────────────────────────────┘

Phase 3: ANIMATE
┌──────────────────────────────────┐
│ ███ Animating (1000ms)           │ (orange = active)
│ ███ Opacity: 0 → 100             │
│ ███ TranslateY: 40px → 0         │
└──────────────────────────────────┘

Phase 4: COMPLETE
┌──────────────────────────────────┐
│ ✓ Animation done                 │ (green = complete)
│ ✓ Element visible (opacity: 100) │
│ ✓ At final position (translateY) │
│ ✓ Stays visible (not repeating)  │
└──────────────────────────────────┘
```

---

## Quick Visual Reference

```
Initial State       →    Animation       →    Final State
─────────────────        ────────────         ──────────

▯ opacity: 0      →      ▮▮▮▮▮▮▮▮▮▮▮    →     ● opacity: 100
  ↓ down 40px            ↑ moving up            ↑ in place

0ms idle           →      0-1000ms active  →    1000ms+ visible
                         (CSS transition)       (stays visible)
```

---

**These visual guides help understand the animation flow, timing, and implementation.**

See documentation for code examples and technical details.
