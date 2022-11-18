import kiwi from '../assets/kiwi.png'
import kiwiPlant from '../assets/kiwi-plant.jpeg'
import orange from '../assets/orange.png'
import orangePlant from '../assets/orange-plant.jpg'
import mandarin from '../assets/mandarin.png'
import mandarinPlant from '../assets/mandarin-plant.jpg'
import grapefruit from '../assets/grapefruit.png'
import grapefruitPlant from '../assets/grapefruit-plant.jpeg'
import pomegranate from '../assets/pomegranate.png'
import pomegranatePlant from '../assets/pomegranate-plant.jpg'
import maracuya from '../assets/maracuya.png'
import maracuyaPlant from '../assets/maracuya-plant.jpeg'
import pineapple from '../assets/pineapple.png'
import pineapplePlant from '../assets/pineapple-plant.jpeg'
import lemon from '../assets/lemon.png'
import lemonPlant from '../assets/lemon-plant.jpeg'
import loquat from '../assets/loquat.png'
import loquatPlant from '../assets/loquat-plant.jpg'
import papaya from '../assets/papaya.png'
import papayaPlant from '../assets/papaya-plant.jpeg'
import date from '../assets/date.png'
import datePlant from '../assets/date-plant.jpg'
import banana from '../assets/banana.png'
import bananaPlant from '../assets/banana-plant.jpeg'
import apple from '../assets/apple.png'
import applePlant from '../assets/apple-plant.jpeg'
import pear from '../assets/pear.png'
import pearPlant from '../assets/pear-plant.jpeg'

export const winterFruits = [
  {
    'fruitImg': { 'backgroundImage': `url('${kiwi}')` },
    'plantImg': { 'background': `url('${kiwiPlant}') no-repeat center` },
    'fruitName': 'Kiwi',
    'species': 'Actinidia deliciosa',
    'family': 'Actinidiaceae',
    'origin': 'China, bosques del valle del río Yangtsé',
    'description': 'Es una baya oval de unos 6 cm de largo, con piel delgada de color verde parduzco y densamente cubierta de unos pelillos rígidos y cortos de color marrón. La pulpa, firme hasta que madura completamente, es de color verde brillante jugosa y con diminutas semillas negras dispuestas en torno a un corazón blanquecino. Tiene un sabor de subácido a bastante ácido, similar al de la grosella o la fresa. Suele ser un alérgeno frecuente, sobre todo su piel.',
    'production1': '🇨🇳 China',
    'production2': '🇮🇹 Italia',
    'production3': '🇳🇿 N. Zelanda',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina K',
    'micronutrient3': 'Vitamina E'
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
    'fruitImg': { 'backgroundImage': `url('${grapefruit}')` },
    'plantImg': { 'background': `url('${grapefruitPlant}') no-repeat center` },
    'fruitName': 'Pomelo',
    'species': 'Citrus x paradisi',
    'family': 'Rutaceae',
    'origin': 'El Caribe',
    'description': 'El fruto es un hesperidio globoso o apenas piriforme, de hasta 15 cm de diámetro. Está recubierto de una cáscara gruesa, carnosa, despegada del endocarpo, de color amarillo, rosáceo o rojizo, con glándulas oleosas pequeñas y muy aromáticas, rugosa. Tiene 11 a 14 carpelos, firmes, muy jugosos, dulces o ácidos según la variedad, separados por paredes membranosas de característico sabor amargo que contienen pulpa de color que va del amarillo pálido al rojo muy intenso.',
    'production1': '🇨🇳 China',
    'production2': '🇻🇳 Vietnam',
    'production3': '🇺🇸 EE.UU.',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Potasio',
    'micronutrient3': 'Vitamina B1'
  },
  {
    'fruitImg': { 'backgroundImage': `url('${pomegranate}')` },
    'plantImg': { 'background': `url('${pomegranatePlant}') no-repeat center` },
    'fruitName': 'Granada',
    'species': 'Punica granatum',
    'family': 'Lythraceae',
    'origin': 'Cuenca mediterránea',
    'description': 'El fruto es en balausta de 5-12 cm, esférico, coriáceo, rojizo o amarillo-rojizo, coronado por los restos de los segmentos del cáliz, con lóculos en dos verticilos (raramente tres), de ordinario el inferior con seis lóculos y el superior con tres, todos ellos separados por el endocarpo membranoso y amarillento.',
    'production1': '🇮🇳 India',
    'production2': '🇨🇳 China',
    'production3': '🇮🇩 Indonesia',
    'micronutrient1': 'Vitamina C',
    'micronutrient2': 'Vitamina B9',
    'micronutrient3': 'Vitamina B5'
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
    'fruitImg': { 'backgroundImage': `url('${date}')` },
    'plantImg': { 'background': `url('${datePlant}') no-repeat center` },
    'fruitName': 'Dátil',
    'species': 'Phoenix dactylifera',
    'family': 'Arecaceae',
    'origin': 'Suroeste de Asia',
    'description': 'Los frutos son bayas con aspecto de drupas, son oblongo-ovoides, de 3 a 9 cm de longitud, de color naranja, con exocarpo liso, mesocarpo carnoso y endocarpo membránaceo, pasando a rojo-castaño al madurar. Las semillas son elipsoidales subcilíndricas rugosas, de 2-3cm por 0,5-1cm, con un surco lateral en el epispermo pétreo que encierra un endospermo homogéneo no ruminado.',
    'production1': '🇪🇬 Egipto',
    'production2': '🇸🇦 A. Saudit',
    'production3': '🇮🇷 Irán',
    'micronutrient1': 'Potasio',
    'micronutrient2': 'Manganeso',
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