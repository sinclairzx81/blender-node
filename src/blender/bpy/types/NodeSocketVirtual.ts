import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocket } from './NodeSocket'
import { NodeSocketStandard } from './NodeSocketStandard'

/**
 * NodeSocketVirtual
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketVirtual.html
 */
export class NodeSocketVirtual {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * List of node links from or to this socket. Warning: takes O(len(nodetree.links)) time.(readonly)
     * @desc void
     */
    public get links(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.links`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
