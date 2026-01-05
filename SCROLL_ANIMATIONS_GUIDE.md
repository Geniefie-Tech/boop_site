# Scroll Animations Implementation Guide

## Overview

This document explains the scroll animation system implemented across the Boop Org home page using IntersectionObserver and CSS transitions.

## Animation Pattern

### Flow

```
Element hidden (opacity: 0, transform: translateY(20px))
↓
User scrolls
↓
Element enters viewport (threshold: 0.1)
↓
IntersectionObserver triggers
↓
State changes → hasTriggered = true
↓
CSS transition runs (duration: 1000ms)
↓
Classes applied → opacity-100 translate-y-0
↓
Staggered delays for children (0ms, 100ms, 150ms, etc.)
```

## Hooks Used

### 1. `useScrollTrigger()`

Triggers animation when element enters viewport.

```typescript
const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.1 });
```

**Returns:**

- `elementRef`: Ref to attach to section
- `hasTriggered`: Boolean state (true when visible)

**Options:**

- `threshold`: 0.1 (10% of element visible to trigger)

---

### 2. `useCountAnimation()`

Animates numbers with increment effect.

```typescript
const animatedValue = useCountAnimation(target, duration, shouldStart);
```

**Parameters:**

- `target`: Final number value
- `duration`: Animation duration in ms (default: 2000)
- `shouldStart`: Boolean to control animation (typically: hasTriggered)

**Example:**

```typescript
const count = useCountAnimation(500, 2500, hasTriggered);
return <span>{count}+</span>;
```

---

### 3. `useStaggerChildren()`

Helper for staggered animation delays.

```typescript
const { getItemDelay, getItemClass, getItemStyle } = useStaggerChildren(
  shouldAnimate,
  itemDelay // default: 150ms
);
```

---

## Implementation Examples

### Basic Section Animation

