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
 * TextureNodeCurveTime
 * 
 * https://docs.blender.org/api/current/bpy.types.TextureNodeCurveTime.html
 */
export class TextureNodeCurveTime {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CurveMapping, (readonly)
     */
    public get curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve`, CurveMapping)
    }

    /**
     * 
     * @desc int in [-32768, 32767], default 0
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * 
     * @desc int in [-32768, 32767], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * 
     * @desc int in [-32768, 32767], default 0
     */
    public set frame_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * 
     * @desc int in [-32768, 32767], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
