import type SaveData from "./SaveData";
import type Effect from "./Effect";
import { EffectFactory } from "./Effect";

interface UpgradeInfo {
	readonly id: number;
	readonly name: string;
	readonly flavorText: string;
	readonly description: string;
	readonly getPrice: (saveData: SaveData) => number;
	readonly isAvailable: (saveData: SaveData) => boolean;
	readonly effect: Effect;
	// readonly iconURL: string;
};

export default class Upgrade implements UpgradeInfo {
	readonly id: number;
	readonly name: string;
	readonly flavorText: string;
	readonly description: string;
	readonly getPrice: (saveData: SaveData) => number;
	readonly isAvailable: (saveData: SaveData) => boolean;
	readonly effect: Effect;
	// readonly iconURL: string;

	isBought: boolean = false;


	constructor(params: UpgradeInfo) {
		this.id = params.id;
		this.name = params.name;
		this.flavorText = params.flavorText;
		this.description = params.description;
		this.getPrice = params.getPrice;
		this.isAvailable = params.isAvailable;
		this.effect = params.effect;
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
		name: "強化人差し指",
		flavorText: "ツンツン",
		description: "クリックの効果 × 2",
		getPrice: (saveData: SaveData) => 100,
		isAvailable: (saveData: SaveData) => saveData.buildings[0].count >= 1,
		effect: EffectFactory.createMultipleBPC(2.0),
	}),
	new Upgrade({
		id: 1,
		name: "手根管症候群防止クリーム",
		flavorText: "クリックしすぎで……指が痛い……",
		description: "クリックの効果 × 2",
		getPrice: (saveData: SaveData) => 500,
		isAvailable: (saveData: SaveData) => saveData.buildings[0].count >= 1,
		effect: EffectFactory.createMultipleBPC(2.0),
	}),
	new Upgrade({
		id: 2,
		name: "グランマからの返信",
		flavorText: "RE:RE:これで喜んでくれればいいけど (^ーﾟ))",
		description: "おばあちゃんの効果 × 2",
		getPrice: (saveData: SaveData) => saveData.buildings[1].initialCost * 10,
		isAvailable: (saveData: SaveData) => saveData.buildings[1].count >= 1,
		effect: EffectFactory.createMultipleBuildingProduction(1, 2.0),
	}),

];

export const getUpgradeList = (): Array<Upgrade> => {
	return UpgradeList.map((upgradeInfo) => new Upgrade(upgradeInfo));
};
