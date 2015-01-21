Ext.define(
	'cn.com.pingouin.vbp_client_template_modification.VbptmTemplatePropertyConfigPanel'
	, {
		//
        extend : 'Ext.form.Panel',
        //
        config : {
            //
            nothing : null
        },
        
        autoScroll : true,
      	bodyStyle : 'padding : 8px',
      	buttonAlign : 'center',
      	defaultType : 'textfield',
      	fileUpload : true,
      	frame : true,
      	labelWidth : this.editPanelDefaultLabelWidth,
      	region : 'center',
      	style : {
        	"border-radius" : '0px',
        	"border-width" : '0px'
      	},
        
        _superclass_ : null,

        //
        initComponent : function() {
        	var vbptmPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
    		this.widthOf1cm = vbptmPrintZonePanel.widthOf1cm;
    		this.vbpConfiguration = vbptmPrintZonePanel.vbpConfiguration;
        	
	        // edit panel items
        	var editPanelItems = this.buildEditPanelItems();
        	
        	// edit panel buttons
        	var editPanelButtons = this.buildEditPanelButtons();
        	
        	// construct configurations
        	var configurations = {
	          	buttons : editPanelButtons,
	          	items : editPanelItems,
	          	//
          		nothing : null
        	};
        	
        	// do something needed before apply configurations
        	configurations = this.beforeApplyConigurations(configurations);
        	
        	// apply
        	Ext.apply(this, configurations);
        	
        	// super apply
	        this._superclass_ = cn.com.pingouin.vbp_client_template_modification.VbptmTemplatePropertyConfigPanel.superclass;
      		this._superclass_.initComponent.apply(this, arguments);
        },
      	
      	editPanelDefaultLabelWidth : 128,
      	
      	includeAllFields : true,
        
        buildEditPanelItems : function() {
        	var vbptmBasicSettingConfigItems = new Array();
        	
        	if(this.includeAllFields && this.containTemplateNamePropertyConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getTemplateNamePropertyConfigPanel());
        	}
        	if(this.includeAllFields && this.containTemplateTypePropertyConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getTemplateTypePropertyConfigPanel());
        	}
        	
        	return vbptmBasicSettingConfigItems;
        },
        
        buildEditPanelButtons : function() {
        	var me = this;
        	var vbptmBasicSettingConfigButtons = new Array();
        	
        	vbptmBasicSettingConfigButtons.push({
        		displayOrder : 10,
        		handler : function(button, eventObject) {
        			// 更新打印区域配置
        			if(Ext.getCmp(me.idOfTemplateNamePropertyConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.templatePropertySetting['templateName'] = Ext.getCmp(me.idOfTemplateNamePropertyConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfTemplateTypePropertyConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.templatePropertySetting['templateType'] = Ext.getCmp(me.idOfTemplateTypePropertyConfigForEditPanel).getValue();
        			}
        			
        			button.up('panel').up('window').destroy();
        		},
        		scope : this,
                text : '更新',
                xtype : 'button',
                //
                nothing : null
        	});
        	
        	// add a "spacer"
        	vbptmBasicSettingConfigButtons.push({
            	displayOrder : 20,
            	xtype : 'tbspacer',
            	width : 32
            });
        	
        	vbptmBasicSettingConfigButtons.push({
        		displayOrder : 30,
        		handler : function(button, eventObject) {
        			button.up('panel').up('window').destroy();
        		},
        		scope : this,
                text : '取消',
                xtype : 'button',
                //
                nothing : null
        	});
        	
        	return vbptmBasicSettingConfigButtons;
        },
        
        beforeApplyConigurations : function(configurations) {
        	return configurations;
      	},
      	
      	//
      	containTemplateNamePropertyConfigForEditPanel : true,
        
      	anchorOfTemplateNamePropertyConfigForEditPanel : '100%',
      
      	labelOfTemplateNamePropertyConfigForEditPanel : '模板名称' + ':&nbsp;&nbsp;',
      
      	labelWidthOfTemplateNamePropertyConfigForEditPanel : 128,
      
      	displayOrderOfTemplateNamePropertyConfigForEditPanel : 10000,
      	
      	templateNamePropertyConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfTemplateNamePropertyConfigForEditPanel : 'templateNamePropertyConfigTextfieldId',
      
      	getTemplateNamePropertyConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfTemplateNamePropertyConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfTemplateNamePropertyConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfTemplateNamePropertyConfigForEditPanel,
	                width : this.labelWidthOfTemplateNamePropertyConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.templateNamePropertyConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'templateNameProperty',
                  	xtype : 'textfield',
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.templatePropertySetting.templateName) {
    								component.setValue(me.vbpConfiguration.templatePropertySetting.templateName);
    							}
    						}
    					}
    				},
    				id : this.idOfTemplateNamePropertyConfigForEditPanel,
                  	//
                  	nothing : null//
	            }
	            ],
	          	style : {
	            	"border-radius" : '0px',
	            	"border-width" : '0px'
	          	},
	          	xtype : 'panel',
	          	//
	          	nothing : null
      		}
      	},
      	
      	//
      	getPaperTypeConfigComboStore : function() {
      		return Ext.create(
	      		'Ext.data.Store'
	      		, {
	      			fields : ['comboItemValue', 'comboItemName'],
	      			data : [
		      			{"comboItemValue" : "A4", "comboItemName" : "A4"},
		      			{"comboItemValue" : "A3", "comboItemName" : "A3"},
		      			{"comboItemValue" : "B4", "comboItemName" : "B4"},
		      			{"comboItemValue" : "B5", "comboItemName" : "B5"},
		      			{"comboItemValue" : "other", "comboItemName" : "自定义"}
	      			],
	      			//
	      			nothing : null
	      		}
	      	);
      	},
      	
      	//
      	getTemplatePropertyTypeConfigComboStore : function() {
      		var vbptmPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
      		var supportedTemplateTypes = vbptmPrintZonePanel.vbpConfiguration.templatePropertySetting.supportedTemplateTypes;
      		
      		var comboData = new Array();
      		
      		if(supportedTemplateTypes) {
      			if(Ext.isArray(supportedTemplateTypes)) {
      				for(i=0; i<supportedTemplateTypes.length; i++) {
      					if(supportedTemplateTypes[i].value) {
      						if(supportedTemplateTypes[i].name && supportedTemplateTypes[i].name.length > 0) {
      	      					comboData.push(
      	      							{
      	      								"comboItemValue" : supportedTemplateTypes[i].value, 
      	      								"comboItemName" : supportedTemplateTypes[i].name
      	      							}
      	      					);
      	      				} else {
      	      					comboData.push(
      	      							{
      	      								"comboItemValue" : supportedTemplateTypes[i].value, 
      	      								"comboItemName" : supportedTemplateTypes[i].value
      	      							}
      	      					);
      	      				}
      					}
      				}
      			}
      		}
      		
      		return Ext.create(
	      		'Ext.data.Store'
	      		, {
	      			fields : ['comboItemValue', 'comboItemName'],
	      			data : comboData,
	      			//
	      			nothing : null
	      		}
	      	);
      	},
      	
      	//
      	containTemplateTypePropertyConfigForEditPanel : true,
        
      	anchorOfTemplateTypePropertyConfigForEditPanel : '100%',
      
      	labelOfTemplateTypePropertyConfigForEditPanel : '模板类型' + ':&nbsp;&nbsp;',
      
      	labelWidthOfTemplateTypePropertyConfigForEditPanel : 128,
      
      	displayOrderOfTemplateTypePropertyConfigForEditPanel : 40000,
      	
      	templateTypePropertyConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfTemplateTypePropertyConfigForEditPanel : 'templateTypePropertyConfigTextfieldId',
      
      	getTemplateTypePropertyConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfTemplateTypePropertyConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfTemplateTypePropertyConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfTemplateTypePropertyConfigForEditPanel,
	                width : this.labelWidthOfTemplateTypePropertyConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	                xtype : 'combo',
	                flex : 1,
	                store : this.getTemplatePropertyTypeConfigComboStore(),
	            	allowBlank : this.templateTypePropertyConfigUpdateFieldAllowBlankForEditPanelValue,
	                name : 'font-family',
	                forceSelection : false,
      				editable : false,
      				queryMode : 'local',
    				displayField : 'comboItemName',
    				valueField : 'comboItemValue',
    				listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.templatePropertySetting.templateType) {
    								component.setValue(me.vbpConfiguration.templatePropertySetting.templateType);
    							}
    						}
    					},
    				},
    				id : this.idOfTemplateTypePropertyConfigForEditPanel,
	                //
	                nothing : null
	          	}
	            ],
	          	style : {
	            	"border-radius" : '0px',
	            	"border-width" : '0px'
	          	},
	          	xtype : 'panel',
	          	//
	          	nothing : null
      		}
      	},
      	
      	//
        nothing : null
	}
);