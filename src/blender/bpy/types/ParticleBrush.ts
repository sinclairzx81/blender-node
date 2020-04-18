import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveMapping } from './CurveMapping'

/**
 * ParticleBrush
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleBrush.html
 */
export class ParticleBrush {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CurveMapping, (readonly)
     */
    public get curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve`, CurveMapping)
    }

    /**
     * Particle count
     * @desc int in [1, 1000], default 10
     */
    public get count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.count`)
    }

    /**
     * 
     * @desc enum in ['GROW', 'SHRINK'], default 'GROW'
     */
    public get length_mode(): 'GROW' | 'SHRINK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.length_mode`)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUB'], default 'ADD'
     */
    public get puff_mode(): 'ADD' | 'SUB' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.puff_mode`)
    }

    /**
     * Radius of the brush in pixels
     * @desc int in [1, 32767], default 50
     */
    public get size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size`)
    }

    /**
     * Brush steps
     * @desc int in [1, 32767], default 10
     */
    public get steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.steps`)
    }

    /**
     * Brush strength
     * @desc float in [0.001, 1], default 0.5
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * Apply puff to unselected end-points (helps maintain hair volume when puffing root)
     * @desc boolean, default False
     */
    public get use_puff_volume(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_puff_volume`)
    }

    /**
     * Particle count
     * @desc int in [1, 1000], default 10
     */
    public set count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.count`, value)
    }

    /**
     * 
     * @desc enum in ['GROW', 'SHRINK'], default 'GROW'
     */
    public set length_mode(value: 'GROW' | 'SHRINK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.length_mode`, value)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUB'], default 'ADD'
     */
    public set puff_mode(value: 'ADD' | 'SUB') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.puff_mode`, value)
    }

    /**
     * Radius of the brush in pixels
     * @desc int in [1, 32767], default 50
     */
    public set size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * Brush steps
     * @desc int in [1, 32767], default 10
     */
    public set steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.steps`, value)
    }

    /**
     * Brush strength
     * @desc float in [0.001, 1], default 0.5
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    /**
     * Apply puff to unselected end-points (helps maintain hair volume when puffing root)
     * @desc boolean, default False
     */
    public set use_puff_volume(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_puff_volume`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
