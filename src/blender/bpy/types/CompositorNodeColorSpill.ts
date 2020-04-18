import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeColorSpill
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeColorSpill.html
 */
export class CompositorNodeColorSpill {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['R', 'G', 'B'], default 'R'
     */
    public get channel(): 'R' | 'G' | 'B' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.channel`)
    }

    /**
     * 
     * @desc enum in ['R', 'G', 'B'], default 'R'
     */
    public get limit_channel(): 'R' | 'G' | 'B' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.limit_channel`)
    }

    /**
     * 
     * @desc enum in ['SIMPLE', 'AVERAGE'], default 'SIMPLE'
     */
    public get limit_method(): 'SIMPLE' | 'AVERAGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.limit_method`)
    }

    /**
     * Scale limit by value
     * @desc float in [0.5, 1.5], default 0.0
     */
    public get ratio(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ratio`)
    }

    /**
     * Blue spillmap scale
     * @desc float in [0, 1.5], default 0.0
     */
    public get unspill_blue(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.unspill_blue`)
    }

    /**
     * Green spillmap scale
     * @desc float in [0, 1.5], default 0.0
     */
    public get unspill_green(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.unspill_green`)
    }

    /**
     * Red spillmap scale
     * @desc float in [0, 1.5], default 0.0
     */
    public get unspill_red(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.unspill_red`)
    }

    /**
     * Compensate all channels (differently) by hand
     * @desc boolean, default False
     */
    public get use_unspill(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_unspill`)
    }

    /**
     * 
     * @desc enum in ['R', 'G', 'B'], default 'R'
     */
    public set channel(value: 'R' | 'G' | 'B') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.channel`, value)
    }

    /**
     * 
     * @desc enum in ['R', 'G', 'B'], default 'R'
     */
    public set limit_channel(value: 'R' | 'G' | 'B') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.limit_channel`, value)
    }

    /**
     * 
     * @desc enum in ['SIMPLE', 'AVERAGE'], default 'SIMPLE'
     */
    public set limit_method(value: 'SIMPLE' | 'AVERAGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.limit_method`, value)
    }

    /**
     * Scale limit by value
     * @desc float in [0.5, 1.5], default 0.0
     */
    public set ratio(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ratio`, value)
    }

    /**
     * Blue spillmap scale
     * @desc float in [0, 1.5], default 0.0
     */
    public set unspill_blue(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.unspill_blue`, value)
    }

    /**
     * Green spillmap scale
     * @desc float in [0, 1.5], default 0.0
     */
    public set unspill_green(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.unspill_green`, value)
    }

    /**
     * Red spillmap scale
     * @desc float in [0, 1.5], default 0.0
     */
    public set unspill_red(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.unspill_red`, value)
    }

    /**
     * Compensate all channels (differently) by hand
     * @desc boolean, default False
     */
    public set use_unspill(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_unspill`, value)
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
