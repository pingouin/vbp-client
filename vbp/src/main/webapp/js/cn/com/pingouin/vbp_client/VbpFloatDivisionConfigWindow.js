Ext.define(
	'cn.com.pingouin.vbp_client.VbpFloatDivisionConfigWindow'
	, {
		//
        extend : 'Ext.window.Window',
        //
        config : {
        	floatDivision : null,
            //
            nothing : null
        },
        
        _superclass_ : null,

        //
        initComponent : function() {
        	var editPanel = Ext.create(//
	            this.classNameForEditPanelAtVbpFloatDivisionConfigPanel,//
	            {
	              region : 'center',
	              floatDivision : this.getFloatDivision(),
	              //
	              nothing : null
	            }//
	        );
	        
	         this.editPanel = editPanel;
	         
	         // apply
	        Ext.apply(//
	            this//
	            , {
	              layout : 'border',
	              height: 300,
	              width: 300,
	              items : editPanel,
	              modal : true,
	              plain : true,
	              //
	              nothing : null
	            }//
	        );
	        
	        // super apply
	        cn.com.pingouin.vbp_client.VbpFloatDivisionConfigWindow.superclass.initComponent.apply(this, arguments);
        },
        
        classNameForEditPanelAtVbpFloatDivisionConfigPanel : 'cn.com.pingouin.vbp_client.VbpFloatDivisionConfigPanel',
        
        editPanel : null,
      
      	getEditPanel : function() {
        	return this.editPanel;
      	},
        
        //
        nothing : null
	}
);