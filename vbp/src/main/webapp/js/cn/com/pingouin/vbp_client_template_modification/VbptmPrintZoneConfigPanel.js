Ext.define(
	'cn.com.pingouin.vbp_client_template_modification.VbptmPrintZoneConfigPanel'
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
	        this._superclass_ = cn.com.pingouin.vbp_client_template_modification.VbptmPrintZoneConfigPanel.superclass;
      		this._superclass_.initComponent.apply(this, arguments);
        },
      	
      	editPanelDefaultLabelWidth : 128,
      	
      	includeAllFields : true,
        
        buildEditPanelItems : function() {
        	var vbptmBasicSettingConfigItems = new Array();
        	
        	if(this.includeAllFields && this.containBackgroudPictureUrlConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getBackgroudPictureUrlConfigPanel());
        	}
        	if(this.includeAllFields && this.containCallbackUrlConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getCallbackUrlConfigPanel());
        	}
        	if(this.includeAllFields && this.containTemplateSaveCallBackUrlConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getTemplateSaveCallBackUrlConfigPanel());
        	}
        	if(this.includeAllFields && this.containTemplateSaveAsCallBackUrlConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getTemplateSaveAsCallBackUrlConfigPanel());
        	}
        	if(this.includeAllFields && this.containDataPropertyForIdConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getDataPropertyForIdConfigPanel());
        	}
        	if(this.includeAllFields && this.containDataPropertyForNameConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getDataPropertyForNameConfigPanel());
        	}
        	if(this.includeAllFields && this.containPaperTypeConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getPaperTypeConfigPanel());
        	}
        	if(this.includeAllFields && this.containPaperWidthConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getPaperWidthConfigPanel());
        	}
        	if(this.includeAllFields && this.containPaperHeightConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getPaperHeightConfigPanel());
        	}
        	if(this.includeAllFields && this.containPrintOrientationConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getPrintOrientationConfigPanel());
        	}
        	if(this.includeAllFields && this.containPrintOffsetXConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getPrintOffsetXConfigPanel());
        	}
        	if(this.includeAllFields && this.containPrintOffsetYConfigForEditPanel) {
        		vbptmBasicSettingConfigItems.push(this.getPrintOffsetYConfigPanel());
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
        			if(Ext.getCmp(me.idOfBackgroudPictureUrlConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['backgroudPictureUrl'] = Ext.getCmp(me.idOfBackgroudPictureUrlConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfCallbackUrlConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['callbackUrl'] = Ext.getCmp(me.idOfCallbackUrlConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfTemplateSaveCallBackUrlConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['templateSaveCallBackUrl'] = Ext.getCmp(me.idOfTemplateSaveCallBackUrlConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfTemplateSaveAsCallBackUrlConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['templateSaveAsCallBackUrl'] = Ext.getCmp(me.idOfTemplateSaveAsCallBackUrlConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfDataPropertyForIdConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['dataPropertyForId'] = Ext.getCmp(me.idOfDataPropertyForIdConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfDataPropertyForNameConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['dataPropertyForName'] = Ext.getCmp(me.idOfDataPropertyForNameConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfPaperTypeConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['paperType'] = Ext.getCmp(me.idOfPaperTypeConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['paperWidth'] = Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['paperHeight'] = Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfPrintOrientationConfigForEditPanel).getValue()) {
        				me.vbpConfiguration.basicSetting['printOrientation'] = Ext.getCmp(me.idOfPrintOrientationConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfPrintOffsetXConfigForEditPanel).getValue() || Ext.getCmp(me.idOfPrintOffsetXConfigForEditPanel).getValue() == 0) {
        				me.vbpConfiguration.basicSetting['printOffsetX'] = Ext.getCmp(me.idOfPrintOffsetXConfigForEditPanel).getValue();
        			}
        			if(Ext.getCmp(me.idOfPrintOffsetYConfigForEditPanel).getValue() || Ext.getCmp(me.idOfPrintOffsetYConfigForEditPanel).getValue() == 0) {
        				me.vbpConfiguration.basicSetting['printOffsetY'] = Ext.getCmp(me.idOfPrintOffsetYConfigForEditPanel).getValue();
        			}
        			
        			// 修改打印区域大小
        			var vbptmPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
        			var vbptmPrintZonePanelWidthCm = Number(Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).getValue());
        			var vbptmPrintZonePanelHeightCm = Number(Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).getValue());
        			var vbptmPrintZonePanelWidthPixel = null;
        			var vbptmPrintZonePanelHeightPixel = null;
        			
        			if(vbptmPrintZonePanelWidthCm && vbptmPrintZonePanelWidthCm > 0) {
        				vbptmPrintZonePanelWidthPixel = vbptmPrintZonePanelWidthCm * me.widthOf1cm;
        			}
        			if(vbptmPrintZonePanelHeightCm && vbptmPrintZonePanelHeightCm > 0) {
        				vbptmPrintZonePanelHeightPixel = vbptmPrintZonePanelHeightCm * me.widthOf1cm;
        			}
        			
        			if(vbptmPrintZonePanelWidthPixel && vbptmPrintZonePanelHeightPixel) {
        				vbptmPrintZonePanel.setSize(vbptmPrintZonePanelWidthPixel, vbptmPrintZonePanelHeightPixel);
        			}
        			
        			// 修改打印区域背景图
        			var vbptmPrintZonePanelBackgroudPictureUrl = Ext.getCmp(me.idOfBackgroudPictureUrlConfigForEditPanel).getValue();
        			var printZoneBackgroud = '#FFFFFF';
        			if(vbptmPrintZonePanelBackgroudPictureUrl && vbptmPrintZonePanelBackgroudPictureUrl.length > 0) {
        	      		printZoneBackgroud = 'url(' + vbptmPrintZonePanelBackgroudPictureUrl + ') no-repeat left top';
        	      	}
        			vbptmPrintZonePanel.setBodyStyle('background', printZoneBackgroud);
        			
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
      	containBackgroudPictureUrlConfigForEditPanel : true,
        
      	anchorOfBackgroudPictureUrlConfigForEditPanel : '100%',
      
      	labelOfBackgroudPictureUrlConfigForEditPanel : '背景图URL' + ':&nbsp;&nbsp;',
      
      	labelWidthOfBackgroudPictureUrlConfigForEditPanel : 128,
      
      	displayOrderOfBackgroudPictureUrlConfigForEditPanel : 10000,
      	
      	backgroudPictureUrlConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfBackgroudPictureUrlConfigForEditPanel : 'backgroudPictureUrlConfigTextfieldId',
      
      	getBackgroudPictureUrlConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfBackgroudPictureUrlConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfBackgroudPictureUrlConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfBackgroudPictureUrlConfigForEditPanel,
	                width : this.labelWidthOfBackgroudPictureUrlConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.backgroudPictureUrlConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'backgroudPictureUrl',
                  	xtype : 'textfield',
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.backgroudPictureUrl) {
    								component.setValue(me.vbpConfiguration.basicSetting.backgroudPictureUrl);
    							}
    						}
    					}
    				},
    				id : this.idOfBackgroudPictureUrlConfigForEditPanel,
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
      	containCallbackUrlConfigForEditPanel : true,
        
      	anchorOfCallbackUrlConfigForEditPanel : '100%',
      
      	labelOfCallbackUrlConfigForEditPanel : '回调URL' + ':&nbsp;&nbsp;',
      
      	labelWidthOfCallbackUrlConfigForEditPanel : 128,
      
      	displayOrderOfCallbackUrlConfigForEditPanel : 10000,
      	
      	callbackUrlConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfCallbackUrlConfigForEditPanel : 'callbackUrlConfigTextfieldId',
      
      	getCallbackUrlConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfCallbackUrlConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfCallbackUrlConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfCallbackUrlConfigForEditPanel,
	                width : this.labelWidthOfCallbackUrlConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.callbackUrlConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'callbackUrl',
                  	xtype : 'textfield',
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.callbackUrl) {
    								component.setValue(me.vbpConfiguration.basicSetting.callbackUrl);
    							}
    						}
    					}
    				},
    				id : this.idOfCallbackUrlConfigForEditPanel,
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
      	containTemplateSaveCallBackUrlConfigForEditPanel : true,
        
      	anchorOfTemplateSaveCallBackUrlConfigForEditPanel : '100%',
      
      	labelOfTemplateSaveCallBackUrlConfigForEditPanel : '模板保存回调URL' + ':&nbsp;&nbsp;',
      
      	labelWidthOfTemplateSaveCallBackUrlConfigForEditPanel : 128,
      
      	displayOrderOfTemplateSaveCallBackUrlConfigForEditPanel : 10000,
      	
      	templateSaveCallBackUrlConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfTemplateSaveCallBackUrlConfigForEditPanel : 'templateSaveCallBackUrlConfigTextfieldId',
      
      	getTemplateSaveCallBackUrlConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfTemplateSaveCallBackUrlConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfTemplateSaveCallBackUrlConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfTemplateSaveCallBackUrlConfigForEditPanel,
	                width : this.labelWidthOfTemplateSaveCallBackUrlConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.templateSaveCallBackUrlConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'templateSaveCallBackUrl',
                  	xtype : 'textfield',
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.templateSaveCallBackUrl) {
    								component.setValue(me.vbpConfiguration.basicSetting.templateSaveCallBackUrl);
    							}
    						}
    					}
    				},
    				id : this.idOfTemplateSaveCallBackUrlConfigForEditPanel,
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
      	containTemplateSaveAsCallBackUrlConfigForEditPanel : true,
        
      	anchorOfTemplateSaveAsCallBackUrlConfigForEditPanel : '100%',
      
      	labelOfTemplateSaveAsCallBackUrlConfigForEditPanel : '模板另存为回调URL' + ':&nbsp;&nbsp;',
      
      	labelWidthOfTemplateSaveAsCallBackUrlConfigForEditPanel : 128,
      
      	displayOrderOfTemplateSaveAsCallBackUrlConfigForEditPanel : 10000,
      	
      	templateSaveAsCallBackUrlConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfTemplateSaveAsCallBackUrlConfigForEditPanel : 'templateSaveAsCallBackUrlConfigTextfieldId',
      
      	getTemplateSaveAsCallBackUrlConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfTemplateSaveAsCallBackUrlConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfTemplateSaveAsCallBackUrlConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfTemplateSaveAsCallBackUrlConfigForEditPanel,
	                width : this.labelWidthOfTemplateSaveAsCallBackUrlConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.templateSaveAsCallBackUrlConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'templateSaveAsCallBackUrl',
                  	xtype : 'textfield',
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.templateSaveAsCallBackUrl) {
    								component.setValue(me.vbpConfiguration.basicSetting.templateSaveAsCallBackUrl);
    							}
    						}
    					}
    				},
    				id : this.idOfTemplateSaveAsCallBackUrlConfigForEditPanel,
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
      	containDataPropertyForIdConfigForEditPanel : true,
        
      	anchorOfDataPropertyForIdConfigForEditPanel : '100%',
      
      	labelOfDataPropertyForIdConfigForEditPanel : '主键标识' + ':&nbsp;&nbsp;',
      
      	labelWidthOfDataPropertyForIdConfigForEditPanel : 128,
      
      	displayOrderOfDataPropertyForIdConfigForEditPanel : 20000,
      	
      	dataPropertyForIdConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfDataPropertyForIdConfigForEditPanel : 'dataPropertyForIdConfigTextfieldId',
      
      	getDataPropertyForIdConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfDataPropertyForIdConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfDataPropertyForIdConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfDataPropertyForIdConfigForEditPanel,
	                width : this.labelWidthOfDataPropertyForIdConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.dataPropertyForIdConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'dataPropertyForId',
                  	xtype : 'textfield',
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.dataPropertyForId) {
    								component.setValue(me.vbpConfiguration.basicSetting.dataPropertyForId);
    							}
    						}
    					}
    				},
    				id : this.idOfDataPropertyForIdConfigForEditPanel,
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
      	containDataPropertyForNameConfigForEditPanel : true,
        
      	anchorOfDataPropertyForNameConfigForEditPanel : '100%',
      
      	labelOfDataPropertyForNameConfigForEditPanel : '名称标识' + ':&nbsp;&nbsp;',
      
      	labelWidthOfDataPropertyForNameConfigForEditPanel : 128,
      
      	displayOrderOfDataPropertyForNameConfigForEditPanel : 30000,
      	
      	dataPropertyForNameConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfDataPropertyForNameConfigForEditPanel : 'dataPropertyForNameConfigTextfieldId',
      
      	getDataPropertyForNameConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfDataPropertyForNameConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfDataPropertyForNameConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfDataPropertyForNameConfigForEditPanel,
	                width : this.labelWidthOfDataPropertyForNameConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.dataPropertyForNameConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'dataPropertyForName',
                  	xtype : 'textfield',
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.dataPropertyForName) {
    								component.setValue(me.vbpConfiguration.basicSetting.dataPropertyForName);
    							}
    						}
    					}
    				},
    				id : this.idOfDataPropertyForNameConfigForEditPanel,
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
      	
      	//几种预设纸张类型
      	nameOfPaperTypeA4 : 'A4',
      	nameOfPaperTypeA3 : 'A3',
      	nameOfPaperTypeB4 : 'B4',
      	nameOfPaperTypeB5 : 'B5',
      	
      	// 横向打印(默认)时的几种预设纸张宽高
      	paperWidthOfPaperTypeA4 : 29.7,
      	paperHeightOfPaperTypeA4 : 21.0,
      	paperWidthOfPaperTypeA3 : 42.0,
      	paperHeightOfPaperTypeA3 : 29.7,
      	paperWidthOfPaperTypeB4 : 36.4,
      	paperHeightOfPaperTypeB4 : 25.7,
      	paperWidthOfPaperTypeB5 : 25.7,
      	paperHeightOfPaperTypeB5 : 18.2,
      	
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
      	containPaperTypeConfigForEditPanel : true,
        
      	anchorOfPaperTypeConfigForEditPanel : '100%',
      
      	labelOfPaperTypeConfigForEditPanel : '纸张类型' + ':&nbsp;&nbsp;',
      
      	labelWidthOfPaperTypeConfigForEditPanel : 128,
      
      	displayOrderOfPaperTypeConfigForEditPanel : 40000,
      	
      	paperTypeConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfPaperTypeConfigForEditPanel : 'paperTypeConfigTextfieldId',
      
      	getPaperTypeConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfPaperTypeConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfPaperTypeConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfPaperTypeConfigForEditPanel,
	                width : this.labelWidthOfPaperTypeConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	                xtype : 'combo',
	                flex : 1,
	                store : this.getPaperTypeConfigComboStore(),
	            	allowBlank : this.paperTypeConfigUpdateFieldAllowBlankForEditPanelValue,
	                name : 'font-family',
	                forceSelection : false,
      				editable : false,
      				queryMode : 'local',
    				displayField : 'comboItemName',
    				valueField : 'comboItemValue',
    				listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.paperType) {
    								component.setValue(me.vbpConfiguration.basicSetting.paperType);
    							}
    						}
    					},
    					//
    					select : {
    						fn : function(combo, records, eOpts) {
    							var selectedPaperType = records[0].data.comboItemValue;
    							var selectedPrintOrientation = Ext.getCmp(me.idOfPrintOrientationConfigForEditPanel).getValue();
    							
    							if(selectedPaperType) {
    								if(selectedPrintOrientation && selectedPrintOrientation == 'portrait') {// 纵向打印时
    									if(selectedPaperType == me.nameOfPaperTypeA4) {
    										Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperHeightOfPaperTypeA4);
    										Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperWidthOfPaperTypeA4);
    									} else if(selectedPaperType == me.nameOfPaperTypeA3) {
    										Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperHeightOfPaperTypeA3);
    										Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperWidthOfPaperTypeA3);
    									} else if(selectedPaperType == me.nameOfPaperTypeB4) {
    										Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperHeightOfPaperTypeB4);
    										Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperWidthOfPaperTypeB4);
    									} else if(selectedPaperType == me.nameOfPaperTypeB5) {
    										Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperHeightOfPaperTypeB5);
    										Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperWidthOfPaperTypeB5);
    									}
    								} else {// 横向打印时(默认)
    									if(selectedPaperType == me.nameOfPaperTypeA4) {
    										Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperWidthOfPaperTypeA4);
    										Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperHeightOfPaperTypeA4);
    									} else if(selectedPaperType == me.nameOfPaperTypeA3) {
    										Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperWidthOfPaperTypeA3);
    										Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperHeightOfPaperTypeA3);
    									} else if(selectedPaperType == me.nameOfPaperTypeB4) {
    										Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperWidthOfPaperTypeB4);
    										Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperHeightOfPaperTypeB4);
    									} else if(selectedPaperType == me.nameOfPaperTypeB5) {
    										Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperWidthOfPaperTypeB5);
    										Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperHeightOfPaperTypeB5);
    									}
    								}
    							}
    						}
    					}
    				},
    				id : this.idOfPaperTypeConfigForEditPanel,
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
      	containPaperWidthConfigForEditPanel : true,
        
      	anchorOfPaperWidthConfigForEditPanel : '100%',
      
      	labelOfPaperWidthConfigForEditPanel : '纸张宽度(cm)' + ':&nbsp;&nbsp;',
      
      	labelWidthOfPaperWidthConfigForEditPanel : 128,
      
      	displayOrderOfPaperWidthConfigForEditPanel : 50000,
      	
      	paperWidthConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfPaperWidthConfigForEditPanel : 'paperWidthConfigTextfieldId',
      
      	getPaperWidthConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfPaperWidthConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfPaperWidthConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfPaperWidthConfigForEditPanel,
	                width : this.labelWidthOfPaperWidthConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.paperWidthConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'paperWidth',
                  	xtype : 'numberfield',
                  	minValue : 0,
                  	maxValue : 2147483647,
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.paperWidth) {
    								component.setValue(me.vbpConfiguration.basicSetting.paperWidth);
    							}
    						}
    					}
    				},
    				id : this.idOfPaperWidthConfigForEditPanel,
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
      	containPaperHeightConfigForEditPanel : true,
        
      	anchorOfPaperHeightConfigForEditPanel : '100%',
      
      	labelOfPaperHeightConfigForEditPanel : '纸张高度(cm)' + ':&nbsp;&nbsp;',
      
      	labelWidthOfPaperHeightConfigForEditPanel : 128,
      
      	displayOrderOfPaperHeightConfigForEditPanel : 60000,
      	
      	paperHeightConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfPaperHeightConfigForEditPanel : 'paperHeightConfigTextfieldId',
      	
      	getPaperHeightConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfPaperHeightConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfPaperHeightConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfPaperHeightConfigForEditPanel,
	                width : this.labelWidthOfPaperHeightConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.paperHeightConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'paperHeight',
                  	xtype : 'numberfield',
                  	minValue : 0,
                  	maxValue : 2147483647,
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.paperHeight) {
    								component.setValue(me.vbpConfiguration.basicSetting.paperHeight);
    							}
    						}
    					}
    				},
    				id : this.idOfPaperHeightConfigForEditPanel,
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
      	getPrintOrientationConfigComboStore : function() {
      		return Ext.create(
	      		'Ext.data.Store'
	      		, {
	      			fields : ['comboItemValue', 'comboItemName'],
	      			data : [
		      			{"comboItemValue" : "landscape", "comboItemName" : "横向"},
		      			{"comboItemValue" : "portrait", "comboItemName" : "纵向"}
	      			],
	      			//
	      			nothing : null
	      		}
	      	);
      	},
      	
      	//
      	containPrintOrientationConfigForEditPanel : true,
        
      	anchorOfPrintOrientationConfigForEditPanel : '100%',
      
      	labelOfPrintOrientationConfigForEditPanel : '打印方向' + ':&nbsp;&nbsp;',
      
      	labelWidthOfPrintOrientationConfigForEditPanel : 128,
      
      	displayOrderOfPrintOrientationConfigForEditPanel : 70000,
      	
      	printOrientationConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfPrintOrientationConfigForEditPanel : 'printOrientationConfigTextfieldId',
      
      	getPrintOrientationConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfPrintOrientationConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfPrintOrientationConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfPrintOrientationConfigForEditPanel,
	                width : this.labelWidthOfPrintOrientationConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	                xtype : 'combo',
	                flex : 1,
	                store : this.getPrintOrientationConfigComboStore(),
	            	allowBlank : this.printOrientationConfigUpdateFieldAllowBlankForEditPanelValue,
	                name : 'font-family',
	                forceSelection : false,
      				editable : false,
      				queryMode : 'local',
    				displayField : 'comboItemName',
    				valueField : 'comboItemValue',
    				listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.printOrientation) {
    								component.setValue(me.vbpConfiguration.basicSetting.printOrientation);
    							}
    						}
    					},
    					//
    					select : {
    						fn : function(combo, records, eOpts) {
    							var selectedPrintOrientation = records[0].data.comboItemValue;
    							var selectedPaperType = Ext.getCmp(me.idOfPaperTypeConfigForEditPanel).getValue();
    							
    							if(selectedPrintOrientation == 'portrait' && selectedPaperType) {
    								if(selectedPaperType == me.nameOfPaperTypeA4) {
    									Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperHeightOfPaperTypeA4);
    									Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperWidthOfPaperTypeA4);
    								} else if(selectedPaperType == me.nameOfPaperTypeA3) {
    									Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperHeightOfPaperTypeA3);
    									Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperWidthOfPaperTypeA3);
    								} else if(selectedPaperType == me.nameOfPaperTypeB4) {
    									Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperHeightOfPaperTypeB4);
    									Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperWidthOfPaperTypeB4);
    								} else if(selectedPaperType == me.nameOfPaperTypeB5) {
    									Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperHeightOfPaperTypeB5);
    									Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperWidthOfPaperTypeB5);
    								}
    							} else if(selectedPrintOrientation == 'landscape' && selectedPaperType) {
    								if(selectedPaperType == me.nameOfPaperTypeA4) {
    									Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperWidthOfPaperTypeA4);
    									Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperHeightOfPaperTypeA4);
    								} else if(selectedPaperType == me.nameOfPaperTypeA3) {
    									Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperWidthOfPaperTypeA3);
    									Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperHeightOfPaperTypeA3);
    								} else if(selectedPaperType == me.nameOfPaperTypeB4) {
    									Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperWidthOfPaperTypeB4);
    									Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperHeightOfPaperTypeB4);
    								} else if(selectedPaperType == me.nameOfPaperTypeB5) {
    									Ext.getCmp(me.idOfPaperWidthConfigForEditPanel).setValue(me.paperWidthOfPaperTypeB5);
    									Ext.getCmp(me.idOfPaperHeightConfigForEditPanel).setValue(me.paperHeightOfPaperTypeB5);
    								}
    								
    							}
    						}
    					}
    				},
    				id : this.idOfPrintOrientationConfigForEditPanel,
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
      	containPrintOffsetXConfigForEditPanel : true,
        
      	anchorOfPrintOffsetXConfigForEditPanel : '100%',
      
      	labelOfPrintOffsetXConfigForEditPanel : '打印横向偏移(cm)' + ':&nbsp;&nbsp;',
      
      	labelWidthOfPrintOffsetXConfigForEditPanel : 128,
      
      	displayOrderOfPrintOffsetXConfigForEditPanel : 80000,
      	
      	printOffsetXConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfPrintOffsetXConfigForEditPanel : 'printOffsetXConfigTextfieldId',
      	
      	getPrintOffsetXConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfPrintOffsetXConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfPrintOffsetXConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfPrintOffsetXConfigForEditPanel,
	                width : this.labelWidthOfPrintOffsetXConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.printOffsetXConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'printOffsetX',
                  	xtype : 'numberfield',
                  	minValue : -2147483647,
                  	maxValue : 2147483647,
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.printOffsetX || me.vbpConfiguration.basicSetting.printOffsetX == 0) {
    								component.setValue(me.vbpConfiguration.basicSetting.printOffsetX);
    							}
    						}
    					}
    				},
    				id : this.idOfPrintOffsetXConfigForEditPanel,
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
      	containPrintOffsetYConfigForEditPanel : true,
        
      	anchorOfPrintOffsetYConfigForEditPanel : '100%',
      
      	labelOfPrintOffsetYConfigForEditPanel : '打印纵向偏移(cm)' + ':&nbsp;&nbsp;',
      
      	labelWidthOfPrintOffsetYConfigForEditPanel : 128,
      
      	displayOrderOfPrintOffsetYConfigForEditPanel : 90000,
      	
      	printOffsetYConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfPrintOffsetYConfigForEditPanel : 'printOffsetYConfigTextfieldId',
      	
      	getPrintOffsetYConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfPrintOffsetYConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfPrintOffsetYConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfPrintOffsetYConfigForEditPanel,
	                width : this.labelWidthOfPrintOffsetYConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.printOffsetYConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'printOffsetY',
                  	xtype : 'numberfield',
                  	minValue : -2147483647,
                  	maxValue : 2147483647,
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							if(me.vbpConfiguration.basicSetting.printOffsetY || me.vbpConfiguration.basicSetting.printOffsetY == 0) {
    								component.setValue(me.vbpConfiguration.basicSetting.printOffsetY);
    							}
    						}
    					}
    				},
    				id : this.idOfPrintOffsetYConfigForEditPanel,
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
        nothing : null
	}
);