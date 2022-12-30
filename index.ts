/**
 * A super interface!
 */
export interface MySample {
  /**
   * 
   * @param {string} path the documentation for the path parameter
   * @returns {string} the documentation HTML for the return value
   */
  generateDoc(path: string): string;
}
