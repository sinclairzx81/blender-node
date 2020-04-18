import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * UDIMTile
 * 
 * https://docs.blender.org/api/current/bpy.types.UDIMTile.html
 */
export class UDIMTile {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Tile label
     * @desc string, default '', (never None)
     */
    public get label(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.label`)
    }

    /**
     * Number of the position that this tile covers
     * @desc int in [-inf, inf], default 0
     */
    public get number(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.number`)
    }

    /**
     * Tile label
     * @desc string, default '', (never None)
     */
    public set label(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.label`, value)
    }

    /**
     * Number of the position that this tile covers
     * @desc int in [-inf, inf], default 0
     */
    public set number(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.number`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
