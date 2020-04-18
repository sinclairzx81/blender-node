import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveMapPoints } from './CurveMapPoints'
import { CurveMapPoint } from './CurveMapPoint'

/**
 * CurveMap
 * 
 * https://docs.blender.org/api/current/bpy.types.CurveMap.html
 */
export class CurveMap {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CurveMapPoints bpy_prop_collection of CurveMapPoint, (readonly)
     */
    public get points(): BlenderCollection<CurveMapPoint> & Indexable<CurveMapPoint> & CurveMapPoints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.points`, CurveMapPoints, CurveMapPoint)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
