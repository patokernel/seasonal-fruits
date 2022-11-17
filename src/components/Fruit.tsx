import '../scss/components/_Fruit.scss'
import { gsap } from 'gsap';
import { useEffect } from 'react';

const Fruit = ({ fruitImg, plantImg, fruitName, species, family, origin, description, production, micronutrients }: any) => {

  useEffect(() => {

    gsap.set('.information', { yPercent: 100 });

    gsap.utils.toArray('.container').forEach((container: any) => {
      let info = container.querySelector('.information'),
        silhouette = container.querySelector('.silhouette'),
        tl = gsap.timeline({ paused: true });

      tl.to(info, { yPercent: 0 })
        .to(silhouette, { opacity: 1 }, 0);

      container.addEventListener('scroll', () => tl.play());
      container.addEventListener('scroll', () => tl.reverse());
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
        <div className='information' id='fruit-info'>
          <h3 id='fruit-name'>{species}</h3>
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
                  <td>{production}</td>
                </tr>
                <tr>
                  <th>Micro-nutrientes</th>
                  <td>{micronutrients}</td>
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