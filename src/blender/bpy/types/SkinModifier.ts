import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * SkinModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.SkinModifier.html
 */
export class SkinModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Smooth complex geometry around branches
     * @desc float in [0, 1], default 0.0
     */
    public get branch_smoothing(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.branch_smoothing`)
    }

    /**
     * Output faces with smooth shading rather than flat shaded
     * @desc boolean, default False
     */
    public get use_smooth_shade(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smooth_shade`)
    }

    /**
     * Avoid making unsymmetrical quads across the X axis
     * @desc boolean, default False
     */
    public get use_x_symmetry(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_x_symmetry`)
    }

    /**
     * Avoid making unsymmetrical quads across the Y axis
     * @desc boolean, default False
     */
    public get use_y_symmetry(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_y_symmetry`)
    }

    /**
     * Avoid making unsymmetrical quads across the Z axis
     * @desc boolean, default False
     */
    public get use_z_symmetry(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_z_symmetry`)
    }

    /**
     * Smooth complex geometry around branches
     * @desc float in [0, 1], default 0.0
     */
    public set branch_smoothing(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.branch_smoothing`, value)
    }

    /**
     * Output faces with smooth shading rather than flat shaded
     * @desc boolean, default False
     */
    public set use_smooth_shade(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smooth_shade`, value)
    }

    /**
     * Avoid making unsymmetrical quads across the X axis
     * @desc boolean, default False
     */
    public set use_x_symmetry(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_x_symmetry`, value)
    }

    /**
     * Avoid making unsymmetrical quads across the Y axis
     * @desc boolean, default False
     */
    public set use_y_symmetry(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_y_symmetry`, value)
    }

    /**
     * Avoid making unsymmetrical quads across the Z axis
     * @desc boolean, default False
     */
    public set use_z_symmetry(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_z_symmetry`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
