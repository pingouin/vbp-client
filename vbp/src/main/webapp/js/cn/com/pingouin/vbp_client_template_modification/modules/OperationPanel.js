/**
 * 打印操作窗体
 */
Ext.define(//
    'cn.com.pingouin.vbp_client_template_modification.modules.OperationPanel'//
    , {
      
      extend : 'Ext.panel.Panel',
      
      config : {
        taskForPrintControl : null
      },
      
      id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_operationPanel,
      title : '打印控制',
      
      initComponent : function() {
        
        var operationPanel = Ext.create('Ext.panel.Panel', {
          region : 'center',
          frame : true,
          bodyBorder : false,
          border : false,
          style : {
            "border-radius" : '0px',
            "border-width" : '0px 0px 0px 0px'
          },
          buttonAlign : 'center',
          buttons : [{
            maxWidth : 50,
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_start,
            text : '打印区域设置',
            handler : function(button) {
            	try {
            		var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                    iframe.getEl().dom.children[0].contentWindow.openPrintZoneConfigWindow();
                } catch (e) {
                    alert('调用异常:' + e);
                }
            },
            scope : this
          }, {
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_createStatic,
            text : '新建静态',
            handler : function(button) {
              try {
                var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                iframe.getEl().dom.children[0].contentWindow.addNewStaticFloatDivision();
              } catch (e) {
                alert('调用异常:' + e);
              }
            },
            scope : this
          }, {
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_createDynamic,
            text : '新建动态',
            handler : function(button) {
              try {
                var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                iframe.getEl().dom.children[0].contentWindow.addNewDynamicFloatDivision();
              } catch (e) {
                alert('调用异常:' + e);
              }
            },
            scope : this
          }],
          nothing : null
        });
        
        Ext.apply(//
            this//
            , {
              layout : 'border',
              items : operationPanel,
              bodyBorder : false,
              border : false,
              style : {
                "border-radius" : '0px',
                "border-width" : '0px 0px 0px 0px'
              }
            }//
        );
        
        cn.com.pingouin.vbp_client_template_modification.modules.OperationPanel.superclass.initComponent.apply(this, arguments);
      },
      
      //
      nothing : null
    }//
);
