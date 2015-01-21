Ext.define(//
    'cn.com.pingouin.vbp_client.VbpPrintZoneFunctions'//
    , {
    	initComponent : function() {
    		cn.com.pingouin.vbp_client.VbpPrintZoneFunctions.superclass.initComponent.apply(this, arguments);
    	},
    	
    	printByLodop : function(vbpDataSource, LODOP) {
    		var leftOffset = 0;
    		var topOffset = 0;
    		if(vbpConfiguration.basicSetting.printOffsetX && vbpConfiguration.basicSetting.printOffsetX != '') {
    			leftOffset = Number(vbpConfiguration.basicSetting.printOffsetX);
    		}
    		if(vbpConfiguration.basicSetting.printOffsetY && vbpConfiguration.basicSetting.printOffsetY != '') {
    			topOffset = Number(vbpConfiguration.basicSetting.printOffsetY);
    		}
			
			var printOrientation = 2;
			if(vbpConfiguration.basicSetting.printOrientation == 'portrait') {
				printOrientation = 1;
			}
			
			var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
	    	var floatDivisionItems = vbpPrintZonePanel.items.items;
	    	var pixelRelateCm = 1/Number(vbpPrintZonePanel.widthOf1cm);
	    	
	    	for(i=0; i<floatDivisionItems.length; i++) {
	    		if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.dynamicTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
		    		for(property in vbpDataSource) {
		    			if(floatDivisionItems[i].floatDivisionSetting.valueFetchExpression == property) {
		    				var floatDivisionTop = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[1] * pixelRelateCm + topOffset;
		   					var floatDivisionLeft = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[0] * pixelRelateCm + leftOffset;
		   					var floatDivisionWidth = floatDivisionItems[i].getWidth() * pixelRelateCm;
		   					var floatDivisionHeight = floatDivisionItems[i].getHeight() * pixelRelateCm;
		    				
		    				var floatDivisionStyle = '';
		    				floatDivisionStyle = floatDivisionStyle + "\"";
		   					for(style in floatDivisionItems[i].floatDivisionSetting.style) {
		    					floatDivisionStyle = floatDivisionStyle + style + ":" + floatDivisionItems[i].el.getStyle(style) + ";";
		    				}
		    				floatDivisionStyle = floatDivisionStyle + "\"";
		    				
		   					LODOP.ADD_PRINT_HTM(
		    					floatDivisionTop + "cm", 
		    					floatDivisionLeft + "cm", 
		    					floatDivisionWidth + "cm", 
		    					floatDivisionHeight + "cm", 
		   						"<span " + " style=" + floatDivisionStyle + ">" + vbpDataSource[property] + "</span>"
		   					);
		   	    		}
		   			}
	    		} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.pictureFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
	    			for(property in vbpDataSource) {
		    			if(floatDivisionItems[i].floatDivisionSetting.valueFetchExpression == property) {
		    				var floatDivisionTop = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[1] * pixelRelateCm + topOffset;
		   					var floatDivisionLeft = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[0] * pixelRelateCm + leftOffset;
		   					var floatDivisionWidth = floatDivisionItems[i].getWidth() * pixelRelateCm;
		   					var floatDivisionHeight = floatDivisionItems[i].getHeight() * pixelRelateCm;
		    				
		    				var floatDivisionStyle = '';
		    				floatDivisionStyle = floatDivisionStyle + "\"";
		   					for(style in floatDivisionItems[i].floatDivisionSetting.style) {
		    					floatDivisionStyle = floatDivisionStyle + style + ":" + floatDivisionItems[i].el.getStyle(style) + ";";
		    				}
		    				floatDivisionStyle = floatDivisionStyle + "\"";
		    				
		   					LODOP.ADD_PRINT_IMAGE(
		    					floatDivisionTop + "cm", 
		    					floatDivisionLeft + "cm", 
		    					floatDivisionWidth + "cm", 
		    					floatDivisionHeight + "cm", 
		    						"<img " 
			   						+ " src=" + "\"" + vbpDataSource[property] + "\"" 
			   						+ " >" 
		   					);
		   	    		}
		   			}
	    		} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.staticTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
	    			var floatDivisionTop = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[1] * pixelRelateCm + topOffset;
		   			var floatDivisionLeft = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[0] * pixelRelateCm + leftOffset;
		   			var floatDivisionWidth = floatDivisionItems[i].getWidth() * pixelRelateCm;
		   			var floatDivisionHeight = floatDivisionItems[i].getHeight() * pixelRelateCm;
	    			
	    			var floatDivisionStyle = '';
		    		floatDivisionStyle = floatDivisionStyle + "\"";
		   			for(style in floatDivisionItems[i].style) {
		    			floatDivisionStyle = floatDivisionStyle + style + ":" + floatDivisionItems[i].el.getStyle(style) + ";";
		    		}
		    		floatDivisionStyle = floatDivisionStyle + "\"";
	    			
	    			LODOP.ADD_PRINT_HTM(
		    			floatDivisionTop + "cm", 
		    			floatDivisionLeft + "cm", 
		    			floatDivisionWidth + "cm", 
		    			floatDivisionHeight + "cm", 
		   				"<span " + " style=" + floatDivisionStyle + ">" + floatDivisionItems[i].floatDivisionContent + "</span>"
		   			);
	    		}
	    	}
			
			LODOP.SET_PRINT_PAGESIZE(printOrientation, "", "", "");
			LODOP.SET_PRINT_STYLE("Stretch", 2);
			LODOP.SET_PRINT_MODE("CATCH_PRINT_STATUS", true);
			
