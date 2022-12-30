import { loadScene_manual_trigger } from "./loadScene.js";

export const fetchSceneAndMount_manual_trigger = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_manual_trigger(options);
};
