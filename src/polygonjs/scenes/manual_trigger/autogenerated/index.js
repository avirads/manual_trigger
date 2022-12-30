import { fetchSceneAndMount_manual_trigger } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_manual_trigger(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-manual_trigger";
  const loadedData = await fetchSceneAndMount_manual_trigger({
    domElement,
    autoPlay: true,
    onProgress,
    moduleImportSuffix: ".js",
    sceneDataRoot: publicPath + "/polygonjs/scenes",
    assetsRoot: publicPath,
    libsRootPrefix: publicPath,
  });
  return loadedData;
}
