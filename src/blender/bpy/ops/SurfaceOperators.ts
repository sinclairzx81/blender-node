import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SurfaceOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.surface.html
 */
export class SurfaceOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Construct a Nurbs surface Circle
     * @desc void
     */
    public primitive_nurbs_surface_circle_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_nurbs_surface_circle_add`, options)
    }

    /**
     * Construct a Nurbs surface Curve
     * @desc void
     */
    public primitive_nurbs_surface_curve_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_nurbs_surface_curve_add`, options)
    }

    /**
     * Construct a Nurbs surface Cylinder
     * @desc void
     */
    public primitive_nurbs_surface_cylinder_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_nurbs_surface_cylinder_add`, options)
    }

    /**
     * Construct a Nurbs surface Sphere
     * @desc void
     */
    public primitive_nurbs_surface_sphere_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_nurbs_surface_sphere_add`, options)
    }

    /**
     * Construct a Nurbs surface Patch
     * @desc void
     */
    public primitive_nurbs_surface_surface_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_nurbs_surface_surface_add`, options)
    }

    /**
     * Construct a Nurbs surface Torus
     * @desc void
     */
    public primitive_nurbs_surface_torus_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_nurbs_surface_torus_add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
