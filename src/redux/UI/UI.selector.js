import { createSelector } from "reselect";

const UI = (state) => state.UI;

export const selectMenutHidden = createSelector([UI], (UI) => UI.MenuHidden);
