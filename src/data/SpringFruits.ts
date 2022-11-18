import papaya from '../assets/papaya.png'
import papayaPlant from '../assets/papaya-plant.jpeg'
import avocado from '../assets/avocado.png'
import avocadoPlant from '../assets/avocado-plant.jpeg'
import loquat from '../assets/loquat.png'
import loquatPlant from '../assets/loquat-plant.jpg'
import plum from '../assets/plum.png'
import plumPlant from '../assets/plum-plant.jpeg'
import pineapple from '../assets/pineapple.png'
import pineapplePlant from '../assets/pineapple-plant.jpeg'
import mango from '../assets/mango.png'
import mangoPlant from '../assets/mango-plant.jpeg'
import strawberry from '../assets/strawberry.png'
import strawberryPlant from '../assets/strawberry-plant.jpeg'
import apple from '../assets/apple.png'
import applePlant from '../assets/apple-plant.jpeg'
import maracuya from '../assets/maracuya.png'
import maracuyaPlant from '../assets/maracuya-plant.jpeg'
import coconut from '../assets/coconut.png'
import coconutPlant from '../assets/coconut-plant.jpeg'
import melon from '../assets/melon.png'
import melonPlant from '../assets/melon-plant.jpeg'
import banana from '../assets/banana.png'
import bananaPlant from '../assets/banana-plant.jpeg'
import lemon from '../assets/lemon.png'
import lemonPlant from '../assets/lemon-plant.jpeg'
import pear from '../assets/pear.png'
import pearPlant from '../assets/pear-plant.jpeg'
import mandarin from '../assets/mandarin.png'
import mandarinPlant from '../assets/mandarin-plant.jpg'
import orange from '../assets/orange.png'
import orangePlant from '../assets/orange-plant.jpg'

export const springFruits = [
  {
    'fruitImg': { 'backgroundImage': `url('${papaya}')` },
    'plantImg': { 'background': `url('${papayaPlant}') no-repeat center` },
    'fruitName': 'Papaya',
    'species': 'Carica papaya',
    'family': 'Caricaceae',
    'origin': 'Mesoamérica',
    'description': 'Es una baya ovoide-oblonga, piriforme o casi cilíndrica, grande, carnosa, jugosa, ranurada longitudinalmente en su parte superior, de color verde amarillento, amarillo o anaranjado amarillo cuando madura, de una celda, de color anaranjado o rojizo por dentro con numerosas semillas parietales y de 10-25 cm o más de largo y 7-15 cm o más de diámetro.',
    'production1': '🇮🇳 India',
    'production2': '🇧🇷 Brasil',
    'production3': '🇮🇩 Indonesiaa',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Magnesio',
    'micronutrient3': 'Vitamina B9'
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
    'fruitImg': { 'backgroundImage': `url('${loquat}')` },
    'plantImg': { 'background': `url('${loquatPlant}') no-repeat center` },
    'fruitName': 'Níspero',
    'species': 'Eriobotrya japonica',
    'family': 'Rosaceae',
    'origin': 'Sudeste de China',
    'description': 'Es un pomo piriforme, elipsoideooblongo a subgloboso, 3-6 x 1,5-5 cm, epicarpio piloso o glabro cuando maduro de color amarillo o anaranjado, a veces rojizo; pulpa suculenta de sabor dulce, ácido o subácido, blanca, amarilla o anaranjada; pedicelo fructífero 3-8 mm long., inicialmente tomentoso, luego glabro, con semillas en número variable(de 1 a 5) grandes, angulosas, de sección transversal anchamente elíptica, de testa lisa, de color pardo.',
    'production1': '🇯🇵 Japón',
    'production2': '🇮🇱 Israel',
    'production3': '🇧🇷 Brasil',
    'micronutrient1': 'Vitamina A',
    'micronutrient2': 'Vitamina B6',
    'micronutrient3': 'Potasio'
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
    'fruitImg': { 'backgroundImage': `url('${maracuya}')` },
    'plantImg': { 'background': `url('${maracuyaPlant}') no-repeat center` },
    'fruitName': 'Maracuyá',
    'species': 'Passiflora edulis',
    'family': 'Passifloraceae',
    'origin': 'Sudamérica y Centroamérica',
    'description': 'Es una baya oval o redonda, de entre 4 y 10 cm de diámetro, fibrosa y jugosa, recubierta de una cáscara gruesa, cerosa, delicada e incomestible. La pulpa contiene numerosas semillas pequeñas. El color presenta grandes diferencias entre variedades; la más frecuente en los países de origen es amarilla, obtenida de la variedad P.edulis f.flavicarpa.',
    'production1': '🇧🇷 Brasil',
    'production2': '🇨🇴 Colombia',
    'production3': '🇿🇦 Sudáfrica',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Hierro',
    'micronutrient3': 'Fósforo'
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
  },
  {
    'fruitImg': { 'backgroundImage': `url('${mandarin}')` },
    'plantImg': { 'background': `url('${mandarinPlant}') no-repeat center` },
    'fruitName': 'Mandarina',
    'species': 'Citrus unshiu',
    'family': 'Rutaceae',
    'origin': 'China e Indochina',
    'description': 'Es de forma globosa y algo deprimida en los polos, de unos 5 a 8 cm de diámetro; de color amarillento, naranja o rojo anaranjado, con piel brillante y fina marcada por multitud de glándulas oleaginosas que exhalan el mismo perfume que las flores.',
    'production1': '🇨🇳 China',
    'production2': '🇪🇸 España',
    'production3': '🇯🇵 Japón',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina B6',
    'micronutrient3': 'Vitamina B1'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${orange}')` },
    'plantImg': { 'background': `url('${orangePlant}') no-repeat center` },
    'fruitName': 'Naranja',
    'species': 'Citrus x sinensis',
    'family': 'Rutaceae',
    'origin': 'India, Pakistán, Vietnam y el sureste de China',
    'description': 'Es un fruto con una cáscara rugosa, gruesa y dura. En el interior encontramos la pulpa, formada normalmente por 11 gajos que contienen mucho jugo. Su sabor es característico y puede ser más ácido o menos(incluso dulce) en función de su tipo y estado de maduración.Son más grandes que la mandarinas y más pequeñas que los pomelos.',
    'production1': '🇧🇷 Brasil',
    'production2': '🇺🇸 EE.UU.',
    'production3': '🇮🇳 India',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina B9',
    'micronutrient3': 'Vitamina B1'
  }
]