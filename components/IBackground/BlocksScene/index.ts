import * as kokomi from 'kokomi.js'
import * as THREE from 'three'
import Blocks from '~/components/IBackground/BlocksScene/Blocks'

export default class BlocksScene extends kokomi.Base {
  private blocks!: Blocks

  create() {
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
    this.camera.position.z = 400
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x000000)
    this.scene.fog = new THREE.Fog(0x000000, 1, 1000)

    this.blocks = new Blocks(this)
  }
}
