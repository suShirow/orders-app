import _ from "lodash";
import { ItemType } from "./Types";

// Receives array list of items, and an ID.
// Returns whether that ID is in that list somewhere.
export const itemTypeGuard = (testObj: any): boolean => {
  if(
    testObj["Region"] && testObj["Region"] !== "" &&
    testObj["Country"] && testObj["Country"] !== "" &&
    testObj["Item Type"] && testObj["Item Type"] !== "" &&
    testObj["Sales Channel"] && testObj["Sales Channel"] !== "" &&
    testObj["Order Priority"] && testObj["Order Priority"] !== "" &&
    testObj["Order Date"] && testObj["Order Date"] !== "" &&
    testObj["Order ID"] && testObj["Order ID"] !== "" &&
    testObj["Ship Date"] && testObj["Ship Date"] !== "" &&
    testObj["Units Sold"] && testObj["Units Sold"] !== "" &&
    testObj["Unit Price"] && testObj["Unit Price"] !== "" &&
    testObj["Unit Cost"] && testObj["Unit Cost"] !== "" &&
    testObj["Total Revenue"] && testObj["Total Revenue"] !== "" &&
    testObj["Total Cost"] && testObj["Total Cost"] !== "" &&
    testObj["Total Profit"] && testObj["Total Profit"] !== "") {
      return true
    }
    return false;
}
