import { Scene, PerspectiveCamera, WebGLRenderer} from "./node_modules/three/build/three.module.js"
import { loadScene_manual_trigger } from './src/polygonjs/scenes/manual_trigger/autogenerated/loadScene'

//scene
const scene = new Scene()

const loadedData = await loadScene_manual_trigger();      
scene.add(loadedData.scene.threejsScene());                                            

//camera
const camera = new PerspectiveCamera()

//render
function render() 
{
    if(window.scene){
        //every frame
    }

    renderer.render( scene, camera )
}


window.renderer = new WebGLRenderer()

renderer.setAnimationLoop( render )
document.body.appendChild( renderer.domElement )


document.addEventListener('POLYSceneReady', (event)=>{
    console.log('POLYSceneReady')
    window.scene = event.detail.scene;
    window.scene.node('/grid/actor1/onManualTrigger1').p.trigger.pressButton()
})

