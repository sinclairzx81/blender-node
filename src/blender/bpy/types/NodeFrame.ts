import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { Text } from './Text'

/**
 * NodeFrame
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeFrame.html
 */
export class NodeFrame {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Font size to use for displaying the label
     * @desc int in [8, 64], default 0
     */
    public get label_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.label_size`)
    }

    /**
     * Shrink the frame to minimal bounding box
     * @desc boolean, default False
     */
    public get shrink(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.shrink`)
    }

    /**
     * 
     * @desc Text
     */
    public get text(): Text {
        return PythonInterop.getClass(this.interop, `${this.accessor}.text`, Text)
    }

    /**
     * Font size to use for displaying the label
     * @desc int in [8, 64], default 0
     */
    public set label_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.label_size`, value)
    }

    /**
     * Shrink the frame to minimal bounding box
     * @desc boolean, default False
     */
    public set shrink(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.shrink`, value)
    }

    /**
     * 
     * @desc Text
     */
    public set text(value: Text) {
        PythonInterop.setClass(this.interop, `${this.accessor}.text`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
