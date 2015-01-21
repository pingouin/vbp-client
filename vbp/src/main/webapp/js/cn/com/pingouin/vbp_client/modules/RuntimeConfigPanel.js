/**
 * 运行时配置窗体
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.modules.RuntimeConfigPanel'//
    , {
      
      extend : 'Ext.panel.Panel',
      
      config : {
        vbpConfiguration : null,// 数据配置
        nothing : null
      },
      
      id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_runtimeConfigPanel,
      title : '参数调整',
      
      initComponent : function() {
        
        var vbpConfiguration = this.vbpConfiguration;
        
        var constantsForComponentId = cn.com.pingouin.vbp_client.utils.ConstantsForComponentId;
        var constantsForComponentDefaultValue = cn.com.pingouin.vbp_client.utils.ConstantsForComponentDefaultValue;
        
        var runtimeConfigPanel = Ext.create('Ext.panel.Panel', {
          region : 'center',
          frame : true,
          layout : 'form',
          bodyBorder : false,
          border : false,
          style : {
            "border-radius" : '0px',
            "border-width" : '0px 0px 0px 0px'
          },
          defaults : {
            frame : true,
            bodyBorder : false,
            border : false,
            style : {
              "border-radius" : '0px',
              "border-width" : '0px 0px 0px 0px'
            }
          },
          items : [{
            hidden : true,
            layout : 'hbox',
            items : [{
                  xtype : 'label',
                  html : '间隔时间(秒):&nbsp;&nbsp;'
                }, {
                  itemId : constantsForComponentId.item_id_runtimeConfigPanel_intervalSecondCmp,
                  xtype : 'numberfield',
                  width : 50,
                  minValue : constantsForComponentDefaultValue.time_min_runtimeConfigPanel_intervalSecondCmp,
                  maxValue : constantsForComponentDefaultValue.time_max_runtimeConfigPanel_intervalSecondCmp,
                  value : constantsForComponentDefaultValue.time_runtimeConfigPanel_intervalSecondCmp
                }]
          }, {
            layout : 'hbox',
            itemId : constantsForComponentId.item_id_runtimeConfigPanel_printRangeContainer,
            items : [{
              itemId : constantsForComponentId.item_id_runtimeConfigPanel_printRangeCheckboxCmp,
              xtype : 'checkbox',
              listeners : {
                change : {
                  fn : function(field, newValue, oldValue, eOpts) {
                    cn.com.pingouin.vbp_client.modules.helpers.RuntimeConfigHelper
                        .updateRuntimeConfigComponentWithPrintRangeForDisabledByCheckbox();
                  },
                  scope : this
                }
              }
            }, {
              xtype : 'tbspacer',
              width : 10
            }, {
              xtype : 'label',
              html : '打印范围(编号):&nbsp;&nbsp;'
            }, {
              xtype : 'label',
              html : '起始:&nbsp;&nbsp;'
            }, {
              itemId : constantsForComponentId.item_id_runtimeConfigPanel_printRangeStartCmp,
              xtype : 'numberfield',
              width : 60,
              step : 1,
              disabled : true,
              minValue : vbpConfiguration.basicSetting.idMinValue,
              maxValue : vbpConfiguration.basicSetting.idMaxValue,
              value : vbpConfiguration.basicSetting.idMinValue,
              listeners : {
                change : {
                  fn : function() {
                    var buttonCmp = 
                    	this.queryById(constantsForComponentId.item_id_runtimeConfigPanel_printRangeButtonCmp);
                    buttonCmp.setDisabled(false);
                  },
                  scope : this
                }
              }
            }, {
              xtype : 'tbspacer',
              width : 10
            }, {
              xtype : 'label',
              html : '结束:&nbsp;&nbsp;'
            }, {
              itemId : constantsForComponentId.item_id_runtimeConfigPanel_printRangeEndCmp,
              xtype : 'numberfield',
              width : 60,
              step : 1,
              disabled : true,
              minValue : vbpConfiguration.basicSetting.idMinValue,
              maxValue : vbpConfiguration.basicSetting.idMaxValue,
              value : vbpConfiguration.basicSetting.idMaxValue,
              listeners : {
                change : {
                  fn : function() {
                    var buttonCmp = 
                    	this.queryById(constantsForComponentId.item_id_runtimeConfigPanel_printRangeButtonCmp);
                    buttonCmp.setDisabled(false);
                  },
                  scope : this
                }
              }
            }, {
              xtype : 'tbspacer',
              width : 10
            }, {
              itemId : constantsForComponentId.item_id_runtimeConfigPanel_printRangeButtonCmp,
              xtype : 'button',
              text : '确定',
              disabled : true,
              handler : function(button) {
                var startCmp = 
                	this.queryById(constantsForComponentId.item_id_runtimeConfigPanel_printRangeStartCmp);
                var endCmp = 
                	this.queryById(constantsForComponentId.item_id_runtimeConfigPanel_printRangeEndCmp);
                
                if (startCmp.isValid() && endCmp.isValid() && startCmp.getValue() <= endCmp.getValue()) {
                  // 选择数据列表中对应的范围内的数据
                  cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.selectRowsBySpecialRecordWithValueRangeOfNumber(
                		  vbpConfiguration.basicSetting.dataPropertyForId,
                          startCmp.getValue(), endCmp.getValue()
                  		); //
                } else {
                  Ext.MessageBox.alert('错误', '输入有误，请重新输入！');
                }
              },
              scope : this
            }]
          }, {
            layout : 'hbox',
            items : [{
                  xtype : 'label',
                  html : '整体移动(cm):&nbsp;&nbsp;'
                }, {
                  xtype : 'label',
                  html : '横向:&nbsp;&nbsp;'
                }, {
                  itemId : constantsForComponentId.item_id_runtimeConfigPanel_dragdropXCmp,
                  xtype : 'numberfield',
                  width : 60,
                  step : 0.1,
                  minValue : constantsForComponentDefaultValue.x_min_runtimeConfigPanel_dragdropXCmp,
                  maxValue : constantsForComponentDefaultValue.x_max_runtimeConfigPanel_dragdropXCmp
                }, {
                  xtype : 'tbspacer',
                  width : 10
                }, {
                  xtype : 'label',
                  html : '纵向:&nbsp;&nbsp;'
                }, {
                  itemId : constantsForComponentId.item_id_runtimeConfigPanel_dragdropYCmp,
                  xtype : 'numberfield',
                  width : 60,
                  step : 0.1,
                  minValue : constantsForComponentDefaultValue.y_min_runtimeConfigPanel_dragdropYCmp,
                  maxValue : constantsForComponentDefaultValue.y_max_runtimeConfigPanel_dragdropYCmp
                }, {
                  xtype : 'tbspacer',
                  width : 10
                }, {
                  xtype : 'button',
                  text : '调整',
                  handler : function() {
                    var xCmp = 
                    	this.queryById(constantsForComponentId.item_id_runtimeConfigPanel_dragdropXCmp);
                    var yCmp = 
                    	this.queryById(constantsForComponentId.item_id_runtimeConfigPanel_dragdropYCmp);
                    
                    var paramObj = {
                      x : xCmp.getValue(),
                      y : yCmp.getValue()
                    };
                    
                    if (xCmp.isValid()) {
                      try {
                        var iframe = Ext.getCmp(constantsForComponentId.id_iframe);
                        iframe.getEl().dom.children[0].contentWindow.moveAllFloatDivisions(paramObj);
                      } catch (e) {
                        alert('调用异常:' + e);
                      }
                    } else {
                      Ext.MessageBox.alert('错误', '输入有误，请重新输入！');
                    }
                  },
                  scope : this
                }]
          }],
          nothing : null
        });
        
        Ext.apply(//
            this//
            , {
              layout : 'border',
              items : runtimeConfigPanel,
              bodyBorder : false,
              border : false,
              style : {
                "border-radius" : '0px',
                "border-width" : '0px 0px 0px 0px'
              }
            }//
        );
        
        cn.com.pingouin.vbp_client.modules.RuntimeConfigPanel.superclass.initComponent.apply(this, arguments);
      },
      
      //
      nothing : null
    }//
);
