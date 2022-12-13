class BuildingInfo {
	readonly id: number;
	readonly name: string;
	readonly initialCost: number;
	readonly perSecond: number;
	constructor(id: number, name: string, initialCost: number, perSecond: number) {
		this.id = id;
		this.name = name;
		this.initialCost = initialCost;
		this.perSecond = perSecond;
	}
};

export default class Building extends BuildingInfo {
	count: number = 0;

	constructor(id: number, name: string, initialCost: number, perSecond: number) {
		super(id, name, initialCost, perSecond);
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

const BuildingInfoList = [
	new BuildingInfo(0, "Cursor", 15, 0.1),
	new BuildingInfo(1, "Grandma", 100, 1),
	new BuildingInfo(2, "Farm", 1100, 8),
	new BuildingInfo(3, "Mine", 12000, 47),
	new BuildingInfo(4, "Factory", 130000, 260),
	new BuildingInfo(5, "Bank", 1400000, 1400),
	new BuildingInfo(6, "Temple", 20000000, 7800),
	new BuildingInfo(7, "Wizard Tower", 330000000, 44000),
	new BuildingInfo(8, "Shipment", 5100000000, 260000),
	new BuildingInfo(9, "Alchemy Lab", 75000000000, 1600000),
	new BuildingInfo(10, "Portal", 1000000000000, 10000000),
];

export const getBuildingList = (): Array<Building> => {
	return BuildingInfoList.map((buildingInfo) => new Building(buildingInfo.id, buildingInfo.name, buildingInfo.initialCost, buildingInfo.perSecond));
};