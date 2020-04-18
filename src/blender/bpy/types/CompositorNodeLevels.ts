import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeLevels
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeLevels.html
 */
export class CompositorNodeLevels {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['COMBINED_RGB', 'RED', 'GREEN', 'BLUE', 'LUMINANCE'], default 'COMBINED_RGB'
     */
    public get channel(): 'COMBINED_RGB' | 'RED' | 'GREEN' | 'BLUE' | 'LUMINANCE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.channel`)
    }

    /**
     * 
     * @desc enum in ['COMBINED_RGB', 'RED', 'GREEN', 'BLUE', 'LUMINANCE'], default 'COMBINED_RGB'
     */
    public set channel(value: 'COMBINED_RGB' | 'RED' | 'GREEN' | 'BLUE' | 'LUMINANCE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.channel`, value)
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
