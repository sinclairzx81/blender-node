import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeLumaMatte
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeLumaMatte.html
 */
export class CompositorNodeLumaMatte {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Values higher than this setting are 100% opaque
     * @desc float in [-inf, inf], default 0.0
     */
    public get limit_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_max`)
    }

    /**
     * Values lower than this setting are 100% keyed
     * @desc float in [-inf, inf], default 0.0
     */
    public get limit_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_min`)
    }

    /**
     * Values higher than this setting are 100% opaque
     * @desc float in [-inf, inf], default 0.0
     */
    public set limit_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_max`, value)
    }

    /**
     * Values lower than this setting are 100% keyed
     * @desc float in [-inf, inf], default 0.0
     */
    public set limit_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_min`, value)
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
