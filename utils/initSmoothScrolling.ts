import Lenis from '@studio-freight/lenis'
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const initSmoothScrolling = () => {
  if (typeof window === 'undefined') return
  // @ts-ignore
  if (window.lenis) return
  // @ts-ignore
  window.lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    smoothTouch: true,
  })
  // @ts-ignore
  window.lenis.on('scroll', () => ScrollTrigger.update())
  const scrollFn = (time: any) => {
    // @ts-ignore
    window.lenis.raf(time)
    requestAnimationFrame(scrollFn)
  }
  requestAnimationFrame(scrollFn)
}
