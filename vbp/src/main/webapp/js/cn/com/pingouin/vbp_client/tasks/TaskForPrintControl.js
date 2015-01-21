/**
 * 打印控制任务
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.tasks.TaskForPrintControl'//
    , {
      
      config : {
        taskForPrintStatus : null,// 打印状态任务实例
        printIndex : 0,// 打印数据源指针
        printStartButtonPressed : false,// "打印按钮"处于按下状态
        printPauseButtonPressed : false,// "暂停按钮"处于按下状态
        printStopButtonPressed : false,// "取消按钮"处于按下状态
        printTimeIntervalArrivaled : false,// "打印定时间隔时间"到达指定值
        printResultWithStatus : new Array(),// 任务返回状态
        printLodopJobComplete : true,// 上一次打印任务已结束
        //
        nothing : null
      },
      
      run : function() {
        
        //
        var taskForPrintStatus = this.taskForPrintStatus;
        var printIndex = this.printIndex;
        var printStartButtonPressed = this.printStartButtonPressed;
        var printTimeIntervalArrivaled = this.printTimeIntervalArrivaled;
        var printResultWithStatus = this.printResultWithStatus;
        var printLodopJobComplete = this.printLodopJobComplete;
        
        //
        var dataGridHelper = cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper;
        var operationHelper = cn.com.pingouin.vbp_client.modules.helpers.OperationHelper;
        var runtimeConfigHelper = cn.com.pingouin.vbp_client.modules.helpers.RuntimeConfigHelper;
        
        if (printStartButtonPressed) { // "打印按钮"处于按下状态
          if (printTimeIntervalArrivaled) { // "打印定时间隔时间"到达指定值
            if (printLodopJobComplete) { // 上一次打印任务已结束
              // 重置标志位
              this.printTimeIntervalArrivaled = false;
              this.printLodopJobComplete = false;
              
              // 取得已选数据个数
              var selectedRowsCount = dataGridHelper.getSelectedRowsCount();
              
              if (selectedRowsCount > printIndex) { // 判断还有未打印数据
                
                // 调用打印方法
                try {
                  // 取得已选记录
                  var selectedRecords = dataGridHelper.getSelectedRecords();
                  
                  // 取得打印工作区
                  var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                  var lodopJobId = iframe.getEl().dom.children[0].contentWindow.clientReceive(selectedRecords[printIndex].data);
                  
                  // 输出日志
                  // cn.com.pingouin.vbp_client.modules.helpers.LogHelper.appendLogMessage(
                  // 	'正在打印第<b> ' + (printIndex + 1) + ' </b>条数据'
                  //	);
                  
                  // 下调GridPanel中的当前数据
                  dataGridHelper.focusGridStoreRowByIndex(printIndex);
                  
                  // 初始GridPanel中状态字段的值为“正在打印”
                  dataGridHelper.setGridStoreRecordWithStatusToStartPrint(printIndex);
                  
                  // 添加任务返回状态
                  var resultObject = {
                    dataIndex : printIndex,// 数据指针
                    lodopJobId : lodopJobId,// 打印机返回打印状态任务id
                    nothing : null
                  };
                  this.printResultWithStatus.push(resultObject);
                  
                } catch (e) {
                  alert('调用打印控件异常:' + e);
                }
                
                // 指针增加
                this.printIndex++;
                
              } else {// 已打印完所有数据
                // Ext.MessageBox.alert('提示', '数据打印完毕~');
                // 刷新日志信息
                cn.com.pingouin.vbp_client.modules.helpers.LogHelper.appendLogMessage(
                		'打印完毕！成功<span style="color:green;"><b> ' 
                		+ taskForPrintStatus.countForPrintSuccess
                        + ' </b></span>条，失败<span style="color:red;"><b> ' 
                        + taskForPrintStatus.countForPrintFailed
                        + ' </b></span>条'
                        );
                
                // 解锁数据列表,可以再次进行选择
                dataGridHelper.lockedGridDatas(false);
                
                // 重置操作按钮的显示与否
                operationHelper.updateOperationButtonWithStartForDisabled(false);
                operationHelper.updateOperationButtonWithPauseForDisabled(true);
                operationHelper.updateOperationButtonWithStopForDisabled(true);
                operationHelper.updateOperationButtonWithCreateStaticForDisabled(false);
                operationHelper.updateOperationButtonWithCreateDynamicForDisabled(false);
                
                // 重置“打印范围”是否可用
                runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeCheckboxForDisabled(false);
                runtimeConfigHelper.updateRuntimeConfigComponentWithPrintRangeForDisabledByCheckbox();
                
                // 重置打印成功和失败的条数
                this.taskForPrintStatus.countForPrintSuccess = 0;
                this.taskForPrintStatus.countForPrintFailed = 0;
                
                // 清理标志位
                this.printStartButtonPressed = false;
                this.printLodopJobComplete = true;
                this.printResultWithStatus = new Array();
                
                // 还原指针为0
                this.printIndex = 0;
              }
            }
          }
        }
        
      },
      //
      nothing : null
      
    }//
);
