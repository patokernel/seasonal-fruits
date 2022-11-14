import '../scss/components/_Navbar.scss'
import { gsap, Sine } from 'gsap'
import { useEffect } from 'react'

const Navbar = () => {

  useEffect(() => {

    const navlinks: NodeListOf<HTMLSpanElement> = document.querySelectorAll("nav span")

    gsap.set('.circle1', { transformOrigin: "50%" })
    gsap.set('.circle2', { transformOrigin: "50%" })

    navlinks.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        let tl1 = gsap.timeline({ paused: true })
        let tl2 = gsap.timeline({ paused: true, delay: .1 })
        tl1.to('.circle1', {
          x: 100 * index,
          duration: 0.5,
          ease: Sine.easeInOut
        })

        tl1.to('.circle1', {
          scaleX: 1.2,
          scaleY: 0.8,
          duration: 0.25,
          ease: Sine.easeInOut
        }, 0)

        tl1.to('.circle1', {
          scaleX: 1,
          scaleY: 1,
          duration: 0.25,
          ease: Sine.easeInOut
        }, 0.25)

        tl2.to('.circle2', {
          x: 100 * index,
          duration: 0.5,
          ease: Sine.easeInOut
        })

        tl2.to('.circle2', {
          scaleX: 1.2,
          scaleY: 0.8,
          duration: 0.25,
          ease: Sine.easeInOut
        }, 0)

        tl2.to('.circle2', {
          scaleX: 1,
          scaleY: 1,
          duration: 0.25,
          ease: Sine.easeInOut
        }, 0.25)

        tl1.play()
        tl2.play()

        e.preventDefault()
      })
    })

  }, [])

  return (
    <div className="nav-container">
      <h1>Frutas por Temporada</h1>
      <div className='seasons-container'>
        <svg width="500" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <filter id="gooFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" />
              <feBlend in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
          <g filter="url(#gooFilter)">
            <circle className="circle1" cx="50" cy="50" r="40" />
            <circle className="circle2" cx="50" cy="50" r="40" />
          </g>
        </svg>
        <nav>
          <span>
            <div>☀️</div>
          </span>
          <span>
            <div>🌷</div>
          </span>
          <span>
            <div>🍂</div>
          </span>
          <span>
            <div>❄️</div>
          </span>
        </nav>
      </div>
    </div>
  )
}

export default Navbar