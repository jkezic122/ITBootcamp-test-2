// Написати апликацију за наручивање фосилних јаја диносауруса,
// Задаци (и функционалности):
// 1. У select (видети HTML) убацити све могуће опције за куповину (низ се налази у index.js)
// Ако ово не знате да урадите помоћу низа, опције додати ручно (прве 4 опције, да не
// одузима превише времена) (Ово носи 50% поена)
// 2. Кликом на submit (дугме: 'Наручи') омогућити испис поруџбине и
// сачувати исту у низ, која садржи
// следеће информације:
// Изабрани диносаурус
// Купац
// Напомена (ако је напомена празна, исписати "/", или сличну поруку)
// Цена (налази се у низу) - (Не задржавајте се око ставке 'Цена',
//  радите остатак задатака)
// 3. Проверити уносе:
// Уноси за диносауруса и купца не смеју бити празни
// Унос за купца - дужина мора бити најмање 4 слова
// 4. Омогућити да се поруџбина обрише са странице
// (брисање из низа +5 поена, није обавезно)
// 5. Кликом на дугме Испиши све поруџбине,
// у конзоли исписати низ креиран у кораку 2

let dinos = [
	{
		id: 0,
		name: 'Scipionyx',
		img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
		cena: 221
	},
	{
		id: 1,
		name: 'Becklespinax',
		img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
		cena: 275
	},
	{
		id: 2,
		name: 'Sciurumimus',
		img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
		cena: 341
	},
	{
		id: 3,
		name: 'Hypsilophodon',
		img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
		cena: 189
	},
	{
		id: 4,
		name: 'Dacentrurus',
		img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
		cena: 315
	},
	{
		id: 5,
		name: 'Iguanodon',
		img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
		cena: 374
	},
	{
		id: 6,
		name: 'Asylosaurus',
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
		cena: 301
	},
	{
		id: 7,
		name: 'Efraasia',
		img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
		cena: 199
	},
	{
		id: 8,
		name: 'Cryptosaurus',
		img:
			'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
		cena: 218
	}
];

let select = document.getElementById('select-dino');
const btnAll = document.querySelector('#btn-all');
const itemContainer = document.querySelector('#item-container');

for (let i = 0; i < dinos.length; i++) {
	let opt = dinos[i];
	let el = document.createElement('option');
	el.textContent = opt.name;
	el.value = opt;
	select.add(el);
}

const addNarudzbine = (dino) => {
	const item = document.createElement('div');
	item.className = 'item';
	item.innerHTML = `
        <div>
            <p><span>Купац:</span> </p>
            <p><span>Напомена:</span> </p>
            <p><span>Диносаурус: </span> ${dino.name}</p>
            <p><span>Цена: </span> ${dino.cena}</p>
            <p><button>Обриши</button></p>
        </div>`;

	itemContainer.appendChild(item);
};

btnAll.addEventListener('click', () => {});
