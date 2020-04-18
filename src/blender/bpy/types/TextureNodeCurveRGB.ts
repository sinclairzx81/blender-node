import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { TextureNode } from './TextureNode'
import { CurveMapping } from './CurveMapping'

/**
 * TextureNodeCurveRGB
 * 
 * https://docs.blender.org/api/current/bpy.types.TextureNodeCurveRGB.html
 */
export class TextureNodeCurveRGB {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CurveMapping, (readonly)
     */
    public get mapping(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mapping`, CurveMapping)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
