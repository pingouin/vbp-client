Ext.define(
	'cn.com.pingouin.vbp_client_template_modification.VbptmTemplatePropertyConfigWindow'
	, {
		//
        extend : 'Ext.window.Window',
        //
        config : {
            //
            nothing : null
        },
        
        _superclass_ : null,

        //
        initComponent : function() {
        	var editPanel = Ext.create(//
	            this.classNameForEditPanelAtVbptmTemplatePropertyConfigPanel,//
	            {
	              region : 'center',
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
	              width: 500,
	              items : editPanel,
	              modal : true,
	              plain : true,
	              //
	              nothing : null
	            }//
	        );
	        
	        // super apply
	        cn.com.pingouin.vbp_client_template_modification.VbptmTemplatePropertyConfigWindow.superclass.initComponent.apply(this, arguments);
        },
        
        classNameForEditPanelAtVbptmTemplatePropertyConfigPanel : 'cn.com.pingouin.vbp_client_template_modification.VbptmTemplatePropertyConfigPanel',
        
        editPanel : null,
      
      	getEditPanel : function() {
        	return this.editPanel;
      	},
        
        //
        nothing : null
	}
);