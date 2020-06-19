
//let teaserPic = [];
let lokArray = [];
let restArray = [];
let eventArray = [];

class lokation
{
	pic: string = "";
	adr: string = "";	
	city: string = "";

	constructor (pic, adr, city)
	{
		this.pic = pic;
		this.adr = adr;
		this.city = city;

		lokArray.push(this);
	}

	display()
	{
		return `
					<div class='col-lg-3 col-md-6 col-sm-12 display'>
						<img class='img-fluid' src='${this.pic}'>
						<h3>${this.adr}</h3>
						<p>${this.city}</p>
					</div>
				`					;
	}
}

let church = new lokation(`img/pic1.jpg`, `St. Charles Church`, `Karlsplatz 1, 1010 Vienna`);
let park = new lokation(`img/pic2.jpg`,`Schönbrunn Park, Vienna`, `Maxingstraße 13b, 1130 Vienna`);

class restaurants extends lokation 
{
	telNum : number;
	nation : string;
	url : any;
	
	constructor(pic, adr, city, telNum, nation, url)
	{	
		super(pic, adr, city);	
		this.telNum = telNum;
		this.nation = nation;
		this.url = url;

		restArray.push(this);
	}

	display()
	{
		return `
					<div class='col-lg-3 col-md-6 col-sm-12 display'>
						<img class='img-fluid' src='${this.pic}'>
						<h3>${this.adr}</h3>
						<p>${this.city}</p>
						<p>${this.telNum}</p>
						<p>${this.nation}</p>
						<p>${this.url}</p>
					<div>
				`;
	}
}

let steak = new restaurants(`img/pic3.jpg`, `Dstrikt Steakhouse`, `Schubertring 5-7, 1010 Vienna`, `0043-131188616`, `Bürgerlich`, `www.dstrikt.com`);
let fish = new restaurants(`img/pic4.jpg`, `Kulinarium 7`, `Sigmundsgasse 1,1070 Vienna`, `0043-5220530`, `National`, `https://www.kulinarium7.com/`);

class events extends lokation
{
	date : number;
	time : number;
	price : number;
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
		return `
					<div class='col-lg-3 col-md-6 col-sm-12 display'>
						<div>
							<img class='img-fluid' src='${this.pic}'>
						</div>
						<h3>${this.adr}</h3>
						<p>${this.city}</p>
						<p>${this.date}</p>
						<p>${this.time}</p>
						<p>${this.price}</p>
					<div>
				`;
	}
}

let dropout = new events(`img/pic5.jpg`, `Seasik Steve by Arena`, `Baumgasse 80, 1030 Wien`, `30.05.2020`, `20:00`, `40€`);
let blues = new events(`img/pic6.jpg`, `Joe Bonamassa: An Acoustic Evening At The Vienna Opera`, `Opernring 2, 1010 Wien`, `30.10.2020`, `20:00`, `80€`);

for (let i = 0; i < lokArray.length; i++)
{
	document.getElementById("result").innerHTML += lokArray[i].display();
			
}

