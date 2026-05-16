import { db } from "@/firebase";
import { onValue, ref } from "firebase/database";

export function loadPins(callback) {
  const pinsRef = ref(db, "pins");
  onValue(pinsRef, (snapshot) => {
    const data = snapshot.val() || {};
    const list = Object.keys(data).map(id => ({
      id,
      ...data[id]
    }));
    callback(list);
  });
}
