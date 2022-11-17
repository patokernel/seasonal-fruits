import '../scss/components/_Seasons.scss'
import { gsap, Sine } from 'gsap'
import { Fragment, useEffect } from 'react'
import SummerFruits from './SummerFruits'

const Seasons = () => {

  useEffect(() => {

    const navlinks = document.querySelectorAll('nav span')
    const body = document.querySelector('body')
    const summerContainer = document.getElementById('summer-container')
    const springContainer = document.getElementById('spring-container')
    const fallContainer = document.getElementById('fall-container')
    const winterContainer = document.getElementById('winter-container')

    gsap.set('.circle1', { transformOrigin: '50%' })
    gsap.set('.circle2', { transformOrigin: '50%' })

    navlinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
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

    if (body && summerContainer && springContainer && fallContainer && winterContainer != null) {

      springContainer.style.display = 'none'
      winterContainer.style.display = 'none'
      fallContainer.style.display = 'none'

      navlinks[0].addEventListener('click', () => {
        body.style.background = 'linear-gradient(to bottom, #fff200, #ff6f0f) no-repeat fixed center'
        summerContainer.style.display = 'block'
        springContainer.style.display = 'none'
        winterContainer.style.display = 'none'
        fallContainer.style.display = 'none'

      })
      navlinks[1].addEventListener('click', () => {
        body.style.background = 'linear-gradient(to bottom, #fff200, #22b14c) no-repeat fixed center'
        springContainer.style.display = 'block'
        summerContainer.style.display = 'none'
        winterContainer.style.display = 'none'
        fallContainer.style.display = 'none'

      })
      navlinks[2].addEventListener('click', () => {
        body.style.background = 'linear-gradient(to bottom, #f6f1b5, #ae4f0c) no-repeat fixed center'
        fallContainer.style.display = 'block'
        summerContainer.style.display = 'none'
        springContainer.style.display = 'none'
        winterContainer.style.display = 'none'
      })
      navlinks[3].addEventListener('click', () => {
        body.style.background = 'linear-gradient(to bottom, #d7ccdf, #024f59) no-repeat fixed center'
        winterContainer.style.display = 'block'
        summerContainer.style.display = 'none'
        springContainer.style.display = 'none'
        fallContainer.style.display = 'none'
      })

    }

  }, [])

  return (
    <Fragment>
      <div className='nav-container'>
        <h1>Frutas por Temporada</h1>
        <div className='seasons-container'>
          <svg width='500' height='100' viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'>
            <defs>
              <filter id='gooFilter'>
                <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
                <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8' />
                <feBlend in='SourceGraphic' in2='goo' operator='atop' />
              </filter>
            </defs>
            <g filter='url(#gooFilter)'>
              <circle className='circle1' cx='50' cy='50' r='40' />
              <circle className='circle2' cx='50' cy='50' r='40' />
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
      <div className='fruits-container'>
        <div id='summer-container'>
          <h2>Frutas de Verano</h2>
          <div className="season-fruits">
            <SummerFruits />
          </div>
        </div>
        <div id='spring-container'>
          <h2>Frutas de Primavera</h2>
          <div className="season-fruits">
          </div>
        </div>
        <div id='fall-container'>
          <h2>Frutas de Otoño</h2>
          <div className="season-fruits">

          </div>
        </div>
        <div id='winter-container'>
          <h2>Frutas de Invierno</h2>
          <div className="season-fruits">

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Seasons