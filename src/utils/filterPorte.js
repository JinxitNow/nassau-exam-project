export function filtrerPorte(porte, userAnswers) {
  return porte.filter(port => {
    const regler = port.regler

    // PORTSTØRRELSE
    if (regler.portstoerrelse && userAnswers.portstoerrelse) {
      if (regler.portstoerrelse !== "variabel" &&
          regler.portstoerrelse !== "custom") {
        const size = userAnswers.portstoerrelse
        if (!regler.portstoerrelse[size]) return false
      }
    }

    // FRIPLADS (overhøjde)
    if (regler.friplads && userAnswers.overhoejde) {
      const over = userAnswers.overhoejde
      if (regler.friplads !== "variabel") {
        if (over === "low" && regler.friplads.overhøjde > 120) return false
        if (over === "normal" && regler.friplads.overhøjde < 120) return false
      }
    }

    // DØR
    if (regler.doer !== null && userAnswers.doer !== null) {
      if (regler.doer !== userAnswers.doer) return false
    }

    // VINDUER
    if (regler.vinduer !== null && userAnswers.vinduer !== null) {
      if (regler.vinduer !== true && userAnswers.vinduer === true) return false
    }

    // ISOLERING
    if (userAnswers.isolering) {
      if (userAnswers.isolering === "high" && regler.isolering !== true) return false
      if (userAnswers.isolering === "low" && regler.isolering === true) return false
    }

    // HASTIGHED
    if (userAnswers.hastighed) {
      if (regler.hastighed !== userAnswers.hastighed &&
          !(userAnswers.hastighed === "megetHurtig" && regler.hastighed === "hurtig")) {
        return false
      }
    }

    // DESIGN
    if (userAnswers.design) {
      const match = regler.design.some(d => d.toLowerCase().includes(userAnswers.design))
      if (!match) return false
    }

    // SIKKERHED
    if (userAnswers.sikkerhed === true && regler.sikkerhed !== true) {
      return false
    }

    // SMART-STYRING
    if (userAnswers.smart === true && regler.smart !== true) {
      return false
    }

    return true
  })
}
