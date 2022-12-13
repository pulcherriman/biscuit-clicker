import { BuildingInfoList } from "@/models/Building";
import { getUpgradeList } from "@/models/Upgrade";
import lodash from 'lodash';
import type Building from "@/models/Building";
import type Upgrade from "@/models/Upgrade";
import type SaveData from "@/models/SaveData";

interface IStatus {
	biscuits: number;
	biscuitsPerSecond: number;
	biscuitsPerClick: number;

	getSaveDataString(): string;
	reset(): void;
	addBiscuits(biscuits: number): void;
	buyBuilding(id: number, count: number): void;
};

export default class Status implements IStatus {
	private readonly buildingsInfoList = BuildingInfoList;

	constructor(private _saveData: SaveData) {
	}

	get biscuits(): number {
		return this._saveData.biscuits;
	}

	get biscuitsPerSecond(): number {
		return this.buildings.reduce((acc, building) => acc + building.perSecond * building.count, 0);
	}

	get biscuitsPerClick(): number {
		return this._saveData.biscuitsPerClick;
	}

	addBiscuits(biscuits: number): void {
		this._saveData.biscuits += biscuits;
	}

	buyBuilding(id: number, count: number): void {
		



	getSaveDataString(): string {
		return JSON.stringify(this._saveData);
	}

	reset(): void {
		this._saveData.reset();
	}

};