/**
 * 打印操作窗体
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.modules.OperationPanel'//
    , {
      
      extend : 'Ext.panel.Panel',
      
      config : {
        taskForPrintControl : null
      },
      
      id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_operationPanel,
      title : '打印控制',
      
      initComponent : function() {
        
    	var operationHelper = cn.com.pingouin.vbp_client.modules.helpers.OperationHelper;
    	var runtimeConfigHelper = cn.com.pingouin.vbp_client.modules.helpers.RuntimeConfigHelper;
    	var logHelper = cn.com.pingouin.vbp_client.modules.helpers.LogHelper;
    	
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
            text : '打印',
            handler : function(button) {
              //
              var selectedRowsCount = cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.getSelectedRowsCount();
              if (selectedRowsCount > 0) {
                // 锁定数据列表不可以再选择
                cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.lockedGridDatas(true);
                
                if (this.taskForPrintControl.printPauseButtonPressed) {// 暂停后继续打印
                  // 输出日志
                  logHelper.appendLogMessage('继续打印...');
                  
                } else {// 重新开始打印
                  // 输出日志
                  logHelper.appendLogMessage('开始打印...共选择<b> ' + selectedRowsCount + ' </b>条数据');
                }
                
                // 打印按钮已按下，置标志位
                this.taskForPrintControl.printStartButtonPressed = true;
                this.taskForPrintControl.printPauseButtonPressed = false;
                this.taskForPrintControl.printStopButtonPressed = false;
                
                // 重置操作按钮的显示与否
                button.setDisabled(true);
                operationHelper.updateOperationButtonWithPauseForDisabled(false);
                operationHelper.updateOperationButtonWithStopForDisabled(false);
                operationHelper.updateOperationButtonWithCreateStaticForDisabled(true);
                operationHelper.updateOperationButtonWithCreateDynamicForDisabled(true);
                
                // 重置“打印范围”是否可用
                runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeCheckboxForDisabled(true);
                runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeStartForDisabled(true);
                runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeEndForDisabled(true);
                runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeButtonForDisabled(true);
                
              } else {
                Ext.MessageBox.alert('警告', '请从数据列表中选择需要打印的数据');
              }
            },
            scope : this
            //
          }, {
            maxWidth : 50,
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_pause,
            text : '暂停',
            disabled : true,
            handler : function(button) {
              // 暂停按钮已按下，置标志位
              this.taskForPrintControl.printStartButtonPressed = false;
              this.taskForPrintControl.printPauseButtonPressed = true;
              this.taskForPrintControl.printStopButtonPressed = false;
              
              // 重置操作按钮的显示与否
              button.setDisabled(true);
              operationHelper.updateOperationButtonWithStartForDisabled(false);
              operationHelper.updateOperationButtonWithStopForDisabled(false);
              operationHelper.updateOperationButtonWithCreateStaticForDisabled(true);
              operationHelper.updateOperationButtonWithCreateDynamicForDisabled(true);
              
              // 重置“打印范围”是否可用
              runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeCheckboxForDisabled(true);
              runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeStartForDisabled(true);
              runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeEndForDisabled(true);
              runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeButtonForDisabled(true);
              
              // 输出日志
              logHelper.appendLogMessage('暂停打印...');
            },
            scope : this
            //
          }, {
            maxWidth : 50,
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_stop,
            text : '取消',
            disabled : true,
            handler : function(button) {
              // 解锁数据列表,可以再次进行选择
              cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.lockedGridDatas(false);
              
              // 取消按钮已按下，置标志位
              this.taskForPrintControl.printStartButtonPressed = false;
              this.taskForPrintControl.printPauseButtonPressed = false;
              this.taskForPrintControl.printStopButtonPressed = true;
              
              // 重置打印成功和失败的条数
              this.taskForPrintControl.taskForPrintStatus.countForPrintSuccess = 0;
              this.taskForPrintControl.taskForPrintStatus.countForPrintFailed = 0;
              
              // 清理标志位
              this.taskForPrintControl.printStartButtonPressed = false;
              this.taskForPrintControl.printResultWithStatus = new Array();
              
              // 还原指针为0
              this.taskForPrintControl.printIndex = 0;
              
              // 重置操作按钮的显示与否
              button.setDisabled(true);
              operationHelper.updateOperationButtonWithStartForDisabled(false);
              operationHelper.updateOperationButtonWithPauseForDisabled(true);
              operationHelper.updateOperationButtonWithCreateStaticForDisabled(false);
              operationHelper.updateOperationButtonWithCreateDynamicForDisabled(false);
              
              // 重置“打印范围”是否可用
              runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeCheckboxForDisabled(false);
              runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeForDisabledByCheckbox();
              
              // 输出日志
              logHelper.appendLogMessage('取消打印...');
            },
            scope : this
            //
          }, {
        	maxWidth : 50,
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_createStatic,
            text : '新建' + '<br>' + '静态',
            handler : function(button) {
              try {
                var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                iframe.getEl().dom.children[0].contentWindow.addNewStaticFloatDivision();
              } catch (e) {
                alert('调用异常:' + e);
              }
            },
            scope : this
            //
          }, {
        	maxWidth : 50,
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_createDynamic,
            text : '新建' + '<br>' + '动态',
            handler : function(button) {
              try {
                var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                iframe.getEl().dom.children[0].contentWindow.addNewDynamicFloatDivision();
              } catch (e) {
                alert('调用异常:' + e);
              }
            },
            scope : this
            //
          }, {
            maxWidth : 50,
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_preview,
            text : '预览',
            handler : function(button) {
              try {
            	var selectedRowsCount = cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.getSelectedRowsCount();
            	if (selectedRowsCount == 1) {
            		var selectedRecord = cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.getSelectedRecords()[0].data;
            		var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                    iframe.getEl().dom.children[0].contentWindow.printZonePreviewWithSelectedData(selectedRecord);
            	} else {
            		Ext.MessageBox.alert('警告', '请从数据列表中选择一条需要预览的数据');
            	}
              } catch (e) {
                alert('调用异常:' + e);
              }
            },
            scope : this
            //
          }, {
        	maxWidth : 50,
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_operationPanel_print_updateTemplate,
            text : '模版' + '<br>' + '更新',
            handler : function(button) {
              var confirmHandler = function(command) {
            	  if ( 'yes' == command ) {
            		  try {
                     	var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                        iframe.getEl().dom.children[0].contentWindow.vbpTemplateSave();
                      } catch (e) {
                        alert('调用异常:' + e);
                      }
            	  }
              };
              Ext.MessageBox.confirm('更新确认', '您确定要更新当前模板么?', confirmHandler, this);
            },
            scope : this
          }],
          //
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
        
        cn.com.pingouin.vbp_client.modules.OperationPanel.superclass.initComponent.apply(this, arguments);
      },
      
      //
      nothing : null
    }//
);
