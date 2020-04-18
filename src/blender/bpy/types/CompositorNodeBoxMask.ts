import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeBoxMask
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeBoxMask.html
 */
export class CompositorNodeBoxMask {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Height of the box
     * @desc float in [0, 2], default 0.2
     */
    public get height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.height`)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT', 'MULTIPLY', 'NOT'], default 'ADD'
     */
    public get mask_type(): 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'NOT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_type`)
    }

    /**
     * Rotation angle of the box
     * @desc float in [-31.4159, 31.4159], default 0.0
     */
    public get rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rotation`)
    }

    /**
     * Width of the box
     * @desc float in [0, 2], default 0.3
     */
    public get width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.width`)
    }

    /**
     * X position of the middle of the box
     * @desc float in [-1, 2], default 0.5
     */
    public get x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.x`)
    }

    /**
     * Y position of the middle of the box
     * @desc float in [-1, 2], default 0.5
     */
    public get y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.y`)
    }

    /**
     * Height of the box
     * @desc float in [0, 2], default 0.2
     */
    public set height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.height`, value)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT', 'MULTIPLY', 'NOT'], default 'ADD'
     */
    public set mask_type(value: 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'NOT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_type`, value)
    }

    /**
     * Rotation angle of the box
     * @desc float in [-31.4159, 31.4159], default 0.0
     */
    public set rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rotation`, value)
    }

    /**
     * Width of the box
     * @desc float in [0, 2], default 0.3
     */
    public set width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.width`, value)
    }

    /**
     * X position of the middle of the box
     * @desc float in [-1, 2], default 0.5
     */
    public set x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.x`, value)
    }

    /**
     * Y position of the middle of the box
     * @desc float in [-1, 2], default 0.5
     */
    public set y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.y`, value)
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
