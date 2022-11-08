/* const dataPeople = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
]

const eleCards = document.querySelector('.cards');

for (let i = 0; i < dataPeople.length; i++ ){
    const objPerson = dataPeople[i];
    console.log(`La persona si chiama${objPerson.name}, il suo lavoro e\' ${objPerson.role}. Nome imaggine: ${objPerson.img}`);
    eleCards.innerHTML += `
        <div class="card">
            <div class="content">
                <img src"img/${objPerson.img}" alt"${objPerson.name}">
                <h2>${objPerson.name}</h2>
                <h3>${objPerson.role}</h3>
            </div>
        </div>
        `
} */


const dataPeople = [
	{
		name: 'Wayne Barnett',
		role: 'Founder & CEO',
		img: 'wayne-barnett-founder-ceo.jpg',
	},
	{
		name: 'Angela Caroll',
		role: 'Chief Editor',
		img: 'angela-caroll-chief-editor.jpg',
	},
	{
		name: 'Walter Gordon',
		role: 'Office Manager',
		img: 'walter-gordon-office-manager.jpg',
	},
	{
		name: 'Angela Lopez',
		role: 'Social Media Manager',
		img: 'angela-lopez-social-media-manager.jpg',
	},
	{
		name: 'Scott Estrada',
		role: 'Developer',
		img: 'scott-estrada-developer.jpg',
	},
	{
		name: 'Barbara Ramos',
		role: 'Graphic Designer',
		img: 'barbara-ramos-graphic-designer.jpg',
	},
]

const eleCards = document.querySelector('.cards');
renderInterface(eleCards);


function renderInterface(eleCards) {

	dataPeople.forEach(objPerson => eleCards.innerHTML += geneateCard(objPerson));
}

function geneateCard(obj) {
	return `
		<div class="card">
			<div class="content">
				<img src="img/${obj.img}" alt="${obj.name}">
				<h2>${obj.name}</h2>
				<h3>${obj.role}</h3>
			</div>
		</div>
		`;
}