//=============================================================================
// MIZU_PersistentEncounterCount.js
//=============================================================================

var Mizu = Mizu || {};

/*:
 * @plugindesc Makes the Encounter Count not reset upon map transitions
 * @author Mizu
 *
 * @help
 * completely compatible with existing save files and code
 */

Mizu.Game_Player_makeEncounterCount = Game_Player.prototype.makeEncounterCount;
Game_Player.prototype.makeEncounterCount = function(key) {
	if (this._encounterCount <= 0) {
		Mizu.Game_Player_makeEncounterCount.call(this)
	}
};
