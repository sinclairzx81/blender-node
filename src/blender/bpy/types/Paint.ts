import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveMapping } from './CurveMapping'
import { PaintToolSlot } from './PaintToolSlot'
import { Brush } from './Brush'
import { Palette } from './Palette'

/**
 * Paint
 * 
 * https://docs.blender.org/api/current/bpy.types.Paint.html
 */
export class Paint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Editable cavity curve
     * @desc CurveMapping, (readonly, never None)
     */
    public get cavity_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cavity_curve`, CurveMapping)
    }

    /**
     * 
     * @desc bpy_prop_collection of PaintToolSlot, (readonly)
     */
    public get tool_slots(): BlenderCollection<PaintToolSlot> & Indexable<PaintToolSlot> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.tool_slots`, PaintToolSlot)
    }

    /**
     * Active Brush
     * @desc Brush
     */
    public get brush(): Brush {
        return PythonInterop.getClass(this.interop, `${this.accessor}.brush`, Brush)
    }

    /**
     * Average multiple input samples together to smooth the brush stroke
     * @desc int in [0, inf], default 0
     */
    public get input_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.input_samples`)
    }

    /**
     * Active Palette
     * @desc Palette
     */
    public get palette(): Palette {
        return PythonInterop.getClass(this.interop, `${this.accessor}.palette`, Palette)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_brush(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_brush`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_brush_on_surface(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_brush_on_surface`)
    }

    /**
     * For multires, show low resolution while navigating the view
     * @desc boolean, default False
     */
    public get show_low_resolution(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_low_resolution`)
    }

    /**
     * Stride at which tiled strokes are copied
     * @desc float array of 3 items in [0.01, inf], default (0.0, 0.0, 0.0)
     */
    public get tile_offset(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tile_offset`, 'number', 3)
    }

    /**
     * Tile along X axis
     * @desc boolean, default False
     */
    public get tile_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.tile_x`)
    }

    /**
     * Tile along Y axis
     * @desc boolean, default False
     */
    public get tile_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.tile_y`)
    }

    /**
     * Tile along Z axis
     * @desc boolean, default False
     */
    public get tile_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.tile_z`)
    }

    /**
     * Mask painting according to mesh geometry cavity
     * @desc boolean, default False
     */
    public get use_cavity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cavity`)
    }

    /**
     * Reduce the strength of the brush where it overlaps symmetrical daubs
     * @desc boolean, default False
     */
    public get use_symmetry_feather(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_symmetry_feather`)
    }

    /**
     * Mirror brush across the X axis
     * @desc boolean, default False
     */
    public get use_symmetry_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_symmetry_x`)
    }

    /**
     * Mirror brush across the Y axis
     * @desc boolean, default False
     */
    public get use_symmetry_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_symmetry_y`)
    }

    /**
     * Mirror brush across the Z axis
     * @desc boolean, default False
     */
    public get use_symmetry_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_symmetry_z`)
    }

    /**
     * Active Brush
     * @desc Brush
     */
    public set brush(value: Brush) {
        PythonInterop.setClass(this.interop, `${this.accessor}.brush`, value)
    }

    /**
     * Average multiple input samples together to smooth the brush stroke
     * @desc int in [0, inf], default 0
     */
    public set input_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.input_samples`, value)
    }

    /**
     * Active Palette
     * @desc Palette
     */
    public set palette(value: Palette) {
        PythonInterop.setClass(this.interop, `${this.accessor}.palette`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_brush(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_brush`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_brush_on_surface(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_brush_on_surface`, value)
    }

    /**
     * For multires, show low resolution while navigating the view
     * @desc boolean, default False
     */
    public set show_low_resolution(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_low_resolution`, value)
    }

    /**
     * Stride at which tiled strokes are copied
     * @desc float array of 3 items in [0.01, inf], default (0.0, 0.0, 0.0)
     */
    public set tile_offset(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tile_offset`, value)
    }

    /**
     * Tile along X axis
     * @desc boolean, default False
     */
    public set tile_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.tile_x`, value)
    }

    /**
     * Tile along Y axis
     * @desc boolean, default False
     */
    public set tile_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.tile_y`, value)
    }

    /**
     * Tile along Z axis
     * @desc boolean, default False
     */
    public set tile_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.tile_z`, value)
    }

    /**
     * Mask painting according to mesh geometry cavity
     * @desc boolean, default False
     */
    public set use_cavity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cavity`, value)
    }

    /**
     * Reduce the strength of the brush where it overlaps symmetrical daubs
     * @desc boolean, default False
     */
    public set use_symmetry_feather(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_symmetry_feather`, value)
    }

    /**
     * Mirror brush across the X axis
     * @desc boolean, default False
     */
    public set use_symmetry_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_symmetry_x`, value)
    }

    /**
     * Mirror brush across the Y axis
     * @desc boolean, default False
     */
    public set use_symmetry_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_symmetry_y`, value)
    }

    /**
     * Mirror brush across the Z axis
     * @desc boolean, default False
     */
    public set use_symmetry_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_symmetry_z`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
