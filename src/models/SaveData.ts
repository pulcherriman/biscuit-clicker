import { BuildingInfoList } from "@/models/Building";
import { getUpgradeList } from "@/models/Upgrade";
import lodash from 'lodash';
import { BuildingSaveData } from "@/models/Building";
import type Building from "@/models/Building";
import type Upgrade from "@/models/Upgrade";

class SaveParameter {
	biscuits: number = 0;
	buildings: Array<BuildingSaveData> = BuildingInfoList.map((buildingInfo) => new BuildingSaveData(
		buildingInfo.id, 0
	));
	// upgrades: Array<Upgrade>;
};

export default class SaveData extends SaveParameter{
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