//			LODOP.PREVIEW();
			var printResultState = LODOP.PRINT();
			return printResultState;
		},
    	
    	initialFloatDivisions : function(vbpDataSource) {
    		var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
	    	var floatDivisionItems = vbpPrintZonePanel.items.items;
	    	
	    	for(i=0; i<floatDivisionItems.length; i++) {
	    		// 先清除漂浮框内容
	    		floatDivisionItems[i].el.setHTML('');
	    		this.addResizerToFloatDivision(floatDivisionItems[i]);
		    	this.addBorderToFloatDivision(floatDivisionItems[i]);
	    		// 漂浮框赋值
	    		if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.dynamicTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
		    		for(property in vbpDataSource) {
		    			if(floatDivisionItems[i].floatDivisionSetting.valueFetchExpression == property) {
		    				floatDivisionItems[i].el.setHTML(vbpDataSource[property]);
		    				this.addResizerToFloatDivision(floatDivisionItems[i]);
		    				this.addBorderToFloatDivision(floatDivisionItems[i]);
		   	    		}
		   			}
	    		} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.pictureFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
	    			for(property in vbpDataSource) {
		    			if(floatDivisionItems[i].floatDivisionSetting.valueFetchExpression == property) {
		    				floatDivisionItems[i].el.setHTML(
		    					"<img " 
			   					+ " src=" + "\"" + vbpDataSource[property] + "\"" 
			   					+ " />" 
		    				);
		    				this.addResizerToFloatDivision(floatDivisionItems[i]);
		    				this.addBorderToFloatDivision(floatDivisionItems[i]);
		   	    		}
		   			}
		    	} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.staticTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
		    		floatDivisionItems[i].el.setHTML(floatDivisionItems[i].floatDivisionContent);
		    		this.addResizerToFloatDivision(floatDivisionItems[i]);
		    		this.addBorderToFloatDivision(floatDivisionItems[i]);
		    	}
	    	}
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
    	
		printZonePreview : function(vbpDataSource) {
			this.initialFloatDivisions(vbpDataSource);
		},
		
		newStaticFloatDivisionWidth : 100,
		newStaticFloatDivisionHeight : 100,
		newStaticFloatDivisionHtml : '新建静态漂浮框',
		newStaticFloatDivisionStyle : {
        	"font-family" : 'arial',
        	"font-size" : '',
        	"font-weight" : ''
        },
		
		addNewStaticFloatDivision : function() {
			var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
			
			var newFloatDivision = 
			{
				xtype : 'panel',
				draggable : true, 
			    resizable : true,
			    width : this.newStaticFloatDivisionWidth,
			    height : this.newStaticFloatDivisionHeight,
			    header : false,
			    floatDivisionType : cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.staticTextFloatDivisionType,
			    floatDivisionContent : this.newStaticFloatDivisionHtml,
			    html : this.newStaticFloatDivisionHtml,
			    style : this.newStaticFloatDivisionStyle,
			    //
			    nothing : null
			}
			
			var addedNewFloatDivision = vbpPrintZonePanel.add(newFloatDivision);
			
			vbpPrintZonePanel.addListenersToFloatDivisionItem(addedNewFloatDivision);
			vbpPrintZonePanel.addListenersToFloatDivisionItemElement(addedNewFloatDivision);
			
			// 移动到零点
			addedNewFloatDivision.el.move(
    	    	"l",
    	    	addedNewFloatDivision.el.getOffsetsTo(vbpPrintZonePanel.el)[0]
    	    );
    	    addedNewFloatDivision.el.move(
    	    	"t",
    	    	addedNewFloatDivision.el.getOffsetsTo(vbpPrintZonePanel.el)[1]
    	    );
		},
		
		newDynamicFloatDivisionInitialX : 0,
		newDynamicFloatDivisionInitialY : 0,
		newDynamicFloatDivisionWidth : 100,
		newDynamicFloatDivisionHeight : 100,
		 newDynamicFloatDivisionHtml : '请输入取值表达式',
		newDynamicFloatDivisionStyle : {
        	"font-family" : 'arial',
        	"font-size" : '',
        	"font-weight" : ''
        },
		
		addNewDynamicFloatDivision : function() {
			var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
			
			var newFloatDivision = 
			{
				xtype : 'panel',
				draggable : true, 
			    resizable : true,
			    width : this.newDynamicFloatDivisionWidth,
			    height : this.newDynamicFloatDivisionHeight,
			    header : false,
			    html : this.newDynamicFloatDivisionHtml,
			    floatDivisionType : cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.dynamicTextFloatDivisionType,
			    style : this.newDynamicFloatDivisionStyle,
			    floatDivisionSetting : {
		            x : this.newDynamicFloatDivisionInitialX,
		            y : this.newDynamicFloatDivisionInitialY,
		            width : this.newDynamicFloatDivisionWidth,
		            height : this.newDynamicFloatDivisionHeight,
		            style : {
		              "font-family" : '',
		              "font-size" : '',
		              "font-weight" : ''
		            },
		            valueFetchExpression : '请输入取值表达式',
		            pictureUrl : ''
        		},
			    //
			    nothing : null
			}
			
			var addedNewFloatDivision = vbpPrintZonePanel.add(newFloatDivision);
			
			vbpPrintZonePanel.addListenersToFloatDivisionItem(addedNewFloatDivision);
			vbpPrintZonePanel.addListenersToFloatDivisionItemElement(addedNewFloatDivision);
			
			// 移动到零点
			addedNewFloatDivision.el.move(
    	    	"l",
    	    	addedNewFloatDivision.el.getOffsetsTo(vbpPrintZonePanel.el)[0]
    	    );
    	    addedNewFloatDivision.el.move(
    	    	"t",
    	    	addedNewFloatDivision.el.getOffsetsTo(vbpPrintZonePanel.el)[1]
    	    );
		},
		
		moveAllFloatDivisions : function(moveDistance) {
			var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
			var items = vbpPrintZonePanel.items.items;
	    	var pixelRelateCm = 1/Number(vbpPrintZonePanel.widthOf1cm);
	    	
	    	var moveDistanceX = Number(moveDistance.x) / pixelRelateCm;
			var moveDistanceY = Number(moveDistance.y) / pixelRelateCm;
			
			for(i=0; i<items.length; i++) {
				items[i].el.move(
					"r",
					moveDistanceX
				);
				items[i].el.move(
					"t",
					moveDistanceY
				);
			}
		},
		
		printZonePreviewWithSelectedData :function(selectedRecord, LODOP) {
			var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
			
			var currentVbpConfiguration = new Object();
			currentVbpConfiguration['basicSetting'] = vbpPrintZonePanel.vbpConfiguration.basicSetting;
			currentVbpConfiguration['floatDivisionSettings'] = vbpPrintZonePanel.vbpConfiguration.floatDivisionSettings;
			
			var leftOffset = 0;
    		var topOffset = 0;
    		if(Number(currentVbpConfiguration.basicSetting.printOffsetX)) {
    			leftOffset = Number(currentVbpConfiguration.basicSetting.printOffsetX);
    		}
    		if(Number(currentVbpConfiguration.basicSetting.printOffsetY)) {
    			topOffset = Number(currentVbpConfiguration.basicSetting.printOffsetY);
    		}
			
			var printOrientation = 2;
			if(currentVbpConfiguration.basicSetting.printOrientation == 'portrait') {
				printOrientation = 1;
			}
			
	    	var floatDivisionItems = vbpPrintZonePanel.items.items;
	    	var pixelRelateCm = 1/Number(vbpPrintZonePanel.widthOf1cm);
	    	
	    	for(i=0; i<floatDivisionItems.length; i++) {
	    		if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.dynamicTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
		    		for(property in selectedRecord) {
		    			if(floatDivisionItems[i].floatDivisionSetting.valueFetchExpression == property) {
		    				var floatDivisionTop = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[1] * pixelRelateCm + topOffset;
		   					var floatDivisionLeft = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[0] * pixelRelateCm + leftOffset;
		   					var floatDivisionWidth = floatDivisionItems[i].getWidth() * pixelRelateCm;
		   					var floatDivisionHeight = floatDivisionItems[i].getHeight() * pixelRelateCm;
		    				
		    				var floatDivisionStyle = '';
		    				floatDivisionStyle = floatDivisionStyle + "\"";
		   					for(style in floatDivisionItems[i].floatDivisionSetting.style) {
		    					floatDivisionStyle = floatDivisionStyle + style + ":" + floatDivisionItems[i].el.getStyle(style) + ";";
		    				}
		    				floatDivisionStyle = floatDivisionStyle + "\"";
		    				
		   					LODOP.ADD_PRINT_HTM(
		    					floatDivisionTop + "cm", 
		    					floatDivisionLeft + "cm", 
		    					floatDivisionWidth + "cm", 
		    					floatDivisionHeight + "cm", 
		   						"<span " + " style=" + floatDivisionStyle + ">" + selectedRecord[property] + "</span>"
		   					);
		   	    		}
		   			}
	    		} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.pictureFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
	    			for(property in selectedRecord) {
		    			if(floatDivisionItems[i].floatDivisionSetting.valueFetchExpression == property) {
		    				var floatDivisionTop = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[1] * pixelRelateCm + topOffset;
		   					var floatDivisionLeft = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[0] * pixelRelateCm + leftOffset;
		   					var floatDivisionWidth = floatDivisionItems[i].getWidth() * pixelRelateCm;
		   					var floatDivisionHeight = floatDivisionItems[i].getHeight() * pixelRelateCm;
		    				
		    				var floatDivisionStyle = '';
		    				floatDivisionStyle = floatDivisionStyle + "\"";
		   					for(style in floatDivisionItems[i].floatDivisionSetting.style) {
		    					floatDivisionStyle = floatDivisionStyle + style + ":" + floatDivisionItems[i].el.getStyle(style) + ";";
		    				}
		    				floatDivisionStyle = floatDivisionStyle + "\"";
		    				
		   					LODOP.ADD_PRINT_IMAGE(
		    					floatDivisionTop + "cm", 
		    					floatDivisionLeft + "cm", 
		    					floatDivisionWidth + "cm", 
		    					floatDivisionHeight + "cm", 
		    						"<img " 
			   						+ " src=" + "\"" + selectedRecord[property] + "\"" 
			   						+ " >" 
		   					);
		   	    		}
		   			}
	    		} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.staticTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
	    			var floatDivisionTop = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[1] * pixelRelateCm + topOffset;
		   			var floatDivisionLeft = floatDivisionItems[i].el.getOffsetsTo(vbpPrintZonePanel.el)[0] * pixelRelateCm + leftOffset;
		   			var floatDivisionWidth = floatDivisionItems[i].getWidth() * pixelRelateCm;
		   			var floatDivisionHeight = floatDivisionItems[i].getHeight() * pixelRelateCm;
	    			
	    			var floatDivisionStyle = '';
		    		floatDivisionStyle = floatDivisionStyle + "\"";
		   			for(style in floatDivisionItems[i].style) {
		    			floatDivisionStyle = floatDivisionStyle + style + ":" + floatDivisionItems[i].el.getStyle(style) + ";";
		    		}
		    		floatDivisionStyle = floatDivisionStyle + "\"";
	    			
	    			LODOP.ADD_PRINT_HTM(
		    			floatDivisionTop + "cm", 
		    			floatDivisionLeft + "cm", 
		    			floatDivisionWidth + "cm", 
		    			floatDivisionHeight + "cm", 
		   				"<span " + " style=" + floatDivisionStyle + ">" + floatDivisionItems[i].floatDivisionContent + "</span>"
		   			);
	    		}
	    	}
			
			LODOP.SET_PRINT_PAGESIZE(printOrientation, "", "", "");
			LODOP.SET_PRINT_STYLE("Stretch", 2);
			LODOP.SET_PRINT_MODE("CATCH_PRINT_STATUS", true);
			
			LODOP.PREVIEW();
		},
		
		vbpTemplateSave : function() {
			var vbpPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
			
			var floatDivisionSettings = this.prepareAllFloatDivisionsAsTemplate();
			
			var currentVbpConfiguration = new Object();
			currentVbpConfiguration['basicSetting'] = vbpPrintZonePanel.vbpConfiguration.basicSetting;
			currentVbpConfiguration['floatDivisionSettings'] = floatDivisionSettings;
			
			var templateSaveCallBackUrl = vbpPrintZonePanel.vbpConfiguration.basicSetting.templateSaveCallBackUrl;
			
			var ajaxParameters = new Object();
			ajaxParameters['vbpConfiguration'] = Ext.encode(currentVbpConfiguration);
			
			if(templateSaveCallBackUrl && templateSaveCallBackUrl.length > 0) {
				Ext.data.JsonP.request({
					url : templateSaveCallBackUrl,
					timeout : cn.com.pingouin.vbp_client.utils.ConstantsForSystemConfig.defaultTimeoutMillisecondsForAjax,
					params : ajaxParameters,
					success : function(response, options) {
						// var templateSaveResponseObject = Ext.decode(response.responseText, true);
						
						Ext.Msg.alert(//
								'成功'//
								, '模板保存成功'//
								, function() {
								}//
						);
					},
					failure : function(response) {
						Ext.Msg.alert(//
								'失败'//
								, '模板保存失败'//
								, function() {
								}//
						);
					}
				});
			} else {
				Ext.Msg.alert(//
					'提醒'//
					, '请输入模板保存的回调地址'//
					, function() {
					}//
				);
			}
		},
		
		prepareAllFloatDivisionsAsTemplate : function() {
			var vbptmPrintZonePanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_printZonePanel);
			
			var floatDivisionItems = vbptmPrintZonePanel.items.items;
			var pixelRelateCm = 1/Number(vbptmPrintZonePanel.widthOf1cm);
	    	
			var floatDivisionSettings = new Array();
			
	    	for(i=0; i<floatDivisionItems.length; i++) {
	    		var floatDivisionSetting = {};
	    		
	    		floatDivisionSetting['id'] = (i+1).toString();
	    		
	    		floatDivisionSetting['x'] = floatDivisionItems[i].el.getOffsetsTo(vbptmPrintZonePanel.el)[0] * pixelRelateCm;
	    		floatDivisionSetting['y'] = floatDivisionItems[i].el.getOffsetsTo(vbptmPrintZonePanel.el)[1] * pixelRelateCm;
	    		floatDivisionSetting['width'] = floatDivisionItems[i].getWidth() * pixelRelateCm;
	    		floatDivisionSetting['height'] = floatDivisionItems[i].getHeight() * pixelRelateCm;
    			
	    		var  floatDivisionStyleSetting= {};
	    		for(style in floatDivisionItems[i].style) {
	    			floatDivisionStyleSetting[style] = floatDivisionItems[i].el.getStyle(style);
    			}
	    		floatDivisionSetting['style'] = floatDivisionStyleSetting;
	    		
	    		if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.dynamicTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
	    			floatDivisionSetting['type'] = floatDivisionItems[i].floatDivisionType;
	    			floatDivisionSetting['valueFetchExpression'] = floatDivisionItems[i].floatDivisionSetting.valueFetchExpression;
	    			floatDivisionSetting['pictureUrl'] = '';
	    			
	    			floatDivisionSettings.push(floatDivisionSetting);
	    		} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.pictureFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
	    			floatDivisionSetting['type'] = floatDivisionItems[i].floatDivisionType;
	    			floatDivisionSetting['valueFetchExpression'] = floatDivisionItems[i].floatDivisionSetting.valueFetchExpression;
	    			floatDivisionSetting['pictureUrl'] = floatDivisionItems[i].floatDivisionSetting.pictureUrl;
	    			
	    			floatDivisionSettings.push(floatDivisionSetting);
	    		} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.staticTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
	    			floatDivisionSetting['type'] = floatDivisionItems[i].floatDivisionType;
	    			floatDivisionSetting['valueFetchExpression'] = floatDivisionItems[i].floatDivisionContent;
	    			floatDivisionSetting['pictureUrl'] = '';
	    			
	    			floatDivisionSettings.push(floatDivisionSetting);
	    		}
	    	}
	    	
	    	return floatDivisionSettings
		},
		
    	//
    	nothing : null
    });