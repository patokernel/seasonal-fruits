import watermelon from '../assets/watermelon.png'
import watermelonPlant from '../assets/watermelon-plant.jpeg'
import melon from '../assets/melon.png'
import melonPlant from '../assets/melon-plant.jpeg'
import mango from '../assets/mango.png'
import mangoPlant from '../assets/mango-plant.jpeg'
import strawberry from '../assets/strawberry.png'
import strawberryPlant from '../assets/strawberry-plant.jpeg'
import raspberry from '../assets/raspberry.png'
import raspberryPlant from '../assets/raspberry-plant.jpeg'
import blackberry from '../assets/blackberry.png'
import blackberryPlant from '../assets/blackberry-plant.jpg'
import cherry from '../assets/cherry.png'
import cherryPlant from '../assets/cherry-plant.jpeg'
import blueberry from '../assets/blueberry.png'
import blueberryPlant from '../assets/blueberry-plant.jpeg'
import peach from '../assets/peach.png'
import peachPlant from '../assets/peach-plant.jpeg'
import fig from '../assets/fig.png'
import figPlant from '../assets/fig-plant.jpeg'
import banana from '../assets/banana.png'
import bananaPlant from '../assets/banana-plant.jpeg'
import plum from '../assets/plum.png'
import plumPlant from '../assets/plum-plant.jpeg'
import coconut from '../assets/coconut.png'
import coconutPlant from '../assets/coconut-plant.jpeg'
import pineapple from '../assets/pineapple.png'
import pineapplePlant from '../assets/pineapple-plant.jpeg'
import apple from '../assets/apple.png'
import applePlant from '../assets/apple-plant.jpeg'
import grape from '../assets/grape.png'
import grapePlant from '../assets/grape-plant.jpg'
import guava from '../assets/guava.png'
import guavaPlant from '../assets/guava-plant.jpg'
import avocado from '../assets/avocado.png'
import avocadoPlant from '../assets/avocado-plant.jpeg'
import quince from '../assets/quince.png'
import quincePlant from '../assets/quince-plant.jpg'
import lemon from '../assets/lemon.png'
import lemonPlant from '../assets/lemon-plant.jpeg'
import pear from '../assets/pear.png'
import pearPlant from '../assets/pear-plant.jpeg'

