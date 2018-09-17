sap.ui.define([
		"nw/prod/nw/prod/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("nw.prod.nw.prod.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);