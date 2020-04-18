import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeViewer
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeViewer.html
 */
export class CompositorNodeViewer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float in [0, 1], default 0.5
     */
    public get center_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.center_x`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.5
     */
    public get center_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.center_y`)
    }

    /**
     * Tile order
     * @desc enum in ['CENTEROUT', 'RANDOM', 'BOTTOMUP', 'RULE_OF_THIRDS'], default 'CENTEROUT'
     */
    public get tile_order(): 'CENTEROUT' | 'RANDOM' | 'BOTTOMUP' | 'RULE_OF_THIRDS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tile_order`)
    }

    /**
     * Colors are treated alpha premultiplied, or colors output straight (alpha gets set to 1)
     * @desc boolean, default False
     */
    public get use_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_alpha`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.5
     */
    public set center_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.center_x`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.5
     */
    public set center_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.center_y`, value)
    }

    /**
     * Tile order
     * @desc enum in ['CENTEROUT', 'RANDOM', 'BOTTOMUP', 'RULE_OF_THIRDS'], default 'CENTEROUT'
     */
    public set tile_order(value: 'CENTEROUT' | 'RANDOM' | 'BOTTOMUP' | 'RULE_OF_THIRDS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tile_order`, value)
    }

    /**
     * Colors are treated alpha premultiplied, or colors output straight (alpha gets set to 1)
     * @desc boolean, default False
     */
    public set use_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_alpha`, value)
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
