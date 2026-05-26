import { defineStore } from "pinia"

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    currentStep: 0,
    portType: null,
    answers: {},
    resultKey: null
  }),

  actions: {
    setPortType(type) {
      this.portType = type
      this.currentStep = 0
      this.answers = {}
      this.resultKey = null
    },

    setAnswer(questionId, value) {
      this.answers[questionId] = value
    },

    nextStep() {
      this.currentStep++
    },

    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--
      }
    },

    clearAnswer(questionId) {
      delete this.answers[questionId]
    },

    setResult(key) {
      this.resultKey = key
    },

    reset() {
      this.currentStep = 0
      this.portType = null
      this.answers = {}
      this.resultKey = null
    }
  }
})
