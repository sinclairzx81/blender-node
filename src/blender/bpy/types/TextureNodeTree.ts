import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { NodeTree } from './NodeTree'

/**
 * TextureNodeTree
 * 
 * https://docs.blender.org/api/current/bpy.types.TextureNodeTree.html
 */
export class TextureNodeTree {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    [util.inspect.custom]() {
        return this.accessor
    }
}
