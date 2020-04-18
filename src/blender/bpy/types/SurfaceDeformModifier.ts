import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * SurfaceDeformModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.SurfaceDeformModifier.html
 */
export class SurfaceDeformModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Whether geometry has been bound to target mesh
     * @desc boolean, default False, (readonly)
     */
    public get is_bound(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_bound`)
    }

    /**
     * Controls how much nearby polygons influence deformation
     * @desc float in [2, 16], default 0.0
     */
    public get falloff(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.falloff`)
    }

    /**
     * Mesh object to deform with
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * Controls how much nearby polygons influence deformation
     * @desc float in [2, 16], default 0.0
     */
    public set falloff(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.falloff`, value)
    }

    /**
     * Mesh object to deform with
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
