$(document).ready(function () {
    //let for the classes
    let lokArray = [];
    let restArray = [];
    let eventArray = [];
    //let createArray = [];
    //lokArray.sort(this.created);
    //let sor = $(`[lokArray.created]`);
    //class lokation start
    class lokation {
        constructor(pic, adr, city, created) {
            this.pic = "";
            this.adr = "";
            this.city = "";
            this.created = "";
            this.pic = pic;
            this.adr = adr;
            this.city = city;
            this.created = created;
            lokArray.push(this);
            //createArray.push(this.created);
        }
        display() {
            return `
					<div class='col-lg-2 offset-lg-1 col-md-5 offset-md-1 col-sm-11 offset-sm-1 inhalt border'>
						<div class='d-none d-md-block'>
							<img class='img-fluid rounded' src='${this.pic}'>
							<p class='create'>Created:${this.created}</p>
						</div>
						<h3>${this.adr}</h3>
						<p><i class='fas fa-archway'></i>${this.city}</p>
					</div>`;
        }
    }
    //class lokation extends
    //input for the array/class lokation start
    let church = new lokation(`img/pic1.jpg`, `St. Charles Church`, `Karlsplatz 1, 1010 Vienna`, `08.06.2020 14:22`);
    let park = new lokation(`img/pic2.jpg`, `Schönbrunn Park, Vienna`, `Maxingstraße 13b, 1130 Vienna`, `01.06.2020 12:00`);
    //input for the array/class lokation ends
    //class restaurant start
    class restaurants extends lokation {
        constructor(pic, adr, city, created, telNum, nation, url) {
            super(pic, adr, city, created);
            this.telNum = telNum;
            this.nation = nation;
            this.url = url;
            restArray.push(this);
            //createArray.push(this.created);		
        }
        display() {
            return `<div class='col-lg-3 col-md-6 col-sm-12 inhalt border'>
						<div class='d-none d-md-block'>
							<img class='img-fluid rounded' src='${this.pic}'>
							<p class='create'>Created:${this.created}</p>
						</div>
						<h3>${this.adr}</h3>
						<p><i class='fas fa-archway'></i>${this.city}</p>
						<p><i class='fas fa-phone'></i>${this.telNum}</p>
						<p>${this.nation}</p>
						<p><i class='fas fa-at'></i><a href='${this.url}'>${this.url}</a></p>
					<div>`;
        }
    }
    //class restaurant ends
    //input for array/class restaurant start
    let steak = new restaurants(`img/pic3.jpg`, `Dstrikt Steakhouse`, `Schubertring 5-7, 1010 Vienna`, `06.07.2020 15:41`, `+43-131188616`, `Bürgerlich`, `www.dstrikt.com`);
    let fish = new restaurants(`img/pic4.jpg`, `Kulinarium 7`, `Sigmundsgasse 1,1070 Vienna`, `05.02.2020 14:20`, `+43-5220530`, `National`, `www.kulinarium7.com/`);
    //input for array/class restaurant ends
    //class event start
    class events extends lokation {
        constructor(pic, adress, city, created, date, time, price) {
            super(pic, adress, city, created);
            this.date = date;
            this.time = time;
            this.price = price;
            eventArray.push(this);
            //createArray.push(this.created);		
        }
        display() {
            return `<div class='col-lg-3 col-md-6 col-sm-12 inhalt border'>
						<div class='d-none d-md-block'>						
							<img class='img-fluid rounded' src='${this.pic}'>
							<p class='create'>Created:${this.created}</p>
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
    let dropout = new events(`img/pic5.jpg`, `Seasik Steve by Arena`, `Baumgasse 80, 1030 Wien`, `15.03.2020 20:00`, `30.05.2020`, `20:00`, `40€`);
    let blues = new events(`img/pic6.jpg`, `Joe Bonamassa: An Acoustic Evening At The Vienna Opera`, `Opernring 2, 1010 Wien`, `13.08.2020 11:00`, `30.10.2020`, `20:00`, `80€`);
    //input for array/class event ends
    //const sor = lokArray.sort(this.created);
    //loop for print
    for (let i = 0; i < lokArray.length; i++) {
        document.getElementById("result").innerHTML += lokArray[i].display();
    }
    ;
    //for loop ends
    // $('#btn').on('click', function(){
    // 	sortable.forEach(function(item){
    //     		lokArray[item[0]]=item[1]
    // 			});
    // });
    let newArray = lokArray.sort();
    console.table(newArray);
    // 	function sortCreate(a,b)
    // 	{
    // 		return a - b;
    // 	};
    // 	//let sor = [...createArray].sort(this);
    // 	$('#btn').on('click', function () 
    // 	{
    // 	    $("#result").text(newArray);
    // 	});
    // let sor = createArray;
    //    $('#result').on('click', function () {
    //     let createArray = sor.sort(function (a, b) {
    //         return $(a).find("p.create").text() > $(b).find("p.create").text();
    //     });
    //     $("#container").html(createArray);
    // });
    // let sortArray = lokArray.slice().sort();
    // console.log(sortArray);
    //console.table(createArray);
    //console.log(createArray.sort((a,b) =>  (a > b ? 1 : -1)));
    // sor.data();
    // let sort = function (sortingFunction: any) {
    //     return this.each(function () {
    //         const visit = $(this.created).children().get();
    //         visit.sort(sortingFunction);
    //         console.log(visit);
    //     });
    // };
});
