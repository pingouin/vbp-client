Ext.define(//
    'cn.com.pingouin.vbp_client.VbpPrintZonePanel'//
    , {
      
      extend : 'Ext.panel.Panel',
      
      config : {
      	vbpConfiguration : null,
        //
        nothing : null
      },
      
      _superclass_ : null,
      
      initComponent : function() {
      	var me = this;
      	
      	// 厘米与当前像素的比例关系
      	var div_1cm = Ext.get('div_1cm');
		this.widthOf1cm = div_1cm.getWidth();
		
		// 接收到的设置参数
      	this.vbpConfiguration = vbpConfiguration;

      	// 记录设置参数
      	this.getBasicSetting();
      	// 根据设置参数创建漂浮框
      	var vbpFloatDivisions = this.getVbpFloatDivisions();
      	
      	// 读取底图url,默认白色背景
      	var printZoneBackgroud = '#FFFFFF';
      	if(vbpConfiguration.basicSetting.backgroudPictureUrl && vbpConfiguration.basicSetting.backgroudPictureUrl != '') {
      		printZoneBackgroud = 'url(' + vbpConfiguration.basicSetting.backgroudPictureUrl + ') no-repeat left top';
      	}
      	
      	Ext.apply(//
            this//
            , {
              flex : 1,
              layout : 'anchor',
              width : this.paperWidth,
              height : this.paperHeight,
              items : vbpFloatDivisions,
              border : false,
              bodyStyle: {
              	background : printZoneBackgroud
              },
              //
              nothing : null
            }//
        );
      	
      	this._superclass_ = cn.com.pingouin.vbp_client.VbpPrintZonePanel.superclass;
        this._superclass_.initComponent.apply(this, arguments);
        
        this.addListener(
        	'afterrender'
    	    , function (component, eOpts) {
    	    	var me = this;
    	    	var floatDivisionItems = component.items.items;
    	    	
    	    	// 漂浮框移动到指定位置
    	    	for(i=0; i<floatDivisionItems.length; i++) {
    	    		floatDivisionItems[i].el.move(
    	    			"l",
    	    			floatDivisionItems[i].el.getOffsetsTo(me.el)[0]
    	    		);
    	    		floatDivisionItems[i].el.move(
    	    			"t",
    	    			floatDivisionItems[i].el.getOffsetsTo(me.el)[1]
    	    		);
    	    		floatDivisionItems[i].el.move(
    	    			"r",
    	    			floatDivisionItems[i].floatDivisionX
    	    		);
    	    		floatDivisionItems[i].el.move(
    	    			"b",
    	    			floatDivisionItems[i].floatDivisionY
    	    		);
    	    	}
    	    	
    	    	// 漂浮框赋值
    	    	for(i=0; i<floatDivisionItems.length; i++) {
    	    		if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.dynamicTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
    	    			floatDivisionItems[i].el.setHTML(floatDivisionItems[i].floatDivisionSetting.valueFetchExpression);
    	    			this.addBoderToFloatDivision(floatDivisionItems[i]);
    	    			// 
    	    			this.addListenersToFloatDivisionItem(floatDivisionItems[i]);
		    	    	this.addListenersToFloatDivisionItemElement(floatDivisionItems[i]);
    	    		} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.staticTextFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
    	    			floatDivisionItems[i].floatDivisionContent = floatDivisionItems[i].floatDivisionSetting.valueFetchExpression;
    	    			floatDivisionItems[i].el.setHTML(floatDivisionItems[i].floatDivisionContent);
    	    			this.addBoderToFloatDivision(floatDivisionItems[i]);
    	    			// 
    	    			this.addListenersToFloatDivisionItem(floatDivisionItems[i]);
		    	    	this.addListenersToFloatDivisionItemElement(floatDivisionItems[i]);
	      			} else if(cn.com.pingouin.vbp_client.utils.ConstantsForFloatType.pictureFloatDivisionType == floatDivisionItems[i].floatDivisionType) {
	      				floatDivisionItems[i].el.setHTML(floatDivisionItems[i].floatDivisionSetting.valueFetchExpression);
	      				this.addBoderToFloatDivision(floatDivisionItems[i]);
	      				// 
    	    			this.addListenersToFloatDivisionItem(floatDivisionItems[i]);
    	    			this.addListenersToFloatDivisionItemElement(floatDivisionItems[i]);
	      			} else {
	      				
	      			}
    	    	}
	        }
        );
      },
      
      addBoderToFloatDivision : function(floatDivision) {
      	floatDivision.el.setStyle('border-style', 'solid');
		floatDivision.el.setStyle('border-color', '#99BCE8');
		floatDivision.el.setStyle('border-width', '1px');
		floatDivision.el.setStyle('cursor', 'move');
      },
      
      addListenersToFloatDivisionItem : function(floatDivisionItem) {
      	var me = this;
      	
      	floatDivisionItem.addListener(
        	'resize'
            , function(component, width, height, oldWidth, oldHeight, eOpts) {
            	// 规避resize时,后创建的漂浮框会自动移位的问题
            	var resizedUnitIndex = me.items.items.length;
                for (i=0; i < me.items.items.length; i++) {
                	if (me.items.items[i].id == floatDivisionItem.id) {
                        resizedUnitIndex = i;
                    }
                    if (i > resizedUnitIndex) {
                        if (height > oldHeight) {
                        	me.items.items[i].el.move('t', (height - oldHeight));
                        } else if (height < oldHeight) {
                        	me.items.items[i].el.move('b', (oldHeight - height));
                        }
                    }
				}
            }
      	);
      	
      	floatDivisionItem.addListener(
        	'beforedestroy'
            , function(component, eOpts) {
            	// 规避destroy时,后创建的漂浮框会自动移位的问题
            	var height = floatDivisionItem.getHeight();
            	var resizedUnitIndex = me.items.items.length;
            	for (j=0; j < me.items.items.length; j++) {
                	if (me.items.items[j].id == floatDivisionItem.id) {
                        resizedUnitIndex = j;
                    }
                    if (j > resizedUnitIndex) {
                        me.items.items[j].el.move('b', height);
                    }
				}
            }
      	);
      },
      
      addListenersToFloatDivisionItemElement : function(floatDivisionItem) {
      	var me = this;
      	
      	// 双击打开单个漂浮框的参数设置窗口
	    floatDivisionItem.el.addListener(
	    	'dblclick'
			, function(eventObject, htmlElement, eOpts) {
			   	var vbpFloatDivisionConfigWindow = Ext.create(
			    	'cn.com.pingouin.vbp_client.VbpFloatDivisionConfigWindow'
			    	, {
			    	    floatDivision : floatDivisionItem
			    	}
			    );
			    vbpFloatDivisionConfigWindow.show();
		   	}
		);
		
		// 右键菜单
    	floatDivisionItem.el.addListener(
    		'contextmenu'
		    , function( eventObj, htmlElement, eOpts ) {
		    	// 禁用右键菜单
		    	eventObj.stopEvent();
		    	
		    	var vbpPrintZoneContextMenu = me.getVbpPrintZoneContextMenu();
		        
		        vbpPrintZoneContextMenu.items.getByKey(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.contextMenu_id_delete_floatDivision).setHandler(
		        	function () {
		        		floatDivisionItem.destroy();
		            }
		        );
		        // 显示右键菜单
		        vbpPrintZoneContextMenu.showAt(eventObj.getXY());
		    }
    	);
      },
      
      getVbpFloatDivisions : function() {
      	var me = this;
      	var widthOf1cm = this.widthOf1cm;
      	
      	var floatDivisions = new Array();
      	
      	var vbpConfiguration = this.vbpConfiguration;
      	
      	if(vbpConfiguration) {
      		var floatDivisionSettings = vbpConfiguration.floatDivisionSettings;
	      	
	      	if(floatDivisionSettings.length > 0) {
	      		for(i=0; i<floatDivisionSettings.length; i++) {
	      			var floatDivisionWidth = Number(floatDivisionSettings[i].width)*widthOf1cm;
	      			var floatDivisionHeight = Number(floatDivisionSettings[i].height)*widthOf1cm;
	      			var floatDivisionX = Number(floatDivisionSettings[i].x)*widthOf1cm;
	      			var floatDivisionY = Number(floatDivisionSettings[i].y)*widthOf1cm;
	      			
	      			var floatDivisionId = floatDivisionSettings[i].id;
	      			var floatDivisionType = floatDivisionSettings[i].type;
	      			var floatDivisionStyle = floatDivisionSettings[i].style;
	      			
	      			if(floatDivisionType) {
	      				floatDivisions.push(
			      		{
							xtype : 'panel',
							draggable : true, 
			                resizable : true,
			                width : floatDivisionWidth,
			                height : floatDivisionHeight,
			                header : false,
			                floatDivisionX : floatDivisionX,
			                floatDivisionY : floatDivisionY,
			                floatDivisionType : floatDivisionType,
			                floatDivisionSetting : floatDivisionSettings[i],
			                style: floatDivisionStyle,
			                id : floatDivisionId,
			                //
			                nothing : null
			      		}
			      		);
	      			}
	      		}
	      	} else {
	      		alert('无飘浮框');
	      	}
      	}
      	
      	return floatDivisions;
      },
      
      getBasicSetting : function() {
      	var vbpConfiguration = this.vbpConfiguration;
      	var widthOf1cm = this.widthOf1cm;
      	
      	// A4->21.0cm*29.7cm
      	var paperWidth = 29.7*widthOf1cm;
      	var paperHeight = 21*widthOf1cm;
      	var backgroudPictureUrl = '';
      	var callbackUrl = '';
      	var dataPropertyForId = '';
      	var dataPropertyForName = '';
      	var paperType = '';
      	var printOrientation = '';
      	
      	if(vbpConfiguration) {
      		var basicSetting = vbpConfiguration.basicSetting;
      		
      		if(basicSetting.paperWidth && basicSetting.paperWidth != '') {
	      		paperWidth = Number(basicSetting.paperWidth)*widthOf1cm;
	      	}
	      	if(basicSetting.paperHeight && basicSetting.paperHeight != '') {
	      		paperHeight = Number(basicSetting.paperHeight)*widthOf1cm;
	      	}
	      	
	      	backgroudPictureUrl = basicSetting.backgroudPictureUrl;
	      	callbackUrl = basicSetting.callbackUrl;
	      	dataPropertyForId = basicSetting.dataPropertyForId;
	      	dataPropertyForName = basicSetting.dataPropertyForName;
	      	paperType = basicSetting.paperType;
	      	printOrientation = basicSetting.printOrientation;
      	}
      	
      	this.paperWidth = paperWidth;
      	this.paperHeight = paperHeight;
      	this.backgroudPictureUrl = backgroudPictureUrl;
      	this.callbackUrl = callbackUrl;
      	this.dataPropertyForId = dataPropertyForId;
      	this.dataPropertyForName = dataPropertyForName;
      	this.paperType = paperType;
      	this.printOrientation = printOrientation;
      },
      
      // 编辑区右键菜单
      vbpPrintZoneContextMenu : null,
      getVbpPrintZoneContextMenu : function() {
      	if(this.vbpPrintZoneContextMenu == null) {
        	var me = this;
        	var vbpPrintZoneContextMenu = Ext.create(
	        	'Ext.menu.Menu'
	            , {
	                items:
	                [
	                {
	                	id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.contextMenu_id_delete_floatDivision,
	                	text : '<span style = "color : red;font-size : 14px;">删除当前漂浮框</span>'
	                }
	                ]
	            }
            );
            this.vbpPrintZoneContextMenu = vbpPrintZoneContextMenu;
        }
        return this.vbpPrintZoneContextMenu;
      },
      
      //
      nothing : null
    }
);