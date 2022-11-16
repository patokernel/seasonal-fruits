import '../scss/components/_Fruit.scss'
import { gsap } from 'gsap';
import { useEffect } from 'react';

const Fruit = ({ fruta, especie, familia, origen, descripcion, produccion, micronutrientes }: any) => {

  useEffect(() => {

    gsap.set('.information', { yPercent: 120 });

    gsap.utils.toArray('.container').forEach((container: any) => {
      let info = container.querySelector('.information'),
        silhouette = container.querySelector('.silhouette'),
        tl = gsap.timeline({ paused: true });

      tl.to(info, { yPercent: 0 })
        .to(silhouette, { opacity: 1 }, 0);

      container.addEventListener('scroll', () => tl.play());
      container.addEventListener('mouseout', () => tl.reverse());
    });

  })

  return (
    <div className='container'>
      <div className='fruit-img' style={{ 'backgroundImage': 'url("https://www.pngall.com/wp-content/uploads/2016/04/Watermelon-Free-PNG-Image.png")' }}></div>
      <div className='card' style={{ 'background': 'url("https://www.publicdomainpictures.net/pictures/50000/velka/tree-1369547920oel.jpg") no-repeat center' }}>
        <h1 className='fruit-title'>{fruta}</h1>
        <div className='more-info'>
          <span>⏬️</span>
        </div>
        <div className='information' id='fruit-info'>
          <h3 id='fruit-name'>{especie}</h3>
          <div className='table-container'>
            <table>
              <tbody>
                <tr>
                  <th>Familia</th>
                  <td>{familia}</td>
                </tr>
                <tr>
                  <th>Especie</th>
                  <td>{especie}</td>
                </tr>
                <tr>
                  <th>Origen</th>
                  <td>{origen}</td>
                </tr>
                <tr>
                  <th>Descripción</th>
                  <td>{descripcion}</td>
                </tr>
                <tr>
                  <th>Producción</th>
                  <td>{produccion}</td>
                </tr>
                <tr>
                  <th>Micro-nutrientes</th>
                  <td>{micronutrientes}</td>
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