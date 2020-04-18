import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { Scene } from './Scene'

/**
 * CompositorNodeDefocus
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeDefocus.html
 */
export class CompositorNodeDefocus {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Bokeh shape rotation offset
     * @desc float in [0, 1.5708], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Blur limit, maximum CoC radius
     * @desc float in [0, 10000], default 0.0
     */
    public get blur_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blur_max`)
    }

    /**
     * 
     * @desc enum in ['OCTAGON', 'HEPTAGON', 'HEXAGON', 'PENTAGON', 'SQUARE', 'TRIANGLE', 'CIRCLE'], default 'CIRCLE'
     */
    public get bokeh(): 'OCTAGON' | 'HEPTAGON' | 'HEXAGON' | 'PENTAGON' | 'SQUARE' | 'TRIANGLE' | 'CIRCLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bokeh`)
    }

    /**
     * Amount of focal blur, 128=infinity=perfect focus, half the value doubles the blur radius
     * @desc float in [0, 128], default 0.0
     */
    public get f_stop(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.f_stop`)
    }

    /**
     * Scene from which to select the active camera (render scene if undefined)
     * @desc Scene
     */
    public get scene(): Scene {
        return PythonInterop.getClass(this.interop, `${this.accessor}.scene`, Scene)
    }

    /**
     * CoC radius threshold, prevents background bleed on in-focus midground, 0=off
     * @desc float in [0, 100], default 0.0
     */
    public get threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold`)
    }

    /**
     * Enable gamma correction before and after main process
     * @desc boolean, default False
     */
    public get use_gamma_correction(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gamma_correction`)
    }

    /**
     * Enable low quality mode, useful for preview
     * @desc boolean, default False
     */
    public get use_preview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_preview`)
    }

    /**
     * Disable when using an image as input instead of actual z-buffer (auto enabled if node not image based, eg. time node)
     * @desc boolean, default False
     */
    public get use_zbuffer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_zbuffer`)
    }

    /**
     * Scale the Z input when not using a z-buffer, controls maximum blur designated by the color white or input value 1
     * @desc float in [0, 1000], default 0.0
     */
    public get z_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.z_scale`)
    }

    /**
     * Bokeh shape rotation offset
     * @desc float in [0, 1.5708], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Blur limit, maximum CoC radius
     * @desc float in [0, 10000], default 0.0
     */
    public set blur_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blur_max`, value)
    }

    /**
     * 
     * @desc enum in ['OCTAGON', 'HEPTAGON', 'HEXAGON', 'PENTAGON', 'SQUARE', 'TRIANGLE', 'CIRCLE'], default 'CIRCLE'
     */
    public set bokeh(value: 'OCTAGON' | 'HEPTAGON' | 'HEXAGON' | 'PENTAGON' | 'SQUARE' | 'TRIANGLE' | 'CIRCLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bokeh`, value)
    }

    /**
     * Amount of focal blur, 128=infinity=perfect focus, half the value doubles the blur radius
     * @desc float in [0, 128], default 0.0
     */
    public set f_stop(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.f_stop`, value)
    }

    /**
     * Scene from which to select the active camera (render scene if undefined)
     * @desc Scene
     */
    public set scene(value: Scene) {
        PythonInterop.setClass(this.interop, `${this.accessor}.scene`, value)
    }

    /**
     * CoC radius threshold, prevents background bleed on in-focus midground, 0=off
     * @desc float in [0, 100], default 0.0
     */
    public set threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold`, value)
    }

    /**
     * Enable gamma correction before and after main process
     * @desc boolean, default False
     */
    public set use_gamma_correction(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gamma_correction`, value)
    }

    /**
     * Enable low quality mode, useful for preview
     * @desc boolean, default False
     */
    public set use_preview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_preview`, value)
    }

    /**
     * Disable when using an image as input instead of actual z-buffer (auto enabled if node not image based, eg. time node)
     * @desc boolean, default False
     */
    public set use_zbuffer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_zbuffer`, value)
    }

    /**
     * Scale the Z input when not using a z-buffer, controls maximum blur designated by the color white or input value 1
     * @desc float in [0, 1000], default 0.0
     */
    public set z_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.z_scale`, value)
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
