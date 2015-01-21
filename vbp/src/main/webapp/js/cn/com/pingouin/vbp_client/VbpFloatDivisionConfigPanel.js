Ext.define(
	'cn.com.pingouin.vbp_client.VbpFloatDivisionConfigPanel'
	, {
		//
        extend : 'Ext.form.Panel',
        //
        config : {
        	floatDivision : null,
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
        	var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
    		this.widthOf1cm = vbpPrintZonePanel.widthOf1cm;
        	
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
	        this._superclass_ = cn.com.pingouin.vbp_client.VbpFloatDivisionConfigPanel.superclass;
      		this._superclass_.initComponent.apply(this, arguments);
        },
        
        editPanelDefaultLabelWidth : 128,
        
        includeAllFields : true,
        
        buildEditPanelItems : function() {
        	var vbpFloatDivisionConfigItems = new Array();
        	if (this.includeAllFields && this.containFloatDivisionWidthConfigForEditPanel) {
	        	vbpFloatDivisionConfigItems.push(this.getFloatDivisionWidthConfigPanel());
	        }
	        if (this.includeAllFields && this.containFloatDivisionHeightConfigForEditPanel) {
	        	vbpFloatDivisionConfigItems.push(this.getFloatDivisionHeightConfigPanel());
	        }
	        if (this.includeAllFields && this.containFloatDivisionPositionXConfigForEditPanel) {
	        	vbpFloatDivisionConfigItems.push(this.getFloatDivisionPositionXConfigPanel());
	        }
	        if (this.includeAllFields && this.containFloatDivisionPositionYConfigForEditPanel) {
	        	vbpFloatDivisionConfigItems.push(this.getFloatDivisionPositionYConfigPanel());
	        }
        	// 动态漂浮框
        	if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.dynamicTextFloatDivisionType == this.getFloatDivision().floatDivisionType) {
        		if (this.includeAllFields && this.containFontFamilyConfigForEditPanel) {
	          		vbpFloatDivisionConfigItems.push(this.getFontFamilyConfigPanel());
	        	}
	        	if (this.includeAllFields && this.containFontSizeConfigForEditPanel) {
	          		vbpFloatDivisionConfigItems.push(this.getFontSizeConfigPanel());
	        	}
	        	if (this.includeAllFields && this.containFontWeightConfigForEditPanel) {
	          		vbpFloatDivisionConfigItems.push(this.getFontWeightConfigPanel());
	        	}
	        	// 对象是动态漂浮框时,可修改其取值表达式
        		if (this.includeAllFields && this.containValueFetchExpressionConfigForEditPanel) {
	          		vbpFloatDivisionConfigItems.push(this.getValueFetchExpressionConfigPanel());
	        	}
        	} 
        	// 静态漂浮框
        	else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.staticTextFloatDivisionType == this.getFloatDivision().floatDivisionType) {
        		if (this.includeAllFields && this.containFontFamilyConfigForEditPanel) {
	          		vbpFloatDivisionConfigItems.push(this.getFontFamilyConfigPanel());
	        	}
	        	if (this.includeAllFields && this.containFontSizeConfigForEditPanel) {
	          		vbpFloatDivisionConfigItems.push(this.getFontSizeConfigPanel());
	        	}
	        	if (this.includeAllFields && this.containFontWeightConfigForEditPanel) {
	          		vbpFloatDivisionConfigItems.push(this.getFontWeightConfigPanel());
	        	}
        		// 对象是静态漂浮框时,可修改其内容
        		if (this.includeAllFields && this.containFontWeightConfigForEditPanel) {
	          		vbpFloatDivisionConfigItems.push(this.getFloatDivisionContentConfigPanel());
	        	}
        	} 
        	// 图片漂浮框
        	else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.pictureFloatDivisionType == this.getFloatDivision().floatDivisionType) {
        		
        	}
        	
        	return vbpFloatDivisionConfigItems;
        },
        
        buildEditPanelButtons : function() {
        	var me = this;
        	var vbpFloatDivisionConfigButtons = new Array();
        	
        	vbpFloatDivisionConfigButtons.push({
        		displayOrder : 10,
        		handler : function(button, eventObject) {
    				var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
        			var newWidth = '';
        			var newHeight = '';
        			
        			var vbpConfigItems = this.items.items;
        			for(i=0; i<vbpConfigItems.length; i++) {
        				// 修改漂浮框样式
        				if(vbpConfigItems[i].down('combo')) {
        					this.getFloatDivision().el.setStyle(
		        				vbpConfigItems[i].down('combo').name , vbpConfigItems[i].down('combo').getValue()
		        			);
        				} 
        				else if (vbpConfigItems[i].down('textfield')) {
        					// 修改漂浮框内容
        					if(this.idOfFloatDivisionContentConfigForEditPanel == vbpConfigItems[i].down('textfield').id) {
        						this.getFloatDivision().el.setHTML(vbpConfigItems[i].down('textfield').getValue());
	        					this.getFloatDivision().floatDivisionContent = vbpConfigItems[i].down('textfield').getValue();
	        					this.addResizerToFloatDivision(this.getFloatDivision());
		    					this.addBorderToFloatDivision(this.getFloatDivision());
        					} 
        					// 修改取值表达式
        					else if(this.idOfValueFetchExpressionConfigForEditPanel == vbpConfigItems[i].down('textfield').id) {
	        					this.getFloatDivision().floatDivisionSetting.valueFetchExpression = vbpConfigItems[i].down('textfield').getValue();
	        					this.getFloatDivision().el.setHTML(vbpConfigItems[i].down('textfield').getValue());
	        					this.addResizerToFloatDivision(this.getFloatDivision());
		    					this.addBorderToFloatDivision(this.getFloatDivision());
        					} 
        					// 记录新宽度
        					else if(this.idOfFloatDivisionWidthConfigForEditPanel == vbpConfigItems[i].down('textfield').id) {
        						newWidth = vbpConfigItems[i].down('textfield').getValue() * Number(this.widthOf1cm);
        					} 
        					// 记录新高度
        					else if(this.idOfFloatDivisionHeightConfigForEditPanel == vbpConfigItems[i].down('textfield').id) {
        						newHeight = vbpConfigItems[i].down('textfield').getValue() * Number(this.widthOf1cm);
        					} 
        					// 修改横轴坐标
        					else if(this.idOfFloatDivisionPositionXConfigForEditPanel == vbpConfigItems[i].down('textfield').id) {
        						var oldPositionX = this.getFloatDivision().el.getOffsetsTo(vbpPrintZonePanel.el)[0];
        						var newPositionX = vbpConfigItems[i].down('textfield').getValue() * Number(this.widthOf1cm);
        						this.getFloatDivision().el.move(
        							'r', 
        							newPositionX - oldPositionX
        						);
        					} 
        					// 修改纵轴坐标
        					else if(this.idOfFloatDivisionPositionYConfigForEditPanel == vbpConfigItems[i].down('textfield').id) {
        						var oldPositionY = this.getFloatDivision().el.getOffsetsTo(vbpPrintZonePanel.el)[1];
        						var newPositionY = vbpConfigItems[i].down('textfield').getValue() * Number(this.widthOf1cm);
        						this.getFloatDivision().el.move(
        							'b', 
        							newPositionY - oldPositionY
        						);
        					}
        				}
        			}
        			// 修改高宽
        			this.getFloatDivision().setSize(newWidth, newHeight);
        			
        			this.up('window').destroy();
        		},
        		scope : this,
                text : '更新',
                xtype : 'button',
                //
                nothing : null
        	});
        	
        	// add a "spacer"
        	vbpFloatDivisionConfigButtons.push({
            	displayOrder : 20,
            	xtype : 'tbspacer',
            	width : 32
            });
        	
        	vbpFloatDivisionConfigButtons.push({
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
        	
        	return vbpFloatDivisionConfigButtons;
        },
        
        addResizerToFloatDivision : function(floatDivision) {
    		Ext.create('Ext.resizer.Resizer', {
				el: floatDivision.el,
				handles: 'all'
			});
    	},
    	
    	addBorderToFloatDivision : function(floatDivision) {
    		floatDivision.el.setStyle('border-style', 'solid');
			floatDivision.el.setStyle('border-color', '#99BCE8');
			floatDivision.el.setStyle('border-width', '1px');
			floatDivision.el.setStyle('cursor', 'move');
    	},
        
        beforeApplyConigurations : function(configurations) {
        	return configurations;
      	},
      	
      	getFontFamilyConfigComboStore : function() {
      		return Ext.create(
	      		'Ext.data.Store'
	      		, {
	      			fields : ['comboItemValue', 'comboItemName'],
	      			data : [
		      			{"comboItemValue" : "宋体", "comboItemName" : "宋体"},
		      			{"comboItemValue" : "黑体", "comboItemName" : "黑体"},
		      			{"comboItemValue" : "楷体", "comboItemName" : "楷体"}
	      			],
	      			//
	      			nothing : null
	      		}
	      	);
      	},
      	
      	containFontFamilyConfigForEditPanel : true,
      
      	anchorOfFontFamilyConfigForEditPanel : '100%',
      
      	labelOfFontFamilyConfigForEditPanel : '修改字体' + ':&nbsp;&nbsp;',
      
      	labelWidthOfFontFamilyConfigForEditPanel : 128,
      
      	displayOrderOfFontFamilyConfigForEditPanel : 10000,
      
      	fontFamilyConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	getFontFamilyConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfFontFamilyConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfFontFamilyConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfFontFamilyConfigForEditPanel,
	                width : this.labelWidthOfFontFamilyConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }  //
	            , {
	                xtype : 'combo',
	                flex : 1,
	                store : this.getFontFamilyConfigComboStore(),
	            	allowBlank : this.fontFamilyConfigUpdateFieldAllowBlankForEditPanelValue,
	                name : 'font-family',
	                forceSelection : false,
      				editable : true,
      				queryMode : 'local',
    				displayField : 'comboItemName',
    				valueField : 'comboItemValue',
    				listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							var floatDivision = me.getFloatDivision();
    							var fontFamilySetting = floatDivision.el.getStyle('font-family');
    							var isAlreadyHas = component.getStore().findRecord('comboItemValue', fontFamilySetting);
    							if(isAlreadyHas) {
    								component.setValue(fontFamilySetting);
    							} else {
    								component.getStore().add({'comboItemValue' : fontFamilySetting, 'comboItemName' : fontFamilySetting});
    								component.setValue(fontFamilySetting);
    							}
    						}
    					}
    				},
	                //
	                nothing : null
	          	}],
	          	style : {
	            	"border-radius" : '0px',
	            	"border-width" : '0px'
	          	},
	          	xtype : 'panel',
	          	//
	          	nothing : null
      		}
      	},
      	
      	getFontSizeConfigComboStore : function() {
      		return Ext.create(
	      		'Ext.data.Store'
	      		, {
	      			fields : ['comboItemValue', 'comboItemName'],
	      			data : [
	      				{"comboItemValue" : "12px", "comboItemName" : "12px"},
		      			{"comboItemValue" : "14px", "comboItemName" : "14px"},
		      			{"comboItemValue" : "16px", "comboItemName" : "16px"},
		      			{"comboItemValue" : "18px", "comboItemName" : "18px"},
		      			{"comboItemValue" : "20px", "comboItemName" : "20px"},
		      			{"comboItemValue" : "22px", "comboItemName" : "22px"}
	      			],
	      			//
	      			nothing : null
	      		}
	      	);
      	},
      	
      	containFontSizeConfigForEditPanel : true,
      
      	anchorOfFontSizeConfigForEditPanel : '100%',
      
      	labelOfFontSizeConfigForEditPanel : '修改字号' + ':&nbsp;&nbsp;',
      
      	labelWidthOfFontSizeConfigForEditPanel : 128,
      
      	displayOrderOfFontSizeConfigForEditPanel : 20000,
      
      	fontSizeConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	getFontSizeConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfFontSizeConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfFontSizeConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfFontSizeConfigForEditPanel,
	                width : this.labelWidthOfFontSizeConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }  //
	            , {
	                xtype : 'combo',
	                flex : 1,
	                store : this.getFontSizeConfigComboStore(),
	            	allowBlank : this.fontSizeConfigUpdateFieldAllowBlankForEditPanelValue,
	                name : 'font-size',
	                forceSelection : false,
      				editable : true,
      				queryMode : 'local',
    				displayField : 'comboItemName',
    				valueField : 'comboItemValue',
    				listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							var floatDivision = me.getFloatDivision();
    							var fontSizeSetting = floatDivision.el.getStyle('font-size');
    							var isAlreadyHas = component.getStore().findRecord('comboItemValue', fontSizeSetting);
    							if(isAlreadyHas) {
    								component.setValue(fontSizeSetting);
    							} else {
    								component.getStore().add({'comboItemValue' : fontSizeSetting, 'comboItemName' : fontSizeSetting});
    								component.setValue(fontSizeSetting);
    							}
    						}
    					}
    				},
	                //
	                nothing : null
	          	}],
	          	style : {
	            	"border-radius" : '0px',
	            	"border-width" : '0px'
	          	},
	          	xtype : 'panel',
	          	//
	          	nothing : null
      		}
      	},
      	
      	getFontWeightConfigComboStore : function() {
      		return Ext.create(
	      		'Ext.data.Store'
	      		, {
	      			fields : ['comboItemValue', 'comboItemName'],
	      			data : [
	      				{"comboItemValue" : "bold", "comboItemName" : "加粗"},
		      			{"comboItemValue" : "normal", "comboItemName" : "普通"}
	      			],
	      			//
	      			nothing : null
	      		}
	      	);
      	},
      	
      	containFontWeightConfigForEditPanel : true,
      
      	anchorOfFontWeightConfigForEditPanel : '100%',
      
      	labelOfFontWeightConfigForEditPanel : '字体粗细' + ':&nbsp;&nbsp;',
      
      	labelWidthOfFontWeightConfigForEditPanel : 128,
      
      	displayOrderOfFontWeightConfigForEditPanel : 30000,
      	
      	fontWeightConfigUpdateFieldAllowBlankForEditPanelValue : true,
      
      	getFontWeightConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfFontWeightConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfFontWeightConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfFontWeightConfigForEditPanel,
	                width : this.labelWidthOfFontWeightConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }  //
	            , {
	               	xtype : 'combo',
	                flex : 1,
	                store : this.getFontWeightConfigComboStore(),
	            	allowBlank : this.fontWeightConfigUpdateFieldAllowBlankForEditPanelValue,
	                name : 'font-weight',
	                forceSelection : false,
      				editable : true,
      				queryMode : 'local',
    				displayField : 'comboItemName',
    				valueField : 'comboItemValue',
    				listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							var floatDivision = me.getFloatDivision();
    							var fontWeightSetting = floatDivision.el.getStyle('font-weight');
    							var isAlreadyHas = component.getStore().findRecord('comboItemValue', fontWeightSetting);
    							if(isAlreadyHas) {
    								component.setValue(fontWeightSetting);
    							} else {
    								component.getStore().add({'comboItemValue' : fontWeightSetting, 'comboItemName' : fontWeightSetting});
    								component.setValue(fontWeightSetting);
    							}
    						}
    					}
    				},
	                //
	                nothing : null
	          	}],
	          	style : {
	            	"border-radius" : '0px',
	            	"border-width" : '0px'
	          	},
	          	xtype : 'panel',
	          	//
	          	nothing : null
      		}
      	},
      	
      	containFloatDivisionWidthConfigForEditPanel : true,
      
      	anchorOfFloatDivisionWidthConfigForEditPanel : '100%',
      
      	labelOfFloatDivisionWidthConfigForEditPanel : '宽度(cm)' + ':&nbsp;&nbsp;',
      
      	labelWidthOfFloatDivisionWidthConfigForEditPanel : 128,
      
      	displayOrderOfFloatDivisionWidthConfigForEditPanel : 31000,
      	
      	floatDivisionWidthConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfFloatDivisionWidthConfigForEditPanel : 'floatDivisionWidthConfigTextfieldId',
      
      	getFloatDivisionWidthConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfFloatDivisionWidthConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfFloatDivisionWidthConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfFloatDivisionWidthConfigForEditPanel,
	                width : this.labelWidthOfFloatDivisionWidthConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.floatDivisionWidthConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'floatDivisionWidth',
                  	xtype : 'numberfield',
                  	minValue : 0,
                  	maxValue : 2147483647,
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							var pixelRelateCm = 1/Number(me.widthOf1cm);
    							var floatDivision = me.getFloatDivision();
    							if(floatDivision.getWidth()) {
    								component.setValue((floatDivision.getWidth()*pixelRelateCm).toFixed(2));
    							}
    						}
    					}
    				},
    				id : this.idOfFloatDivisionWidthConfigForEditPanel,
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
      	
      	containFloatDivisionHeightConfigForEditPanel : true,
      
      	anchorOfFloatDivisionHeightConfigForEditPanel : '100%',
      
      	labelOfFloatDivisionHeightConfigForEditPanel : '高度(cm)' + ':&nbsp;&nbsp;',
      
      	labelWidthOfFloatDivisionHeightConfigForEditPanel : 128,
      
      	displayOrderOfFloatDivisionHeightConfigForEditPanel : 32000,
      	
      	floatDivisionHeightConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfFloatDivisionHeightConfigForEditPanel : 'floatDivisionHeightConfigTextfieldId',
      
      	getFloatDivisionHeightConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfFloatDivisionHeightConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfFloatDivisionHeightConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfFloatDivisionHeightConfigForEditPanel,
	                width : this.labelWidthOfFloatDivisionHeightConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.floatDivisionHeightConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'floatDivisionHeight',
                  	xtype : 'numberfield',
                  	minValue : 0,
                  	maxValue : 2147483647,
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							var pixelRelateCm = 1/Number(me.widthOf1cm);
    							var floatDivision = me.getFloatDivision();
    							if(floatDivision.getHeight()) {
    								component.setValue((floatDivision.getHeight()*pixelRelateCm).toFixed(2));
    							}
    						}
    					}
    				},
    				id : this.idOfFloatDivisionHeightConfigForEditPanel,
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
      	
      	containFloatDivisionPositionXConfigForEditPanel : true,
      
      	anchorOfFloatDivisionPositionXConfigForEditPanel : '100%',
      
      	labelOfFloatDivisionPositionXConfigForEditPanel : '横轴坐标(cm)' + ':&nbsp;&nbsp;',
      
      	labelWidthOfFloatDivisionPositionXConfigForEditPanel : 128,
      
      	displayOrderOfFloatDivisionPositionXConfigForEditPanel : 33000,
      	
      	floatDivisionPositionXConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfFloatDivisionPositionXConfigForEditPanel : 'floatDivisionPositionXConfigTextfieldId',
      
      	getFloatDivisionPositionXConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfFloatDivisionPositionXConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfFloatDivisionPositionXConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfFloatDivisionPositionXConfigForEditPanel,
	                width : this.labelWidthOfFloatDivisionPositionXConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.floatDivisionPositionXConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'floatDivisionPositionX',
                  	xtype : 'numberfield',
                  	minValue : 0,
                  	maxValue : 2147483647,
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							var pixelRelateCm = 1/Number(me.widthOf1cm);
    							var floatDivision = me.getFloatDivision();
    							var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
    							component.setValue(((floatDivision.el.getOffsetsTo(vbpPrintZonePanel.el)[0]) * pixelRelateCm).toFixed(2));
    						}
    					}
    				},
    				id : this.idOfFloatDivisionPositionXConfigForEditPanel,
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
      	
      	containFloatDivisionPositionYConfigForEditPanel : true,
      
      	anchorOfFloatDivisionPositionYConfigForEditPanel : '100%',
      
      	labelOfFloatDivisionPositionYConfigForEditPanel : '纵轴坐标(cm)' + ':&nbsp;&nbsp;',
      
      	labelWidthOfFloatDivisionPositionYConfigForEditPanel : 128,
      
      	displayOrderOfFloatDivisionPositionYConfigForEditPanel : 34000,
      	
      	floatDivisionPositionYConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfFloatDivisionPositionYConfigForEditPanel : 'floatDivisionPositionYConfigTextfieldId',
      
      	getFloatDivisionPositionYConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfFloatDivisionPositionYConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfFloatDivisionPositionYConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfFloatDivisionPositionYConfigForEditPanel,
	                width : this.labelWidthOfFloatDivisionPositionYConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.floatDivisionPositionYConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'floatDivisionPositionY',
                  	xtype : 'numberfield',
                  	minValue : 0,
                  	maxValue : 2147483647,
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							var pixelRelateCm = 1/Number(me.widthOf1cm);
    							var floatDivision = me.getFloatDivision();
    							var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
    							component.setValue(((floatDivision.el.getOffsetsTo(vbpPrintZonePanel.el)[1]) * pixelRelateCm).toFixed(2));
    						}
    					}
    				},
    				id : this.idOfFloatDivisionPositionYConfigForEditPanel,
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
      	
      	containFloatDivisionContentConfigForEditPanel : true,
      
      	anchorOfFloatDivisionContentConfigForEditPanel : '100%',
      
      	labelOfFloatDivisionContentConfigForEditPanel : '内容' + ':&nbsp;&nbsp;',
      
      	labelWidthOfFloatDivisionContentConfigForEditPanel : 128,
      
      	displayOrderOfFloatDivisionContentConfigForEditPanel : 40000,
      	
      	floatDivisionContentConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfFloatDivisionContentConfigForEditPanel : 'floatDivisionContentConfigTextfieldId',
      
      	getFloatDivisionContentConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfFloatDivisionContentConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfFloatDivisionContentConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfFloatDivisionContentConfigForEditPanel,
	                width : this.labelWidthOfFloatDivisionContentConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.floatDivisionContentConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'floatDivisionContent',
                  	xtype : 'textfield',
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							var floatDivision = me.getFloatDivision();
    							if(floatDivision.floatDivisionContent) {
    								component.setValue(floatDivision.floatDivisionContent);
    							}
    						}
    					}
    				},
    				id : this.idOfFloatDivisionContentConfigForEditPanel,
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
        
      	containValueFetchExpressionConfigForEditPanel : true,
      
      	anchorOfValueFetchExpressionConfigForEditPanel : '100%',
      
      	labelOfValueFetchExpressionConfigForEditPanel : '取值表达式' + ':&nbsp;&nbsp;',
      
      	labelWidthOfValueFetchExpressionConfigForEditPanel : 128,
      
      	displayOrderOfValueFetchExpressionConfigForEditPanel : 50000,
      	
      	valueFetchExpressionConfigUpdateFieldAllowBlankForEditPanelValue : true,
      	
      	idOfValueFetchExpressionConfigForEditPanel : 'valueFetchExpressionConfigTextfieldId',
      
      	getValueFetchExpressionConfigPanel : function() {
      		var me = this;
      		
      		return {
      			anchor : this.anchorOfValueFetchExpressionConfigForEditPanel,
	          	border : false,
	          	bodyBorder : false,
	          	displayOrder : this.displayOrderOfValueFetchExpressionConfigForEditPanel,
	          	frame : true,
	          	layout : 'hbox',
	          	items : [//
	            {
	            	html : this.labelOfValueFetchExpressionConfigForEditPanel,
	                width : this.labelWidthOfValueFetchExpressionConfigForEditPanel,
	                style : "text-align: left",
	                xtype : 'label',
	                //
	                nothing : null
	            }
	            , {
	            	allowBlank : this.valueFetchExpressionConfigUpdateFieldAllowBlankForEditPanelValue,
                  	flex : 1,
                  	name : 'valueFetchExpression',
                  	xtype : 'textfield',
                  	listeners : {
    					render : {
    						fn : function(component, eOpts) {
    							var floatDivision = me.getFloatDivision();
    							if(floatDivision.floatDivisionSetting.valueFetchExpression) {
    								component.setValue(floatDivision.floatDivisionSetting.valueFetchExpression);
    							}
    						}
    					}
    				},
    				id : this.idOfValueFetchExpressionConfigForEditPanel,
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