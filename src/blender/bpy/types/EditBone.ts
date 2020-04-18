import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Matrix } from '../../matrix'

/**
 * EditBone
 * 
 * https://docs.blender.org/api/current/bpy.types.EditBone.html
 */
export class EditBone {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The name of this bone before any ‘.’ character(readonly)
     * @desc void
     */
    public get basename(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.basename`)
    }

    /**
     * The midpoint between the head and the tail.(readonly)
     * @desc void
     */
    public get center(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.center`)
    }

    /**
     * A list of all the bones children. Warning: takes O(len(bones)) time.(readonly)
     * @desc void
     */
    public get children(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.children`)
    }

    /**
     * A list of all children from this bone. Warning: takes O(len(bones)**2) time.(readonly)
     * @desc void
     */
    public get children_recursive(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.children_recursive`)
    }

    /**
     * Returns a chain of children with the same base name as this bone.Only direct chains are supported, forks caused by multiple childrenwith matching base names will terminate the functionand not be returned. Warning: takes O(len(bones)**2) time.(readonly)
     * @desc void
     */
    public get children_recursive_basename(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.children_recursive_basename`)
    }

    /**
     * A list of parents, starting with the immediate parent(readonly)
     * @desc void
     */
    public get parent_recursive(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.parent_recursive`)
    }

    /**
     * The direction this bone is pointing.Utility function for (tail - head)(readonly)
     * @desc void
     */
    public get vector(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.vector`)
    }

    /**
     * Vector pointing down the x-axis of the bone.(readonly)
     * @desc void
     */
    public get x_axis(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.x_axis`)
    }

    /**
     * Vector pointing down the y-axis of the bone.(readonly)
     * @desc void
     */
    public get y_axis(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.y_axis`)
    }

    /**
     * Vector pointing down the z-axis of the bone.(readonly)
     * @desc void
     */
    public get z_axis(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.z_axis`)
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
     * @desc EditBone
     */
    public get bbone_custom_handle_end(): EditBone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bbone_custom_handle_end`, EditBone)
    }

    /**
     * Bone that serves as the start handle for the B-Bone curve
     * @desc EditBone
     */
    public get bbone_custom_handle_start(): EditBone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bbone_custom_handle_start`, EditBone)
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
     * Location of head end of the bone
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get head(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.head`, 'number', 3)
    }

    /**
     * Radius of head of bone (for Envelope deform only)
     * @desc float in [-inf, inf], default 0.0
     */
    public get head_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.head_radius`)
    }

    /**
     * Bone is not visible when in Edit Mode
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
     * Length of the bone. Changing moves the tail end
     * @desc float in [0, inf], default 0.0
     */
    public get length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.length`)
    }

    /**
     * Bone is not able to be transformed when in Edit Mode
     * @desc boolean, default False
     */
    public get lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock`)
    }

    /**
     * Matrix combining loc/rot of the bone (head position, direction and roll), in armature space (WARNING: does not include/support bone’s length/size)
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix`, 'number', 4, 4)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Parent edit bone (in same Armature)
     * @desc EditBone
     */
    public get parent(): EditBone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.parent`, EditBone)
    }

    /**
     * Bone rotation around head-tail axis
     * @desc float in [-inf, inf], default 0.0
     */
    public get roll(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roll`)
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
     * Location of tail end of the bone
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get tail(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tail`, 'number', 3)
    }

    /**
     * Radius of tail of bone (for Envelope deform only)
     * @desc float in [-inf, inf], default 0.0
     */
    public get tail_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tail_radius`)
    }

    /**
     * When bone has a parent, bone’s head is stuck to the parent’s tail
     * @desc boolean, default False
     */
    public get use_connect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_connect`)
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
     * @desc EditBone
     */
    public set bbone_custom_handle_end(value: EditBone) {
        PythonInterop.setClass(this.interop, `${this.accessor}.bbone_custom_handle_end`, value)
    }

    /**
     * Bone that serves as the start handle for the B-Bone curve
     * @desc EditBone
     */
    public set bbone_custom_handle_start(value: EditBone) {
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
     * Location of head end of the bone
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set head(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.head`, value)
    }

    /**
     * Radius of head of bone (for Envelope deform only)
     * @desc float in [-inf, inf], default 0.0
     */
    public set head_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.head_radius`, value)
    }

    /**
     * Bone is not visible when in Edit Mode
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
     * Length of the bone. Changing moves the tail end
     * @desc float in [0, inf], default 0.0
     */
    public set length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.length`, value)
    }

    /**
     * Bone is not able to be transformed when in Edit Mode
     * @desc boolean, default False
     */
    public set lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock`, value)
    }

    /**
     * Matrix combining loc/rot of the bone (head position, direction and roll), in armature space (WARNING: does not include/support bone’s length/size)
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Parent edit bone (in same Armature)
     * @desc EditBone
     */
    public set parent(value: EditBone) {
        PythonInterop.setClass(this.interop, `${this.accessor}.parent`, value)
    }

    /**
     * Bone rotation around head-tail axis
     * @desc float in [-inf, inf], default 0.0
     */
    public set roll(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roll`, value)
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
     * Location of tail end of the bone
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set tail(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tail`, value)
    }

    /**
     * Radius of tail of bone (for Envelope deform only)
     * @desc float in [-inf, inf], default 0.0
     */
    public set tail_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tail_radius`, value)
    }

    /**
     * When bone has a parent, bone’s head is stuck to the parent’s tail
     * @desc boolean, default False
     */
    public set use_connect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_connect`, value)
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
     * Align the bone to a localspace roll so the Z axis points in the direction of the vector given
     * @desc void
     */
    public align_roll(options: { vector?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.align_roll`, options)
    }

    /**
     * Align this bone to another by moving its tail and settings its rollthe length of the other bone is not used.
     * @desc void
     */
    public align_orientation(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.align_orientation`, {})
    }

    /**
     * The same as ‘bone in other_bone.parent_recursive’but saved generating a list.
     * @desc void
     */
    public parent_index(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_index`, {})
    }

    /**
     * Transform the the bones head, tail, roll and envelope(when the matrix has a scale component).
     * @desc void
     */
    public transform(options: { matrix?: unknown, scale?: boolean, roll?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform`, options)
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
