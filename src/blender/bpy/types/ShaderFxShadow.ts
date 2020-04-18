import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'
import { BlenderObject } from './BlenderObject'

/**
 * ShaderFxShadow
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxShadow.html
 */
export class ShaderFxShadow {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amplitude of Wave
     * @desc float in [0, inf], default 0.0
     */
    public get amplitude(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.amplitude`)
    }

    /**
     * Number of pixels for blurring shadow (set to 0 to disable)
     * @desc int array of 2 items in [0, 32767], default (0, 0)
     */
    public get blur(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.blur`, 'number', 2)
    }

    /**
     * Object to determine center of rotation
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Offset of the shadow
     * @desc int array of 2 items in [-32768, 32767], default (0, 0)
     */
    public get offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 2)
    }

    /**
     * Direction of the wave
     * @desc enum in ['HORIZONTAL', 'VERTICAL'], default 'HORIZONTAL'
     */
    public get orientation(): 'HORIZONTAL' | 'VERTICAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.orientation`)
    }

    /**
     * Period of Wave
     * @desc float in [0, inf], default 0.0
     */
    public get period(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.period`)
    }

    /**
     * Phase Shift of Wave
     * @desc float in [-inf, inf], default 0.0
     */
    public get phase(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.phase`)
    }

    /**
     * Rotation around center or object
     * @desc float in [-6.28319, 6.28319], default 0.0
     */
    public get rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rotation`)
    }

    /**
     * Number of Blur Samples (zero, disable blur)
     * @desc int in [0, 32], default 4
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Offset of the shadow
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get scale(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.scale`, 'number', 2)
    }

    /**
     * Color used for Shadow
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get shadow_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.shadow_color`, 'number', 4)
    }

    /**
     * Use object as center of rotation
     * @desc boolean, default False
     */
    public get use_object(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_object`)
    }

    /**
     * Use wave effect
     * @desc boolean, default False
     */
    public get use_wave(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_wave`)
    }

    /**
     * Amplitude of Wave
     * @desc float in [0, inf], default 0.0
     */
    public set amplitude(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.amplitude`, value)
    }

    /**
     * Number of pixels for blurring shadow (set to 0 to disable)
     * @desc int array of 2 items in [0, 32767], default (0, 0)
     */
    public set blur(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.blur`, value)
    }

    /**
     * Object to determine center of rotation
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Offset of the shadow
     * @desc int array of 2 items in [-32768, 32767], default (0, 0)
     */
    public set offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Direction of the wave
     * @desc enum in ['HORIZONTAL', 'VERTICAL'], default 'HORIZONTAL'
     */
    public set orientation(value: 'HORIZONTAL' | 'VERTICAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.orientation`, value)
    }

    /**
     * Period of Wave
     * @desc float in [0, inf], default 0.0
     */
    public set period(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.period`, value)
    }

    /**
     * Phase Shift of Wave
     * @desc float in [-inf, inf], default 0.0
     */
    public set phase(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.phase`, value)
    }

    /**
     * Rotation around center or object
     * @desc float in [-6.28319, 6.28319], default 0.0
     */
    public set rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rotation`, value)
    }

    /**
     * Number of Blur Samples (zero, disable blur)
     * @desc int in [0, 32], default 4
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    /**
     * Offset of the shadow
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set scale(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * Color used for Shadow
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set shadow_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.shadow_color`, value)
    }

    /**
     * Use object as center of rotation
     * @desc boolean, default False
     */
    public set use_object(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_object`, value)
    }

    /**
     * Use wave effect
     * @desc boolean, default False
     */
    public set use_wave(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_wave`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
