import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'
import { BlenderObject } from './BlenderObject'

/**
 * ShaderFxLight
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxLight.html
 */
export class ShaderFxLight {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Strength of ambient light source
     * @desc float in [0, inf], default 0.0
     */
    public get ambient(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ambient`)
    }

    /**
     * Strength of light source
     * @desc float in [0, inf], default 0.0
     */
    public get energy(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.energy`)
    }

    /**
     * Object to determine light source location
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Strength of ambient light source
     * @desc float in [0, inf], default 0.0
     */
    public set ambient(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ambient`, value)
    }

    /**
     * Strength of light source
     * @desc float in [0, inf], default 0.0
     */
    public set energy(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.energy`, value)
    }

    /**
     * Object to determine light source location
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
