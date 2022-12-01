import '../scss/components/_Fruit.scss'
import { gsap } from 'gsap';
import { useEffect } from 'react';

interface Props {
  fruitImg: {
    backgroundImage: string
  }
  plantImg: {
    backgroundImage: string
  }
  fruitName: string
  species: string
  family: string
  origin: string
  description: string
  production1: string
  production2: string
  production3: string
  micronutrient1: string
  micronutrient2: string
  micronutrient3: string
}

const Fruit = ({ fruitImg, plantImg, fruitName, species, family, origin, description, production1, production2, production3, micronutrient1, micronutrient2, micronutrient3 }: Props) => {

  useEffect(() => {

    gsap.set('.information', { yPercent: 100 });

    gsap.utils.toArray('.container').forEach((container: any) => {
      let info = container.querySelector('.information')
      let tl = gsap.timeline({ paused: true })
      tl.to(info, { yPercent: 0 })
      container.addEventListener('scroll', () => tl.play())
      container.addEventListener('scroll', () => tl.reverse())
    });

  })

  return (
    <div className='container'>
      <div className='fruit-img' style={fruitImg}></div>
      <div className='card' style={plantImg}>
        <h1 className='fruit-title'>{fruitName}</h1>
        <div className='more-info'>
          <span>⤵️</span>
        </div>
        <div className='information'>
          <h3 className='fruit-name'>{species}</h3>
          <div className='table-container'>
            <table>
              <tbody>
                <tr>
                  <th>Familia</th>
                  <td>{family}</td>
                </tr>
                <tr>
                  <th>Especie</th>
                  <td>{species}</td>
                </tr>
                <tr>
                  <th>Origen</th>
                  <td>{origin}</td>
                </tr>
                <tr>
                  <th>Descripción</th>
                  <td>{description}</td>
                </tr>
                <tr>
                  <th>Producción</th>
                  <td>1. {production1}<br />2. {production2}<br />3. {production3}</td>
                </tr>
                <tr>
                  <th>Micro-nutrientes</th>
                  <td>1. {micronutrient1}<br />2. {micronutrient2}<br />3. {micronutrient3}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Fruit