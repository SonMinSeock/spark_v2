import { analytics } from "../db/firebase";
import { logEvent } from "firebase/analytics";

export function analyticsButtonLogEvent(title) {
  logEvent(analytics, title);
}
