import { reactive } from "vue";
import { defineStore } from "pinia";
import SaveData from "@/models/SaveData";

export const useStatusStore = defineStore("status", () => {
	const loadFromLocalStorage = (): SaveData => {
		const saveString: string = localStorage.getItem("savedata") || (new SaveData()).toString();
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
