import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * UserSolidLight
 * 
 * https://docs.blender.org/api/current/bpy.types.UserSolidLight.html
 */
export class UserSolidLight {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color of the light’s diffuse highlight
     * @desc float array of 3 items in [0, inf], default (0.8, 0.8, 0.8)
     */
    public get diffuse_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.diffuse_color`, 'number', 3)
    }

    /**
     * Direction that the light is shining
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 1.0)
     */
    public get direction(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.direction`, 'number', 3)
    }

    /**
     * Smooth the lighting from this light
     * @desc float in [0, 1], default 0.5
     */
    public get smooth(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.smooth`)
    }

    /**
     * Color of the light’s specular highlight
     * @desc float array of 3 items in [0, inf], default (0.8, 0.8, 0.8)
     */
    public get specular_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.specular_color`, 'number', 3)
    }

    /**
     * Enable this light in solid draw mode
     * @desc boolean, default True
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Color of the light’s diffuse highlight
     * @desc float array of 3 items in [0, inf], default (0.8, 0.8, 0.8)
     */
    public set diffuse_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.diffuse_color`, value)
    }

    /**
     * Direction that the light is shining
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 1.0)
     */
    public set direction(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.direction`, value)
    }

    /**
     * Smooth the lighting from this light
     * @desc float in [0, 1], default 0.5
     */
    public set smooth(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.smooth`, value)
    }

    /**
     * Color of the light’s specular highlight
     * @desc float array of 3 items in [0, inf], default (0.8, 0.8, 0.8)
     */
    public set specular_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.specular_color`, value)
    }

    /**
     * Enable this light in solid draw mode
     * @desc boolean, default True
     */
    public set use(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
