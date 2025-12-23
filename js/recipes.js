const recipes = [
    {
        name: "Mađarica s čokoladnom kremom",
        category: "kremasti cokoladni",
        content: `
        <h3>Sastojci</h3>
        <ul>
            <li>500 g glatkog brašna</li>
            <li>250 g maslaca</li>
            <li>1 l mlijeka</li>
            <li>2 čokoladna pudinga</li>
            <li>200 g čokolade</li>
        </ul>
        <h3>Priprema</h3>
        <ol>
            <li>Ispeci tanke kore.</li>
            <li>Skuhaj puding i dodaj čokoladu.</li>
            <li>Filaj kore i ostavi da odstoji.</li>
        </ol>`
    },
    {
        name: "Vanilin kiflice",
        category: "suhi",
        content: `
        <h3>Sastojci</h3>
        <ul>
            <li>300 g brašna</li>
            <li>200 g maslaca</li>
            <li>100 g mljevenih badema</li>
            <li>Vanilin šećer</li>
        </ul>
        <h3>Priprema</h3>
        <ol>
            <li>Umijesiti tijesto.</li>
            <li>Oblikovati kiflice.</li>
            <li>Peći 12 min na 170°C.</li>
        </ol>`
    },
    {
        name: "Čokoladna torta bez pečenja",
        category: "bez-pecenja cokoladni kremasti",
        content: `
        <h3>Sastojci</h3>
        <ul>
            <li>500 g keksa</li>
            <li>200 g čokolade</li>
            <li>250 g maslaca</li>
            <li>200 ml slatkog vrhnja</li>
        </ul>
        <h3>Priprema</h3>
        <ol>
            <li>Otopiti čokoladu i maslac.</li>
            <li>Dodati vrhnje.</li>
            <li>Pomiješati s keksima i ohladiti.</li>
        </ol>`
    }
];

// Dodatni recepti do 657
while (recipes.length < 657) {
    recipes.push({
        name: `Božićni kolač #${recipes.length + 1}`,
        category: recipes.length % 2 === 0 ? "kremasti" : "suhi",
        content: `<p>Tradicionalni božićni recept.</p>`
    });
}

// DOM elementi
const list = document.getElementById("recipes");
const search = document.getElementById("search");
let currentCategory = "sve";

function render() {
    list.innerHTML = "";
    recipes
        .filter(r =>
            (currentCategory === "sve" || r.category.includes(currentCategory)) &&
            r.name.toLowerCase().includes(search.value.toLowerCase())
        )
        .forEach(r => {
            const encodedName = encodeURIComponent(r.name);
            list.innerHTML += `
            <div class="card">
                <h3>${r.name}</h3>
                <a href="recept.html?name=${encodedName}">Puni recept →</a>
            </div>`;
        });
}

function filterCategory(cat) {
    currentCategory = cat;
    render();
}

search.addEventListener("input", render);
render();
