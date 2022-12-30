import { LoadSceneOptions, LoadedData } from "./loadScene";

type FetchSceneAndMount_manual_trigger = (
  options?: LoadSceneOptions
) => Promise<LoadedData>;

export const fetchSceneAndMount_manual_trigger: FetchSceneAndMount_manual_trigger;
