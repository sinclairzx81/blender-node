import { Blender } from '../src/index'

const bpy = new Blender()

// create camera
const camera_data = bpy.data.cameras.new({ name: "camera-data" })
const camera = bpy.data.objects.new({ 
    name: 'camera-object', 
    object_data: camera_data 
})

// create mesh
const mesh_data = bpy.data.meshes.new({ name: 'mesh-data'})
const mesh = bpy.data.objects.new({ 
    name: 'mesh-object', 
    object_data: mesh_data 
})
mesh_data.from_pydata({
    vertices: [
        [1, 0, 0], 
        [0, 1, 0], 
        [1, 1, 0]
    ],
    edges: [
        [0, 1], 
        [1, 2], 
        [2, 0]
    ],
    faces: [[0]]
})
mesh_data.calc_normals()

// create scene, add mesh and camera.
const scene = bpy.data.scenes.new({name: 'my-scene'})
scene.camera = camera
scene.collection.objects.link({ object: mesh })

// list out vertices and normals
for(const vertex of mesh_data.vertices) {
    console.log(vertex.co, vertex.normal)
}

// terminate blender process
bpy.dispose()
