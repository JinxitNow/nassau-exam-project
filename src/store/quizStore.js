import { defineStore } from "pinia"

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    currentStep: 1,
    answers: {
      portstoerrelse: null,
      overhoejde: null,
      doer: null,
      vinduer: null,
      isolering: null,
      hastighed: null,
      design: null,
      sikkerhed: null,
      smart: null
    }
  }),

  actions: {
  setAnswer(key, value) {
    this.answers[key] = value
  },
  nextStep() {
    this.currentStep++
  },
  prevStep() {
    this.currentStep--
  },
  reset() {
    this.currentStep = 1
    this.answers = {
      portstoerrelse: null,
      overhoejde: null,
      doer: null,
      vinduer: null,
      isolering: null,
      hastighed: null,
      design: null,
      sikkerhed: null,
      smart: null
    }
  }
}

})
