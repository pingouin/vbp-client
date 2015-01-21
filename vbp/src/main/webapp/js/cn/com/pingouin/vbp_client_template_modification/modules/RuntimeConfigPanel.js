/**
 * 运行时配置窗体
 */
Ext.define(//
    'cn.com.pingouin.vbp_client_template_modification.modules.RuntimeConfigPanel'//
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
            layout : 'hbox',
            items : [{
                  xtype : 'label',
                  html : '整体移动(cm):&nbsp;&nbsp;'
                }, {
                  xtype : 'label',
                  html : '横向:&nbsp;&nbsp;'
                }, {
                  itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_runtimeConfigPanel_dragdropXCmp,
                  xtype : 'numberfield',
                  width : 60,
                  step : 0.1,
                  minValue : cn.com.pingouin.vbp_client.utils.ConstantsForComponentDefaultValue.x_min_runtimeConfigPanel_dragdropXCmp,
                  maxValue : cn.com.pingouin.vbp_client.utils.ConstantsForComponentDefaultValue.x_max_runtimeConfigPanel_dragdropXCmp
                }, {
                  xtype : 'tbspacer',
                  width : 10
                }, {
                  xtype : 'label',
                  html : '纵向:&nbsp;&nbsp;'
                }, {
                  itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_runtimeConfigPanel_dragdropYCmp,
                  xtype : 'numberfield',
                  width : 60,
                  step : 0.1,
                  minValue : cn.com.pingouin.vbp_client.utils.ConstantsForComponentDefaultValue.y_min_runtimeConfigPanel_dragdropYCmp,
                  maxValue : cn.com.pingouin.vbp_client.utils.ConstantsForComponentDefaultValue.y_max_runtimeConfigPanel_dragdropYCmp
                }, {
                  xtype : 'tbspacer',
                  width : 10
                }, {
                  xtype : 'button',
                  text : '调整',
                  handler : function() {
                    var xCmp = this
                        .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_runtimeConfigPanel_dragdropXCmp);
                    var yCmp = this
                        .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_runtimeConfigPanel_dragdropYCmp);
                    var paramObj = {
                      x : xCmp.getValue(),
                      y : yCmp.getValue()
                    };
                    if (xCmp.isValid()) {
                      try {
                        var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
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
        
        cn.com.pingouin.vbp_client_template_modification.modules.RuntimeConfigPanel.superclass.initComponent.apply(this, arguments);
      },
      
      //
      nothing : null
    }//
);