export const summerFruits = [
  {
    'fruitImg': { 'backgroundImage': `url('${watermelon}')` },
    'plantImg': { 'background': `url('${watermelonPlant}') no-repeat center` },
    'fruitName': 'Sandía',
    'species': 'Citrullus lanatus',
    'family': 'Cucurbitaceae',
    'origin': 'África',
    'description': 'Es grande (normalmente más de cuatro kilos), pepónide, carnoso y jugoso (más del 90% es agua), casi esférico, de textura lisa y sin porosidades, de color verde en dos o más tonos. La pulpa es de color rojo y de carne de sabor generalmente dulce.',
    'production1': '🇨🇳 China',
    'production2': '🇮🇷 Irán',
    'production3': '🇹🇷 Turquía',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina B5',
    'micronutrient3': 'Vitamina A'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${melon}')` },
    'plantImg': { 'background': `url('${melonPlant}') no-repeat center` },
    'fruitName': 'Melón',
    'species': 'Cucumis melo',
    'family': 'Cucurbitaceae',
    'origin': 'Mediterráneo oriental y Asia occidental',
    'description': 'Es una baya pepónide con forma desde esférica hasta elipsoidal. La epidermis puede ser blanca gris, verdosa o amarilla y de textura lisa, rugosa o reticulada. La pulpa es aromática, con textura suave y diferentes colores: amarillo, verde, rosado. En el centro hay una cavidad que contiene muchas semillas recubiertas de una sustancia pegajosa.',
    'production1': '🇨🇳 China',
    'production2': '🇹🇷 Turquía',
    'production3': '🇮🇷 Irán',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Potasio',
    'micronutrient3': 'Vitamina B6'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${mango}')` },
    'plantImg': { 'background': `url('${mangoPlant}') no-repeat center` },
    'fruitName': 'Mango',
    'species': 'Mangifera indica',
    'family': 'Anacardiaceae',
    'origin': 'Subcontinente indio e Indochina',
    'description': 'Es una drupa que puede ser fibrosa o no, siendo la variedad llamada mango de hilacha la que mayor cantidad de fibra contiene. Es una fruta normalmente de color verde en un principio, y amarillo, naranja e incluso rojo-granate cuando está madura, de sabor medianamente dulce.',
    'production1': '🇮🇳 India',
    'production2': '🇨🇳 China',
    'production3': '🇹🇭 Tailandia',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina B9',
    'micronutrient3': 'Vitamina B6'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${strawberry}')` },
    'plantImg': { 'background': `url('${strawberryPlant}') no-repeat center` },
    'fruitName': 'Frutilla',
    'species': 'Fragaria x ananassaa',
    'family': 'Rosaceae',
    'origin': 'Europa',
    'description': 'Puede ser esférica, cónica, ovoide, sub-globoso. Rojo o blanquecino. Las semillas se disponen en pequeñas excavaciones en el receptáculo.',
    'production1': '🇨🇳 China',
    'production2': '🇺🇸 EE.UU.',
    'production3': '🇲🇽 México',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Manganeso',
    'micronutrient3': 'Vitamina B9'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${raspberry}')` },
    'plantImg': { 'background': `url('${raspberryPlant}') no-repeat center` },
    'fruitName': 'Frambuesa',
    'species': 'Rubus idaeus',
    'family': 'Rosaceae',
    'origin': 'Europa y norte de Asia',
    'description': 'Son drupas pequeñas y redondeadas que contiene cada una de ellas una semilla, agrupándose en un pequeño receptáculo cónico. La piel que la recubre es de textura aterciopelada.',
    'production1': '🇷🇺 Rusia',
    'production2': '🇲🇽 México',
    'production3': '🇵🇱 Polonia',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina K',
    'micronutrient3': 'Hierro'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${blackberry}')` },
    'plantImg': { 'background': `url('${blackberryPlant}') no-repeat center` },
    'fruitName': 'Mora',
    'species': 'Morus nigra',
    'family': 'Moraceae',
    'origin': 'Sudoeste de Asia',
    'description': 'Su color es rojizo al inicio y cuando maduran su color es morado oscuro y el sabor más dulce, la composición del fruto es mencionada como polidrupa, son muchas drupas pequeñas que se agrupan en un racimo para tener una drupa completa, son duras y a la vez jugosas.',
    'production1': '🇺🇦 Ucrania',
    'production2': '🇨🇦 Canadá',
    'production3': '🇨🇳 China',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Manganeso',
    'micronutrient3': 'Vitamina K'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${cherry}')` },
    'plantImg': { 'background': `url('${cherryPlant}') no-repeat center` },
    'fruitName': 'Cereza',
    'species': 'Prunus avium',
    'family': 'Rosaceae',
    'origin': 'Europa y Asia occidental',
    'description': 'Es una drupa de color rojo negruzco, más o menos claro, o excepcionalmente amarillo. Es globosa o ligeramente oblonga; el carozo es esférico y liso. De sabor ligeramente ácido, es apreciadísimo fresco y en conserva.',
    'production1': '🇹🇷 Turquía',
    'production2': '🇺🇸 EE.UU.',
    'production3': '🇺🇿 Uzbekistán',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Potasio',
    'micronutrient3': 'Vitamina B6'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${blueberry}')` },
    'plantImg': { 'background': `url('${blueberryPlant}') no-repeat center` },
    'fruitName': 'Arándano',
    'species': 'Vaccinium corymbosum',
    'family': 'Ericaceae',
    'origin': 'EE.UU.',
    'description': 'Es una baya casi esférica, que dependiendo de la especie, puede variar en tamaño de 0,7 a 1,5 cm de diámetro, y en color desde azul claro hasta negro. La epidermis del fruto está cubierta por secreciones cerosas, que le dan una terminación muy atractiva, como en el caso de las ciruelas.',
    'production1': '🇺🇸 EE.UU.',
    'production2': '🇨🇦 Canadá',
    'production3': '🇲🇽 México',
    'micronutrient1': 'Vitamina K',
    'micronutrient2': 'Manganeso',
    'micronutrient3': 'Vitamina C'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${peach}')` },
    'plantImg': { 'background': `url('${peachPlant}') no-repeat center` },
    'fruitName': 'Durazno',
    'species': 'Prunus persica',
    'family': 'Rosaceae',
    'origin': 'Afganistán, China e Irán',
    'description': 'Contiene una única semilla encerrada en una cáscara dura, el «hueso». Esta fruta, normalmente de piel aterciopelada, posee una carne amarilla o blanquecina de sabor dulce y aroma delicado.',
    'production1': '🇨🇳 China',
    'production2': '🇪🇸 España',
    'production3': '🇮🇹 Italia',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina B6',
    'micronutrient3': 'Vitamina E'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${fig}')` },
    'plantImg': { 'background': `url('${figPlant}') no-repeat center` },
    'fruitName': 'Higo',
    'species': 'Ficus carica',
    'family': 'Moraceae',
    'origin': 'Asia sudoccidental',
    'description': 'Suelen medir entre 6 o 7 cm de largo y 4,5 a 5,5 cm de diámetro. Están cubiertos de una piel fina que da color a su exterior y según la variedad pueden ser de diferentes colores, desde el verde, morado o al negro. La pulpa con alto contenido energético es carnosa y de intenso sabor dulce.',
    'production1': '🇹🇷 Turquía',
    'production2': '🇪🇬 Egipto',
    'production3': '🇲🇦 Marruecos',
    'micronutrient1': 'Manganeso',
    'micronutrient2': 'Magnesio',
    'micronutrient3': 'Calcio'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${banana}')` },
    'plantImg': { 'background': `url('${bananaPlant}') no-repeat center` },
    'fruitName': 'Banana',
    'species': 'Musa x paradisiaca',
    'family': 'Musaceae',
    'origin': 'Región indomalaya',
    'description': 'El fruto es una falsa baya epígina de 7 a 30 cm de largo y hasta 5 de diámetro, que forma un racimo compacto. Está cubierta por un pericarpo coriáceo verde en el ejemplar inmaduro y amarillo intenso, rojo o bandeado verde y blanco al madurar. Es de forma lineal o falcada, entre cilíndrica y marcadamente angulosa según la variedad. La pulpa es blanca a amarilla, rica en almidón y dulce.',
    'production1': '🇮🇳 India',
    'production2': '🇨🇳 China',
    'production3': '🇵🇭 Filipinas',
    'micronutrient1': 'Vitamina B6',
    'micronutrient2': 'Vitamina C',
    'micronutrient3': 'Manganeso'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${plum}')` },
    'plantImg': { 'background': `url('${plumPlant}') no-repeat center` },
    'fruitName': 'Ciruela',
    'species': 'Prunus domestica',
    'family': 'Rosaceae',
    'origin': 'Cáucaso, Anatolia y Persia',
    'description': 'Están compuestas por un mesocarpio y un endocarpio, tienen una pulpa dura y jugosa, se puede consumir y mejor si el fruto está bien maduro, se vuelven más dulces. Cada fruto tiene su semilla o hueso en la parte interior.',
    'production1': '🇨🇳 China',
    'production2': '🇷🇴 Rumania',
    'production3': '🇷🇸 Serbia',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina K',
    'micronutrient3': 'Vitamina B3'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${coconut}')` },
    'plantImg': { 'background': `url('${coconutPlant}') no-repeat center` },
    'fruitName': 'Coco',
    'species': 'Cocos nucifera',
    'family': 'Arecaceae',
    'origin': 'Asia del Sur',
    'description': 'Es una drupa, cubierto de fibras, de 20-30 centímetros de longitud con forma ovoidal, pudiendo llegar a pesar hasta 2.5 kilogramos. Está formado por una cáscara externa amarillenta, correosa y fibrosa(exocarpo) de 4 o 5 centímetros de espesor con forma de pelos fuertemente adheridos a la nuez; una capa intermedia fina(mesocarpo) y otra más dura(endocarpo) que dispone de tres orificios próximos en disposición triangular, situados en el ápice, dos cerrados y el otro frente a la raicilla del embrión.',
    'production1': '🇮🇩 Indonesia',
    'production2': '🇵🇭 Filipinas',
    'production3': '🇮🇳 India',
    'micronutrient1': 'Hierro',
    'micronutrient2': 'Magnesio',
    'micronutrient3': 'Potasio'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${pineapple}')` },
    'plantImg': { 'background': `url('${pineapplePlant}') no-repeat center` },
    'fruitName': 'Ananá',
    'species': 'Ananas comosus',
    'family': 'Bromeliaceae',
    'origin': 'América del Sur',
    'description': 'Es una pequeña baya, que se fusiona tempranamente con las adyacentes en un sincarpio oinfrutescencia, grande y de forma ovoide. El corazón del sincarpo más fibroso se forma a partir deltallo axial engrosado, y las paredes del ovario, la base de la bráctea y los sépalos se transforman en una pulpa amarilla, apenas fibrosa. Es muy amarilla y tiene pinchos piel cerúlea y espinosa del fruto.',
    'production1': '🇨🇷 Costa Rica',
    'production2': '🇵🇭 Filipinas',
    'production3': '🇧🇷 Brasil',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Manganeso',
    'micronutrient3': 'Vitamina B6'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${apple}')` },
    'plantImg': { 'background': `url('${applePlant}') no-repeat center` },
    'fruitName': 'Manzana',
    'species': 'Malus domesticas',
    'family': 'Rosaceae',
    'origin': 'Tian Shan, frontera entre Kazajistán y China',
    'description': 'Es un pomo de 30-100 por 35-110 mm, globoso, con restos del cáliz en el ápice, verde, amarillo, rojizo, etc... con semillas de 7-8 por 4 mm. La del manzano silvestre se diferencia por un color verde amarillento en su piel y de sabor agrio.',
    'production1': '🇨🇳 China',
    'production2': '🇺🇸 EE.UU.',
    'production3': '🇵🇱 Polonia',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina B6',
    'micronutrient3': 'Fósforo'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${grape}')` },
    'plantImg': { 'background': `url('${grapePlant}') no-repeat center` },
    'fruitName': 'Uva',
    'species': 'Vitis vinifera',
    'family': 'Vitaceae',
    'origin': 'Cáucaso y Asia Occidental',
    'description': 'Son sembradas en viñas y crecen agrupadas en las parras de las vides entre seis y trescientas uvas por racimo. De pulpa blanca o púrpura y sabor dulce. Pueden ser negras, moradas, verdes, amarillas, doradas, púrpuras, rosadas, anaranjadas o blancas, aunque estas últimas son realmente verdes y evolutivamente proceden de las uvas rojas con la mutación de dos genes que hace que no desarrollen antocianinas, siendo estas las que dan la pigmentación.',
    'production1': '🇨🇳 China',
    'production2': '🇮🇹 Italia',
    'production3': '🇺🇸 EE.UU.',
    'micronutrient1': 'Vitamina K',
    'micronutrient2': 'Vitamina C',
    'micronutrient3': 'Vitamina B6'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${guava}')` },
    'plantImg': { 'background': `url('${guavaPlant}') no-repeat center` },
    'fruitName': 'Guayaba',
    'species': 'Psidium guajava',
    'family': 'Myrtaceae',
    'origin': 'América',
    'description': 'Tiene forma redonda o de pera, entre 3 a 10 cm de diámetro (hasta 12 cm en cultivos selectos). Tiene una corteza delgada y delicada, color verde pálido a amarillo en la etapa madura en algunas especies, rosa a rojo en otras, pulpa blanca cremosa o anaranjada con muchas semillitas duras y un fuerte aroma característico.',
    'production1': '🇮🇳 India',
    'production2': '🇨🇳 China',
    'production3': '🇹🇭 Tailandia',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Potasio',
    'micronutrient3': 'Vitamina B5'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${avocado}')` },
    'plantImg': { 'background': `url('${avocadoPlant}') no-repeat center` },
    'fruitName': 'Aguacate',
    'species': 'Persea americana',
    'family': 'Lauraceaeeae',
    'origin': 'Coaxcatlán (México)',
    'description': 'Es una baya oval o piriforme, según la variedad, de tamaño muy variado (7 a 33 cm de largo y hasta 15 cm de ancho), cáscara de color verde a púrpura oscuro, pudiendo ser delgada, gruesa, lisa o ligeramente rugosa, a veces con una apariencia como la del cuero. Pulpa firme, oleíca, de un color que varía desde el amarillo al verde claro. Contiene una semilla grande (5 a 6, 4 cm), dura y pesada, redonda o puntuda, de color marfil.',
    'production1': '🇲🇽 México',
    'production2': '🇩🇴 R. Dominicana',
    'production3': '🇵🇪 Perú',
    'micronutrient1': 'Vitamina B5',
    'micronutrient2': 'Vitamina B6',
    'micronutrient3': 'Vitamina K'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${quince}')` },
    'plantImg': { 'background': `url('${quincePlant}') no-repeat center` },
    'fruitName': 'Membrillo',
    'species': 'Cydonia oblonga',
    'family': 'Rosaceae',
    'origin': 'Cáucaso, sudoeste de Asia',
    'description': 'Su fruto es un pomo de color amarillo-dorado brillante cuando está maduro, periforme, de 7 a 12 cm de largo y de 6 a 9 cm de ancho; su pulpa es dura y muy aromática. Los frutos inmaduros son verdes, con una densa pilosidad de color gris claro, que va perdiendo antes de madurar.',
    'production1': '🇺🇿 Uzbekistán',
    'production2': '🇹🇷 Turquía',
    'production3': '🇨🇳 China',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Hierro',
    'micronutrient3': 'Potasio'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${lemon}')` },
    'plantImg': { 'background': `url('${lemonPlant}') no-repeat center` },
    'fruitName': 'Limón',
    'species': 'Citrus x limon',
    'family': 'Rutaceae',
    'origin': 'Cáucaso, sudoeste de Asia',
    'description': 'El fruto está conformado por un concha dura en la parte externa y en su interior tienen la parte globosa y jugosa, siempre de sabor incomparable cítrico, cada fruto guarda al menos 3 semillas pequeñas, el limón es uno de los frutos más resistentes, puede perdurar muchos días después de ser recolectado.',
    'production1': '🇲🇽 México',
    'production2': '🇮🇳 India',
    'production3': '🇨🇳 China',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Hierro',
    'micronutrient3': 'Vitamina B5'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${pear}')` },
    'plantImg': { 'background': `url('${pearPlant}') no-repeat center` },
    'fruitName': 'Pera',
    'species': 'Pyrus communis',
    'family': 'Rosaceae',
    'origin': 'Europa oriental y Asia Menor',
    'description': 'El fruto está compuesto por el receptáculo o extremo superior del pedúnculo floral (el llamado tubo del cáliz) muy dilatado. Encerrado dentro de su carne celular se encuentra el verdadero fruto: cinco carpelos "cartilaginosos", conocidos coloquialmente como el "núcleo". Del borde superior del receptáculo se desprenden los cinco sépalos, los cinco pétalos y los estambres muy numerosos.',
    'production1': '🇨🇳 China',
    'production2': '🇺🇸 EE.UU.',
    'production3': '🇮🇹 Italia',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina K',
    'micronutrient3': 'Vitamina B9'
  }
]