//=============================================================================
// MIZU_ExtraMapsFix.js
//=============================================================================

var Mizu = Mizu || {};

/*:
 * @plugindesc Allows the proper usage of self switches with Zeriab ExtraMaps
 * @author Mizu
 *
 * @help
 * completely compatible with existing save files and code
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