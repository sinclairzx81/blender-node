import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ColorManagedInputColorspaceSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorManagedInputColorspaceSettings.html
 */
export class ColorManagedInputColorspaceSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Treat image as non-color data without color management, like normal or displacement maps
     * @desc boolean, default False
     */
    public get is_data(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_data`)
    }

    /**
     * Color space in the image file, to convert to and from when saving and loading the image
     * @desc enum in ['Filmic Log', 'Linear', 'Linear ACES', 'Non-Color', 'Raw', 'sRGB', 'XYZ'], default 'NONE'
     */
    public get name(): 'Filmic Log' | 'Linear' | 'Linear ACES' | 'Non-Color' | 'Raw' | 'sRGB' | 'XYZ' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.name`)
    }

    /**
     * Treat image as non-color data without color management, like normal or displacement maps
     * @desc boolean, default False
     */
    public set is_data(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_data`, value)
    }

    /**
     * Color space in the image file, to convert to and from when saving and loading the image
     * @desc enum in ['Filmic Log', 'Linear', 'Linear ACES', 'Non-Color', 'Raw', 'sRGB', 'XYZ'], default 'NONE'
     */
    public set name(value: 'Filmic Log' | 'Linear' | 'Linear ACES' | 'Non-Color' | 'Raw' | 'sRGB' | 'XYZ') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
