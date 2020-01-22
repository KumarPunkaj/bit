import { BitId } from '../bit-id';

export default class ComponentID {
  constructor(
    /**
     * legacy bit component id
     */
    private legacyComponentId: BitId
  ) {}

  /**
   * resolves the version of the component ID.
   */
  get version() {
    return this.legacyComponentId.version;
  }

  /**
   * resolves the name of the component.
   */
  get name() {
    return this.legacyComponentId.name;
  }

  /**
   * generate a component ID from a string.
   */
  static fromString(idStr: string) {
    return new ComponentID(BitId.parse(idStr));
  }

  /**
   * create a `ComponentID` instance from the legacy `BitId`.
   */
  static fromLegacy(legacyId: BitId) {
    return new ComponentID(legacyId);
  }
}