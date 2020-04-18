import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeScale
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeScale.html
 */
export class CompositorNodeScale {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * How the image fits in the camera frame
     * @desc enum in ['STRETCH', 'FIT', 'CROP'], default 'STRETCH'
     */
    public get frame_method(): 'STRETCH' | 'FIT' | 'CROP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.frame_method`)
    }

    /**
     * Offset image horizontally (factor of image size)
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_x`)
    }

    /**
     * Offset image vertically (factor of image size)
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_y`)
    }

    /**
     * Coordinate space to scale relative to
     * @desc enum in ['RELATIVE', 'ABSOLUTE', 'SCENE_SIZE', 'RENDER_SIZE'], default 'RELATIVE'
     */
    public get space(): 'RELATIVE' | 'ABSOLUTE' | 'SCENE_SIZE' | 'RENDER_SIZE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.space`)
    }

    /**
     * How the image fits in the camera frame
     * @desc enum in ['STRETCH', 'FIT', 'CROP'], default 'STRETCH'
     */
    public set frame_method(value: 'STRETCH' | 'FIT' | 'CROP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.frame_method`, value)
    }

    /**
     * Offset image horizontally (factor of image size)
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_x`, value)
    }

    /**
     * Offset image vertically (factor of image size)
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_y`, value)
    }

    /**
     * Coordinate space to scale relative to
     * @desc enum in ['RELATIVE', 'ABSOLUTE', 'SCENE_SIZE', 'RENDER_SIZE'], default 'RELATIVE'
     */
    public set space(value: 'RELATIVE' | 'ABSOLUTE' | 'SCENE_SIZE' | 'RENDER_SIZE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.space`, value)
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
