import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * EdgeSplitModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.EdgeSplitModifier.html
 */
export class EdgeSplitModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Angle above which to split edges
     * @desc float in [0, 3.14159], default 0.0
     */
    public get split_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.split_angle`)
    }

    /**
     * Split edges with high angle between faces
     * @desc boolean, default False
     */
    public get use_edge_angle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_angle`)
    }

    /**
     * Split edges that are marked as sharp
     * @desc boolean, default False
     */
    public get use_edge_sharp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_sharp`)
    }

    /**
     * Angle above which to split edges
     * @desc float in [0, 3.14159], default 0.0
     */
    public set split_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.split_angle`, value)
    }

    /**
     * Split edges with high angle between faces
     * @desc boolean, default False
     */
    public set use_edge_angle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edge_angle`, value)
    }

    /**
     * Split edges that are marked as sharp
     * @desc boolean, default False
     */
    public set use_edge_sharp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edge_sharp`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
