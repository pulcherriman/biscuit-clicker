import { getBuildingList } from "@/models/Building";
import { getUpgradeList } from "@/models/Upgrade";
import lodash from 'lodash';
import type Building from "@/models/Building";
import type Upgrade from "@/models/Upgrade";

class SaveParameter {
	biscuits: number = 0;
	buildings: Array<Building> = getBuildingList();
	upgrades: Array<Upgrade> = getUpgradeList();
};

export default class SaveData extends SaveParameter {
	get biscuitsPerSecond(): number {
		const buildingProduction = this.upgrades.filter((upgrade) => upgrade.isBought).reduce((acc, upgrade) => {
			upgrade.effect.multipleBuildingProduction.forEach((multiple, index) => {
				acc[index] *= multiple;
			});
			return acc;
		}, [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]);

		return this.buildings.reduce((acc, building) => acc + building.count * building.perSecond * buildingProduction[building.id], 0.0);
	}

	get biscuitsPerClick(): number {
		return this.upgrades.filter((upgrade) => upgrade.isBought).reduce((acc, upgrade) => acc * upgrade.effect.multipleBiscuitPerClick, 1.0);
	};

	public constructor(fields: SaveParameter = new SaveParameter()) {
		super();
		lodash.merge(this, fields);
	}

	toString(): string {
		return JSON.stringify(this);
	}

	static createFromString(saveString: string): SaveData {
		return new SaveData(JSON.parse(saveString));
	}

	reset() {
		lodash.merge(this, new SaveData());
	}
};