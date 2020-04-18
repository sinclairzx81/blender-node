import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GPencilLayer } from './GPencilLayer'

/**
 * GreasePencilLayers
 * 
 * https://docs.blender.org/api/current/bpy.types.GreasePencilLayers.html
 */
export class GreasePencilLayers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active grease pencil layer
     * @desc GPencilLayer
     */
    public get active(): GPencilLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, GPencilLayer)
    }

    /**
     * Index of active grease pencil layer
     * @desc int in [0, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Note/Layer to add annotation strokes to
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public get active_note(): 'DEFAULT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.active_note`)
    }

    /**
     * Active grease pencil layer
     * @desc GPencilLayer
     */
    public set active(value: GPencilLayer) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Index of active grease pencil layer
     * @desc int in [0, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Note/Layer to add annotation strokes to
     * @desc enum in ['DEFAULT'], default 'DEFAULT'
     */
    public set active_note(value: 'DEFAULT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.active_note`, value)
    }

    /**
     * Add a new grease pencil layer
     * @desc GPencilLayer
     */
    public new(options: { name?: string, set_active?: boolean }): GPencilLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, GPencilLayer)
    }

    /**
     * Remove a grease pencil layer
     * @desc void
     */
    public remove(options: { layer?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Move a grease pencil layer in the layer stack
     * @desc void
     */
    public move(options: { layer?: unknown, type?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
