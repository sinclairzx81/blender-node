import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * LaplacianDeformModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.LaplacianDeformModifier.html
 */
export class LaplacianDeformModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Whether geometry has been bound to anchors
     * @desc boolean, default False, (readonly)
     */
    public get is_bind(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_bind`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * Name of Vertex Group which determines Anchors
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * Name of Vertex Group which determines Anchors
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
