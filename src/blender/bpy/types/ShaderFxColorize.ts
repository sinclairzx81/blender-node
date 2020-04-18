import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'

/**
 * ShaderFxColorize
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxColorize.html
 */
export class ShaderFxColorize {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Mix factor
     * @desc float in [0, 1], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * Second color used for effect
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get high_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.high_color`, 'number', 4)
    }

    /**
     * First color used for effect
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get low_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.low_color`, 'number', 4)
    }

    /**
     * Effect mode
     * @desc enum in ['GRAYSCALE', 'SEPIA', 'DUOTONE', 'TRANSPARENT', 'CUSTOM'], default 'GRAYSCALE'
     */
    public get mode(): 'GRAYSCALE' | 'SEPIA' | 'DUOTONE' | 'TRANSPARENT' | 'CUSTOM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Mix factor
     * @desc float in [0, 1], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * Second color used for effect
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set high_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.high_color`, value)
    }

    /**
     * First color used for effect
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set low_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.low_color`, value)
    }

    /**
     * Effect mode
     * @desc enum in ['GRAYSCALE', 'SEPIA', 'DUOTONE', 'TRANSPARENT', 'CUSTOM'], default 'GRAYSCALE'
     */
    public set mode(value: 'GRAYSCALE' | 'SEPIA' | 'DUOTONE' | 'TRANSPARENT' | 'CUSTOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
