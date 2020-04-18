import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * BuildModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.BuildModifier.html
 */
export class BuildModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Total time the build effect requires
     * @desc float in [1, 1.04857e+06], default 0.0
     */
    public get frame_duration(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_duration`)
    }

    /**
     * Start frame of the effect
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get frame_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Seed for random if used
     * @desc int in [1, 1048574], default 0
     */
    public get seed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.seed`)
    }

    /**
     * Randomize the faces or edges during build
     * @desc boolean, default False
     */
    public get use_random_order(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_random_order`)
    }

    /**
     * Deconstruct the mesh instead of building it
     * @desc boolean, default False
     */
    public get use_reverse(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_reverse`)
    }

    /**
     * Total time the build effect requires
     * @desc float in [1, 1.04857e+06], default 0.0
     */
    public set frame_duration(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_duration`, value)
    }

    /**
     * Start frame of the effect
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set frame_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Seed for random if used
     * @desc int in [1, 1048574], default 0
     */
    public set seed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.seed`, value)
    }

    /**
     * Randomize the faces or edges during build
     * @desc boolean, default False
     */
    public set use_random_order(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_random_order`, value)
    }

    /**
     * Deconstruct the mesh instead of building it
     * @desc boolean, default False
     */
    public set use_reverse(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_reverse`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
