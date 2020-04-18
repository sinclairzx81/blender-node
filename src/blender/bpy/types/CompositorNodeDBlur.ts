import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeDBlur
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeDBlur.html
 */
export class CompositorNodeDBlur {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float in [0, 6.28319], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get center_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.center_x`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get center_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.center_y`)
    }

    /**
     * 
     * @desc float in [-1, 1], default 0.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * 
     * @desc int in [1, 32], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * 
     * @desc float in [-6.28319, 6.28319], default 0.0
     */
    public get spin(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spin`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_wrap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_wrap`)
    }

    /**
     * 
     * @desc float in [0, 100], default 0.0
     */
    public get zoom(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.zoom`)
    }

    /**
     * 
     * @desc float in [0, 6.28319], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set center_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.center_x`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set center_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.center_y`, value)
    }

    /**
     * 
     * @desc float in [-1, 1], default 0.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * 
     * @desc int in [1, 32], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * 
     * @desc float in [-6.28319, 6.28319], default 0.0
     */
    public set spin(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spin`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_wrap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_wrap`, value)
    }

    /**
     * 
     * @desc float in [0, 100], default 0.0
     */
    public set zoom(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.zoom`, value)
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
