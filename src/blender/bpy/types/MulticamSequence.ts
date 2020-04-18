import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { EffectSequence } from './EffectSequence'

/**
 * MulticamSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.MulticamSequence.html
 */
export class MulticamSequence {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get input_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.input_count`)
    }

    /**
     * Animation end offset (trim end)
     * @desc int in [0, inf], default 0
     */
    public get animation_offset_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.animation_offset_end`)
    }

    /**
     * Animation start offset (trim start)
     * @desc int in [0, inf], default 0
     */
    public get animation_offset_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.animation_offset_start`)
    }

    /**
     * 
     * @desc int in [0, 31], default 0
     */
    public get multicam_source(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.multicam_source`)
    }

    /**
     * Animation end offset (trim end)
     * @desc int in [0, inf], default 0
     */
    public set animation_offset_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.animation_offset_end`, value)
    }

    /**
     * Animation start offset (trim start)
     * @desc int in [0, inf], default 0
     */
    public set animation_offset_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.animation_offset_start`, value)
    }

    /**
     * 
     * @desc int in [0, 31], default 0
     */
    public set multicam_source(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.multicam_source`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
