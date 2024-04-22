//=============================================================================
// MIZU_ExtraMapsFix.js
//=============================================================================

var Mizu = Mizu || {};

/*:
 * @plugindesc (v1.0) Allows the proper usage of self switches with Zeriab ExtraMaps 
 * @author Mizumira
 *
 * @help
 * This plugin prevents self switches from different events from being shared
 * 
 *
 *
 *=============================================================================
 *     All my released MV Plugins:   https://github.com/Mizumira/MizuPlugins
 *=============================================================================
 */

Mizu.Game_SelfSwitches_value = Game_SelfSwitches.prototype.value;
Game_SelfSwitches.prototype.value = function(key) {
	if (subfolder) {
		key[3] = subfolder
	}
    return Mizu.Game_SelfSwitches_value.call(this, key);
};

Mizu.Game_SelfSwitches_setValue = Game_SelfSwitches.prototype.setValue;
Game_SelfSwitches.prototype.setValue = function(key, value) {
	if (subfolder) {
		key[3] = subfolder
	}
    Mizu.Game_SelfSwitches_setValue.call(this, key, value)
};