import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { AlembicObjectPaths } from './AlembicObjectPaths'
import { AlembicObjectPath } from './AlembicObjectPath'

/**
 * CacheFile
 * 
 * https://docs.blender.org/api/current/bpy.types.CacheFile.html
 */
export class CacheFile {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Paths of the objects inside the Alembic archive
     * @desc AlembicObjectPaths bpy_prop_collection of AlembicObjectPath, (readonly)
     */
    public get object_paths(): BlenderCollection<AlembicObjectPath> & Indexable<AlembicObjectPath> & AlembicObjectPaths {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.object_paths`, AlembicObjectPaths, AlembicObjectPath)
    }

    /**
     * Path to external displacements file
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public get forward_axis(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.forward_axis`)
    }

    /**
     * The time to use for looking up the data in the cache file, or to determine which file to use in a file sequence
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get frame(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame`)
    }

    /**
     * Subtracted from the current frame to use for looking up the data in the cache file, or to determine which file to use in a file sequence
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get frame_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_offset`)
    }

    /**
     * Whether the cache is separated in a series of files
     * @desc boolean, default False
     */
    public get is_sequence(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_sequence`)
    }

    /**
     * Whether to use a custom frame for looking up data in the cache file, instead of using the current scene frame
     * @desc boolean, default False
     */
    public get override_frame(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.override_frame`)
    }

    /**
     * Value by which to enlarge or shrink the object with respect to the world’s origin (only applicable through a Transform Cache constraint)
     * @desc float in [0.0001, 1000], default 1.0
     */
    public get scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale`)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public get up_axis(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.up_axis`)
    }

    /**
     * Path to external displacements file
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public set forward_axis(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.forward_axis`, value)
    }

    /**
     * The time to use for looking up the data in the cache file, or to determine which file to use in a file sequence
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set frame(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame`, value)
    }

    /**
     * Subtracted from the current frame to use for looking up the data in the cache file, or to determine which file to use in a file sequence
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set frame_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_offset`, value)
    }

    /**
     * Whether the cache is separated in a series of files
     * @desc boolean, default False
     */
    public set is_sequence(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_sequence`, value)
    }

    /**
     * Whether to use a custom frame for looking up data in the cache file, instead of using the current scene frame
     * @desc boolean, default False
     */
    public set override_frame(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.override_frame`, value)
    }

    /**
     * Value by which to enlarge or shrink the object with respect to the world’s origin (only applicable through a Transform Cache constraint)
     * @desc float in [0.0001, 1000], default 1.0
     */
    public set scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public set up_axis(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.up_axis`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