```tsx
import { useScrollTrigger } from "../../hooks/useScrollAnimation";

export const MySection = () => {
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.1 });

  return (
    <section ref={elementRef} className="py-24">
      {/* Header Animation */}
      <div
        className={`transition-all duration-1000 ${
          hasTriggered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2>Title</h2>
        <p>Description</p>
      </div>
    </section>
  );
};
```

### Staggered Children Animation

```tsx
{
  items.map((item, index) => (
    <Card
      key={index}
      className={`transition-all duration-1000 ${
        hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: hasTriggered ? `${index * 100}ms` : "0ms",
      }}
    >
      {item.content}
    </Card>
  ));
}
```

### Multi-Step Animation

```tsx
{
  /* Heading - 0ms delay */
}
<h2
  className="... transition-all duration-1000"
  style={{ transitionDelay: hasTriggered ? "0ms" : "0ms" }}
>
  Title
</h2>;

{
  /* Subheading - 150ms delay */
}
<p
  className="... transition-all duration-1000"
  style={{ transitionDelay: hasTriggered ? "150ms" : "0ms" }}
>
  Subtitle
</p>;

{
  /* Button - 300ms delay */
}
<button
  className="... transition-all duration-1000"
  style={{ transitionDelay: hasTriggered ? "300ms" : "0ms" }}
>
  Action
</button>;
```

---

## Components with Scroll Animations

### ✅ Implemented Components

#### 1. **ServicesSnapshot**

- Grid of 9 service cards
- Staggered delays: `index * 100ms`
- Header animation: fade + slide up
- Button animation: delayed by 600ms

#### 2. **Team**

- Carousel with team members
- Individual card animations
- Staggered delays: `index * 100ms`

#### 3. **WorkPreview**

- 3 image cards with parallax on hover
- Header section with fade in
- Images animate: `delay: 200ms`

#### 4. **Impact**

- 4 metric cards with counter animation
- Each counter uses `useCountAnimation()`
- Auto-animates numbers when visible

#### 5. **ProcessSection**

- 3-step process cards
- Connection line animation
- Benefits section at bottom
- Staggered: `delay: 600ms`

#### 6. **FinalCTA**

- Badge: `delay: 0ms` (scale-in)
- Heading: `delay: 100ms`
- Subheading: `delay: 200ms`
- Description: `delay: 300ms`
- Buttons: `delay: 400ms`

#### 7. **FAQ**

- Accordion items with stagger
- Delays: `index * 50ms`
- Smooth open/close with ease

#### 8. **StatisticsSection**

- Animated counters
- Parallel animation with title

---

## CSS Classes Used

### Opacity & Position

- `opacity-0` / `opacity-100` - Fade in/out
- `translate-y-10` / `translate-y-0` - Slide up 40px
- `translate-x-10` / `translate-x-0` - Slide horizontally
- `scale-95` / `scale-100` - Scale in

### Transitions

- `transition-all` - All property changes
- `duration-1000` - 1 second duration
- `duration-700` - 0.7 second duration

---

## Best Practices

### ✅ DO:

1. Use `opacity` and `translateY` only (performance)
2. Apply `ref={elementRef}` to section wrapper
3. Use 1000ms duration for smooth feel
4. Stagger children with `index * 100ms` to `index * 150ms`
5. Test on mobile (might need longer delays)
6. Use `threshold: 0.1` for early trigger

### ❌ DON'T:

1. Avoid `rotate`, `scale`, `blur` in scroll animations
2. Don't use multiple IntersectionObservers on same element
3. Avoid very short delays (<50ms)
4. Don't animate more than 10 items staggered
5. Avoid triggering animations multiple times

---

## Animation Delay Reference

### Common Patterns:

```typescript
// For 3-4 items
const delay = index * 100; // 0ms, 100ms, 200ms, 300ms

// For longer lists (6+ items)
const delay = index * 75; // Shorter interval

// For hero sections
const delay = index * 150; // Longer for emphasis (0ms, 150ms, 300ms)

// For cards grid
const delay = index * 100; // Standard (0ms, 100ms, 200ms, ...)
```

---

## Performance Tips

1. **Lazy Load**: Use `loading="lazy"` on images
2. **GPU Acceleration**: `will-change: transform`
3. **Reduce Motion**: Check `prefers-reduced-motion`
4. **Threshold**: Use `0.1` to `0.2` for best feel
5. **Duration**: Keep to 1000ms or less

---

## Testing Checklist

- [ ] Elements hidden initially
- [ ] Animation triggers on scroll
- [ ] Children stagger correctly
- [ ] No jank or performance issues
- [ ] Mobile responsiveness
- [ ] Works on all browsers
- [ ] Accessible with keyboard nav

---

## File References

### Hooks

- Location: `src/hooks/useScrollAnimation.ts`
- Exports: `useScrollTrigger`, `useCountAnimation`, `useStaggerChildren`

### Animated Components

- `src/components/home/ServicesSnapshot.tsx`
- `src/components/home/Team.tsx`
- `src/components/home/WorkPreview.tsx`
- `src/components/home/Impact.tsx`
- `src/components/home/ProcessSection.tsx`
- `src/components/home/FinalCTA.tsx`
- `src/components/home/FAQ.tsx`
- `src/components/home/StatisticsSection.tsx`

---

## Troubleshooting

### Animation not triggering?

- Check `ref={elementRef}` is attached to section
- Verify `hasTriggered` is used in className
- Ensure `threshold` is set appropriately

### Janky animation?

- Use `will-change: transform` for GPU acceleration
- Avoid animating too many properties
- Reduce `itemCount` in stagger

### Items appearing before animation?

- Check initial state has `opacity-0`
- Ensure `hasTriggered ? ... : ...` structure

---

## Next Steps

1. Test all animations on mobile
2. Consider `prefers-reduced-motion` media query
3. Add scroll analytics to track engagement
4. Optimize for different viewport sizes
5. Consider theme variants (dark/light)
