import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { MaskLayers } from './MaskLayers'
import { MaskLayer } from './MaskLayer'

/**
 * Mask
 * 
 * https://docs.blender.org/api/current/bpy.types.Mask.html
 */
export class Mask {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Collection of layers which defines this mask
     * @desc MaskLayers bpy_prop_collection of MaskLayer, (readonly)
     */
    public get layers(): BlenderCollection<MaskLayer> & Indexable<MaskLayer> & MaskLayers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.layers`, MaskLayers, MaskLayer)
    }

    /**
     * Index of active layer in list of all mask’s layers
     * @desc int in [-inf, inf], default 0
     */
    public get active_layer_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_layer_index`)
    }

    /**
     * Final frame of the mask (used for sequencer)
     * @desc int in [0, 1048574], default 0
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * First frame of the mask (used for sequencer)
     * @desc int in [0, 1048574], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Index of active layer in list of all mask’s layers
     * @desc int in [-inf, inf], default 0
     */
    public set active_layer_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_layer_index`, value)
    }

    /**
     * Final frame of the mask (used for sequencer)
     * @desc int in [0, 1048574], default 0
     */
    public set frame_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * First frame of the mask (used for sequencer)
     * @desc int in [0, 1048574], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
