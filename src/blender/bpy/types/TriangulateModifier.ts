import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * TriangulateModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.TriangulateModifier.html
 */
export class TriangulateModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Try to preserve custom normals (WARNING: depending on chosen triangulation method, shading may not be fully preserved, ‘Fixed’ method usually gives the best result here)
     * @desc boolean, default False
     */
    public get keep_custom_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.keep_custom_normals`)
    }

    /**
     * Triangulate only polygons with vertex count greater than or equal to this number
     * @desc int in [4, inf], default 0
     */
    public get min_vertices(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.min_vertices`)
    }

    /**
     * Method for splitting the polygons into triangles
     * @desc enum in ['BEAUTY', 'CLIP'], default 'BEAUTY'
     */
    public get ngon_method(): 'BEAUTY' | 'CLIP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ngon_method`)
    }

    /**
     * Method for splitting the quads into triangles
     * @desc enum in ['BEAUTY', 'FIXED', 'FIXED_ALTERNATE', 'SHORTEST_DIAGONAL'], default 'BEAUTY'
     */
    public get quad_method(): 'BEAUTY' | 'FIXED' | 'FIXED_ALTERNATE' | 'SHORTEST_DIAGONAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.quad_method`)
    }

    /**
     * Try to preserve custom normals (WARNING: depending on chosen triangulation method, shading may not be fully preserved, ‘Fixed’ method usually gives the best result here)
     * @desc boolean, default False
     */
    public set keep_custom_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.keep_custom_normals`, value)
    }

    /**
     * Triangulate only polygons with vertex count greater than or equal to this number
     * @desc int in [4, inf], default 0
     */
    public set min_vertices(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.min_vertices`, value)
    }

    /**
     * Method for splitting the polygons into triangles
     * @desc enum in ['BEAUTY', 'CLIP'], default 'BEAUTY'
     */
    public set ngon_method(value: 'BEAUTY' | 'CLIP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ngon_method`, value)
    }

    /**
     * Method for splitting the quads into triangles
     * @desc enum in ['BEAUTY', 'FIXED', 'FIXED_ALTERNATE', 'SHORTEST_DIAGONAL'], default 'BEAUTY'
     */
    public set quad_method(value: 'BEAUTY' | 'FIXED' | 'FIXED_ALTERNATE' | 'SHORTEST_DIAGONAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.quad_method`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
