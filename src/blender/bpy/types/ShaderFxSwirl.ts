import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'
import { BlenderObject } from './BlenderObject'

/**
 * ShaderFxSwirl
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxSwirl.html
 */
export class ShaderFxSwirl {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Angle of rotation
     * @desc float in [-31.4159, 31.4159], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Object to determine center location
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Radius to apply
     * @desc int in [0, 32767], default 0
     */
    public get radius(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.radius`)
    }

    /**
     * Make image transparent outside of radius
     * @desc boolean, default False
     */
    public get use_transparent(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_transparent`)
    }

    /**
     * Angle of rotation
     * @desc float in [-31.4159, 31.4159], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Object to determine center location
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Radius to apply
     * @desc int in [0, 32767], default 0
     */
    public set radius(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.radius`, value)
    }

    /**
     * Make image transparent outside of radius
     * @desc boolean, default False
     */
    public set use_transparent(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_transparent`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
