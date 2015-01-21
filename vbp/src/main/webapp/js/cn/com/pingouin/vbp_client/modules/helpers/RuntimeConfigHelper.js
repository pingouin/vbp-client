/**
 * 运行时配置工具类
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.modules.helpers.RuntimeConfigHelper'//
    , {
      
      statics : {
        
        /**
         * 取得“打印范围”表单中的“多选框”组件
         * 
         * @return {}
         */
        getRuntimeConfigComponentWithPrintRangeCheckbox : function() {
          var runtimeConfigPanel = Ext
              .getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_runtimeConfigPanel);
          var printRangeCheckbox = runtimeConfigPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_runtimeConfigPanel_printRangeCheckboxCmp);
          return printRangeCheckbox;
        },
        
        /**
         * 取得“打印范围”表单中的“起始”输入组件
         * 
         * @return {}
         */
        getRuntimeConfigComponentWithPrintRangeStart : function() {
          var runtimeConfigPanel = Ext
              .getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_runtimeConfigPanel);
          var printRangeStart = runtimeConfigPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_runtimeConfigPanel_printRangeStartCmp);
          return printRangeStart;
        },
        
        /**
         * 取得“打印范围”表单中的“结束”输入组件
         * 
         * @return {}
         */
        getRuntimeConfigComponentWithPrintRangeEnd : function() {
          var runtimeConfigPanel = Ext
              .getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_runtimeConfigPanel);
          var printRangeEnd = runtimeConfigPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_runtimeConfigPanel_printRangeEndCmp);
          return printRangeEnd;
        },
        
        /**
         * 取得“打印范围”表单中的“确定”按钮组件
         * 
         * @return {}
         */
        getRuntimeConfigComponentWithPrintRangeButton : function() {
          var runtimeConfigPanel = Ext
              .getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_runtimeConfigPanel);
          var printRangeButton = runtimeConfigPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_runtimeConfigPanel_printRangeButtonCmp);
          return printRangeButton;
        },
        
        /**
         * 设置“打印范围”表单中的“多选框”组件是否可用
         * 
         * @param {}
         *          isDisabled
         */
        updateRuntimeConfigComponentWithPrintRangeCheckboxForDisabled : function(isDisabled) {
          var printRangeCheckbox = this.getRuntimeConfigComponentWithPrintRangeCheckbox();
          printRangeCheckbox.setDisabled(isDisabled);
        },
        
        /**
         * 设置“打印范围”表单中的“起始”输入组件是否可用
         * 
         * @param {}
         *          isDisabled
         */
        updateRuntimeConfigComponentWithPrintRangeStartForDisabled : function(isDisabled) {
          var printRangeStart = this.getRuntimeConfigComponentWithPrintRangeStart();
          printRangeStart.setDisabled(isDisabled);
        },
        
        /**
         * 设置“打印范围”表单中的“结束”输入组件是否可用
         * 
         * @param {}
         *          isDisabled
         */
        updateRuntimeConfigComponentWithPrintRangeEndForDisabled : function(isDisabled) {
          var printRangeEnd = this.getRuntimeConfigComponentWithPrintRangeEnd();
          printRangeEnd.setDisabled(isDisabled);
        },
        
        /**
         * 设置“打印范围”表单中的“确定”按钮组件是否可用
         * 
         * @param {}
         *          isDisabled
         */
        updateRuntimeConfigComponentWithPrintRangeButtonForDisabled : function(isDisabled) {
          var printRangeButton = this.getRuntimeConfigComponentWithPrintRangeButton();
          printRangeButton.setDisabled(isDisabled);
        },
        
        /**
         * 根据多选框的是否勾选来决定“打印范围”表单中的组件是否可用
         */
        updateRuntimeConfigComponentWithPrintRangeForDisabledByCheckbox : function() {
          var printRangeCheckbox = this.getRuntimeConfigComponentWithPrintRangeCheckbox();
          
          // 勾选才可以调整打印范围
          this
          .updateRuntimeConfigComponentWithPrintRangeStartForDisabled(!printRangeCheckbox.getValue());
          this
          .updateRuntimeConfigComponentWithPrintRangeEndForDisabled(!printRangeCheckbox.getValue());
          this
          .updateRuntimeConfigComponentWithPrintRangeButtonForDisabled(!printRangeCheckbox.getValue());
          
          // 勾选则锁定grid选择器
          cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.lockedSelectionModel(
        		  printRangeCheckbox.getValue()
        		  );
        },
        
        //
        nothing : null
      },
      
      //
      nothing : null
    }//
);
