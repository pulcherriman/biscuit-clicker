import { ref } from "vue";
import { defineStore } from "pinia";

export const useStatusStore = defineStore("status", () => {
  const currentAllBiscuits = ref(0);

  return { currentAllBiscuits };
});
