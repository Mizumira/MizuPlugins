//=============================================================================
// MIZU_PersistentEncounterCount.js
//=============================================================================

var Mizu = Mizu || {};

/*:
 * @plugindesc (v0.9) Makes the Encounter Count not reset upon map transitions
 * @author Mizumira
 *
 * @help
 * The count will only reset on hitting 0
 *
 *
 *
 *=============================================================================
 *     All my released MV Plugins:   https://github.com/Mizumira/MizuPlugins
 *=============================================================================
 */

Mizu.Game_Player_makeEncounterCount = Game_Player.prototype.makeEncounterCount;
Game_Player.prototype.makeEncounterCount = function() {
	if (this._encounterCount <= 0) {
		Mizu.Game_Player_makeEncounterCount.call(this)
	}
};
