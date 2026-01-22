# GSAP Animation Performance Optimization Guide

## Issues Fixed

### 1. **Flickering & Jerking Problems**

Your animations had several performance bottlenecks:

- ❌ **Multiple individual timelines** instead of batched animations
- ❌ **Missing GPU acceleration flags** (`force3D`, `will-change`)
- ❌ **Suboptimal scrub value** (0.7 instead of 1 for smooth scrolling)
- ❌ **No `anticipatePin` flag** which causes jank during pinned sections
- ❌ **Missing `invalidateOnRefresh`** on scroll triggers

---

## Solutions Implemented

### 1. **GPU Acceleration** ✅

Added `force3D: true` to all animations:

```javascript
gsap.defaults({
  force3D: true, // Forces 3D transforms = better performance
  overwrite: "auto",
});
```

### 2. **Pre-animation Setup**

Elements are prepared before animation starts:

```javascript
gsap.set(element, {
  force3D: true,
  willChange: "transform", // Tells browser to optimize
});
```

### 3. **Batched Animations**

Instead of multiple `gsap.from()` calls, animations are combined into timelines:

```javascript
// BEFORE (Jittery)
gsap.from(element1, {...});
gsap.from(element2, {...});
gsap.from(element3, {...});

// AFTER (Smooth)
const tl = gsap.timeline();
tl.from(element1, {...}, 0);
tl.from(element2, {...}, 0);
tl.from(element3, {...}, 0);
```

### 4. **Improved Scroll Trigger Settings**

```javascript
scrollTrigger: {
  scrub: 1,              // Smoother than 0.7
  anticipatePin: 1,      // Prevents jank when pinning
  invalidateOnRefresh: true, // Recalculates on window resize
  pin: true
}
```

### 5. **CSS Optimizations**

Added to `index.css`:

```css
.gsap-animatable {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
```

---

## Performance Checklist

### ✅ What to Do:

1. **Use `force3D: true`** for all animations
2. **Batch related animations** into one timeline
3. **Set `willChange`** on frequently animated elements
4. **Use `scrub: 1`** for smooth scroll-linked animations
5. **Enable `anticipatePin`** when pinning sections
6. **Clean up animations** with `ctx.revert()` (already done)
7. **Test on lower-end devices** to verify smoothness
8. **Monitor frame rate** (DevTools → Performance tab)

### ❌ What to Avoid:

1. **Multiple overlapping ScrollTriggers** on same element
2. **Animating too many properties** at once (limit to position, opacity, scale)
3. **Using high stagger values** with many elements
4. **Animating filter effects** (use opacity/scale instead)
5. **Creating new GSAP contexts** without cleanup

---

## Testing & Verification

### Run Performance Test:

1. Open Chrome DevTools (F12)
2. Go to **Performance** tab
3. Record animation while scrolling
4. Check for **60 FPS** (green line should be smooth)
5. Look for **jank** (red spikes = problems)

### Expected Results After Optimization:

- ✅ Smooth scrolling (60 FPS on most devices)
- ✅ No flickering or jumping
- ✅ Responsive animations
- ✅ Lower CPU/GPU usage

---

## Files Modified

1. **[src/components/home/Hero.tsx](src/components/home/Hero.tsx)**
   - ✅ Added `force3D: true` to all animations
   - ✅ Batched intro animations into one timeline
   - ✅ Added `will-change` CSS property via GSAP
   - ✅ Improved scroll trigger settings

2. **[src/pages/ContactPage.tsx](src/pages/ContactPage.tsx)**
   - ✅ Added `force3D: true` globally
   - ✅ Pre-set GPU acceleration on elements
   - ✅ Added `invalidateOnRefresh` to scroll triggers
   - ✅ Optimized particle animations

3. **[src/index.css](src/index.css)**
   - ✅ Added GPU acceleration utilities
   - ✅ Added `.gsap-animatable` helper class

---

## Advanced Tips

### For Even Better Performance:

1. **Reduce animation count** during initial load
2. **Use `prefers-reduced-motion`** media query (already implemented)
3. **Lazy-load animations** for off-screen elements
4. **Use `gsap.to()` instead of `gsap.from()`** when possible
5. **Limit particle animations** to 20-30 max
6. **Use `ease: "none"`** for scrub-based animations

### Monitor Memory Usage:

```javascript
// Check animation count
console.log(gsap.getTweensOf("*").length);
```

---

## Troubleshooting

| Issue                       | Solution                                      |
| --------------------------- | --------------------------------------------- |
| Still flickering            | Increase `scrub` value to 1.5                 |
| Animations lag              | Reduce stagger duration (0.05 instead of 0.1) |
| Performance drops on scroll | Disable some animations via media query       |
| Animations not smooth       | Ensure `force3D: true` is set                 |
| Jump/jank on pin            | Add `anticipatePin: 1`                        |

---

## Resources

- [GSAP Performance Best Practices](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Chrome DevTools Performance Guide](https://developer.chrome.com/docs/devtools/performance/)
- [Transform vs Position Animation](https://web.dev/animations-guide/)
- [GPU Acceleration in Browsers](https://web.dev/articles/animations-guide/#javascript)

---

## Next Steps

1. Test animations in DevTools Performance tab
2. If still issues, adjust `scrub` value (1 → 1.5 → 2)
3. Profile memory usage for memory leaks
4. Consider reducing animation complexity on mobile devices

**Happy animating! 🚀**
