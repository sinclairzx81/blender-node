import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { FModifier } from './FModifier'

/**
 * FModifierCycles
 * 
 * https://docs.blender.org/api/current/bpy.types.FModifierCycles.html
 */
export class FModifierCycles {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Maximum number of cycles to allow after last keyframe (0 = infinite)
     * @desc int in [-32768, 32767], default 0
     */
    public get cycles_after(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.cycles_after`)
    }

    /**
     * Maximum number of cycles to allow before first keyframe (0 = infinite)
     * @desc int in [-32768, 32767], default 0
     */
    public get cycles_before(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.cycles_before`)
    }

    /**
     * Cycling mode to use after last keyframe
     * @desc enum in ['NONE', 'REPEAT', 'REPEAT_OFFSET', 'MIRROR'], default 'NONE'
     */
    public get mode_after(): 'NONE' | 'REPEAT' | 'REPEAT_OFFSET' | 'MIRROR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode_after`)
    }

    /**
     * Cycling mode to use before first keyframe
     * @desc enum in ['NONE', 'REPEAT', 'REPEAT_OFFSET', 'MIRROR'], default 'NONE'
     */
    public get mode_before(): 'NONE' | 'REPEAT' | 'REPEAT_OFFSET' | 'MIRROR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode_before`)
    }

    /**
     * Maximum number of cycles to allow after last keyframe (0 = infinite)
     * @desc int in [-32768, 32767], default 0
     */
    public set cycles_after(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.cycles_after`, value)
    }

    /**
     * Maximum number of cycles to allow before first keyframe (0 = infinite)
     * @desc int in [-32768, 32767], default 0
     */
    public set cycles_before(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.cycles_before`, value)
    }

    /**
     * Cycling mode to use after last keyframe
     * @desc enum in ['NONE', 'REPEAT', 'REPEAT_OFFSET', 'MIRROR'], default 'NONE'
     */
    public set mode_after(value: 'NONE' | 'REPEAT' | 'REPEAT_OFFSET' | 'MIRROR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode_after`, value)
    }

    /**
     * Cycling mode to use before first keyframe
     * @desc enum in ['NONE', 'REPEAT', 'REPEAT_OFFSET', 'MIRROR'], default 'NONE'
     */
    public set mode_before(value: 'NONE' | 'REPEAT' | 'REPEAT_OFFSET' | 'MIRROR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode_before`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
