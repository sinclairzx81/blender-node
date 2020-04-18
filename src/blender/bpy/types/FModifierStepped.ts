import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { FModifier } from './FModifier'

/**
 * FModifierStepped
 * 
 * https://docs.blender.org/api/current/bpy.types.FModifierStepped.html
 */
export class FModifierStepped {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Frame that modifier’s influence ends (if applicable)
     * @desc float in [-inf, inf], default 0.0
     */
    public get frame_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Reference number of frames before frames get held (use to get hold for ‘1-3’ vs ‘5-7’ holding patterns)
     * @desc float in [-inf, inf], default 0.0
     */
    public get frame_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_offset`)
    }

    /**
     * Frame that modifier’s influence starts (if applicable)
     * @desc float in [-inf, inf], default 0.0
     */
    public get frame_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Number of frames to hold each value
     * @desc float in [-inf, inf], default 0.0
     */
    public get frame_step(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_step`)
    }

    /**
     * Restrict modifier to only act before its ‘end’ frame
     * @desc boolean, default False
     */
    public get use_frame_end(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_frame_end`)
    }

    /**
     * Restrict modifier to only act after its ‘start’ frame
     * @desc boolean, default False
     */
    public get use_frame_start(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_frame_start`)
    }

    /**
     * Frame that modifier’s influence ends (if applicable)
     * @desc float in [-inf, inf], default 0.0
     */
    public set frame_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * Reference number of frames before frames get held (use to get hold for ‘1-3’ vs ‘5-7’ holding patterns)
     * @desc float in [-inf, inf], default 0.0
     */
    public set frame_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_offset`, value)
    }

    /**
     * Frame that modifier’s influence starts (if applicable)
     * @desc float in [-inf, inf], default 0.0
     */
    public set frame_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Number of frames to hold each value
     * @desc float in [-inf, inf], default 0.0
     */
    public set frame_step(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_step`, value)
    }

    /**
     * Restrict modifier to only act before its ‘end’ frame
     * @desc boolean, default False
     */
    public set use_frame_end(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_frame_end`, value)
    }

    /**
     * Restrict modifier to only act after its ‘start’ frame
     * @desc boolean, default False
     */
    public set use_frame_start(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_frame_start`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
