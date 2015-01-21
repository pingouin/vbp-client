Ext.require('*');

var initialPageSize = function() {
	var paperWidth = vbpConfiguration.basicSetting.paperWidth;
	var paperHeight = vbpConfiguration.basicSetting.paperHeight;
	if(paperWidth && paperWidth != '') {
		document.body.clientWidth = paperWidth + "cm";
	}
	if(paperHeight && paperHeight != '') {
		document.body.clientHeight = paperHeight + "cm";
	}
};

// initialize function
var initializeFunction = function() {
  
  // initialize tip
  Ext.QuickTips.init();
  
  // viewport
  var viewport = Ext.create(//
      'cn.com.pingouin.vbp_client_template_modification.VbptmPrintZonePanel'//
      , {
      	id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel,
        layout : 'border',
        margins : '0 0 0 0',
        renderTo : 'vbpPrintZone',
        //
        nothing : null
      }//
  );
};

// on ready
Ext.onReady(initializeFunction);