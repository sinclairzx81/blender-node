import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeColorCorrection
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeColorCorrection.html
 */
export class CompositorNodeColorCorrection {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Blue channel active
     * @desc boolean, default True
     */
    public get blue(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.blue`)
    }

    /**
     * Green channel active
     * @desc boolean, default True
     */
    public get green(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.green`)
    }

    /**
     * Highlights contrast
     * @desc float in [0, 4], default 1.0
     */
    public get highlights_contrast(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.highlights_contrast`)
    }

    /**
     * Highlights gain
     * @desc float in [0, 4], default 1.0
     */
    public get highlights_gain(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.highlights_gain`)
    }

    /**
     * Highlights gamma
     * @desc float in [0, 4], default 1.0
     */
    public get highlights_gamma(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.highlights_gamma`)
    }

    /**
     * Highlights lift
     * @desc float in [-1, 1], default 0.0
     */
    public get highlights_lift(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.highlights_lift`)
    }

    /**
     * Highlights saturation
     * @desc float in [0, 4], default 1.0
     */
    public get highlights_saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.highlights_saturation`)
    }

    /**
     * Master contrast
     * @desc float in [0, 4], default 1.0
     */
    public get master_contrast(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.master_contrast`)
    }

    /**
     * Master gain
     * @desc float in [0, 4], default 1.0
     */
    public get master_gain(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.master_gain`)
    }

    /**
     * Master gamma
     * @desc float in [0, 4], default 1.0
     */
    public get master_gamma(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.master_gamma`)
    }

    /**
     * Master lift
     * @desc float in [-1, 1], default 0.0
     */
    public get master_lift(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.master_lift`)
    }

    /**
     * Master saturation
     * @desc float in [0, 4], default 1.0
     */
    public get master_saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.master_saturation`)
    }

    /**
     * Midtones contrast
     * @desc float in [0, 4], default 1.0
     */
    public get midtones_contrast(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.midtones_contrast`)
    }

    /**
     * End of midtones
     * @desc float in [0, 1], default 0.7
     */
    public get midtones_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.midtones_end`)
    }

    /**
     * Midtones gain
     * @desc float in [0, 4], default 1.0
     */
    public get midtones_gain(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.midtones_gain`)
    }

    /**
     * Midtones gamma
     * @desc float in [0, 4], default 1.0
     */
    public get midtones_gamma(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.midtones_gamma`)
    }

    /**
     * Midtones lift
     * @desc float in [-1, 1], default 0.0
     */
    public get midtones_lift(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.midtones_lift`)
    }

    /**
     * Midtones saturation
     * @desc float in [0, 4], default 1.0
     */
    public get midtones_saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.midtones_saturation`)
    }

    /**
     * Start of midtones
     * @desc float in [0, 1], default 0.2
     */
    public get midtones_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.midtones_start`)
    }

    /**
     * Red channel active
     * @desc boolean, default True
     */
    public get red(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.red`)
    }

    /**
     * Shadows contrast
     * @desc float in [0, 4], default 1.0
     */
    public get shadows_contrast(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadows_contrast`)
    }

    /**
     * Shadows gain
     * @desc float in [0, 4], default 1.0
     */
    public get shadows_gain(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadows_gain`)
    }

    /**
     * Shadows gamma
     * @desc float in [0, 4], default 1.0
     */
    public get shadows_gamma(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadows_gamma`)
    }

    /**
     * Shadows lift
     * @desc float in [-1, 1], default 0.0
     */
    public get shadows_lift(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadows_lift`)
    }

    /**
     * Shadows saturation
     * @desc float in [0, 4], default 1.0
     */
    public get shadows_saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadows_saturation`)
    }

    /**
     * Blue channel active
     * @desc boolean, default True
     */
    public set blue(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.blue`, value)
    }

    /**
     * Green channel active
     * @desc boolean, default True
     */
    public set green(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.green`, value)
    }

    /**
     * Highlights contrast
     * @desc float in [0, 4], default 1.0
     */
    public set highlights_contrast(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.highlights_contrast`, value)
    }

    /**
     * Highlights gain
     * @desc float in [0, 4], default 1.0
     */
    public set highlights_gain(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.highlights_gain`, value)
    }

    /**
     * Highlights gamma
     * @desc float in [0, 4], default 1.0
     */
    public set highlights_gamma(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.highlights_gamma`, value)
    }

    /**
     * Highlights lift
     * @desc float in [-1, 1], default 0.0
     */
    public set highlights_lift(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.highlights_lift`, value)
    }

    /**
     * Highlights saturation
     * @desc float in [0, 4], default 1.0
     */
    public set highlights_saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.highlights_saturation`, value)
    }

    /**
     * Master contrast
     * @desc float in [0, 4], default 1.0
     */
    public set master_contrast(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.master_contrast`, value)
    }

    /**
     * Master gain
     * @desc float in [0, 4], default 1.0
     */
    public set master_gain(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.master_gain`, value)
    }

    /**
     * Master gamma
     * @desc float in [0, 4], default 1.0
     */
    public set master_gamma(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.master_gamma`, value)
    }

    /**
     * Master lift
     * @desc float in [-1, 1], default 0.0
     */
    public set master_lift(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.master_lift`, value)
    }

    /**
     * Master saturation
     * @desc float in [0, 4], default 1.0
     */
    public set master_saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.master_saturation`, value)
    }

    /**
     * Midtones contrast
     * @desc float in [0, 4], default 1.0
     */
    public set midtones_contrast(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.midtones_contrast`, value)
    }

    /**
     * End of midtones
     * @desc float in [0, 1], default 0.7
     */
    public set midtones_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.midtones_end`, value)
    }

    /**
     * Midtones gain
     * @desc float in [0, 4], default 1.0
     */
    public set midtones_gain(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.midtones_gain`, value)
    }

    /**
     * Midtones gamma
     * @desc float in [0, 4], default 1.0
     */
    public set midtones_gamma(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.midtones_gamma`, value)
    }

    /**
     * Midtones lift
     * @desc float in [-1, 1], default 0.0
     */
    public set midtones_lift(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.midtones_lift`, value)
    }

    /**
     * Midtones saturation
     * @desc float in [0, 4], default 1.0
     */
    public set midtones_saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.midtones_saturation`, value)
    }

    /**
     * Start of midtones
     * @desc float in [0, 1], default 0.2
     */
    public set midtones_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.midtones_start`, value)
    }

    /**
     * Red channel active
     * @desc boolean, default True
     */
    public set red(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.red`, value)
    }

    /**
     * Shadows contrast
     * @desc float in [0, 4], default 1.0
     */
    public set shadows_contrast(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadows_contrast`, value)
    }

    /**
     * Shadows gain
     * @desc float in [0, 4], default 1.0
     */
    public set shadows_gain(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadows_gain`, value)
    }

    /**
     * Shadows gamma
     * @desc float in [0, 4], default 1.0
     */
    public set shadows_gamma(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadows_gamma`, value)
    }

    /**
     * Shadows lift
     * @desc float in [-1, 1], default 0.0
     */
    public set shadows_lift(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadows_lift`, value)
    }

    /**
     * Shadows saturation
     * @desc float in [0, 4], default 1.0
     */
    public set shadows_saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadows_saturation`, value)
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
