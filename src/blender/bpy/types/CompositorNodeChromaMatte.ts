import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeChromaMatte
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeChromaMatte.html
 */
export class CompositorNodeChromaMatte {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Alpha falloff
     * @desc float in [0, 1], default 0.0
     */
    public get gain(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gain`)
    }

    /**
     * Alpha lift
     * @desc float in [0, 1], default 0.0
     */
    public get lift(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.lift`)
    }

    /**
     * Adjusts the brightness of any shadows captured
     * @desc float in [0, 1], default 0.0
     */
    public get shadow_adjust(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_adjust`)
    }

    /**
     * Tolerance below which colors will be considered as exact matches
     * @desc float in [0, 0.523599], default 0.0
     */
    public get threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold`)
    }

    /**
     * Tolerance for a color to be considered a keying color
     * @desc float in [0.0174533, 1.39626], default 0.0
     */
    public get tolerance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tolerance`)
    }

    /**
     * Alpha falloff
     * @desc float in [0, 1], default 0.0
     */
    public set gain(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gain`, value)
    }

    /**
     * Alpha lift
     * @desc float in [0, 1], default 0.0
     */
    public set lift(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.lift`, value)
    }

    /**
     * Adjusts the brightness of any shadows captured
     * @desc float in [0, 1], default 0.0
     */
    public set shadow_adjust(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_adjust`, value)
    }

    /**
     * Tolerance below which colors will be considered as exact matches
     * @desc float in [0, 0.523599], default 0.0
     */
    public set threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold`, value)
    }

    /**
     * Tolerance for a color to be considered a keying color
     * @desc float in [0.0174533, 1.39626], default 0.0
     */
    public set tolerance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tolerance`, value)
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
