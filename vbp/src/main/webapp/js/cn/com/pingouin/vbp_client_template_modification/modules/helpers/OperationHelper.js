/**
 * 打印操作工具类
 */
Ext.define(//
    'cn.com.pingouin.vbp_client_template_modification.modules.helpers.OperationHelper'//
    , {
      
      statics : {
        
        /**
         * 取得“打印”操作按钮组件
         * 
         * @return {}
         */
        getOperationButtonWithStart : function() {
          var operationPanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_operationPanel);
          var printStartCmp = operationPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_start);
          return printStartCmp;
        },
        
        /**
         * 取得“暂停”操作按钮组件
         * 
         * @return {}
         */
        getOperationButtonWithPause : function() {
          var operationPanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_operationPanel);
          var printPauseCmp = operationPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_pause);
          return printPauseCmp;
        },
        
        /**
         * 取得“取消”操作按钮组件
         * 
         * @return {}
         */
        getOperationButtonWithStop : function() {
          var operationPanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_operationPanel);
          var printStopCmp = operationPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_stop);
          return printStopCmp;
        },
        
        /**
         * 取得“新建静态”操作按钮组件
         * 
         * @return {}
         */
        getOperationButtonWithCreateStatic : function() {
          var operationPanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_operationPanel);
          var printCreateStaticCmp = operationPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_createStatic);
          return printCreateStaticCmp;
        },
        
        /**
         * 取得“新建动态”操作按钮组件
         * 
         * @return {}
         */
        getOperationButtonWithCreateDynamic : function() {
          var operationPanel = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_operationPanel);
          var printCreateDynamicCmp = operationPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_createDynamic);
          return printCreateDynamicCmp;
        },
        
        /**
         * 设置“打印”操作按钮是否可点击
         * 
         * @param {}
         *          isDisabled
         */
        updateOperationButtonWithStartForDisabled : function(isDisabled) {
          var buttonWithStart = this.getOperationButtonWithStart();
          buttonWithStart.setDisabled(isDisabled);
        },
        
        /**
         * 设置“暂停”操作按钮是否可点击
         * 
         * @param {}
         *          isDisabled
         */
        updateOperationButtonWithPauseForDisabled : function(isDisabled) {
          var buttonWithPause = this.getOperationButtonWithPause();
          buttonWithPause.setDisabled(isDisabled);
        },
        
        /**
         * 设置“取消”操作按钮是否可点击
         * 
         * @param {}
         *          isDisabled
         */
        updateOperationButtonWithStopForDisabled : function(isDisabled) {
          var buttonWithStop = this.getOperationButtonWithStop();
          buttonWithStop.setDisabled(isDisabled);
        },
        
        /**
         * 设置“新建静态”操作按钮是否可点击
         * 
         * @param {}
         *          isDisabled
         */
        updateOperationButtonWithCreateStaticForDisabled : function(isDisabled) {
          var buttonWithCreateStatic = this.getOperationButtonWithCreateStatic();
          buttonWithCreateStatic.setDisabled(isDisabled);
        },
        
        /**
         * 设置“新建动态”操作按钮是否可点击
         * 
         * @param {}
         *          isDisabled
         */
        updateOperationButtonWithCreateDynamicForDisabled : function(isDisabled) {
          var buttonWithCreateDynamic = this.getOperationButtonWithCreateDynamic();
          buttonWithCreateDynamic.setDisabled(isDisabled);
        },
        
        //
        nothing : null
        
      },
      
      //
      nothing : null
    }//
);
