# Scroll Animations Quick Reference

## Copy-Paste Template

### Basic Animation (Header + Content)

```tsx
import { useScrollTrigger } from "../../hooks/useScrollAnimation";

export const MyComponent = () => {
  const { elementRef, hasTriggered } = useScrollTrigger({ threshold: 0.1 });

  return (
    <section ref={elementRef} className="py-24">
      {/* Header */}
      <div
        className={`text-center mb-12 transition-all duration-1000 ${
          hasTriggered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-white">Title</h2>
        <p className="text-gray-400">Description</p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`transition-all duration-1000 ${
              hasTriggered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: hasTriggered ? `${idx * 100}ms` : "0ms",
            }}
          >
            {/* Card content */}
          </div>
        ))}
      </div>
    </section>
  );
};
```

---

## Common Patterns

### 1️⃣ Single Element

```tsx
<div
  className={`transition-all duration-1000 ${
    hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  Content
</div>
```

### 2️⃣ Multiple Elements with Delays

```tsx
{
  elements.map((el, i) => (
    <div
      key={i}
      className="transition-all duration-1000"
      style={{
        opacity: hasTriggered ? 1 : 0,
        transform: hasTriggered ? "translateY(0)" : "translateY(40px)",
        transitionDelay: hasTriggered ? `${i * 150}ms` : "0ms",
      }}
    >
      {el}
    </div>
  ));
}
```

### 3️⃣ With Counter Animation

```tsx
const count = useCountAnimation(500, 2500, hasTriggered);

<div
  className={`transition-all duration-1000 ${
    hasTriggered ? "opacity-100" : "opacity-0"
  }`}
>
  <span className="text-4xl font-bold">{count}</span>
  <span>+ customers served</span>
</div>;
```

### 4️⃣ Staggered with Different Delays

```tsx
{
  /* Heading - 0ms */
}
<h2 style={{ transitionDelay: "0ms" }}>Title</h2>;

{
  /* Description - 150ms */
}
<p style={{ transitionDelay: "150ms" }}>Description</p>;

{
  /* Button - 300ms */
}
<button style={{ transitionDelay: "300ms" }}>Action</button>;
```

---

## Delay Values Guide

| Use Case     | Delay             | Example                              |
| ------------ | ----------------- | ------------------------------------ |
| Heading only | 0ms               | `style={{ transitionDelay: "0ms" }}` |
| 2 elements   | 0ms, 150ms        | Heading, then button                 |
| 3 elements   | 0ms, 150ms, 300ms | Title, text, button                  |
| 4 items      | index×100ms       | Cards grid                           |
| 6+ items     | index×75ms        | Long lists                           |
| Counters     | Auto triggered    | Use `useCountAnimation()`            |

---

## Class Cheat Sheet

### Initial (Hidden)

```
opacity-0        → transparent
translate-y-10   → 40px down
scale-95         → 95% size
```

### Animated (Visible)

```
opacity-100      → fully visible
translate-y-0    → normal position
scale-100        → normal size
```

### Transitions

```
transition-all       → all properties
duration-1000        → 1 second
duration-700         → 0.7 seconds
```

---

## Debug Tips

### Check if animation triggered

```tsx
console.log("Has Triggered:", hasTriggered);
// Should be false initially, true when scrolled to element
```

### Add visual indicator

```tsx
<div
  className={`border-2 ${hasTriggered ? "border-green-500" : "border-red-500"}`}
>
  {hasTriggered ? "✓ Animated" : "✗ Not animated"}
</div>
```

### Test delay order

```tsx
{
  items.map((item, i) => (
    <div style={{ transitionDelay: `${i * 100}ms` }}>
      Item {i} (delay: {i * 100}ms)
    </div>
  ));
}
```

---

## Performance Checklist

- [ ] Using `opacity` and `translate` only
- [ ] Duration is 1000ms or less
- [ ] Delays don't exceed 600ms
- [ ] Animating max 10 items per section
- [ ] `threshold` set to 0.1 or 0.2
- [ ] `ref={elementRef}` attached correctly
- [ ] No `will-change` on too many elements

---

## Common Issues & Fixes

### Problem: Animation doesn't trigger

**Fix**: Make sure `ref={elementRef}` is on the section wrapper, not child

### Problem: Items appear before animation

**Fix**: Check initial class has `opacity-0`

### Problem: Jank/stuttering

**Fix**: Use `will-change: transform` (sparingly), avoid animating too many items

### Problem: Delayed start

**Fix**: Reduce `threshold` value (0.1 vs 0.2)

### Problem: Animations repeat on scroll

**Fix**: Add `observer.unobserve(entry.target)` in hook (already done)

---

## Implementation Steps

1. Import hook

   ```tsx
   import { useScrollTrigger } from "../../hooks/useScrollAnimation";
   ```

2. Use hook in component

   ```tsx
   const { elementRef, hasTriggered } = useScrollTrigger();
   ```

3. Attach ref to section

   ```tsx
   <section ref={elementRef}>
   ```

4. Add classes to elements

   ```tsx
   className={`... ${
     hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
   }`}
   ```

5. Add stagger delays (optional)
   ```tsx
   style={{ transitionDelay: hasTriggered ? `${index * 100}ms` : "0ms" }}
   ```

Done! ✅

---

## Files to Reference

- **Hook Implementation**: `src/hooks/useScrollAnimation.ts`
- **Example 1**: `src/components/home/ServicesSnapshot.tsx` (grid)
- **Example 2**: `src/components/home/Team.tsx` (carousel)
- **Example 3**: `src/components/home/Impact.tsx` (counters)
- **Example 4**: `src/components/home/FAQ.tsx` (accordion)

---

## Need Help?

See full documentation: **`SCROLL_ANIMATIONS_GUIDE.md`**

Summary: **`SCROLL_ANIMATIONS_SUMMARY.md`**
