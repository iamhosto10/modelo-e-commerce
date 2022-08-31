import { db } from "../firebase/credenciales";
import { collection, doc, addDoc, onSnapshot } from "firebase/firestore";

async function createcheckout(uid, cart) {
  const collectionref = collection(db, `customers/${uid}/checkout_sessions`);
  addDoc(collectionref, {
    mode: "payment",
    success_url: window.location.origin,
    cancel_url: window.location.origin,
    collect_shipping_address: true,
    line_items: cart.map((item) => {
      return {
        quantity: 1,
        price: item.pricesid,
      };
    }),
  });
}

export default createcheckout;
