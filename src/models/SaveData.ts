import { Buildings } from "@/models/Building";
import lodash from 'lodash';
import type Building from "@/models/Building";

class SaveParameter {
	biscuits: number = 0;
	biscuitsPerSecond: number = 3.155;
	biscuitsPerClick: number = 4.0;
	buildings: Array<Building> = Buildings;
};

export default class SaveData extends SaveParameter {
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
		Object.assign(this, new SaveData());
	}
};