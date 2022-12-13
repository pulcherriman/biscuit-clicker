import type SaveData from "./SaveData";

interface UpgradeInfo {
	readonly id: number;
	readonly name: string;
	readonly flavorText: string;
	readonly description: string;
	readonly initialCost: number;
	readonly isAvailable: (saveData: SaveData) => boolean;
	// readonly iconURL: string;
};

export default class Upgrade implements UpgradeInfo {
	readonly id: number;
	readonly name: string;
	readonly flavorText: string;
	readonly description: string;
	readonly initialCost: number;
	readonly isAvailable: (saveData: SaveData) => boolean;
	// readonly iconURL: string;

	isBought: boolean = false;


	constructor(params: UpgradeInfo) {
		this.id = params.id;
		this.name = params.name;
		this.flavorText = params.flavorText;
		this.description = params.description;
		this.initialCost = params.initialCost;
		this.isAvailable = params.isAvailable;
	}

	get price(): number {
		return this.initialCost;
	}

	toJSON () {
		return {
			id: this.id,
			isBought: this.isBought,
		};
	}
};

const UpgradeList = [
	new Upgrade({
		id: 0,
		name: "Biscuit Clicker",
		flavorText: "Clicking is fun!",
		description: "Clicking on the cookie gives you 1.1x more biscuits.",
		initialCost: 20,
		isAvailable: (saveData: SaveData) => saveData.biscuits >= 10,
	})
];

export const getUpgradeList = (): Array<Upgrade> => {
	return UpgradeList.map((upgradeInfo) => new Upgrade(upgradeInfo));
};
