Ext.define(
	'cn.com.pingouin.vbp_client_template_modification.VbptmFloatDivisionConfigWindow'
	, {
		//
        extend : 'Ext.window.Window',
        //
        config : {
        	floatDivision : null,
        	valueFetchExpressions : null,
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
	              valueFetchExpressions : this.getValueFetchExpressions(),
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
	        cn.com.pingouin.vbp_client_template_modification.VbptmFloatDivisionConfigWindow.superclass.initComponent.apply(this, arguments);
        },
        
        classNameForEditPanelAtVbpFloatDivisionConfigPanel : 'cn.com.pingouin.vbp_client_template_modification.VbptmFloatDivisionConfigPanel',
        
        editPanel : null,
      
      	getEditPanel : function() {
        	return this.editPanel;
      	},
        
        //
        nothing : null
	}
);