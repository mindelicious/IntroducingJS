function Phone(brand, price, color, battery) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.battery = battery;
}
Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' the battery capicity is about ' + this.battery + ' and the price is ' + this.price + 'PLN.');
}
var IPhone7 = new Phone('Apple', 2950, 'space gray', '2245mAH');
var SamsungGalaxyS7 = new Phone('Samsung', 2735, 'silver', '2300mAH');
var SonyZ5 = new Phone('Sony', 2899, 'gold', '2450mAH');