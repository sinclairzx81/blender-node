import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveMapping } from './CurveMapping'

/**
 * ColorManagedViewSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorManagedViewSettings.html
 */
export class ColorManagedViewSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color curve mapping applied before display transform
     * @desc CurveMapping, (readonly)
     */
    public get curve_mapping(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve_mapping`, CurveMapping)
    }

    /**
     * Exposure (stops) applied before display transform
     * @desc float in [-32, 32], default 0.0
     */
    public get exposure(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.exposure`)
    }

    /**
     * Amount of gamma modification applied after display transform
     * @desc float in [0, 5], default 1.0
     */
    public get gamma(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gamma`)
    }

    /**
     * Additional transform applied before view transform for an artistic needs
     * @desc enum in ['NONE'], default 'NONE'
     */
    public get look(): 'NONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.look`)
    }

    /**
     * Use RGB curved for pre-display transformation
     * @desc boolean, default False
     */
    public get use_curve_mapping(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_curve_mapping`)
    }

    /**
     * View used when converting image to a display space
     * @desc enum in ['NONE'], default 'NONE'
     */
    public get view_transform(): 'NONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.view_transform`)
    }

    /**
     * Exposure (stops) applied before display transform
     * @desc float in [-32, 32], default 0.0
     */
    public set exposure(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.exposure`, value)
    }

    /**
     * Amount of gamma modification applied after display transform
     * @desc float in [0, 5], default 1.0
     */
    public set gamma(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gamma`, value)
    }

    /**
     * Additional transform applied before view transform for an artistic needs
     * @desc enum in ['NONE'], default 'NONE'
     */
    public set look(value: 'NONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.look`, value)
    }

    /**
     * Use RGB curved for pre-display transformation
     * @desc boolean, default False
     */
    public set use_curve_mapping(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_curve_mapping`, value)
    }

    /**
     * View used when converting image to a display space
     * @desc enum in ['NONE'], default 'NONE'
     */
    public set view_transform(value: 'NONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.view_transform`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
