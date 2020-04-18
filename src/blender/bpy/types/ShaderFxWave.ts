import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'

/**
 * ShaderFxWave
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxWave.html
 */
export class ShaderFxWave {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amplitude of Wave
     * @desc float in [0, inf], default 0.0
     */
    public get amplitude(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.amplitude`)
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
     * Amplitude of Wave
     * @desc float in [0, inf], default 0.0
     */
    public set amplitude(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.amplitude`, value)
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

    [util.inspect.custom]() {
        return this.accessor
    }
}
