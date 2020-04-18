import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'

/**
 * ThemeFileBrowser
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeFileBrowser.html
 */
export class ThemeFileBrowser {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for space
     * @desc ThemeSpaceGeneric, (readonly, never None)
     */
    public get space(): ThemeSpaceGeneric {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space`, ThemeSpaceGeneric)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get selected_file(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.selected_file`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set selected_file(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.selected_file`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
