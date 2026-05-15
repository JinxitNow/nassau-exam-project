import { ref, onValue } from "firebase/database";
import { db } from "@/firebase";

export function loadEmployees(callback) {
  const employeesRef = ref(db, "employees");

  onValue(employeesRef, (snapshot) => {
    const data = snapshot.val() || {};
    const list = Object.keys(data).map(key => ({
      id: key,
      ...data[key]
    }));
    callback(list);
  });
}
