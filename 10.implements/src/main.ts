class Car{
	mileage = 0;
	price = 100;
	color = 'white';
	drive(){
		return 'drive!';
	}
	break(){
		return 'break!';
	}
}

interface Part{
	seats: number;
	tire : number;
}


class Ford implements Car, Part{ // ford 의 모든 속성을 다 넣어야 함,
	mileage = 1;
	price = 2;
	color = 'white';
	seats = 2;
	tire = 3;
	drive(){
		return 'drive!';
	}
	break(){
		return 'break!';
	}
}
const myFordCar = new Ford();
myFordCar.color