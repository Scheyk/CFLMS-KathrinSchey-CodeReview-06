
//let teaserPic = [];
let lokArray = [];
let restArray = [];
let eventArray = [];


class lokation
{
	pic: any = "";
	adress: string = "";	
	city: string = "";

	constructor (pic, adress, city)
	{
		this.pic = pic;
		this.adress = adress;
		this.city = city;

		lokArray.push(this);
	}

	display()
	{
		return `${this.pic} <br> ${this.adress} <br> ${this.city}`;
	}
}

let church = new lokation(`src="img/pic1.jpg"`, `Karlsplatz 1`, `1010 Vienna`);
//document.getElementById("result").innerHTML = church.display();
let park = new lokation(`src= "img/pic2.jpg`,`Maxingstraße 13b`, `1130 Vienna`);

class restaurants extends lokation 
{
	telNum;
	nation;
	url;
	
	constructor(pic, adress, city, telNum, nation, url)
	{
		super(pic, adress, city);
		this.telNum = telNum;
		this.nation = nation;
		this.url = url;

		restArray.push(this);
	}

	display()
	{
		return `${super.display()} <br> ${this.telNum} <br> ${this.nation} <br> ${this.url}`
	}
}

let steak = new restaurants(`img/pic2.jpg`, `Dstrikt Steakhouse`, `Schubertring 5-7, 1010 Vienna`, `0043-131188616`, `Bürgerlich`, `www.dstrikt.com`);
let fish = new restaurants(`img/pic4.jpg`, `Kulinarium 7`, `Sigmundsgasse 1`, `1070 Vienna`, `0043-5220530`, `National`);

class events extends lokation
{
	date;
	time;
	price;
	constructor(pic, adress, city, date, time, price)
	{
		super(pic, adress, city);
		this.date = date;
		this.time = time;
		this.price = price;

		eventArray.push(this);
	}
	
	display()
	{
		return `${super.display()} ${this.date} ${this.time} ${this.price}`;
	}
}

let dropout = new events(`some/image`, `Seasik Steve by Arena`, `Baumgasse 80, 1030 Wien`, `30.05.2020`, `20:00`, `40€`);
let blues = new events(`some/image`, `Joe Bonamassa: An Acoustic Evening At The Vienna Opera`, `Opernring 2, 1010 Wien`, `30.10.2020`, `20:00`, `80€`);