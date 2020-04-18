import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Histogram
 * 
 * https://docs.blender.org/api/current/bpy.types.Histogram.html
 */
export class Histogram {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Channels to display when drawing the histogram
     * @desc enum in ['LUMA', 'RGB', 'R', 'G', 'B', 'A'], default 'LUMA'
     */
    public get mode(): 'LUMA' | 'RGB' | 'R' | 'G' | 'B' | 'A' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Display lines rather than filled shapes
     * @desc boolean, default False
     */
    public get show_line(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_line`)
    }

    /**
     * Channels to display when drawing the histogram
     * @desc enum in ['LUMA', 'RGB', 'R', 'G', 'B', 'A'], default 'LUMA'
     */
    public set mode(value: 'LUMA' | 'RGB' | 'R' | 'G' | 'B' | 'A') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Display lines rather than filled shapes
     * @desc boolean, default False
     */
    public set show_line(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_line`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
