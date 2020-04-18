import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ColorManagedDisplaySettings
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorManagedDisplaySettings.html
 */
export class ColorManagedDisplaySettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Display device name
     * @desc enum in ['NONE'], default 'NONE'
     */
    public get display_device(): 'NONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_device`)
    }

    /**
     * Display device name
     * @desc enum in ['NONE'], default 'NONE'
     */
    public set display_device(value: 'NONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_device`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
