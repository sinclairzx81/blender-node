import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * View3DCursor
 * 
 * https://docs.blender.org/api/current/bpy.types.View3DCursor.html
 */
export class View3DCursor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 3)
    }

    /**
     * Matrix combining loc/rot of the cursor
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix`, 'number', 4, 4)
    }

    /**
     * Angle of Rotation for Axis-Angle rotation representation
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 1.0, 0.0)
     */
    public get rotation_axis_angle(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation_axis_angle`, 'number', 4)
    }

    /**
     * 3D rotation
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get rotation_euler(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation_euler`, 'number', 3)
    }

    /**
     * 
     * @desc enum in ['QUATERNION', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'AXIS_ANGLE'], default 'XYZ'
     */
    public get rotation_mode(): 'QUATERNION' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'AXIS_ANGLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.rotation_mode`)
    }

    /**
     * Rotation in quaternions (keep normalized)
     * @desc float array of 4 items in [-inf, inf], default (1.0, 0.0, 0.0, 0.0)
     */
    public get rotation_quaternion(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation_quaternion`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * Matrix combining loc/rot of the cursor
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix`, value)
    }

    /**
     * Angle of Rotation for Axis-Angle rotation representation
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 1.0, 0.0)
     */
    public set rotation_axis_angle(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation_axis_angle`, value)
    }

    /**
     * 3D rotation
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set rotation_euler(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation_euler`, value)
    }

    /**
     * 
     * @desc enum in ['QUATERNION', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'AXIS_ANGLE'], default 'XYZ'
     */
    public set rotation_mode(value: 'QUATERNION' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'AXIS_ANGLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.rotation_mode`, value)
    }

    /**
     * Rotation in quaternions (keep normalized)
     * @desc float array of 4 items in [-inf, inf], default (1.0, 0.0, 0.0, 0.0)
     */
    public set rotation_quaternion(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation_quaternion`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
