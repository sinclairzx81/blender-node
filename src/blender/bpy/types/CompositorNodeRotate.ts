import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeRotate
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeRotate.html
 */
export class CompositorNodeRotate {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Method to use to filter rotation
     * @desc enum in ['NEAREST', 'BILINEAR', 'BICUBIC'], default 'NEAREST'
     */
    public get filter_type(): 'NEAREST' | 'BILINEAR' | 'BICUBIC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_type`)
    }

    /**
     * Method to use to filter rotation
     * @desc enum in ['NEAREST', 'BILINEAR', 'BICUBIC'], default 'NEAREST'
     */
    public set filter_type(value: 'NEAREST' | 'BILINEAR' | 'BICUBIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_type`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
