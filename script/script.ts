
$(document).ready(function(){
//let for the classes
let lokArray = [];
let restArray = [];
let eventArray = [];

//class lokation start
class lokation
{
	pic: string = "";
	adr: string = "";	
	city: string = "";
	created: string= "";

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
					<div class='col-lg-3 col-md-6 col-sm-12 inhalt border'>
						<div class='d-none d-md-block'>
							<img class='img-fluid rounded' src='${this.pic}'>							
						</div>
						<h3>${this.adr}</h3>
						<p><i class='fas fa-archway'></i>${this.city}</p>						
					</div>`;
	}
}
//class lokation extends

//input for the array/class lokation start
let church = new lokation(`img/pic1.jpg`, `St. Charles Church`, `Karlsplatz 1, 1010 Vienna`);
let park = new lokation(`img/pic2.jpg`,`Schönbrunn Park, Vienna`, `Maxingstraße 13b, 1130 Vienna`);
//input for the array/class lokation ends

//class restaurant start
class restaurants extends lokation 
{
	telNum : number;
	nation : string;
	url : any;
	
	constructor(pic, adr, city,telNum, nation, url)
	{	
		super(pic, adr, city);	
		this.telNum = telNum;
		this.nation = nation;
		this.url = url;

		restArray.push(this);				
	}

	display()
	{
		return 	   `<div class='col-lg-3 col-md-6 col-sm-12 inhalt border'>
						<div class='d-none d-md-block'>
							<img class='img-fluid rounded' src='${this.pic}'>							
						</div>
						<h3>${this.adr}</h3>
						<p><i class='fas fa-archway'></i>${this.city}</p>
						<p><i class='fas fa-phone'></i>${this.telNum}</p>
						<p>Küche: ${this.nation}</p>
						<p><i class='fas fa-at'></i><a href='${this.url}'>${this.url}</a></p>						
					<div>`;
	}
}
//class restaurant ends

//input for array/class restaurant start
let steak = new restaurants(`img/pic3.jpg`, `Dstrikt Steakhouse`, `Schubertring 5-7, 1010 Vienna`,`+43-131188616`, `Bürgerlich`, `www.dstrikt.com`);
let fish = new restaurants(`img/pic4.jpg`, `Kulinarium 7`, `Sigmundsgasse 1,1070 Vienna`,`+43-5220530`, `National`, `www.kulinarium7.com/`);
//input for array/class restaurant ends

//class event start
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
		return 		`<div class='col-lg-3 col-md-6 col-sm-12 inhalt border'>
						<div class='d-none d-md-block'>						
							<img class='img-fluid rounded' src='${this.pic}'>							
						</div>						
						<h3>${this.adr}</h3>
						<p><i class='fas fa-archway'></i>${this.city}</p>
						<p><i class='far fa-calendar-alt'></i>${this.date}</p>
						<p><i class='far fa-clock'></i>${this.time}</p>
						<p><i class='fas fa-money-bill-alt'></i>${this.price}</p>						
					<div>`;
	}
}
//class event ends

//input for array/class event start
let dropout = new events(`img/pic5.jpg`, `Seasik Steve by Arena`, `Baumgasse 80, 1030 Wien`, `30.05.2020`, `20:00`, `40€`);
let blues = new events(`img/pic6.jpg`, `Joe Bonamassa: An Acoustic Evening At The Vienna Opera`, `Opernring 2, 1010 Wien`,`30.10.2020`, `20:00`, `80€`);
//input for array/class event ends
		
//loop for print
for (let i = 0; i < lokArray.length; i++)
{
	document.getElementById("result").innerHTML += lokArray[i].display();			
}

});