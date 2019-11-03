const backgroundMenu = imports.ui.backgroundMenu;

let _originalOpen;

function _modifiedOpen () {
	return;
}

function init () {

}

function enable () {
	_originalOpen = backgroundMenu.BackgroundMenu.prototype.open;
	backgroundMenu.BackgroundMenu.prototype.open = _modifiedOpen;
}

function disable () {
	backgroundMenu.BackgroundMenu.prototype.open = _originalOpen;
	_originalOpen = null;
}
