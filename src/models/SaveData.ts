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
		return this.buildings.reduce((acc, building) => acc + building.perSecond * building.count, 0);
	}
	biscuitsPerClick: number = 1.0;

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