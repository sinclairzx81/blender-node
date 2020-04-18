import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Bone
 * 
 * https://docs.blender.org/api/current/bpy.types.Bone.html
 */
export class Bone {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Location of head end of the bone relative to its parent
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get head(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.head`, 'number', 3)
    }

    /**
     * Location of head end of the bone relative to armature
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get head_local(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.head_local`, 'number', 3)
    }

    /**
     * Length of the bone
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.length`)
    }

    /**
     * 3x3 bone matrix
     * @desc float multi-dimensional array of 3 * 3 items in [-inf, inf], default ((0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0)), (readonly)
     */
    public get matrix(): [[number, number, number], [number, number, number], [number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix`, 'number', 3, 3)
    }

    /**
     * 4x4 bone matrix relative to armature
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0)), (readonly)
     */
    public get matrix_local(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_local`, 'number', 4, 4)
    }

    /**
     * Parent bone (in same Armature)
     * @desc Bone, (readonly)
     */
    public get parent(): Bone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.parent`, Bone)
    }

    /**
     * Location of tail end of the bone relative to its parent
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get tail(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tail`, 'number', 3)
    }

    /**
     * Location of tail end of the bone relative to armature
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get tail_local(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tail_local`, 'number', 3)
    }

    /**
     * When bone has a parent, bone’s head is stuck to the parent’s tail
     * @desc boolean, default False, (readonly)
     */
    public get use_connect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_connect`)
    }

    /**
     * X-axis handle offset for start of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_curveinx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_curveinx`)
    }

    /**
     * Y-axis handle offset for start of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_curveiny(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_curveiny`)
    }

    /**
     * X-axis handle offset for end of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_curveoutx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_curveoutx`)
    }

    /**
     * Y-axis handle offset for end of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_curveouty(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_curveouty`)
    }

    /**
     * Bone that serves as the end handle for the B-Bone curve
     * @desc Bone
     */
    public get bbone_custom_handle_end(): Bone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bbone_custom_handle_end`, Bone)
    }

    /**
     * Bone that serves as the start handle for the B-Bone curve
     * @desc Bone
     */
    public get bbone_custom_handle_start(): Bone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bbone_custom_handle_start`, Bone)
    }

    /**
     * Length of first Bezier Handle (for B-Bones only)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_easein(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_easein`)
    }

    /**
     * Length of second Bezier Handle (for B-Bones only)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_easeout(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_easeout`)
    }

    /**
     * Selects how the end handle of the B-Bone is computed
     * @desc enum in ['AUTO', 'ABSOLUTE', 'RELATIVE', 'TANGENT'], default 'AUTO'
     */
    public get bbone_handle_type_end(): 'AUTO' | 'ABSOLUTE' | 'RELATIVE' | 'TANGENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bbone_handle_type_end`)
    }

    /**
     * Selects how the start handle of the B-Bone is computed
     * @desc enum in ['AUTO', 'ABSOLUTE', 'RELATIVE', 'TANGENT'], default 'AUTO'
     */
    public get bbone_handle_type_start(): 'AUTO' | 'ABSOLUTE' | 'RELATIVE' | 'TANGENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bbone_handle_type_start`)
    }

    /**
     * Roll offset for the start of the B-Bone, adjusts twist
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_rollin(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_rollin`)
    }

    /**
     * Roll offset for the end of the B-Bone, adjusts twist
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_rollout(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_rollout`)
    }

    /**
     * X-axis scale factor for start of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_scaleinx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_scaleinx`)
    }

    /**
     * Y-axis scale factor for start of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_scaleiny(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_scaleiny`)
    }

    /**
     * X-axis scale factor for end of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_scaleoutx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_scaleoutx`)
    }

    /**
     * Y-axis scale factor for end of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_scaleouty(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_scaleouty`)
    }

    /**
     * Number of subdivisions of bone (for B-Bones only)
     * @desc int in [1, 32], default 0
     */
    public get bbone_segments(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bbone_segments`)
    }

    /**
     * B-Bone X size
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_x`)
    }

    /**
     * B-Bone Z size
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_z`)
    }

    /**
     * Bone deformation distance (for Envelope deform only)
     * @desc float in [0, 1000], default 0.0
     */
    public get envelope_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.envelope_distance`)
    }

    /**
     * Bone deformation weight (for Envelope deform only)
     * @desc float in [0, 1000], default 0.0
     */
    public get envelope_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.envelope_weight`)
    }

    /**
     * Radius of head of bone (for Envelope deform only)
     * @desc float in [-inf, inf], default 0.0
     */
    public get head_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.head_radius`)
    }

    /**
     * Bone is not visible when it is not in Edit Mode (i.e. in Object or Pose Modes)
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Bone is able to be selected
     * @desc boolean, default False
     */
    public get hide_select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_select`)
    }

    /**
     * Specifies how the bone inherits scaling from the parent bone
     * @desc enum in ['FULL', 'FIX_SHEAR', 'ALIGNED', 'AVERAGE', 'NONE', 'NONE_LEGACY'], default 'FULL'
     */
    public get inherit_scale(): 'FULL' | 'FIX_SHEAR' | 'ALIGNED' | 'AVERAGE' | 'NONE' | 'NONE_LEGACY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.inherit_scale`)
    }

    /**
     * Layers bone exists in
     * @desc boolean array of 32 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public get layers(): [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.layers`, 'boolean', 32)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select_head(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_head`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select_tail(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_tail`)
    }

    /**
     * Bone is always drawn as Wireframe regardless of viewport draw mode (useful for non-obstructive custom bone shapes)
     * @desc boolean, default False
     */
    public get show_wire(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_wire`)
    }

    /**
     * Radius of tail of bone (for Envelope deform only)
     * @desc float in [-inf, inf], default 0.0
     */
    public get tail_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tail_radius`)
    }

    /**
     * When bone doesn’t have a parent, it receives cyclic offset effects (Deprecated)
     * @desc boolean, default False
     */
    public get use_cyclic_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cyclic_offset`)
    }

    /**
     * Enable Bone to deform geometry
     * @desc boolean, default False
     */
    public get use_deform(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deform`)
    }

    /**
     * Add Roll Out of the Start Handle bone to the Roll In value
     * @desc boolean, default False
     */
    public get use_endroll_as_inroll(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_endroll_as_inroll`)
    }

    /**
     * When deforming bone, multiply effects of Vertex Group weights with Envelope influence
     * @desc boolean, default False
     */
    public get use_envelope_multiply(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_envelope_multiply`)
    }

    /**
     * Bone inherits rotation or scale from parent bone
     * @desc boolean, default False
     */
    public get use_inherit_rotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_inherit_rotation`)
    }

    /**
     * DEPRECATED: Bone inherits scaling from parent bone
     * @desc boolean, default False
     */
    public get use_inherit_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_inherit_scale`)
    }

    /**
     * Bone location is set in local space
     * @desc boolean, default False
     */
    public get use_local_location(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_local_location`)
    }

    /**
     * Object children will use relative transform, like deform
     * @desc boolean, default False
     */
    public get use_relative_parent(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_relative_parent`)
    }

    /**
     * X-axis handle offset for start of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_curveinx(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_curveinx`, value)
    }

    /**
     * Y-axis handle offset for start of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_curveiny(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_curveiny`, value)
    }

    /**
     * X-axis handle offset for end of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_curveoutx(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_curveoutx`, value)
    }

    /**
     * Y-axis handle offset for end of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_curveouty(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_curveouty`, value)
    }

    /**
     * Bone that serves as the end handle for the B-Bone curve
     * @desc Bone
     */
    public set bbone_custom_handle_end(value: Bone) {
        PythonInterop.setClass(this.interop, `${this.accessor}.bbone_custom_handle_end`, value)
    }

    /**
     * Bone that serves as the start handle for the B-Bone curve
     * @desc Bone
     */
    public set bbone_custom_handle_start(value: Bone) {
        PythonInterop.setClass(this.interop, `${this.accessor}.bbone_custom_handle_start`, value)
    }

    /**
     * Length of first Bezier Handle (for B-Bones only)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_easein(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_easein`, value)
    }

    /**
     * Length of second Bezier Handle (for B-Bones only)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_easeout(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_easeout`, value)
    }

    /**
     * Selects how the end handle of the B-Bone is computed
     * @desc enum in ['AUTO', 'ABSOLUTE', 'RELATIVE', 'TANGENT'], default 'AUTO'
     */
    public set bbone_handle_type_end(value: 'AUTO' | 'ABSOLUTE' | 'RELATIVE' | 'TANGENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bbone_handle_type_end`, value)
    }

    /**
     * Selects how the start handle of the B-Bone is computed
     * @desc enum in ['AUTO', 'ABSOLUTE', 'RELATIVE', 'TANGENT'], default 'AUTO'
     */
    public set bbone_handle_type_start(value: 'AUTO' | 'ABSOLUTE' | 'RELATIVE' | 'TANGENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bbone_handle_type_start`, value)
    }

    /**
     * Roll offset for the start of the B-Bone, adjusts twist
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_rollin(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_rollin`, value)
    }

    /**
     * Roll offset for the end of the B-Bone, adjusts twist
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_rollout(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_rollout`, value)
    }

    /**
     * X-axis scale factor for start of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_scaleinx(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_scaleinx`, value)
    }

    /**
     * Y-axis scale factor for start of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_scaleiny(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_scaleiny`, value)
    }

    /**
     * X-axis scale factor for end of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_scaleoutx(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_scaleoutx`, value)
    }

    /**
     * Y-axis scale factor for end of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_scaleouty(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_scaleouty`, value)
    }

    /**
     * Number of subdivisions of bone (for B-Bones only)
     * @desc int in [1, 32], default 0
     */
    public set bbone_segments(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.bbone_segments`, value)
    }

    /**
     * B-Bone X size
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_x`, value)
    }

    /**
     * B-Bone Z size
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_z`, value)
    }

    /**
     * Bone deformation distance (for Envelope deform only)
     * @desc float in [0, 1000], default 0.0
     */
    public set envelope_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.envelope_distance`, value)
    }

    /**
     * Bone deformation weight (for Envelope deform only)
     * @desc float in [0, 1000], default 0.0
     */
    public set envelope_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.envelope_weight`, value)
    }

    /**
     * Radius of head of bone (for Envelope deform only)
     * @desc float in [-inf, inf], default 0.0
     */
    public set head_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.head_radius`, value)
    }

    /**
     * Bone is not visible when it is not in Edit Mode (i.e. in Object or Pose Modes)
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Bone is able to be selected
     * @desc boolean, default False
     */
    public set hide_select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_select`, value)
    }

    /**
     * Specifies how the bone inherits scaling from the parent bone
     * @desc enum in ['FULL', 'FIX_SHEAR', 'ALIGNED', 'AVERAGE', 'NONE', 'NONE_LEGACY'], default 'FULL'
     */
    public set inherit_scale(value: 'FULL' | 'FIX_SHEAR' | 'ALIGNED' | 'AVERAGE' | 'NONE' | 'NONE_LEGACY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.inherit_scale`, value)
    }

    /**
     * Layers bone exists in
     * @desc boolean array of 32 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public set layers(value: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.layers`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select_head(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_head`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select_tail(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_tail`, value)
    }

    /**
     * Bone is always drawn as Wireframe regardless of viewport draw mode (useful for non-obstructive custom bone shapes)
     * @desc boolean, default False
     */
    public set show_wire(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_wire`, value)
    }

    /**
     * Radius of tail of bone (for Envelope deform only)
     * @desc float in [-inf, inf], default 0.0
     */
    public set tail_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tail_radius`, value)
    }

    /**
     * When bone doesn’t have a parent, it receives cyclic offset effects (Deprecated)
     * @desc boolean, default False
     */
    public set use_cyclic_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cyclic_offset`, value)
    }

    /**
     * Enable Bone to deform geometry
     * @desc boolean, default False
     */
    public set use_deform(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deform`, value)
    }

    /**
     * Add Roll Out of the Start Handle bone to the Roll In value
     * @desc boolean, default False
     */
    public set use_endroll_as_inroll(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_endroll_as_inroll`, value)
    }

    /**
     * When deforming bone, multiply effects of Vertex Group weights with Envelope influence
     * @desc boolean, default False
     */
    public set use_envelope_multiply(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_envelope_multiply`, value)
    }

    /**
     * Bone inherits rotation or scale from parent bone
     * @desc boolean, default False
     */
    public set use_inherit_rotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_inherit_rotation`, value)
    }

    /**
     * DEPRECATED: Bone inherits scaling from parent bone
     * @desc boolean, default False
     */
    public set use_inherit_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_inherit_scale`, value)
    }

    /**
     * Bone location is set in local space
     * @desc boolean, default False
     */
    public set use_local_location(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_local_location`, value)
    }

    /**
     * Object children will use relative transform, like deform
     * @desc boolean, default False
     */
    public set use_relative_parent(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_relative_parent`, value)
    }

    /**
     * Calculate bone envelope at given point
     * @desc float in [-inf, inf]
     */
    public evaluate_envelope(options: { point?: [number, number, number] }): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.evaluate_envelope`, options)
    }

    /**
     * Transform a matrix from Local to Pose space (or back), taking into account options like Inherit Scale and Local Location. Unlike Object.convert_space, this uses custom rest and pose matrices provided by the caller. If the parent matrices are omitted, the bone is assumed to have no parent.
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf]
     */
    public convert_local_to_pose(options: { matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], matrix_local?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], parent_matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], parent_matrix_local?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], invert?: boolean }): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.callMultiDimensionalArray(this.interop, `${this.accessor}.convert_local_to_pose`, options)
    }

    /**
     * The same as ‘bone in other_bone.parent_recursive’but saved generating a list.
     * @desc void
     */
    public parent_index(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_index`, {})
    }

    /**
     * Utility function to add vec to the head and tail of this bone
     * @desc void
     */
    public translate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.translate`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
