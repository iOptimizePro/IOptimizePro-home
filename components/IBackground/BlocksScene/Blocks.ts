// @ts-nocheck
import * as kokomi from 'kokomi.js'
import * as THREE from 'three'
import { Object3D } from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'

import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js'
import { DotScreenShader } from 'three/addons/shaders/DotScreenShader.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'

export default class Blocks extends kokomi.Component {
  private object: Object3D<TEventMap>

  constructor(base: kokomi.Base) {
    super(base)
    this.object = new THREE.Object3D()
    this.base.scene.add(this.object)

    this.addBlocks()
    this.addLight()
    this.addEffect()
  }

  /**
   * 添加石头
   */
  addBlocks() {
    const geometry = new THREE.SphereGeometry(1, 4, 4)
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
    })

    for (let i = 0; i < 100; i++) {
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize()
      mesh.position.multiplyScalar(Math.random() * 400)
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50
      this.object.add(mesh)
    }

  }

  /**
   * 添加光源
   */
  addLight() {
    this.base.scene.add(new THREE.AmbientLight(0xcccccc)) // 环境光

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(1, 1, 1)
    this.base.scene.add(directionalLight) // 平行光
  }

  /**
   * 创建后期效果 postprocessing effect
   */
  addEffect() {
    this.base.composer = new EffectComposer(this.base.renderer)
    this.base.composer?.addPass(new RenderPass(this.base.scene, this.base.camera))

    const dotScreenPass = new ShaderPass(DotScreenShader)
    dotScreenPass.uniforms.scale.value = 4

    const RGBShiftShaderPass = new ShaderPass(RGBShiftShader)
    RGBShiftShaderPass.uniforms.amount.value = 0.0015

    const outputPass = new OutputPass()

    this.base.composer?.addPass(dotScreenPass)
    this.base.composer?.addPass(RGBShiftShaderPass)
    this.base.composer?.addPass(outputPass)
  }

  update() {
    this.object.rotation.x += 0.005
    this.object.rotation.y += 0.01
  }

}
