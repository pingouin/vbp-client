/**
 * 日志工具类
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.modules.helpers.LogHelper'//
    , {
      
      statics : {
        
        /**
         * 叠加输出日志信息
         * 
         * @param {}
         *          logPanel
         * @param {}
         *          message
         */
        appendLogMessage : function(message) {
          var logPanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_logPanel)
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_logPanelCmp);
          logPanel.add({
                html : message,
                listeners : {
                  afterrender : {
                    fn : function() {
                      this.focus();
                    }
                  }
                }
              });
        },
        
        //
        nothing : null
      },
      
      //
      nothing : null
    }//
);
