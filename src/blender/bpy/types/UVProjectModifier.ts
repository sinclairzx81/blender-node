import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { UVProjector } from './UVProjector'

/**
 * UVProjectModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.UVProjectModifier.html
 */
export class UVProjectModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of UVProjector, (readonly)
     */
    public get projectors(): BlenderCollection<UVProjector> & Indexable<UVProjector> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.projectors`, UVProjector)
    }

    /**
     * 
     * @desc float in [1, inf], default 0.0
     */
    public get aspect_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.aspect_x`)
    }

    /**
     * 
     * @desc float in [1, inf], default 0.0
     */
    public get aspect_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.aspect_y`)
    }

    /**
     * Number of projectors to use
     * @desc int in [1, 10], default 0
     */
    public get projector_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.projector_count`)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public get scale_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_x`)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public get scale_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_y`)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public get uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_layer`)
    }

    /**
     * 
     * @desc float in [1, inf], default 0.0
     */
    public set aspect_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.aspect_x`, value)
    }

    /**
     * 
     * @desc float in [1, inf], default 0.0
     */
    public set aspect_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.aspect_y`, value)
    }

    /**
     * Number of projectors to use
     * @desc int in [1, 10], default 0
     */
    public set projector_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.projector_count`, value)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public set scale_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_x`, value)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public set scale_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_y`, value)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public set uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_layer`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
