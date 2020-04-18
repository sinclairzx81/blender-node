import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeChannelMatte
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeChannelMatte.html
 */
export class CompositorNodeChannelMatte {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['RGB', 'HSV', 'YUV', 'YCC'], default 'RGB'
     */
    public get color_space(): 'RGB' | 'HSV' | 'YUV' | 'YCC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_space`)
    }

    /**
     * Limit by this channel’s value
     * @desc enum in ['R', 'G', 'B'], default 'R'
     */
    public get limit_channel(): 'R' | 'G' | 'B' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.limit_channel`)
    }

    /**
     * Values higher than this setting are 100% opaque
     * @desc float in [-inf, inf], default 0.0
     */
    public get limit_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_max`)
    }

    /**
     * Algorithm to use to limit channel
     * @desc enum in ['SINGLE', 'MAX'], default 'SINGLE'
     */
    public get limit_method(): 'SINGLE' | 'MAX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.limit_method`)
    }

    /**
     * Values lower than this setting are 100% keyed
     * @desc float in [-inf, inf], default 0.0
     */
    public get limit_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_min`)
    }

    /**
     * Channel used to determine matte
     * @desc enum in ['R', 'G', 'B'], default 'R'
     */
    public get matte_channel(): 'R' | 'G' | 'B' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.matte_channel`)
    }

    /**
     * 
     * @desc enum in ['RGB', 'HSV', 'YUV', 'YCC'], default 'RGB'
     */
    public set color_space(value: 'RGB' | 'HSV' | 'YUV' | 'YCC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_space`, value)
    }

    /**
     * Limit by this channel’s value
     * @desc enum in ['R', 'G', 'B'], default 'R'
     */
    public set limit_channel(value: 'R' | 'G' | 'B') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.limit_channel`, value)
    }

    /**
     * Values higher than this setting are 100% opaque
     * @desc float in [-inf, inf], default 0.0
     */
    public set limit_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_max`, value)
    }

    /**
     * Algorithm to use to limit channel
     * @desc enum in ['SINGLE', 'MAX'], default 'SINGLE'
     */
    public set limit_method(value: 'SINGLE' | 'MAX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.limit_method`, value)
    }

    /**
     * Values lower than this setting are 100% keyed
     * @desc float in [-inf, inf], default 0.0
     */
    public set limit_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_min`, value)
    }

    /**
     * Channel used to determine matte
     * @desc enum in ['R', 'G', 'B'], default 'R'
     */
    public set matte_channel(value: 'R' | 'G' | 'B') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.matte_channel`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
