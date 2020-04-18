import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { MovieClip } from './MovieClip'

/**
 * CompositorNodeMovieDistortion
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeMovieDistortion.html
 */
export class CompositorNodeMovieDistortion {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc MovieClip
     */
    public get clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip`, MovieClip)
    }

    /**
     * Distortion to use to filter image
     * @desc enum in ['UNDISTORT', 'DISTORT'], default 'UNDISTORT'
     */
    public get distortion_type(): 'UNDISTORT' | 'DISTORT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.distortion_type`)
    }

    /**
     * 
     * @desc MovieClip
     */
    public set clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clip`, value)
    }

    /**
     * Distortion to use to filter image
     * @desc enum in ['UNDISTORT', 'DISTORT'], default 'UNDISTORT'
     */
    public set distortion_type(value: 'UNDISTORT' | 'DISTORT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.distortion_type`, value)
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
