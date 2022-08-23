import { selector, atom } from "recoil";
import { minuteState } from "./atoms";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector({
  key: "hour",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return 123123;
  },
});
