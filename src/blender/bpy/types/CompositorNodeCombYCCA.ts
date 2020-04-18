import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeCombYCCA
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeCombYCCA.html
 */
export class CompositorNodeCombYCCA {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['ITUBT601', 'ITUBT709', 'JFIF'], default 'ITUBT601'
     */
    public get mode(): 'ITUBT601' | 'ITUBT709' | 'JFIF' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * 
     * @desc enum in ['ITUBT601', 'ITUBT709', 'JFIF'], default 'ITUBT601'
     */
    public set mode(value: 'ITUBT601' | 'ITUBT709' | 'JFIF') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
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
