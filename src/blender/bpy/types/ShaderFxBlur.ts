import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'

/**
 * ShaderFxBlur
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxBlur.html
 */
export class ShaderFxBlur {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Define circle of confusion for depth of field
     * @desc float in [0.001, 1], default 0.025
     */
    public get coc(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.coc`)
    }

    /**
     * Factor of Blur
     * @desc int array of 2 items in [0, 32767], default (0, 0)
     */
    public get factor(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.factor`, 'number', 2)
    }

    /**
     * Number of Blur Samples (zero, disable blur)
     * @desc int in [0, 32], default 4
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Blur using focal plane distance as factor to simulate depth of field effect (only in camera view)
     * @desc boolean, default False
     */
    public get use_dof_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dof_mode`)
    }

    /**
     * Define circle of confusion for depth of field
     * @desc float in [0.001, 1], default 0.025
     */
    public set coc(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.coc`, value)
    }

    /**
     * Factor of Blur
     * @desc int array of 2 items in [0, 32767], default (0, 0)
     */
    public set factor(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * Number of Blur Samples (zero, disable blur)
     * @desc int in [0, 32], default 4
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    /**
     * Blur using focal plane distance as factor to simulate depth of field effect (only in camera view)
     * @desc boolean, default False
     */
    public set use_dof_mode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dof_mode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
