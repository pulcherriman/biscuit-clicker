export default class Effect {
	multipleBiscuitPerClick: number = 1.0;
	multipleBuildingProduction: Array<number> = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0];
	constructor({
		multipleBiscuitPerClick = 1.0,
		multipleBuildingProduction = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
	}) {
		this.multipleBiscuitPerClick = multipleBiscuitPerClick;
		this.multipleBuildingProduction = multipleBuildingProduction;
	}
};

export class EffectFactory {
	static createMultipleBPC(multiple: number): Effect {
		return new Effect({ multipleBiscuitPerClick: multiple });
	}
	static createMultipleBuildingProduction(id: number, multiple: number): Effect {
		const effect = new Effect({});
		effect.multipleBuildingProduction[id] = multiple;
		return effect;
	}
}