// actor
import { CodeActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Code";
import { OnManualTriggerActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnManualTrigger";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { HemisphereLightObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight";
import { PerspectiveCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
import { PlaneHelperSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PlaneHelper";

export const requiredImports_manual_trigger = {
  nodes: [
    CodeActorNode,
    OnManualTriggerActorNode,
    CameraOrbitControlsEventNode,
    GeoObjNode,
    HemisphereLightObjNode,
    PerspectiveCameraObjNode,
    ActorSopNode,
    EventsNetworkSopNode,
    PlaneHelperSopNode,
  ],
  operations: [],
};
