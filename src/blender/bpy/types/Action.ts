import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { ActionFCurves } from './ActionFCurves'
import { FCurve } from './FCurve'
import { ActionGroups } from './ActionGroups'
import { ActionGroup } from './ActionGroup'
import { ActionPoseMarkers } from './ActionPoseMarkers'
import { TimelineMarker } from './TimelineMarker'

/**
 * Action
 * 
 * https://docs.blender.org/api/current/bpy.types.Action.html
 */
export class Action {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The individual F-Curves that make up the action
     * @desc ActionFCurves bpy_prop_collection of FCurve, (readonly)
     */
    public get fcurves(): BlenderCollection<FCurve> & Indexable<FCurve> & ActionFCurves {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.fcurves`, ActionFCurves, FCurve)
    }

    /**
     * The final frame range of all F-Curves within this action
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0), (readonly)
     */
    public get frame_range(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.frame_range`, 'number', 2)
    }

    /**
     * Convenient groupings of F-Curves
     * @desc ActionGroups bpy_prop_collection of ActionGroup, (readonly)
     */
    public get groups(): BlenderCollection<ActionGroup> & Indexable<ActionGroup> & ActionGroups {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.groups`, ActionGroups, ActionGroup)
    }

    /**
     * Markers specific to this action, for labeling poses
     * @desc ActionPoseMarkers bpy_prop_collection of TimelineMarker, (readonly)
     */
    public get pose_markers(): BlenderCollection<TimelineMarker> & Indexable<TimelineMarker> & ActionPoseMarkers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.pose_markers`, ActionPoseMarkers, TimelineMarker)
    }

    /**
     * Type of ID block that action can be used on - DO NOT CHANGE UNLESS YOU KNOW WHAT YOU ARE DOING
     * @desc enum in ['ACTION', 'ARMATURE', 'BRUSH', 'CAMERA', 'CACHEFILE', 'CURVE', 'FONT', 'GREASEPENCIL', 'COLLECTION', 'IMAGE', 'KEY', 'LIGHT', 'LIBRARY', 'LINESTYLE', 'LATTICE', 'MASK', 'MATERIAL', 'META', 'MESH', 'MOVIECLIP', 'NODETREE', 'OBJECT', 'PAINTCURVE', 'PALETTE', 'PARTICLE', 'LIGHT_PROBE', 'SCENE', 'SOUND', 'SPEAKER', 'TEXT', 'TEXTURE', 'WINDOWMANAGER', 'WORLD', 'WORKSPACE'], default 'ACTION'
     */
    public get id_root(): 'ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'FONT' | 'GREASEPENCIL' | 'COLLECTION' | 'IMAGE' | 'KEY' | 'LIGHT' | 'LIBRARY' | 'LINESTYLE' | 'LATTICE' | 'MASK' | 'MATERIAL' | 'META' | 'MESH' | 'MOVIECLIP' | 'NODETREE' | 'OBJECT' | 'PAINTCURVE' | 'PALETTE' | 'PARTICLE' | 'LIGHT_PROBE' | 'SCENE' | 'SOUND' | 'SPEAKER' | 'TEXT' | 'TEXTURE' | 'WINDOWMANAGER' | 'WORLD' | 'WORKSPACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.id_root`)
    }

    /**
     * Type of ID block that action can be used on - DO NOT CHANGE UNLESS YOU KNOW WHAT YOU ARE DOING
     * @desc enum in ['ACTION', 'ARMATURE', 'BRUSH', 'CAMERA', 'CACHEFILE', 'CURVE', 'FONT', 'GREASEPENCIL', 'COLLECTION', 'IMAGE', 'KEY', 'LIGHT', 'LIBRARY', 'LINESTYLE', 'LATTICE', 'MASK', 'MATERIAL', 'META', 'MESH', 'MOVIECLIP', 'NODETREE', 'OBJECT', 'PAINTCURVE', 'PALETTE', 'PARTICLE', 'LIGHT_PROBE', 'SCENE', 'SOUND', 'SPEAKER', 'TEXT', 'TEXTURE', 'WINDOWMANAGER', 'WORLD', 'WORKSPACE'], default 'ACTION'
     */
    public set id_root(value: 'ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'FONT' | 'GREASEPENCIL' | 'COLLECTION' | 'IMAGE' | 'KEY' | 'LIGHT' | 'LIBRARY' | 'LINESTYLE' | 'LATTICE' | 'MASK' | 'MATERIAL' | 'META' | 'MESH' | 'MOVIECLIP' | 'NODETREE' | 'OBJECT' | 'PAINTCURVE' | 'PALETTE' | 'PARTICLE' | 'LIGHT_PROBE' | 'SCENE' | 'SOUND' | 'SPEAKER' | 'TEXT' | 'TEXTURE' | 'WINDOWMANAGER' | 'WORLD' | 'WORKSPACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.id_root`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
