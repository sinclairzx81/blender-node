import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ColorRampElements } from './ColorRampElements'
import { ColorRampElement } from './ColorRampElement'

/**
 * ColorRamp
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorRamp.html
 */
export class ColorRamp {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ColorRampElements bpy_prop_collection of ColorRampElement, (readonly)
     */
    public get elements(): BlenderCollection<ColorRampElement> & Indexable<ColorRampElement> & ColorRampElements {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.elements`, ColorRampElements, ColorRampElement)
    }

    /**
     * Set color mode to use for interpolation
     * @desc enum in ['RGB', 'HSV', 'HSL'], default 'RGB'
     */
    public get color_mode(): 'RGB' | 'HSV' | 'HSL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_mode`)
    }

    /**
     * Set color interpolation
     * @desc enum in ['NEAR', 'FAR', 'CW', 'CCW'], default 'NEAR'
     */
    public get hue_interpolation(): 'NEAR' | 'FAR' | 'CW' | 'CCW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.hue_interpolation`)
    }

    /**
     * Set interpolation between color stops
     * @desc enum in ['EASE', 'CARDINAL', 'LINEAR', 'B_SPLINE', 'CONSTANT'], default 'LINEAR'
     */
    public get interpolation(): 'EASE' | 'CARDINAL' | 'LINEAR' | 'B_SPLINE' | 'CONSTANT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation`)
    }

    /**
     * Set color mode to use for interpolation
     * @desc enum in ['RGB', 'HSV', 'HSL'], default 'RGB'
     */
    public set color_mode(value: 'RGB' | 'HSV' | 'HSL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_mode`, value)
    }

    /**
     * Set color interpolation
     * @desc enum in ['NEAR', 'FAR', 'CW', 'CCW'], default 'NEAR'
     */
    public set hue_interpolation(value: 'NEAR' | 'FAR' | 'CW' | 'CCW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.hue_interpolation`, value)
    }

    /**
     * Set interpolation between color stops
     * @desc enum in ['EASE', 'CARDINAL', 'LINEAR', 'B_SPLINE', 'CONSTANT'], default 'LINEAR'
     */
    public set interpolation(value: 'EASE' | 'CARDINAL' | 'LINEAR' | 'B_SPLINE' | 'CONSTANT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation`, value)
    }

    /**
     * Evaluate ColorRamp
     * @desc float array of 4 items in [-inf, inf]
     */
    public evaluate(options: { position?: number }): [number, number, number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.evaluate`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
