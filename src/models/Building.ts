export default class Building {
	readonly id: number;
	readonly name: string;
	readonly initialCost: number;
	readonly perSecond: number;
	count: number = 0;

	constructor(id: number, name: string, initialCost: number, perSecond: number) {
		this.id = id;
		this.name = name;
		this.initialCost = initialCost;
		this.perSecond = perSecond;
	}

	get price(): number {
		return this.initialCost * Math.pow(1.15, this.count);
	}

	toJSON () {
		return {
			id: this.id,
			count: this.count,
		};
	}
}

export const Buildings = [
	new Building(0, "Cursor", 15, 0.1),
	new Building(1, "Grandma", 100, 1),
	new Building(2, "Farm", 1100, 8),
	new Building(3, "Mine", 12000, 47),
	new Building(4, "Factory", 130000, 260),
	new Building(5, "Bank", 1400000, 1400),
	new Building(6, "Temple", 20000000, 7800),
	new Building(7, "Wizard Tower", 330000000, 44000),
	new Building(8, "Shipment", 5100000000, 260000),
	new Building(9, "Alchemy Lab", 75000000000, 1600000),
	new Building(10, "Portal", 1000000000000.0, 10000000),
];