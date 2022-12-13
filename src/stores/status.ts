import { reactive } from "vue";
import { defineStore } from "pinia";
import SaveData from "@/models/SaveData";
import Status from "@/models/Status";
import type IStatus from "@/models/Status";

export const useStatusStore = defineStore("status", () => {
	const loadSaveDataFromLocalStorage = (): SaveData => {
		const saveString: string = localStorage.getItem("savedata") || (new SaveData()).toString();
		return SaveData.createFromString(saveString);
	};

	const saveData = loadSaveDataFromLocalStorage();
	const status: Status = reactive(new Status(saveData)) as Status;

	const saveToLocalStorage = () => {
		localStorage.setItem("savedata", status.getSaveDataString());
	};

	const hardReset = () => {
		status.reset();
		saveToLocalStorage();
	}

  return { status, saveToLocalStorage, hardReset };
});
