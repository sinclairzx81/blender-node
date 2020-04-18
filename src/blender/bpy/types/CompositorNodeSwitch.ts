import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeSwitch
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeSwitch.html
 */
export class CompositorNodeSwitch {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Off: first socket, On: second socket
     * @desc boolean, default False
     */
    public get check(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.check`)
    }

    /**
     * Off: first socket, On: second socket
     * @desc boolean, default False
     */
    public set check(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.check`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
