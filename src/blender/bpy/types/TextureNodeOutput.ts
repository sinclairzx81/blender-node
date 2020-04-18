import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { TextureNode } from './TextureNode'

/**
 * TextureNodeOutput
 * 
 * https://docs.blender.org/api/current/bpy.types.TextureNodeOutput.html
 */
export class TextureNodeOutput {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
