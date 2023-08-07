let id = 1;

class Product {
	constructor(name, price, discount, description) {
		this.name = name;
		this.price = price;
		this.discount = discount;
		this.description = description;
	}

	getDiscount() {
		return this.price - this.price * (this.discount / 100);
	}

	getDues() {
		return (this.price / 12).toFixed(2);
	}

	makePublish() {
		const post = `<h2>Product ${id} </h2>
                <h3>Tittle: ${this.name}</h3>
                <p>Precio: ${this.price}</p>
                <p>Descuento: ${this.discount}</p>
                <p>Precio con descuento: ${this.getDiscount()}</p>
                <p>Precio sin decuento en cuotas: ${this.getDues()}</p>
                <p>Descripcion: ${this.description}</p>`;
		document.body.innerHTML += post;
		id++;
	}
}

let macbook = new Product("Macbook", 2500, 20, "The best computer ever");

let toalla = new Product("Toalla", 150, 35, "La toalla mas suave de la tierra");

let pcGamer = new Product("PC GAMER", 3050, 50, "pc gamer con una rtx4080");

macbook.makePublish();
toalla.makePublish();
pcGamer.makePublish();
