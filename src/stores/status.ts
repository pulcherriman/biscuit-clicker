import { reactive } from "vue";
import { defineStore } from "pinia";

export const useStatusStore = defineStore("status", () => {
	const loadFromLocalStorage = (): SaveData => {
		const saveString: string = localStorage.getItem("savedata") || "";
		return SaveData.createFromString(saveString);
	};
	const saveData: SaveData = reactive(loadFromLocalStorage());

	const saveToLocalStorage = () => {
		localStorage.setItem("savedata", saveData.toString());
	};

	const hardReset = () => {
		saveData.reset();
		saveToLocalStorage();
	}

  return { saveData, saveToLocalStorage, hardReset };
});

class SaveData {
	biscuits: number = 0;

	public constructor(
		fields?: {
			biscuits: number,
		}) {
		if (fields) Object.assign(this, fields);
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