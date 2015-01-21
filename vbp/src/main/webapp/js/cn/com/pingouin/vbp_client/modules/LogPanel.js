/**
 * 日志输出窗体
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.modules.LogPanel'//
    , {
      
      extend : 'Ext.panel.Panel',
      
      id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_logPanel,
      title : '打印日志',
      
      initComponent : function() {
        
        var logPanel = Ext.create('Ext.panel.Panel', {
              region : 'center',
              itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_logPanelCmp,
              autoScroll : true,
              bodyBorder : false,
              border : false,
              style : {
                "border-radius" : '0px',
                "border-width" : '0px 0px 0px 0px'
              },
              defaults : {
                padding : '0 5 0 5',
                bodyBorder : false,
                border : false,
                style : {
                  "border-radius" : '0px',
                  "border-width" : '0px 0px 0px 0px'
                }
              },
              items : [],
              nothing : null
            });
        
        Ext.apply(//
            this//
            , {
              layout : 'border',
              items : logPanel,
              tools : [{
                    xtype : 'button',
                    height : 18,
                    text : '清空',
                    handler : function(button, event) {
                      logPanel.removeAll();
                    }
                  }],
              bodyBorder : false,
              border : false,
              style : {
                "border-radius" : '0px',
                "border-width" : '0px 0px 0px 0px'
              }
            }//
        );
        
        cn.com.pingouin.vbp_client.modules.LogPanel.superclass.initComponent.apply(this, arguments);
      },
      
      //
      nothing : null
    }//
);
