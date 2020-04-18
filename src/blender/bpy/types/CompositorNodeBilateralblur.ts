import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeBilateralblur
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeBilateralblur.html
 */
export class CompositorNodeBilateralblur {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [1, 128], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * 
     * @desc float in [0.01, 3], default 0.0
     */
    public get sigma_color(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sigma_color`)
    }

    /**
     * 
     * @desc float in [0.01, 30], default 0.0
     */
    public get sigma_space(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sigma_space`)
    }

    /**
     * 
     * @desc int in [1, 128], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * 
     * @desc float in [0.01, 3], default 0.0
     */
    public set sigma_color(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sigma_color`, value)
    }

    /**
     * 
     * @desc float in [0.01, 30], default 0.0
     */
    public set sigma_space(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sigma_space`, value)
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
