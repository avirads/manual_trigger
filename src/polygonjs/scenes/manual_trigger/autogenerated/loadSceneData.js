import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1672403145477",
  root: "1672403145477",
  nodes: {
    perspectiveCamera1: "1672403145477",
    "perspectiveCamera1/events1": "1672403145477",
    grid: "1672403145477",
    "grid/actor1": "1672403145477",
  },
  shaders: {},
};

export const loadSceneData_manual_trigger = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "manual_trigger",
    urlPrefix: sceneDataRoot + "/manual_trigger",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
