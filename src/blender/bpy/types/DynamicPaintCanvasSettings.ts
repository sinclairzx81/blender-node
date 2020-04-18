import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { DynamicPaintSurfaces } from './DynamicPaintSurfaces'
import { DynamicPaintSurface } from './DynamicPaintSurface'

/**
 * DynamicPaintCanvasSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.DynamicPaintCanvasSettings.html
 */
export class DynamicPaintCanvasSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Paint surface list
     * @desc DynamicPaintSurfaces bpy_prop_collection of DynamicPaintSurface, (readonly)
     */
    public get canvas_surfaces(): BlenderCollection<DynamicPaintSurface> & Indexable<DynamicPaintSurface> & DynamicPaintSurfaces {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.canvas_surfaces`, DynamicPaintSurfaces, DynamicPaintSurface)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
