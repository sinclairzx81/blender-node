# BlenderNode

NodeJS binding to the Blender Python Scripting Environment

## Example
```typescript
import { Blender } from '../src/index'

const bpy = new Blender()
bpy.ops.wm.open_mainfile({ filepath: './model.blend' })
bpy.context.scene.render.filepath = 'output.png'
bpy.context.scene.render.resolution_x = 800
bpy.context.scene.render.resolution_y = 600
bpy.context.scene.cycles.device = 'CPU'
bpy.context.scene.cycles.samples = 64
bpy.ops.render.render({ 
    write_still: true, 
    use_viewport: true 
})
bpy.dispose()
```

## Overview

BlenderNode is an experimental NodeJS binding to Blenders Python Scripting REPL. It provides marshalled access to Blenders `bpy.data`, `bpy.ops` and `bpy.context` objects enabling headless scripts to be developed within a NodeJS environment. The library itself is primarily generated from the official Blender 2.82a documentation and provides generated TypeScript documentation across all Python classes found in the `types` and `ops` Blender namespaces.

This project was written as a proof of concept to test the feasibility of having JavaScript naturally interact with the Blender Python REPL environment purely over stdio. It uses a variety of novel approaches to facilitate interactions, including synchronous IO to the Blender process using threads and atomics, as well as various JavaScript tricks to have JavaScript map over to Python data structures.

Built against Blender 2.82a. Requires Node v12.16.1 and above.

License MIT

## Example

The following sets up a new scene and adds a camera and mesh. It is important that Blender is added to a `PATH` environment variable. The Blender process will be started with the call to the `Blender()` constructor.

```typescript
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
```

## Performance

BlenderNode interacts with Blender via stdio pipes. While interactions to the Blender process are asynchronous, this library will block while interacting with Blender. This is by design and inline with Blenders modal API. Calls made to the Blender process will block until Blender has responded. This includes reading and writing data to Blender properties, as well as calling functions.

Blocking the NodeJS thread is generally not a problem for simple scripts, however if looking to run Blender in a HTTP or other network context, it is highly recommended moving all code that interacts with Blender to a separate NodeJS Worker Thread.

## Project Tasks

```bash
npm start              # same as example:index
npm run clean          # cleans the project.
npm run build          # builds the project.
npm run example:index  # runs the 'index' example in watch mode
npm run example:scene  # runs the 'scene' example in watch mode
npm run example:render # runs the 'render' example in watch mode
npm run generate       # generates and caches the API from blender documentation
npm run generate:full  # rebuilds the cache and re-generates
```