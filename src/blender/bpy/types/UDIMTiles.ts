import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { UDIMTile } from './UDIMTile'

/**
 * UDIMTiles
 * 
 * https://docs.blender.org/api/current/bpy.types.UDIMTiles.html
 */
export class UDIMTiles {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active Image Tile
     * @desc UDIMTile, (never None)
     */
    public get active(): UDIMTile {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, UDIMTile)
    }

    /**
     * Active index in tiles array
     * @desc int in [0, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active Image Tile
     * @desc UDIMTile, (never None)
     */
    public set active(value: UDIMTile) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Active index in tiles array
     * @desc int in [0, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add a tile to the image
     * @desc UDIMTile
     */
    public new(options: { tile_number?: number, label?: string }): UDIMTile {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, UDIMTile)
    }

    /**
     * Get a tile based on its tile number
     * @desc UDIMTile
     */
    public get(options: { tile_number?: number }): UDIMTile {
        return PythonInterop.callClass(this.interop, `${this.accessor}.get`, options, UDIMTile)
    }

    /**
     * Remove an image tile
     * @desc void
     */
    public remove(options: { tile?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
