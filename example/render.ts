import { Blender } from '../src/index'
import { join, dirname } from 'path'

const input  = '../../example/model/model.blend'
const output = join(dirname(__filename), '../../../output.png')
console.log('starting blender')
const bpy = new Blender()
console.log('opening file')
bpy.ops.wm.open_mainfile({ filepath: input })
bpy.context.scene.render.filepath = output
bpy.context.scene.render.resolution_x = 640
bpy.context.scene.render.resolution_y = 480
bpy.context.scene.cycles.device = 'CPU'
bpy.context.scene.cycles.samples = 32
console.log('rendering...')
bpy.ops.render.render({ 
    write_still: true, 
    use_viewport: true 
})

bpy.dispose()