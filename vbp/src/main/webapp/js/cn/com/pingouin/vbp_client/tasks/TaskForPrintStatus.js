/**
 * 打印状态任务
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.tasks.TaskForPrintStatus'//
    , {
      
      config : {
        taskForPrintControl : null,// 打印控制任务实例
        countForPrintSuccess : 0,// 打印成功的条数
        countForPrintFailed : 0,// 打印失败的条数
        //
        nothing : null
      },
      
      run : function() {
        
        //
        var printResultWithStatus = this.taskForPrintControl.printResultWithStatus;
        
        // 打印控制任务返回了打印机的回调状态
        if (printResultWithStatus.length > 0) {
          // console.log(printResultWithStatus);
          
          for (var i = 0; i < printResultWithStatus.length; i++) {
            
            // 取得打印任务返回的状态
            var resultObject = printResultWithStatus[i];
            var dataIndex = resultObject.dataIndex;
            var lodopJobId = resultObject.lodopJobId;
            
            var print_status_exist;
            var print_status_ok;
            var print_status_text;
            
            try {
              // 取得打印工作界面中的LODOP对象
              var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
              var LODOP = iframe.getEl().dom.children[0].contentWindow.getLodopGlobal();
              
              // LODOP API for print status
              // console.log('任务id=' + lodopJobId);
              // console.log('最新JOB代码(值有打印机序号和JOB序号组成):' + LODOP.GET_VALUE('PRINT_STATUS_JOBID', lodopJobId));
              // console.log('打印状态代码:' + LODOP.GET_VALUE('PRINT_STATUS_ID', lodopJobId));
              // console.log('打印状态描述:' + LODOP.GET_VALUE('PRINT_STATUS_TEXT', lodopJobId));
              // console.log('打印状态变化记录:' + LODOP.GET_VALUE('PRINT_STATUS_LIST', lodopJobId));
              // console.log('该任务需要打印的总页数:' + LODOP.GET_VALUE('PRINT_STATUS_TOTAL_PAGES', lodopJobId));
              // console.log('该任务已经打印的总页数:' + LODOP.GET_VALUE('PRINT_STATUS_PAGES_PRINTED', lodopJobId));
              // console.log('该打印任务的文档名称:' + LODOP.GET_VALUE('PRINT_STATUS_DOCNAME', lodopJobId));
              // console.log('该打印任务的建立时间:' + LODOP.GET_VALUE('PRINT_STATUS_ADDTIME', lodopJobId));
              // console.log('判断该打印任务是否还处在队列中:' + LODOP.GET_VALUE('PRINT_STATUS_EXIST', lodopJobId));
              // console.log('该打印任务是否已经打印成功:' + LODOP.GET_VALUE('PRINT_STATUS_OK', lodopJobId));
              // console.log('该打印任务持续的时间(秒):' + LODOP.GET_VALUE('PRINT_STATUS_SECONDS', lodopJobId));
              // console.log('该打印机是否处于忙碌状态:' + LODOP.GET_VALUE('PRINT_STATUS_BUSY', lodopJobId));
              
              // 返回打印任务是否还存在
              print_status_exist = LODOP.GET_VALUE('PRINT_STATUS_EXIST', lodopJobId);
              // 返回打印是否成功
              print_status_ok = LODOP.GET_VALUE('PRINT_STATUS_OK', lodopJobId);
              // 返回打印状态描述
              print_status_text = LODOP.GET_VALUE('PRINT_STATUS_TEXT', lodopJobId);
              
            } catch (e) {
              alert('调用打印控件，返回打印状态异常:' + e);
            }
            
            if (print_status_exist == 0) {// 打印任务已结束
            
              // 是否根据真实打印机返回的状态来决定最终的数据打印状态
              if (cn.com.pingouin.vbp_client.utils.ConstantsForSystemConfig.processPrintStatusByRealPrinter) {
                if (print_status_ok == 1) {// 打印成功
                
                  // 初始GridPanel中状态字段的值为“成功”
                  cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper
                      .setGridStoreRecordWithStatusToSuccessPrint(dataIndex);
                  
                  // 输出日志
                  // cn.com.pingouin.vbp_client.modules.helpers.LogHelper.appendLogMessage('第<b> ' + +(dataIndex + 1)
                  // + ' </b>条数据的打印任务已经结束，返回状态为【<span style="color:green;"><b>成功</b></span>】');
                  
                  // 成功数加1
                  this.countForPrintSuccess++;
                  
                } else {// 打印失败
                
                  // 初始GridPanel中状态字段的值为“失败”
                  cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper
                      .setGridStoreRecordWithStatusToFailedPrint(dataIndex);
                  
                  // 输出日志
                  // cn.com.pingouin.vbp_client.modules.helpers.LogHelper.appendLogMessage('第<b> ' + +(dataIndex + 1)
                  // + ' </b>条数据的打印任务已经结束，返回状态为【<span style="color:red;"><b>失败</b></span>】');
                  
                  // 失败数加1
                  this.countForPrintFailed++;
                  
                }
              } else {// 不需要根据真实打印机返回的状态来决定
              
                // 初始GridPanel中状态字段的值为“成功”
                cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper
                    .setGridStoreRecordWithStatusToSuccessPrint(dataIndex);
                
                // 输出日志
                // cn.com.pingouin.vbp_client.modules.helpers.LogHelper.appendLogMessage('第<b> ' + +(dataIndex + 1)
                // + ' </b>条数据的打印任务已经结束，返回状态为【<span style="color:green;"><b>成功</b></span>】');
                
                // 成功数加1
                this.countForPrintSuccess++;
              }
              
              // 去除已完成更新“数据状态”的任务
              this.taskForPrintControl.printResultWithStatus.shift();
              // 通知打印控制任务，打印任务已结束
              this.taskForPrintControl.printLodopJobComplete = true;
              
            } else {// 打印任务还没有结束
            
            }
          }
        }
        
      },
      //
      nothing : null
      
    }//
);
