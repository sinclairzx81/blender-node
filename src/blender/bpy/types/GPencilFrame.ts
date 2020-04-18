import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GPencilStrokes } from './GPencilStrokes'
import { GPencilStroke } from './GPencilStroke'

/**
 * GPencilFrame
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilFrame.html
 */
export class GPencilFrame {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Freehand curves defining the sketch on this frame
     * @desc GPencilStrokes bpy_prop_collection of GPencilStroke, (readonly)
     */
    public get strokes(): BlenderCollection<GPencilStroke> & Indexable<GPencilStroke> & GPencilStrokes {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.strokes`, GPencilStrokes, GPencilStroke)
    }

    /**
     * The frame on which this sketch appears
     * @desc int in [-1048574, 1048574], default 0
     */
    public get frame_number(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_number`)
    }

    /**
     * Frame is being edited (painted on)
     * @desc boolean, default False
     */
    public get is_edited(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_edited`)
    }

    /**
     * Frame is selected for editing in the Dope Sheet
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * The frame on which this sketch appears
     * @desc int in [-1048574, 1048574], default 0
     */
    public set frame_number(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_number`, value)
    }

    /**
     * Frame is being edited (painted on)
     * @desc boolean, default False
     */
    public set is_edited(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_edited`, value)
    }

    /**
     * Frame is selected for editing in the Dope Sheet
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Remove all the grease pencil frame data
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
