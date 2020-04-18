import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { Scene } from './Scene'

/**
 * CompositorNodeRLayers
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeRLayers.html
 */
export class CompositorNodeRLayers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['PLACEHOLDER'], default 'PLACEHOLDER'
     */
    public get layer(): 'PLACEHOLDER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.layer`)
    }

    /**
     * 
     * @desc Scene
     */
    public get scene(): Scene {
        return PythonInterop.getClass(this.interop, `${this.accessor}.scene`, Scene)
    }

    /**
     * 
     * @desc enum in ['PLACEHOLDER'], default 'PLACEHOLDER'
     */
    public set layer(value: 'PLACEHOLDER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.layer`, value)
    }

    /**
     * 
     * @desc Scene
     */
    public set scene(value: Scene) {
        PythonInterop.setClass(this.interop, `${this.accessor}.scene`, value)
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
