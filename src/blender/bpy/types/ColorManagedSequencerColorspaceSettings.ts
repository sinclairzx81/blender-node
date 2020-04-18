import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ColorManagedSequencerColorspaceSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorManagedSequencerColorspaceSettings.html
 */
export class ColorManagedSequencerColorspaceSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color space that the sequencer operates in
     * @desc enum in ['Filmic Log', 'Linear', 'Linear ACES', 'Non-Color', 'Raw', 'sRGB', 'XYZ'], default 'NONE'
     */
    public get name(): 'Filmic Log' | 'Linear' | 'Linear ACES' | 'Non-Color' | 'Raw' | 'sRGB' | 'XYZ' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.name`)
    }

    /**
     * Color space that the sequencer operates in
     * @desc enum in ['Filmic Log', 'Linear', 'Linear ACES', 'Non-Color', 'Raw', 'sRGB', 'XYZ'], default 'NONE'
     */
    public set name(value: 'Filmic Log' | 'Linear' | 'Linear ACES' | 'Non-Color' | 'Raw' | 'sRGB' | 'XYZ') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
